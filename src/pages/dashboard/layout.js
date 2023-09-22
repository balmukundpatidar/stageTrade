"use client";
import Privateroute from "@/components/auth/privateroute";
import Sidebar from "@/components/sidebar/sidebar";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

function Layout({ children }) {
  const session = useSession();
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <>
      <Privateroute>
        <div className="bg-lightGray min-h-screen">
          <Sidebar isOpen={isOpen} />
          <div className="px-4 pt-4 pb-10 md:px-6 md:py-10 md:ml-290">
            {/* {session != undefined && session.data != undefined ? (
              <> */}
                <div className="flex justify-between items-end gap-x-2">
                  <div>
                    {/* <p className="capitalize text-xs sm:text-sm">Hello {session.data.user.name},</p> */}
                    <h2 className="text-md md:text-lg lg:text-xl font-extrabold text-darkGray">
                      Welcome to Tradery {pathname == '/connect' ? 'Connect': 'Signals'}
                   
                    </h2>
                  </div>
                  <div className="flex gap-x-2">
                    <button
                      className="p-1 sm:p-2 inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                      type="button"
                    >
                      <Image src="/assets/images/bell.svg" alt="" width={16} height={16} className="w-4 h-4 sm:w-6 sm:h-6"/>
                    </button>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="relative z-10 inline-flex items-center p-1 sm:p-2 text-sm text-darkGray rounded-lg md:hidden focus:outline-none"
                    >
                      <Image src={`/assets/images/${isOpen ? "close.svg" : "bars.svg"}`} alt="" width={16} height={16} className="w-4 h-4 sm:w-6 sm:h-6"/>
                    </button>
                  </div>
                </div>
                {children}
              {/* </>
            ) : (
              <p>Please sign in to access this content.</p>
            )} */}
          </div>
        </div>
        <section
          className={`transition-all duration-500 ${
            isOpen
              ? "w-screen h-screen cursor-pointer bg-darkGray fixed top-0 bg-opacity-60"
              : ""
          }`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </Privateroute>
    </>
  );
}

export default Layout;
