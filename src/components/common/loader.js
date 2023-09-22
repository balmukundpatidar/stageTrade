import React from 'react'
import Image from "next/image";
function Loader() {
  return (
    <div className='w-full absolute flex items-center justify-center min-h-screen text-center'>

                <Image
         
                        src="/assets/images/loader.gif"
                        width={50}
                        height={50}
                        alt="Loader"
                      />


    </div>
  )
}

export default Loader