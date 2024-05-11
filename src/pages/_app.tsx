import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { type } = router.query;

  let ogImage = 'https://trueart-content.oss-cn-shanghai.aliyuncs.com/20190518/174134957_640.jpg';
  if (type === 'a') {
    ogImage = 'https://s.rfi.fr/media/display/8a79660e-8d2f-11ec-8878-005056a90321/w:1280/p:16x9/maxresdefault-54.jpg';
  } else if (type === 'b') {
    ogImage = 'https://dpi.media/upload/imgs/default/MediciRenaissance/8.jpeg';
  }
  return (
    <>
      <Head>
        <meta property="og:title" content="mystery" />
        <meta property="og:description" content="It's right if you don't understand, as there are usually some mysterious things hidden here." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}