import React, { Fragment, useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';
import NumberCard from '../../components/Dashboard/NumberCard';
import { getDashboardDetails } from '../../services/adminApi';
import { useSelector } from 'react-redux';
import { MdGroup } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { CgCommunity } from "react-icons/cg";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement,LineElement,ArcElement } from "chart.js";
import { Line,Doughnut } from "react-chartjs-2";

function DashboardPage() {
  const admin = useSelector((state) => state.admin)
  const [dashboardDetails, setDashboardDetails] = useState();
  useEffect(() => {
    getDashboardDetails()
      .then((response) => {
        console.log(response.data);
        setDashboardDetails(response.data)
      })
  }, [admin])

  //chart js
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement, ArcElement)

  //line chart data
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Number of users joined based on month',
        data: dashboardDetails?.studentJoinedDetails,
        backgroundColor: 'rgb(81,118,224)',
        borderColor: 'rgb(81,118,224)',
        borderWidth: 1,
      },
    ],
  };

  //pie chart data
  const PieChartData = {
    labels: ['Courses', 'Orders'],
    datasets: [
      {
        label: '',
        data: [dashboardDetails?.courseCount, dashboardDetails?.orderCount],
        backgroundColor: ["rgb(54,185,204)","rgb(28,200,138)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='relative '>
      <Sidebar admin={true} />
      <Header role={'admin'} />
      <div className='admin-page p-3 ' >
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-medium mb-2">Dashboard</h1>
            </div>

          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <NumberCard icon={<MdGroup />} data={dashboardDetails?.studentCount} color={"text-purple-600 bg-purple-100"} title={'Students'} />

            <NumberCard icon={<FaChalkboardTeacher />} data={dashboardDetails?.teacherCount} color={"text-green-600 bg-green-100"} title={'Teachers'} />

            <NumberCard icon={<GiBookshelf />} data={dashboardDetails?.courseCount} color={"text-blue-600 bg-blue-100"} title={'Courses'} />

            <NumberCard icon={<CgCommunity />} data={dashboardDetails?.communityCount} color={"text-red-600 bg-red-100"} title={'Community'} />

          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Users</div>
              <div className="p-4 flex-grow">
                <Line data={lineChartData} />
              </div>
            </div>
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Orders</div>
              <div className="p-4 flex-grow">
                <Doughnut data={PieChartData} />
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
  )
}

export default DashboardPage