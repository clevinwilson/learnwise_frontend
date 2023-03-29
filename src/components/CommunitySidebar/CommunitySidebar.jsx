import React from 'react';
import { Link, useLocation } from "react-router-dom";
import CommunitySidebarLink from '../../utils/CommunitySidebarLink';

function CommunitySidebar() {


    const groups = [
        {
            label: "Dancers",
            icon: "🕺",
        },
        {
            label: "Guitarists",
            icon: "🎸",
        },
        {
            label: "Artists",
            icon: "🎨",
        },
        {
            label: "Cooks",
            icon: "🍳",
        },
    ];
  return (
      <>
          <ul className="menu hidden sm:flex overflow-y-auto bg-base-100 text-base xl:w-64">
              {CommunitySidebarLink.map((item) => (
                  <li
                      key={item.label}
                      className={
                          item.to === location.pathname
                              ? "bordered"
                              : "border-l-4 border-base-100"
                      }
                  >
                      <Link to={item.to}>
                          {item.icon}
                          <span className="hidden xl:block">{item.label}</span>
                      </Link>
                  </li>
              ))}
              <div className="my-3 border-t border-base-300" />
              <div>
                  <h3 className="hidden px-5 py-2 text-xs font-bold uppercase text-gray-500 xl:block">
                      Groups
                  </h3>
                  {groups.map((item) => (
                      <li key={item.label}>
                          <div className="py-2">
                              <span className="mask mask-circle bg-base-200 p-1 text-xl">
                                  {item.icon}
                              </span>
                              <span className="hidden xl:block">{item.label}</span>
                          </div>
                      </li>
                  ))}
              </div>
          </ul>
      </>
  )
}

export default CommunitySidebar