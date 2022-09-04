import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();;

  return {
    props: {
      allPostsData
    }
  }
}

import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Wooseok Jeong</p>
        <p>1999.01.14</p>
        <p>South Korea</p>
        <p>
          <a href="https://www.github.com/1wooseok">Github :)</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title} <br />
              {id} <br />
              {date} <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
