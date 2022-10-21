import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import MTable from "../components/MTable";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>pilotage</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Table</p>
        <Link href="posts/second-post"> see my post </Link>
        <br />
        <Link href="posts/first-post"> see my tables </Link>
      </section>
      <section>
        <MTable />
      </section>
    </Layout>
  );
}
