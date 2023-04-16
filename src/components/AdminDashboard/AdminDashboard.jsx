import React, { useState } from 'react';
import NumberCard from '../Dashboard/NumberCard';
// import Chart from 'react-apexcharts'

function AdminDashboard() {
    const [chart, setChart] = useState({

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
})


  return (
      <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                  <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
              </div>
              
          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">62</span>
                      <span className="block text-gray-500">Students</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">6</span>
                      <span className="block text-gray-500">Teachers</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                  </div>
                  <div>
                      <span className="inline-block text-2xl font-bold">9</span>
                      <span className="inline-block text-xl text-gray-500 font-semibold">14</span>
                      <span className="block text-gray-500">Courses</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">83</span>
                      <span className="block text-gray-500">Community</span>
                  </div>
              </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">The number of applied and left students per month</div>
                  <div className="p-4 flex-grow">
                      {/* <Chart options={chart.options} series={chart.series} type="area" height={350} /> */}
                  </div>
              </div>
              <NumberCard/>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">139</span>
                      <span className="block text-gray-500">Hours spent on lections</span>
                  </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                  <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                      <span>Students by average mark</span>
                      <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                          Descending
                          <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                      </button>
                      {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
                  </div>
                  <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
                      <ul className="p-6 space-y-6">
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                              </div>
                              <span className="text-gray-600">Annette Watson</span>
                              <span className="ml-auto font-semibold">9.3</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture" />
                              </div>
                              <span className="text-gray-600">Calvin Steward</span>
                              <span className="ml-auto font-semibold">8.9</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture" />
                              </div>
                              <span className="text-gray-600">Ralph Richards</span>
                              <span className="ml-auto font-semibold">8.7</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture" />
                              </div>
                              <span className="text-gray-600">Bernard Murphy</span>
                              <span className="ml-auto font-semibold">8.2</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture" />
                              </div>
                              <span className="text-gray-600">Arlene Robertson</span>
                              <span className="ml-auto font-semibold">8.2</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture" />
                              </div>
                              <span className="text-gray-600">Jane Lane</span>
                              <span className="ml-auto font-semibold">8.1</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture" />
                              </div>
                              <span className="text-gray-600">Pat Mckinney</span>
                              <span className="ml-auto font-semibold">7.9</span>
                          </li>
                          <li className="flex items-center">
                              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture" />
                              </div>
                              <span className="text-gray-600">Norman Walters</span>
                              <span className="ml-auto font-semibold">7.7</span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
                  <div className="p-4 flex-grow">
                      <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                  </div>
              </div>
          </section>
        
      </main>
  )
}

export default AdminDashboard