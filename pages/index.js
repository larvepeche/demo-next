import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import MTable from "../components/MTable";
import { data, activeColumns } from "../src/data";

export async function getStaticProps() {
  return {
    props: {
      data,
      activeColumns,
    },
  };
}

export default function Home({ data, activeColumns }) {
  return (
    <Layout home>
      <Head>
        <title>pilotage</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Table</p>
        <Link href="posts/Blog"> blog home </Link>
        <br />
        <Link href="posts/Details"> see my tables </Link>
      </section>
      <section>
        <MTable columns={activeColumns} data={data} />
      </section>
    </Layout>
  );
}
