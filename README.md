# Sr. Degen

Your trustworthy and legend-telling bartender.

## Motivation

- Create something fun and engaging that generates social value.
- Project submission for ETHGlobal's [Frameworks hackathon](https://ethglobal.com/events/frameworks).

## Getting started

Created with create-next-app, inspired from Privy's progressive web app (PWA) template.

### Built with

- [Privy](https://www.privy.io/)
- [Viem](https://viem.sh/)
- [NextPWA](https://www.npmjs.com/package/next-pwa)
- [TailwindCSS](https://tailwindcss.com/)
- All transactions are sent on the [Base](https://base.org/) Sepolia testnet.

You can see the deployed version at [srdegen.xyz](https://srdegen.xyz/).

### Setup

First, clone this repo:

```sh
git clone https://github.com/angelmc32/sr-degen
cd sr-degen
```

Next, install dependencies, _(includes `@privy-io/react-auth`, `viem`, and `next-pwa`:)_

```sh
npm install
```

Next, create your own env file by running

```
cp .env.example.local .env.local
```

and add your Privy App ID:

```
NEXT_PUBLIC_PRIVY_APP_ID=insert-your-app-id
```

Lastly, run

```
npm run dev
```

visit `http://localhost:3000` in your browser to see the PWA in action!
