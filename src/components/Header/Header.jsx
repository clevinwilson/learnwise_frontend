import React, { useEffect, useState } from 'react';
import './AdminHeader.scss';
import { setSidebar } from '../../Redux/Features/adminSidebarToogle';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import AccountSetup from '../TeacherAccountSetupModal/AccountSetup';
import { setTeacherDetails } from '../../Redux/Features/teacherSlice';
import { authTeacher } from '../../services/teacherApi';

function AdminHeader({ role }) {
    const sidebarToogle = useSelector((state) => state.adminSidebarToogle)
    const teacher = useSelector((state) => state.teacher)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        if (role == 'teacher' && !teacher.id) {
            authTeacher()
            .then((response)=>{
                dispatch(
                    setTeacherDetails({
                        id: response.data.teacher._id,
                        email: response.data.teacher.email,
                        picture: response.data.teacher.picture,
                        about: response.data.teacher.about,
                        firstName: response.data.teacher.firstName,
                        lastName: response.data.teacher.lastName,
                        accountSetup: response.data.teacher.accountSetup,
                        login: true,
                        token: response.data.token,
                    })
                );
            })
            .catch((error)=>{
                localStorage.removeItem('teacherJwtToken');
                navigate('/teacher')
            })
        }
    }, [])

    return (
        <div className='p-3'>

            {/* account set modal for teacher */}
            {role == 'teacher' && teacher.id && !teacher.accountSetup ?
                <AccountSetup />
                : null}


            <nav style={{ border: "1px solid #e5e7eb", position: 'fixed', width: '100%', top: '0', left: '0', right: '0' }} className="relative  z-50 px-4 py-4 flex justify-between items-center bg-white">
                <a className="hidden md:flex text-3xl font-bold leading-none" href="#">
                    <h1 className='text-violet-800 text-2xl'>LearnWise</h1>
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-violet-700 p-3"
                        onClick={() => { dispatch(setSidebar(!sidebarToogle.sidebar)) }}
                    >
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>


                <div className="  items-center md:order-2 cursor-pointer">
                    {role == 'teacher' ?
                        <img onClick={() => { setShowDiv(!showDiv) }} className="w-9 h-9 rounded-full object-cover  " src={import.meta.env.VITE_SERVER_URL + teacher.picture} alt="user photo"
                        /> : <img onClick={() => { setShowDiv(!showDiv) }} className="w-9 h-9 rounded-full object-cover  " src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' alt="user photo"
                        />}

                    <div style={true ? { display: 'block' } : { display: 'none' }} className="z-50 absolute right-2 top-12  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        {showDiv ?
                            <>
                                {role == 'teacher' ?
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to={'/teacher/change-password'}>
                                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Change Password</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                onClick={() => {
                                                    localStorage.removeItem('teacherJwtToken');
                                                    dispatch(
                                                        setTeacherDetails({})
                                                    );
                                                    navigate('/teacher')
                                                }}
                                            >Logout</p>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                onClick={() => {
                                                    localStorage.removeItem('adminJwtToken');
                                                    navigate('/admin')
                                                }}
                                            >Logout</p>
                                        </li>
                                    </ul>}
                            </>
                            : ""}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader