import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://lpblog.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className="">
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Head>

      

      <div className="text-center">
        <p className="uppercase text-sm pb-1 sm:pb-2 text-brand-400 tracking-widest">
          {postData.category} &bull; <Date dateString={postData.date} />
        </p>
      </div>
      <div className="mb-10 text-center">
        <h2 className="fontbodoni leading-relaxed text-brand-700 text-2xl md:text-5xl uppercase tracking-widest">
          &bull; {postData.title} &bull;
        </h2>
      </div>

      <div className="mb-10">
        <Image
          loader={myLoader}
          src={postData.coverimage}
          alt={postData.title}
          layout="responsive"
          width={700}
          height={475}
          quality={50}
          className="rounded-lg"
        />
      </div>
      <div className="postspage px-2 md:px-16">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
}
