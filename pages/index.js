import styles from '../styles/Home.module.css'

export default function Home() {
  return <div className={styles.event}>
    <h1>Gecko Promotion 2022: Superheroes of Grant</h1>
    <h2>June 13, 2022 @ 1:30 pm</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bDsw1mBQAxk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
  </div>
}
