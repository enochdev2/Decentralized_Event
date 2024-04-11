"use client"
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Providers } from '../services/provider'
import { store } from '../store'
import '../styles/globals.css'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
        <div className="min-h-screen bg-gray-100">
      <Provider store={store}>
          <Header />
          <div className="mt-10 h-20 "></div>
          <Component {...pageProps} />
          <div className="mt-10 h-20 "></div>
          <Footer/>

          <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Provider>
        </div>
    </Providers>
  )
}

export default MyApp

// <WagmiProvider config={config}>
//   <QueryClientProvider client={client}>
// <RainbowKitProvider>
// const config = getDefaultConfig({
//   appName: 'RainbowKit App',
//   projectId: '42cf5cc884c342e26b2c5002e2f0e26e',
//   chains: [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     base,
//     zora,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
//   ],
//   ssr: true,
// })
  //* </RainbowKitProvider>
  //   </QueryClientProvider>
  // </WagmiProvider>
  //}