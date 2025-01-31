import type { AppProps } from 'next/app';
import Meta from '@/components/meta';
import '@/styles/globals.css';
import { PrivyProvider } from '@privy-io/react-auth';
import { baseSepolia } from 'viem/chains';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        loginMethods: ['sms', 'apple', 'google'],
        embeddedWallets: {
          createOnLogin: 'all-users',
        },
        defaultChain: baseSepolia,
        supportedChains: [baseSepolia],
      }}
    >
      <Meta />
      <Component {...pageProps} />
    </PrivyProvider>
  );
};

export default App;
