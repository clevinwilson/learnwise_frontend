import React, { useState } from 'react';
import Profile from './Profile';
import Welcome from './Welcome';
import About from './About';


function AccountSetup() {
    const [showModalSection, setShowModalSection] = useState("welcome");

    //updating the section to be displayed in the modal
    function updateSection(section) {
        setShowModalSection(section);
    }
    
    function loadModalSection() {
        switch (showModalSection) {
            case "welcome":
                return <Welcome updateSection={updateSection} />;
            case "profile":
                return <Profile updateSection={updateSection} />;
            case "about":
                return <About updateSection={updateSection} />;
            default:
                return null;
        }
    }

  return (
      <div>
          <div style={{ backgroundColor: "rgb(136 139 147 / 45%)" }} className="fixed flex    justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="px-6 py-6 lg:px-8">
                        {loadModalSection()}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default AccountSetup