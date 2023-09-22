"use client";
import { loginWith } from "@/actions/auth";
// import { getPlans } from "@/actions/pricingplans";
import Button from "@/components/common/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";


const Pricingplans = () => {
  const plansDataAll = {
    "data": {
        "signals":[
            {
                "id":1,
                "for": "Individuals",
                "type": "Free",
                "description":"Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
                "price" : "0",
                "monthly":true,
                "yearly":false,
                "status":"",
                "plansImage":"/assets/images/freePlan.svg",
                "features":[
                    "All analytics features",
                    "Up to 250,000 tracked visits",
                    "Normal support",
                    "Splended feature"
                    ]
                
               
            },
            {
                "id":2,
                "for": "lorem ipsum",
                "type": "Pro",
                "description":"Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
                "price" : "199",
                "monthly":true,
                "yearly":false,
                "status":"Popular",
                "plansImage":"/assets/images/proPlan.svg",
                "features":[
                    "All analytics features",
                    "Up to 1,050,000 tracked visits",
                    "Premium support",
                    "Delightful feature"
                    ]
                
               
            },
            {
                "id":3,
                "for": "Individuals",
                "type": "Enterprise",
                "description":"Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
                "price" : "399",
                "monthly":true,
                "yearly":false,
                "status":"",
                "plansImage":"/assets/images/enterprisePlan.svg",
                "features":[
                    "All analytics features",
                    "Up to 5,000,000 tracked visits",
                    "Normal support",
                    "Splended feature"
                    ]
                
               
            }
        ],
        "ibkr":[
            {
                "id":1,
                "for": "Individuals IBKR",
                "type": "Free",
                "description":"Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
                "price" : "0",
                "monthly":true,
                "yearly":false,
                "plansImage":"/assets/images/freePlan.svg",
                "status":"",
                "features":[
                    "All analytics features",
                    "Up to 250,000 tracked visits",
                    "Normal support",
                    "Splended feature"
                    ]
                
               
            },
            {
                "id":2,
                "for": "lorem ipsum IBKR",
                "type": "Pro",
                "description":"Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
                "price" : "199",
                "monthly":true,
                "yearly":false,
                "status":"Popular",
                "plansImage":"/assets/images/proPlan.svg",
                "features":[
                    "All analytics features",
                    "Up to 1,050,000 tracked visits",
                    "Premium support",
                    "Delightful feature"
                    ]
                
               
            },
            {
                "id":3,
                "for": "Individuals IBKR",
                "type": "Enterprise",
                "description":"Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
                "price" : "399",
                "monthly":true,
                "yearly":false,
                "status":"",
                "plansImage":"/assets/images/enterprisePlan.svg",
                "features":[
                    "All analytics features",
                    "Up to 5,000,000 tracked visits",
                    "Normal support",
                    "Splended feature"
                    ]
                
               
            }
        ]
      
    }
    
};

const plansData = plansDataAll.data;

  // const dispatch = useDispatch();
  // const plansData = useSelector((state) => state.plansReducer).plansData;
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState(plansData.signals);
  console.log(data);
  const handleCheckboxChange = () => {
    if (!isChecked) {
      if (plansData.ibkr) {
        setData(plansData.ibkr);
      }
    } else {
      if (plansData.signals) {
        setData(plansData.signals);
      }
    }
    setIsChecked(!isChecked);
  };
  // useEffect(() => {
  //   dispatch(getPlans());
  // }, []);

  // useEffect(() => {
  //   if (plansData.signals) {
  //     setData(plansData.signals);
  //   }
  //   console.log(data);
  // }, [plansData]);






  return (
    <>
      <main className="min-h-screen bg-lightGray">
        <section className="py-12 px-4">
          <div className="text-center">
            <span className="text-kellyGreen text-sm font-medium">
              Pricing{" "}
            </span>
            <h2 className="text-lg md:text-xl font-extrabold text-darkGray">
              Our pricing plans
            </h2>
            <p className="pt-4 text-base text-lightBlue font-medium w-full px-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              <br /> dolor posuere vel venenatis eu sit massa volutpat.
            </p>
            <div className="mt-8">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <span
                  className={`text-md font-normal ${
                    isChecked
                      ? "text-lightBlue"
                      : "text-pigmentGreen font-semibold"
                  }`}
                >
                  Signals
                </span>
                <span
                  className={`slider mx-4 flex w-20 h-10 items-center rounded-full p-1 duration-200 ${
                    isChecked ? "bg-green" : "bg-green"
                  }`}
                >
                  <span
                    className={`dot h-8 w-8 rounded-full bg-white duration-200 ${
                      isChecked ? "translate-x-[40px]" : ""
                    }`}
                  ></span>
                </span>
                <span
                  className={`text-md font-normal ${
                    isChecked
                      ? "text-pigmentGreen font-semibold"
                      : "text-lightBlue"
                  }`}
                >
                  IBKR
                </span>
              </label>
            </div>
          </div>
          <div className="pt-8 flex flex-col justify-center items-center flex-wrap gap-y-6 lg:flex-row lg:gap-x-6 xl:gap-x-8 lg:flex-nowrap">
            {Object.keys(data).length
              ? data.map((plans,i) => (
                  <div
                  key={i}
                    className={`relative w-full max-w-100 min-w-100 px-6 py-8 sm:px-8 sm:py-11 text-darkGray  rounded-3xl border-1 border-lightBorder lg:max-w-372 sm:max-w-60 sm:min-w-372 lg:min-w-315 xl:min-w-372 group ${
                      plans.type == "Pro"
                        ? " bg-kellyGreen shadow-3xl border-yellowGreen text-white"
                        : "shadow-xl bg-white"
                    }`}
                  >
                    <div className="flex space-x-4">
                      <div>
                        <Image
                          src={`${plans.plansImage}`}
                          alt=""
                          className="w-20 h-20"
                          width={5}
                          height={5}
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-2">
                        <p
                          className={`text-lightBlue text-sm font-medium ${
                            plans.type == "Pro" ? "text-white-700" : ""
                          }`}
                        >
                          {plans.for}
                        </p>
                        <h3 className="text-lg font-extrabold">{plans.type}</h3>
                      </div>
                    </div>
                    <div className="py-4">
                      <p
                        className={`text-lightBlue text-bs font-normal ${
                          plans.type == "Pro" ? "text-white-700" : ""
                        }`}
                      >
                        {plans.description}
                      </p>
                    </div>
                    <div className="flex items-end gap-3">
                      <h1 className="font-extrabold text-2xl">
                        {" "}
                        ${plans.price}
                      </h1>
                      <span
                        className={`text-lightBlue text-md font-medium pb-2 ${
                          plans.type == "Pro" ? "text-white-700" : ""
                        }`}
                      >
                        {plans.monthly
                          ? "/monthly"
                          : plans.yearly
                          ? "/yearly"
                          : ""}
                      </span>
                    </div>
                    <div className="py-4">
                      <h4 className="text-base font-extrabold">
                        Whats included
                      </h4>
                      <ul className="space-y-4 py-4">
                        {plans.features &&
                          plans.features.map((feature,i) => (
                            <li key={'feature_'+i} className="flex items-center space-x-3 text-base font-normal">
                              <Image
                                src={`/assets/images/${
                                  plans.type == "Pro"
                                    ? "checkYellow.svg"
                                    : "checkGreen.svg"
                                }`}
                                alt=""
                                width={26}
                                height={26}
                                loading="lazy"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <Button
                        className={`w-full py-4 bg-kellyGreen text-xs hover:border-pigmentGreen hover:bg-pigmentGreen ${
                          plans.type == "Pro"
                            ? "bg-white text-kellyGreen hover:border-white-700 hover:bg-white-700"
                            : " text-white"
                        }`}
                        onClick={() => loginWith("google")}
                      >
                        <span className="text-md font-bold">Get started</span>
                      </Button>
                    </div>
                    {plans.status != "" ? (
                      <div className="absolute top-6 right-6">
                        <p className="bg-white bg-opacity-20 text-sm font-normal px-5 py-2.5 rounded-lg sm:px-7">
                          {plans.status}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              : ""}
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricingplans;
