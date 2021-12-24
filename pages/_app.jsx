import "../css/style.css";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MSG | TOD</title>
      </Head>

      <div className="top-bar">
        <h1>MSG TOD (Truth or Dare)</h1>

        <div className="navigation">
          <Link href="/">
            <a>Rumah</a>
          </Link>

          <Link href="/buat">
            <a>Tambah Data</a>
          </Link>
        </div>
      </div>

      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
