import { BiHomeAlt, BiGroup } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { CgCommunity } from "react-icons/cg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const adminLinks = [
    {
        title: 'Home',
        links: [
            { subTitle: "Dashboard", link: "/admin/dashboard", icon: <BiHomeAlt size={22} />},
        ]
    },
    {
        title: 'Teacher',
        links: [
            { subTitle: "Add Teacher", link: "/admin/add-teacher", icon: <FaChalkboardTeacher size={22}/> },
            { subTitle: "List Teachers", link: "/admin/teacher", icon: <HiOutlineClipboardList size={22} />}
        ]
    },
    {
        title: 'Course',
        links: [
            { subTitle: "Courses", link: "/admin/course", icon: <HiOutlineClipboardList size={22} /> }
        ]
    },
    {
        title: 'Community',
        links: [
            { subTitle: "Community", link: "/admin/community", icon: <CgCommunity size={22} /> }
        ]
    },
    {
        title: 'Groups',
        links: [
            { subTitle: "Groups", link: "/admin/group", icon: <BiGroup size={22} /> }
        ]
    },
    {
        title: 'User',
        links: [
            { subTitle: "Users", link: "/admin/user", icon: <AiOutlineUsergroupAdd size={22} /> }
        ]
    }


];

export default adminLinks;