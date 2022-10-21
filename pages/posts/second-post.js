import GeneralLayout from "../../components/GeneralLayout";
import Head from "next/head";
import Link from "next/link";

export default function SecondPost() {
  return (
    <>
      <GeneralLayout home={false}>
        <h1>this is my post</h1>
        <h2>eo ar hoe</h2>
        <p>lorem ipsum dolor sit amet</p>
      </GeneralLayout>
    </>
  );
}
