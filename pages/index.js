import Head from "next/head";
import Users from "../components/Rockets";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apollo Next - SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Simple integration{" "}
          <a href="https://nextjs.org/docs/getting-started">NextJs</a> with{" "}
          <a href="https://www.apollographql.com/docs/react/">Apollo Client</a>
        </h1>
        <Users />
      </main>
    </div>
  );
}
