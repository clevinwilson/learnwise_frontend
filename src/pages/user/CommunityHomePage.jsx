import React from 'react';
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'
import UserHeader from '../../components/UserHeader/UserHeader'
import Community from '../../components/Community/Community';

function CommunityHomePage() {
    const groupsIcon = ["🕺", "🎨", "🍳", "🎸"];
  return (
      <>
          <>
              <UserHeader />
              <div className="flex h-screen">
                  <div className="sticky top-0 self-start">
                      <CommunitySidebar />
                  </div>
                  <div className="w-full border-x border-base-300">
                      <div className="bg-base-100">
                          <img
                              src={"https://clevinwilson.github.io/pensil-ui/assets/img/JavaScript-code_2.jpg"}
                              className="aspect-[4/1] w-full object-cover"
                              alt=""
                          />
                          <div className="flex gap-3">
                              <div className="avatar-group mt-[-40px] ml-5 -space-x-12">
                                  {groupsIcon.map((icon) => (
                                      <div key={icon} className="avatar">
                                          <div className="bg-base-200 p-3 text-4xl leading-tight">
                                              {icon}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <div className="mt-1 text-sm">Created in May, 2021</div>
                          </div>
                          <div className="mt-2 flex flex-col gap-3 px-5 sm:px-8">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                  <div>
                                      <div className="text-2xl font-bold">
                                          {"Java Script"}
                                      </div>
                                      <div className="text-sm">
                                          10K members &nbsp; ● &nbsp; 20 Groups
                                      </div>
                                  </div>
                                  <button className="btn btn-primary">Join</button>
                              </div>
                              <p>{"We are the one who appreciate every talent. Join world's one of the most talented community around the world. Learn, collabrate, teach & grow!"}</p>
                          </div>

                          <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                              <ul class="flex flex-wrap -mb-px">
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                                  </li>
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
                                  </li>
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                                  </li>
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
                                  </li>
                                  <li>
                                      <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                                  </li>
                              </ul>
                          </div>

                          {/* <div className="mt-3 px-5 py-5 sm:px-8">{loadTab()}</div> */}
                      </div>
                  </div>
              </div>
              <CommunityNavigation />
          </>
          
          {/* <ImageCropModal /> */}
      </>
  )
}

export default CommunityHomePage