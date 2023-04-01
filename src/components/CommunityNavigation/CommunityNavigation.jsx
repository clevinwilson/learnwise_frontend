import React from 'react';
import {  MdOutlineGroups,} from "react-icons/md";
import { useLocation,Link } from 'react-router-dom';
import CommunitySidebarLink from '../../utils/CommunitySidebarLink';

function CommunityNavigation() {
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
        <div className="fixed flex sm:hidden bottom-0 w-full z-50 border-t border-base-300 bg-base-100">
            <ul className="menu rounded-box menu-horizontal w-full justify-around bg-base-100">
                {CommunitySidebarLink.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={item.to}
                            className={item.to === location.pathname ? "text-primary" : ""}
                        >
                            {item.icon}
                        </Link>
                    </li>
                ))}
                <li tabIndex="0">
                    <div className="dropdown dropdown-end dropdown-top p-0">
                        <label tabIndex="0" className="px-4 py-3">
                            <MdOutlineGroups size={24} />
                        </label>
                        <ul
                            tabIndex="0"
                            className="dropdown-content menu rounded-box h-60 w-52 overflow-y-auto bg-base-100 p-2 shadow"
                            style={{ bottom: "50px" }}
                        >
                            {groups.map((item) => (
                                <li key={item.label}>
                                    <div className="py-2">
                                        <span className="mask mask-circle bg-base-200 p-1 text-xl">
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CommunityNavigation