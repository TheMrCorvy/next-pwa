import { useRouter } from "next/router"
import Link from "next/link"

import en from "../locales/en"
import es from "../locales/es"
import styles from "../styles/Home.module.css"

export default function Home() {
	const router = useRouter()
	const { locale } = router
	const t = locale === "en" ? en : es

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>{t.hello}</h1>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing <code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<h3>siguiente pagina</h3>
					<Link href="/prueba">
						<a>ir a la sig pagina</a>
					</Link>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}
