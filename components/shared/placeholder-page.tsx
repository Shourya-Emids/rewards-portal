import classes from './placeholder-page.module.css'

type Props = {
  title: string
}

export function PlaceholderPage({ title }: Props) {
  return (
    <div className={classes.page}>
      <section className={classes.card}>
        <h1>{title}</h1>
        <p>This page is on the way. When it ships you will find it here.</p>
      </section>
    </div>
  )
}
