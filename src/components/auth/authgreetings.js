import React from "react";
import Image from "next/image";

const AuthGreetings = () => {
  return (
    <>
      <div className="relative flex flex-col h-full items-center justify-center p-5 md:p-10">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/abstract-background.svg"
            alt="background image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col gap-y-8 md:gap-y-12 items-center justify-around">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/assets/images/logo.svg"
              alt="Tradery Logo"
              width={340}
              height={72}
              className="w-48 md:w-auto"
            />
          </div>
          <div className="text-center max-w-380">
            <h2 className="text-center text-lg md:text-xl font-extrabold text-white">
              Join & Connect for Business Growth
            </h2>
            <p className="mt-1 md:mt-3 text-base text-darkGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthGreetings;
