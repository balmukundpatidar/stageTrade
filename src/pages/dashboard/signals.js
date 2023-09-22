"use client";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import SignalTable from "@/components/dashboard/signaltable";
import { signalsList, pastPerformance, taskList, formatDateToMonthDay } from "@/actions/dashbord";
import TaskList from "@/components/dashboard/tasklist";

const Signals = () => {
  // const dispatch = useDispatch();
  // const signalsData = useSelector((state) => state.signalsReducer).signalsData;
  // const performanceData = useSelector((state)=>state.performanceReducer).performanceData;
  // const taskData = useSelector((state) => state.taskReducer).taskData;

  const signalsData = [
            {
                "id":1,
                "prediction":"Buy",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            },
            {
                "id":2,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            },
            {
                "id":3,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            },
            {
                "id":4,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            }
            ,
            {
                "id":5,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            },
            {
                "id":6,
                "prediction":"Buy 2",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            },
            {
                "id":7,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            },
            {
                "id":8,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            },
            {
                "id":9,
                "prediction":"Buy 2",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            },
            {
                "id":10,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            },
            {
                "id":11,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            },
            {
                "id":12,
                "prediction":"Buy 2",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"No"
            },
            {
                "id":13,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            }
            ,
            {
                "id":14,
                "prediction":"Buy 1",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            },
            {
                "id":15,
                "prediction":"Buy 2",
                "asset":"BTC",
                "datepublished":"08-29-2023",
                "active":"Yes"
            }
        ]
      
    const performanceData = [
             {
              "signaltype":"Buy",
              "value":"83%",
              "return":2.45
             },
             {
              "signaltype":"Sell",
              "value":"95%",
              "return":-4.75
             }
          ]
        
      
          const taskData = [
                    {
                        "id":1,
                        "date":"2023-09-21",
                        "time":"01:00 PM - 02:00 PM",
                        "name":"At vero eos et accusamus"
                    },
                    {
                        "id":2,
                        "date":"2023-09-21",
                        "time":"02:00 PM - 03:00 PM",
                        "name":"At vero eos et accusamus"
                    },
                    {
                        "id":3,
                        "date":"2023-09-21",
                        "time":"02:00 PM - 03:00 PM",
                        "name":"At vero eos et accusamus"
                    },
                    {
                        "id":4,
                        "date":"2023-09-22",
                        "time":"02:00 PM - 03:00 PM",
                        "name":"At vero eos et accusamus"
                    }
               
        
                ]
              
            
            
     
  
    





  const [taskDataByDate, setTaskDataByDate] = useState(taskData);
  const currentDate = new Date();
  // useEffect(() => {
  //   dispatch(signalsList());
  //   dispatch(pastPerformance());
  //   dispatch(taskList());
  // }, []);

  // useEffect(() => {
  //   currentDate.setHours(0, 0, 0, 0); // Set the time to midnight

  //   let tmp = taskData.filter((task) => {
  //     let taskDate = new Date(task.date);
  //     taskDate.setHours(0, 0, 0, 0); // Set the time to midnight
  //     console.log(taskDate.getTime() + " " + currentDate.getTime());
  //     return taskDate.getTime() === currentDate.getTime();
  //   });

  //   setTaskDataByDate(tmp);
  // }, []);

  

  return (
    <Layout>
      <div className="flex flex-col justify-between gap-4 mt-4 xl:flex-row">
        <div className="space-y-4 w-full xl:w-8/12">
          <div className="p-6 lg:p-8 bg-white rounded-20">
            <div className="flex justify-between ">
              <div>
                <p className="text-sm font-medium text-lightBlue">Signals</p>
                <h3 className="text-md md:text-lg font-extrabold text-darkGray">
                  Latest Signals
                </h3>
              </div>
              <div className="flex flex-row gap-2.5">
                <button
                  type="button"
                  className="flex justify-center items-center h-8 w-8 focus:outline-none bg-lightGray rounded-md hover:bg-pigmentGreen"
                >
                  <Image
                    src="/assets/images/expand.svg"
                    alt=""
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center h-8 w-8 focus:outline-none bg-lightGray rounded-md hover:bg-pigmentGreen"
                >
                  <Image
                    src="/assets/images/barChart.svg"
                    alt=""
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
            <div className="relative overflow-x-auto mt-8 max-h-tableHeight">
              <SignalTable data={signalsData} />
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-20 w-full xl:w-4/12">
          <div className="p-6 lg:p-8 bg-white rounded-20 ">
            <h2 className="text-md md:text-lg font-extrabold text-darkGray mb-10">
            {/* {formatDateToMonthDay(currentDate)} */}
            </h2>
            <TaskList data={taskDataByDate} />
            {taskDataByDate.length ?  <div className="flex justify-end mt-10">
              <Link
                href="#"
                className="flex gap-x-2 text-base font-extrabold text-pigmentGreen transition hover:text-kellyGreen"
              >
                <span>View all Tasks</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_238_930)">
                    <path
                      d="M3.78906 13L17.9591 13L14.3791 16.59L15.7891 18L21.7891 12L15.7891 6L14.3791 7.41L17.9591 11L3.78906 11L3.78906 13Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_238_930">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(24.7891 24) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>:""}
           
          </div>
          <div className="p-6 lg:p-8 bg-white rounded-20 ">
            <h2 className="text-md md:text-lg font-extrabold text-darkGray mb-3">
              Past performance
            </h2>
            <p className="text-base font-medium text-lightBlue">
              Lorem ipsum dolor sit amet, ab voluptate.
            </p>
            <div className="flex flex-col justify-between gap-4 mx-0 my-4 md:mx-6">
              {performanceData.length && performanceData.map((pdata,i)=>(
                <div key={i} className="flex items-center justify-between p-6 gap-x-4 bg-white shadow-md rounded-20 w-full">
                <div>
                  <p className="text-sm font-medium text-lightBlue">
                    Accuracy of {pdata.signaltype} signals
                  </p>
                  <div className="flex gap-x-4  items-center">
                    <h3 className="text-lg font-extrabold text-darkGray">
                      {pdata.value}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 gap-x-2 text-xs font-extrabold ${pdata.return > 0 ? "text-pigmentGreen bg-yellowGreen":"text-danger bg-danger"} bg-opacity-30 rounded-full`}>
                      <span>{pdata.return > 0 ? '+':''}{pdata.return}%</span>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signals;
