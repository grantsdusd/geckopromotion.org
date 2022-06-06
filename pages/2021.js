import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Event2021.module.css'

export default function Home() {
  return <div className={styles.event}>
    <h2>Gecko Promotion 2021: Students in Bloom</h2>
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(2, 1fr)`, gap: '20px' }}>
      <div>
        <Link href={'https://www.youtube.com/watch?v=cS5rc7X6io4'}><img src='/img/event2021/IMG_9081.jpg' height={230} /></Link><br /><br />
        <Link href={'https://www.youtube.com/watch?v=cS5rc7X6io4'}>Watch the event</Link><br /><br /><br />
      </div>
      <div>
        <Link href={'/zip/2021photos.zip'}><img src='/img/event2021/0Y1A7902.jpg' height={230} /></Link><br /><br />
        <Link href={'/zip/2021photos.zip'}>Download the photos</Link>
      </div>
    </div>
  </div>
}
