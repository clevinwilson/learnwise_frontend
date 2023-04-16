import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";

const teacherLinks = [
    {
        title: 'Home',
        links: [
            { subTitle: "Dashboard", link: "/teacher/dashboard", icon: <BiHomeAlt size={22} /> },
        ]
    },
    {
        title: 'Course',
        links: [
            {
                subTitle: "Add Course", link: "/teacher/add-course", icon: <AiOutlineFileAdd size={22} /> },
            { subTitle: "List Courses", link: "/teacher/course", icon: <HiOutlineClipboardList size={22} /> }
        ]
    },

    {
        title: "Settings",
        links: [
            { subTitle: "Logout", link: "/teacher/course", icon: <BiLogOut size={22} /> }
        ]
    }



];

export default teacherLinks;