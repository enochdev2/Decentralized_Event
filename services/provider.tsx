'use client'

import * as React from 'react'
// import {
//   GetSiweMessageOptions,
//   RainbowKitSiweNextAuthProvider,
// } from '@rainbow-me/rainbowkit-siwe-next-auth'
import '@rainbow-me/rainbowkit/styles.css'
 import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, http } from 'wagmi'
import { createConfig } from 'wagmi'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { Chain, RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { mainnet, sepolia, hardhat } from 'wagmi/chains'
// import { mainnet, hardhat } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
// import { Session } from 'next-auth'
// import { SessionProvider } from 'next-auth/react'

// const bitfinity: Chain = {
//   id: 355113,
//   name: 'Bitfinity',
//   network: 'bitfinity',
//   iconUrl: 'https://bitfinity.network/logo.png',
//   iconBackground: '#000000',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Bitfinity',
//     symbol: 'BFT',
//   },
//   rpcUrls: {
//     public: { http: ['https://testnet.bitfinity.network'] },
//     default: { http: ['https://testnet.bitfinity.network'] },
//   },
//   blockExplorers: {
//     default: { name: 'Bitfinity Block Explorer', url: 'https://explorer.bitfinity.network/' },
//     etherscan: { name: 'Bitfinity Block Explorer', url: 'https://explorer.bitfinity.network/' },
//   },
//   testnet: true,
// }

// const { chains, publicClient } = configureChains(
//   [mainnet, bitfinity, hardhat],
//   [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }), publicProvider()]
// )

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: projectId ,
  chains: [mainnet, sepolia, hardhat],
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})

const queryClient = new QueryClient()

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       metaMaskWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       coinbaseWallet({ appName: 'Coinbase', chains }),
//       rainbowWallet({ projectId, chains }),
//     ],
//   },
// ])

// const config = createConfig({
//   chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http('https://mainnet.example.com'),
//     [sepolia.id]: http('https://sepolia.example.com'),
//   },
// })

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// })

const demoAppInfo = {
  appName: 'Dapp Funds dApp',
}

// const getSiweMessageOptions: GetSiweMessageOptions = () => ({
//   statement: `
//   Once you're signed in, you'll be able to access all of our dApp's features.
//   Thank you for partnering with CrowdFunding!`,
// })

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
           <RainbowKitProvider theme={darkTheme()} >
            {mounted && children}
          </RainbowKitProvider>
         </QueryClientProvider>
     </WagmiProvider>
  
  )
}

{/* <SessionProvider refetchInterval={0} session={pageProps.session}> */}
{/* <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}> */}