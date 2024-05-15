import Head from 'next/head';
import { Inter } from "next/font/google";
import { GetServerSideProps } from 'next';

const inter = Inter({ subsets: ["latin"] });

interface HomePageProps {
  type: string;
  ogImage: string;
}

export default function HomePage({ type, ogImage }: HomePageProps) {
  const title = `Mystery`;
  const description = `It's right if you don't understand, as there are usually some mysterious things hidden in Type ${type || 'General'}.`;


  return (
    <>
      <Head>
        <title>Mystery</title>
        <meta property="og:title" content="Mystery" />
        <meta property="og:description" content="It's right if you don't understand, as there are usually some mysterious things hidden here." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        {/* <meta property="og:url" content={fullUrl} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content={fullUrl} /> */}
        <meta name="twitter:title" content="Mystery" />
        <meta name="twitter:description" content="It's right if you don't understand, as there are usually some mysterious things hidden here." />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <main
        className={`min-h-screen items-center p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
          <p>?</p>
          <p>??</p>
          <p>???</p>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const type = query.type || 'general';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let ogImage = `https://mystery-jade.vercel.app/image1.png`;
  if (type === 'a') {
    ogImage = `https://mystery-jade.vercel.app/image1.png`;
  } else if (type === 'y') {
    ogImage = `https://mystery-jade.vercel.app/image2.png`;
  }

  return {
    props: {
      type,
      ogImage
    },
  };
};