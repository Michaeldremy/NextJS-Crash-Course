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
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
