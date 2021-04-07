import { server } from '../config/index';
import Head from "next/head";
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Crash Course!</title>
        <meta
          name="keywords"
          content="web development, life, coding, programming, nextjs, react, javascript"
        />
      </Head>
      <ArticleList articles={articles}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
