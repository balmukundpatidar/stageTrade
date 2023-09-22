"use client";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  formatDateToMonthDay,
  getDashboardData,
  signalsList,
  taskList,
} from "@/actions/dashbord";
import SignalTable from "@/components/dashboard/signaltable";
import TaskList from "@/components/dashboard/tasklist";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

const Dashboard = () => {

 const dashboardData = {
        "spentthismonth": "682.50",
        "newtrades": "321",
        "earnings": "350.40",
        "profits": "332.10",
        "balance": {
            "monthly": {
                "performance": 43.50,
                "performancereturn": 2.45,
                "balance": 52422,
                "balancereturn": -4.75,
                "graphData": 
                    {
                        "jan": 5,
                   
                        "feb": 0,
                   
                        "march": 10,
                   
                        "apr": 5,
                   
                        "may": 25,
                 
                        "june": 14,
                    
                        "july": 20,
                   
                        "aug": 15,
                   
                        "sept": 30,
                  
                        "oct": 22,
                  
                        "nov": 28,
                 
                        "dec": 20
                    }
                
            },
            "yearly": {
                "performance": 50.50,
                "performancereturn": 37.45,
                "balance": 79345,
                "balancereturn": -41.75,
                "graphData": 
                    {
                        "2010": 8,
                    
                        "2011": 2,
                   
                        "2012": 10,
                    
                        "2013": 7,
                   
                        "2014": 27,
                    
                        "2015": 13,
                  
                        "2016": 18,
                   
                        "2017": 13,
                  
                        "2018": 28,
                   
                        "2019": 21,
                
                        "2020": 30,
                   
                        "2021": 2
                    }
                
            }
        }
    
}

const signalsData = 

      [
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
      ];
    
  
  


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
        },

    ]
    


  // const dispatch = useDispatch();
  // const dashboardData = useSelector(
  //   (state) => state.dashboardReducer
  // ).dashboardData;
  // const signalsData = useSelector((state) => state.signalsReducer).signalsData;
  // const taskData = useSelector((state) => state.taskReducer).taskData;
  const [timePeriod, setTimePeriod] = useState("monthly");
  const [taskDataByDate, setTaskDataByDate] = useState(taskData);
  const [labels, setLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const currentDate = new Date();
  // useEffect(() => {
  //   dispatch(getDashboardData());
  //   dispatch(signalsList());
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
  // }, [taskData]);

  const handleTimeChange = (e) => {
    console.log(e.target.value);
    setTimePeriod(e.target.value);
  };

  ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );





  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.60,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: true,
    },
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: false,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    setLabels(
      dashboardData.balance?.[timePeriod].graphData
        ? Object.keys(dashboardData.balance?.[timePeriod].graphData).map(
            (data) => data
          )
        : ""
    );
    setGraphData(
      dashboardData.balance?.[timePeriod].graphData
        ? Object.values(dashboardData.balance?.[timePeriod].graphData).map(
            (data) => data
          )
        : ""
    );
  }, []);
  const performanceChart = {
    labels,
    datasets: [
      {
        label: "Total",
        fill: "start",
        fillColor: "",
        data: graphData,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(129, 209, 59, 0.15)");
          gradient.addColorStop(1, "rgba(129, 209, 59, 0.00)");
          return gradient;
        },
        borderColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(129, 209, 59, 1)");
          gradient.addColorStop(1, "rgba(129, 209, 59, 0)");
          return gradient;
        },
        borderWidth: 3,
      },
    ],
  };

  return (
    <Layout>
      <div className="flex flex-col flex-wrap lg:flex-row justify-between gap-4 mt-8 xl:flex-nowrap">
        <div className="flex items-center justify-between p-6 gap-x-4 bg-white rounded-20 md:min-w-1/2 lg:min-w-1/2 xl:min-w-1/4">
          <div>
            <p className="text-sm font-medium text-lightBlue">
              Spent this month
            </p>
            <h3 className="text-lg font-extrabold text-darkGray">
              ${dashboardData.spentthismonth}
            </h3>
          </div>
          <div>
            <Image
              src="/assets/images/spent.svg"
              alt=""
              width={60}
              height={45}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center justify-between p-6 gap-x-4 bg-white rounded-20 md:min-w-1/2 lg:min-w-1/2 xl:min-w-1/4">
          <div className="flex gap-x-4">
            <Image
              src="/assets/images/trades.svg"
              alt=""
              width={56}
              height={56}
              loading="lazy"
            />
            <div>
              <p className="text-sm font-medium text-lightBlue">New trades</p>
              <h3 className="text-lg font-extrabold text-darkGray">
                {dashboardData.newtrades}
              </h3>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/graph.svg"
              alt=""
              width={58}
              height={28}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center justify-between p-6 gap-x-4 bg-white rounded-20 md:min-w-1/2 lg:min-w-1/2 xl:min-w-1/4">
          <div className="flex gap-x-4">
            <Image
              src="/assets/images/earnings.svg"
              alt=""
              width={56}
              height={56}
              loading="lazy"
            />
            <div>
              <p className="text-sm font-medium text-lightBlue">Earnings</p>
              <h3 className="text-lg font-extrabold text-darkGray">
                ${dashboardData.earnings}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 gap-x-4 bg-hero-pattern rounded-20 md:min-w-1/2 lg:min-w-1/2 xl:min-w-1/4">
          <div>
            <p className="text-sm font-medium text-lightBorder">Profit</p>
            <h3 className="text-lg font-extrabold text-white">
              ${dashboardData.profits}
            </h3>
          </div>
          <div>
            <Image
              src="/assets/images/profitChart.svg"
              alt=""
              width={87}
              height={39}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 mt-4 xl:flex-row">
        <div className="space-y-4 w-full xl:w-8/12">
          <div className="p-6 lg:p-8 bg-white rounded-20">
            <div className="flex justify-between ">
              <div>
                <p className="text-sm font-medium text-lightBlue">Signals</p>
                <h3 className="text-lg font-extrabold text-darkGray">
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
            <div className="relative overflow-x-auto mt-8">
              <SignalTable data={signalsData} limit={4} />
            </div>
          </div>
          <div className="p-6 lg:p-8 bg-white rounded-20">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-lightBlue">IBKR</p>
                <div className="flex gap-x-5 items-center">
                  <h3 className="text-lg font-extrabold text-darkGray">
                    Balance
                  </h3>
                  <div className="flex gap-x-2">
                    <Image
                      src="/assets/images/checkGreen.svg"
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    <span className="font-extrabold text-base text-pigmentGreen">
                      On track
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2.5">
                <select
                  onChange={(e) => handleTimeChange(e)}
                  id="countries"
                  className="bg-lightGray border border-lightBorder h-10 text-lightBlue text-sm rounded focus:ring-none focus:outline-none block w-full py-1 px-2.5"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 sm:mx-0 lg:mx-6 my-4">
              <div className="flex items-center justify-between p-6 gap-x-4 bg-white shadow-md rounded-20 w-full lg:w-6/12 xl:w-6/12">
                <div>
                  <p className="text-sm font-medium text-lightBlue">
                    Performance
                  </p>
                  <div className="flex gap-x-4 items-center">
                    <h3 className="text-lg font-extrabold text-darkGray">
                      {dashboardData.balance?.[timePeriod].performance}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 gap-x-2 text-xs font-extrabold ${dashboardData.balance?.[timePeriod].performancereturn > 0 ? 'text-pigmentGreen bg-yellowGreen':'text-danger bg-danger'} bg-opacity-30 rounded-full`}>
                      <span>
                     {dashboardData.balance?.[timePeriod].performancereturn > 0 ? '+':''}{dashboardData.balance?.[timePeriod].performancereturn}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 gap-x-4 bg-white shadow-md rounded-20 w-full lg:w-6/12 xl:w-6/12">
                <div>
                  <p className="text-sm font-medium text-lightBlue">Balance</p>
                  <div className="flex gap-x-4  items-center">
                    <h3 className="text-lg font-extrabold text-darkGray">
                      $
                      {dashboardData.balance?.[
                        timePeriod
                      ].balance?.toLocaleString("en-US")}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 gap-x-2 text-xs font-extrabold ${dashboardData.balance?.[timePeriod].balancereturn > 0 ? 'text-pigmentGreen bg-yellowGreen':'text-danger bg-danger'} bg-opacity-10 rounded-full`}>
                      <span>
                      {dashboardData.balance?.[timePeriod].balancereturn > 0 ? '+':''}{dashboardData.balance?.[timePeriod].balancereturn}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph">
              <Line id="graph1" options={options} data={performanceChart} />
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-20 w-full xl:w-4/12">
          <div className="p-6 lg:p-8 bg-white rounded-20 ">
            <h2 className="text-xl font-extrabold text-darkGray mb-10">
              {/* {formatDateToMonthDay(currentDate)} */}
              {/* {currentDate ? formatDateToMonthDay(currentDate): ''} */}
              {/* {currentDate.getDate()} */}                                                                             
            </h2>                                                                                                                                         
            <TaskList data={taskDataByDate} />
            <div className="flex justify-end mt-10">
              <Link
                href="#"
                className="flex gap-x-2 text-base font-extrabold text-pigmentGreen transition group hover:text-kellyGreen"
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
            </div>
          </div>
          <div className="p-6 lg:p-8 bg-white rounded-20 ">
            <div className="mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <g clipPath="url(#clip0_238_957)">
                  <path
                    d="M68.7 26.8669C66.6737 25.8401 64.2399 26.0541 62.424 27.4189L56.925 31.5019C56.1454 23.8418 49.6997 18.0116 42 18.0019H41.7451L29.3791 5.63887C27.6962 3.9442 25.4045 2.99442 23.0161 3.00187H2.99995C1.34311 3.00187 0 4.34512 0 6.00197C0 7.65881 1.34311 9.00192 2.99995 9.00192H23.016C23.8112 9.00403 24.5734 9.31987 25.137 9.88097L33.258 18.0019H15C6.71991 18.0119 0.00998437 24.7218 0 33.002V57.002C0.00998437 65.282 6.71991 71.9921 15 72.0019H42C49.6998 71.9922 56.1454 66.162 56.925 58.5019L62.415 62.594C65.0659 64.5821 68.8268 64.0449 70.815 61.394C71.5939 60.3555 72.0149 59.0923 72.0149 57.794V32.2309C72.0228 29.9572 70.7372 27.8769 68.7 26.8669ZM51 57.0019C51 61.9724 46.9706 66.0019 42 66.0019H15C10.0295 66.0019 6.00005 61.9724 6.00005 57.0019V33.002C6.00005 28.0314 10.0295 24.002 15 24.002H42C46.9706 24.002 51 28.0314 51 33.002V57.0019ZM66 57.7729L57 51.065V38.939L66 32.2311V57.7729Z"
                    fill="#14A311"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_238_957">
                    <rect width="72" height="72" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-extrabold text-darkGray mb-4">
              IBKR Setup Guide
            </h2>
            <p className="text-base font-medium text-lightBlue">
              Discover our system benefits, with one tap.
            </p>
            <div className="flex justify-end mt-12">
              <Link
                href="#"
                className="w-full flex items-center justify-center rounded-full transition px-6 py-3 focus:outline-none bg-pigmentGreen border-0 text-white font-medium text-base hover:bg-kellyGreen"
              >
                <span>See quick guide</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
