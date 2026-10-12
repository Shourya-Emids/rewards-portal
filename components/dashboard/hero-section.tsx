import { MyProgressTile } from './my-progress-card'
import classes from './hero-section.module.css'

/* Vector remake of the trophy-on-podium celebration scene, so it stays
 crisp at any size. */
function TrophyArt() {
  return (
    <svg
      className={classes.heroArt}
      viewBox="0 0 300 160"
      role="presentation"
      focusable="false"
      aria-hidden="true"
    >
      {/* confetti */}
      <circle className={classes.tw1} cx="70" cy="34" r="4" fill="#f26d9d" />
      <rect className={classes.tw2} x="82" y="14" width="7" height="7" rx="1.5" fill="#7fa8ee" transform="rotate(20 85.5 17.5)" />
      <circle className={classes.tw3} cx="212" cy="20" r="3.5" fill="#f9b8cd" />
      <rect className={classes.tw1} x="228" y="42" width="8" height="8" rx="2" fill="#4a7be0" transform="rotate(-15 232 46)" />
      <circle className={classes.tw2} cx="258" cy="16" r="3" fill="#f26d9d" />
      <rect className={classes.tw3} x="104" y="50" width="6" height="6" rx="1.5" fill="#f9b8cd" transform="rotate(30 107 53)" />
      <path className={classes.tw2} d="M64 84 h8 M68 80 v8" stroke="#f26d9d" strokeWidth="2" strokeLinecap="round" />
      <path className={classes.tw1} d="M246 92 h8 M250 88 v8" stroke="#7fa8ee" strokeWidth="2" strokeLinecap="round" />

      {/* podium */}
      <rect x="64" y="96" width="54" height="64" rx="6" fill="#cdd9f5" />
      <rect x="122" y="68" width="58" height="92" rx="6" fill="#22314e" />
      <rect x="184" y="104" width="54" height="56" rx="6" fill="#f8ccd8" />

      {/* trophy */}
      <g>
        <path d="M138 16 h36 c0 22 -7 34 -18 38 c-11 -4 -18 -16 -18 -38 z" fill="#f4b23a" />
        <path d="M144 22 c-1 10 1 18 4 24" stroke="#fbd27c" strokeWidth="3" strokeLinecap="round" fill="none" />
        <rect x="133.5" y="10" width="45" height="8" rx="4" fill="#e29b26" />
        <path d="M138 24 c-12 2 -14 16 -2 22" stroke="#e29b26" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M174 24 c12 2 14 16 2 22" stroke="#e29b26" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <polygon
          points="156,28.5 158,33 163,33.2 159.3,36.3 160.6,41 156,38.3 151.4,41 152.7,36.3 149,33.2 154,33"
          fill="#ffffff"
          opacity="0.9"
        />
        <rect x="152" y="54" width="8" height="5" fill="#e29b26" />
        <rect x="144" y="58" width="24" height="5" rx="2.5" fill="#e29b26" />
        <rect x="138" y="63" width="36" height="5" rx="2.5" fill="#f4b23a" />
      </g>
    </svg>
  )
}

export function GreetingSection() {
  return (
    <section className={`${classes.hero} fade-up`} aria-label="Greeting">
      <span className={classes.heroSwash} aria-hidden="true">
        <svg viewBox="0 0 900 220" preserveAspectRatio="none">
          <path
            d="M22 26 C200 20 640 22 876 28 C893 30 899 44 898 62 L897 160 C897 180 888 194 868 196 C640 202 210 206 30 200 C12 200 4 188 6 168 L8 52 C6 38 10 26 22 26 Z"
            fill="#d8e4fa"
          />
          <path
            d="M420 22 L862 26 C882 26 893 40 892 60 L891 158 C891 180 880 194 860 196 C700 202 520 202 402 198 C384 196 378 184 380 164 L382 54 C380 34 396 22 420 22 Z"
            fill="#f9c6d8"
            opacity="0.92"
          />
          <path
            d="M40 176 L360 180 L358 190 L42 188 Z"
            fill="var(--color-highlight)"
            opacity="0.55"
          />
        </svg>
      </span>
      <div className={classes.heroText}>
        <span className={classes.heroSparkA} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" fill="var(--color-accent)" />
          </svg>
        </span>
        <span className={classes.heroSparkB} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" fill="var(--color-pink)" />
          </svg>
        </span>
        <h1>Hello Shourya</h1>
        <p className={classes.tagline}>Celebrate a win. Recognize a teammate.</p>
      </div>
      <TrophyArt />
    </section>
  )
}

export function StatsSection() {
  return (
    <section className={`${classes.statsGrid} fade-up`} aria-label="Team leaderboard">
      <MyProgressTile />
    </section>
  )
}
