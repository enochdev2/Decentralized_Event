'use client'

import { useEffect, useState } from 'react'

import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultConfig, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { darkTheme } from '@rainbow-me/rainbowkit'
import { WagmiProvider, http } from 'wagmi'
import {
  metaMaskWallet,
  argentWallet,
  trustWallet,
  ledgerWallet,
  // coinbaseWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { arbitrum, base, mainnet, optimism, polygon, sepolia, hardhat } from 'wagmi/chains'
const { wallets } = getDefaultWallets()

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: projectId,
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, hardhat],
  // transports: {
  //   [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/PnD17A_BCMUno1UXlU-Lfybx0AGiIQri'),
  // },
  })

const queryClient = new QueryClient()

const demoAppInfo = {
  appName: 'Dapp Funds dApp',
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setMounted(false)
      console.log("TimeOut");
      
    }, 5000);
  }, [])
  
 

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {mounted &&
          children
          }
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

// const config = createConfig({
//   chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http('https://mainnet.example.com'),
//     [sepolia.id]: http('https://sepolia.example.com'),
//   },
// })
