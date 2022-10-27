import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import MTable from "../components/MTable";
import { columns, data } from "../src/columns";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import CustomTable from "../components/CustomTable";

export async function getStaticProps() {
  resetServerContext();
  return {
    props: {},
  };
}

export default function Home() {
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
        <MTable columns={columns} data={data} />
      </section>
      <section>
        <CustomTable />
      </section>
    </Layout>
  );
}
