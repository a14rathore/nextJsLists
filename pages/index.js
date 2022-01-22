import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyList | Home</title>
        <meta name="keywords" content="lists"/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
        <Link href="/list">
          <a className={styles.btn}>See My Listing</a>
        </Link>
      </div>
    </>
  )
}
