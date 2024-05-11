import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { type } = router.query;
  const { asPath } = router;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fullUrl = `${baseUrl}${asPath}`;

  let ogImage = `${baseUrl}/image1.png`;
  if (type === 'a') {
    ogImage = `${baseUrl}/image1.png`;
  } else if (type === 'z') {
    ogImage = `${baseUrl}/image2.png`;
  }

  return (
    <>
      <Head>
        <title>Mystery</title>
        <meta property="og:title" content="Mystery" />
        <meta property="og:description" content="It's right if you don't understand, as there are usually some mysterious things hidden here." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={fullUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={fullUrl} />
        <meta name="twitter:title" content="Mystery" />
        <meta name="twitter:description" content="It's right if you don't understand, as there are usually some mysterious things hidden here." />
        <meta name="twitter:image" content={ogImage} />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
