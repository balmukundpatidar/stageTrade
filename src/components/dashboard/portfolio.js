import Link from 'next/link'
import React from 'react'

function Portfolio({data}) {
  return (
    <ul className="flex flex-col gap-y-6 overflow-y-auto max-h-portfolioHeight">
                {data.map((strategy,i)=>(
      <li key={i} className="flex justify-between items-center">
      <div>
        <h5 className="font-extrabold text-base text-darkGray">
         {strategy.title}
        </h5>
        <span className="text-xs font-medium text-lightBlue">
        {strategy.content}
        </span>
      </div>
      <div>
        <Link
          href="#"
          className="text-base font-medium text-pigmentGreen"
        >
          <span>Learn more {" >"}</span>
        </Link>
      </div>
    </li>
))}
        
            
            </ul>
  )
}

export default Portfolio;