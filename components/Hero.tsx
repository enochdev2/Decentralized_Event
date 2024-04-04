import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import marketplace from '../screenshots/marketplaces.jpg'

const Hero: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="lg:w-5/6 xl:w-4/6 w-11/12 flex flex-col  mx-auto relative shadow-md px-5 py-2 bg-[#121212]">
        <div className="pb-8 ">
          <div className="mx-auto px-2 sm:px-2 lg:px-4">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-3xl sm:tracking-tight md:text-5xl xl:text-6xl md:tracking-tight">
                <span className="block xl:inline text-white text-5xl">Bring Events To</span>
                <br />
                <span className="block text-orange-500 xl:inline"> Web3 Marketplace</span>
              </h1>

              <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-lg lg:mx-0">
                Welcome to Web3 event market place, create vibrant expositions conneting enthusiasts
                with experts, products and services in a decentralized anonymous enviroment.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link
                  href={'/events/create'}
                  className="bg-[#010125] p-2 rounded-full py-3 px-4
                text-white border hover:bg-transparent border hover:text-orange-500
                hover:border-orange-500  duration-300 transition-all"
                >
                  Add Events
                </Link>

                <button
                  className="bg-orange-500 p-2 rounded-full py-3 px-4
                text-white mx-4 hover:bg-transparent border hover:text-orange-500
                hover:border-orange-500 duration-300 transition-all"
                >
                  Explore Marketplace
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative w-full h-52 lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[38%]">
          <Image
            className="object-cover "
            fill
            src={marketplace}
            // src="https://img.freepik.com/free-vector/business-partners-handshake_74855-5222.jpg?t=st=1661167225~exp=1661167825~hmac=33b5b2e34224ea0dfd65c9f3a054e1e1eb411626fe15e0becbfe343ab31f3ba1"
            alt="marketplace"
          />
        </div>
      </div>
    </main>
  )
}

export default Hero
