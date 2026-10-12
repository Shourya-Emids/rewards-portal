'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Check, ChevronRight, X } from 'lucide-react'

import {
  APPROVAL_REQUESTS,
  ORG_TREE,
  type OrgMember,
  type PointApprovalRequest,
} from '@/lib/team-data'
import { useSession } from '@/components/session/session-provider'

import classes from './team.module.css'

function countMembers(member: OrgMember): number {
  return (member.reports ?? []).reduce(
    (total, report) => total + countMembers(report),
    member.reports?.length ?? 0,
  )
}

function hasReports(member: OrgMember) {
  return Boolean(member.reports?.length)
}

/* Depth-two levels start expanded so the tree reads at a glance. */
const DEFAULT_EXPANDED = new Set(['you', 'priya', 'sarah'])

function OrgNode({
  member,
  expandedIds,
  onToggle,
}: {
  member: OrgMember
  expandedIds: Set<string>
  onToggle: (id: string) => void
}) {
  const expanded = expandedIds.has(member.id)
  const isExpandable = hasReports(member)

  return (
    <li className={classes.orgBranch}>
      <div className={`${classes.orgNode} ${member.isCurrentUser ? classes.orgYou : ''}`}>
        {isExpandable ? (
          <button
            type="button"
            className={`${classes.orgToggle} ${expanded ? classes.toggleOpen : ''}`}
            onClick={() => onToggle(member.id)}
            aria-expanded={expanded}
            aria-label={expanded ? `Collapse ${member.name}` : `Expand ${member.name}`}
          >
            <ChevronRight size={12} />
          </button>
        ) : (
          <span className={classes.orgToggleSpacer} aria-hidden="true" />
        )}
        <img className={classes.orgAvatar} src={member.avatar} alt="" />
        <div className={classes.orgInfo}>
          <p className={classes.orgName}>
            {member.name}
            {member.isCurrentUser && <span className={classes.youChip}>you</span>}
          </p>
          <span className={classes.orgRole}>{member.role}</span>
        </div>
        {isExpandable && (
          <span className={classes.orgCount}>{member.reports?.length}</span>
        )}
      </div>
      {isExpandable && expanded && (
        <ul className={classes.orgChildren}>
          {member.reports?.map((report) => (
            <OrgNode
              key={report.id}
              member={report}
              expandedIds={expandedIds}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

function ApprovalCard({
  request,
  onDecide,
  canDecide,
}: {
  request: PointApprovalRequest
  onDecide: (id: string) => void
  canDecide: boolean
}) {
  return (
    <article className={classes.approvalCard}>
      <header className={classes.approvalHead}>
        <img className={classes.approvalAvatar} src={request.fromAvatar} alt="" />
        <div>
          <p className={classes.approvalLine}>
            <strong>{request.from}</strong> wants to award points
          </p>
          <span className={classes.approvalMeta}>{request.date}</span>
        </div>
        <span className={classes.approvalPoints}>+{request.points}</span>
      </header>
      <div className={classes.approvalTarget}>
        <img className={classes.targetAvatar} src={request.toAvatar} alt="" />
        <span className={classes.targetName}>{request.to}</span>
        <span className={classes.targetChip}>{request.category}</span>
      </div>
      <blockquote className={classes.approvalNote}>“{request.message}”</blockquote>
      {canDecide ? (
        <div className={classes.approvalActions}>
          <button type="button" className={classes.approveBtn} onClick={() => onDecide(request.id)}>
            <Check size={13} /> Approve
          </button>
          <button type="button" className={classes.rejectBtn} onClick={() => onDecide(request.id)}>
            <X size={13} /> Reject
          </button>
        </div>
      ) : (
        <span className={classes.waitingChip}>Waiting for manager approval</span>
      )}
    </article>
  )
}

type Tab = 'org' | 'approvals'

export function TeamView() {
  const { persona, login } = useSession()
  const isManager = persona === 'manager'
  const canDecide = isManager
  const [tab, setTab] = useState<Tab>('org')
  const [requests, setRequests] = useState<PointApprovalRequest[]>(APPROVAL_REQUESTS)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(DEFAULT_EXPANDED)

  const teamSize = countMembers(ORG_TREE)
  const pendingCount = requests.length

  if (persona !== null && !isManager) {
    return (
      <div className={classes.page}>
        <section className={`${classes.panel} ${classes.restrictedPanel} fade-up`}>
          <h1 className={classes.restrictedTitle}>My Team</h1>
          <p className={classes.restrictedText}>
            This area is reserved for people managers — it covers your
            reporting lines and point approvals. Employees can track their own
            recognition and wallet instead.
          </p>
          <div className={classes.restrictedActions}>
            <button type="button" className={classes.approveBtn} onClick={() => login('manager')}>
              Continue as People Manager
            </button>
            <Link href="/" className={classes.rejectBtn}>
              Back to dashboard
            </Link>
          </div>
        </section>
      </div>
    )
  }

  function toggle(id: string) {
    setExpandedIds((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function decide(id: string) {
    setRequests((current) => current.filter((request) => request.id !== id))
  }

  return (
    <div className={classes.page}>
      <header className={`${classes.pageHeader} fade-up`}>
        <h1>My Team</h1>
        <p>Your people, structure and their point requests.</p>
      </header>

      <section className={`${classes.statGrid} fade-up d1`} aria-label="Team stats">
        <article className={classes.statTile}>
          <p className={classes.statLabel}>Team members</p>
          <p className={classes.statValue}>{teamSize}</p>
        </article>
        <article className={classes.statTile}>
          <p className={classes.statLabel}>Pending approvals</p>
          <p className={classes.statValue}>{pendingCount}</p>
        </article>
      </section>

      <div className={`${classes.tabRow} fade-up d2`} role="tablist" aria-label="Team sections">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'org'}
          className={`${classes.tabBtn} ${tab === 'org' ? classes.tabActive : ''}`}
          onClick={() => setTab('org')}
        >
          Org tree
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'approvals'}
          className={`${classes.tabBtn} ${tab === 'approvals' ? classes.tabActive : ''}`}
          onClick={() => setTab('approvals')}
        >
          Approvals
          {pendingCount > 0 && <span className={classes.tabBadge}>{pendingCount}</span>}
        </button>
      </div>

      {tab === 'org' ? (
        <section className={`${classes.panel} fade-up d3`} aria-label="Organization tree">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>Org tree</h2>
            <span className={classes.titleBar} aria-hidden="true" />
          </div>
          <ul className={classes.orgTree}>
            <OrgNode member={ORG_TREE} expandedIds={expandedIds} onToggle={toggle} />
          </ul>
        </section>
      ) : (
        <section className={classes.approvalsWrap} aria-label="Point approval requests">
          {requests.length === 0 ? (
            <div className={`${classes.panel} fade-up`}>
              <div className={classes.sectionHead}>
                <h2 className={classes.sectionTitle}>Point requests</h2>
                <span className={classes.titleBar} aria-hidden="true" />
              </div>
              <p className={classes.emptyNote}>
                All caught up — no pending point requests from your team.
              </p>
            </div>
          ) : (
            requests.map((request) => (
              <ApprovalCard key={request.id} request={request} onDecide={decide} canDecide={canDecide} />
            ))
          )}
        </section>
      )}
    </div>
  )
}
