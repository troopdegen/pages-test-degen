import Head from 'next/head';

const Meta = () => (
  <Head>
    <title>Sr. Degen</title>
    <meta charSet="utf-8" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="Sr. Degen" />
    <meta name="application-name" content="Sr. Degen" />
    <meta name="theme-color" content="#4338ca" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover"
    />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎩</text></svg>"
    />
    <link rel="manifest" href="/manifest.json" />
  </Head>
);

export default Meta;
