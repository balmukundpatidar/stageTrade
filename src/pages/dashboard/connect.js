"use client";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioList, getTotalBalance } from "@/actions/dashbord";
import Portfolio from "@/components/dashboard/portfolio";
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

const Connect = () => {
  // const dispatch = useDispatch();
  // const portfolioData = useSelector((state) => state.portfolioReducer).portfolioData;
  // const totalBalanceData = useSelector((state) => state.connectReducer).totalBalance;

  const portfolioData =[
      {
        "id": 1,
        "title": "Strategy X",
        "content": "Lorem ipsum"
      },
      {
        "id": 2,
        "title": "Strategy X",
        "content": "Lorem ipsum"
      },
      {
        "id": 3,
        "title": "Strategy X",
        "content": "Lorem ipsum"
      },
      {
        "id": 4,
        "title": "Strategy X",
        "content": "Lorem ipsum"
      },
      {
        "id": 5,
        "title": "Strategy X",
        "content": "Lorem ipsum"
      },
      {
        "id": 6,
        "title": "Strategy X",
        "content": "Lorem ipsum"
      }


    ]





  const totalBalanceData = {
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

        "dec": 26
    

  }



  const [graphData, setGraphData] = useState([]);
  const [labels, setLabels] = useState([]);



  // useEffect(() => {
  //   dispatch(getPortfolioList());
  //   dispatch(getTotalBalance());
  // }, []);


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
        tension: 0.50,
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
      totalBalanceData
        ? Object.keys(totalBalanceData).map(
          (data) => data
        )
        : ""
    );

    setGraphData(totalBalanceData
      ? Object.values(totalBalanceData).map(
        (data) => data
      )
      : "")
  }, []);


  const balanceChart = {
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
          gradient.addColorStop(0, "rgba(129, 209, 59, 0.07)");
          gradient.addColorStop(1, "rgba(129, 209, 59, 0.07)");
          return gradient;
        },
        borderColor: "rgba(129, 209, 59, 1)",
        borderWidth: 3,
      },
    ],
  };

  return (
    <Layout>
      <div className="flex flex-col justify-between gap-4 mt-4 xl:flex-row">
        <div className="space-y-4 w-full xl:w-8/12">
          <div className="p-6 lg:p-8 bg-white rounded-20">
            <div className="flex justify-between ">
              <div>
                <p className="text-sm font-medium text-lightBlue">
                  Tradery Connect
                </p>
                <h3 className="text-md md:text-lg font-extrabold text-darkGray">
                  Total Balance
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
            <div>
              <Line options={options} data={balanceChart} width={'100%'} height={'500px'} />
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-20 w-full xl:w-4/12">
          <div className="p-6 lg:p-8 bg-white rounded-20">
            <h2 className="text-md md:text-lg font-extrabold text-darkGray mb-10">
              Portfolio
            </h2>
            <Portfolio data={portfolioData} />
            <div className="flex justify-end mt-10">
              <Link
                href="#"
                className="flex gap-x-2 text-base font-extrabold transition text-pigmentGreen hover:text-kellyGreen"
              >
                <span>View all Strategies</span>
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
        </div>
      </div>
    </Layout>
  );
};

export default Connect;
