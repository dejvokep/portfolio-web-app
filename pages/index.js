import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>DEJVOKEP.dev - Software development</title>
                <meta name="description" content="DEJVOKEP.dev - Software development"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <h1 className={styles.title}>DEJVOKEP</h1>
            <p className={styles.description}>This portfolio website is under maintenance and will be available with new
                content soon. Sorry for any inconvenience caused.</p>

            <div className={styles.contact}>
                <a className="link" href="mailto:davidcubesvkdev@gmail.com?subject=Hello :)" target="_blank"
                   rel="noreferrer">davidcubesvkdev@gmail.com</a>
                <a className="link" href="https://discord.com/users/526015605338275840" target="_blank"
                   rel="noreferrer">dejvokep#2496</a>
                <a className="link" href="https://discord.gg/BbhADEy" target="_blank" rel="noreferrer">Discord server</a>
                <a className="link" href="https://github.com/dejvokep" target="_blank" rel="noreferrer">Github profile</a>
            </div>
        </div>
    )
}
