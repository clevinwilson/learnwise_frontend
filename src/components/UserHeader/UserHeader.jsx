import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authUser } from '../../services/user';
import { setUserDetails, setSignoutState } from "../../Redux/Features/userSlice";


function UserHeader() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.id) {
            authUser().then((response) => {
                if (response.data.status) {
                    dispatch(
                        setUserDetails({
                            name: response.data.user.firstName,
                            id: response.data.user._id,
                            email: response.data.user.email,
                            image: response.data.user.picture,
                            token: response.data.token,
                        })
                    );
                } else {

                    localStorage.removeItem('JwtToken');
                    dispatch(setSignoutState({}));

                }

            })
        }
    }, [])
    const [sidebar, setSidebar] = useState(false);
    const [profileBox, setProfileBox] = useState(false);
    return (
        <div>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <div className="lg:hidden"
                    onClick={() => {
                        setSidebar(!sidebar)
                    }}
                >
                    <button className="navbar-burger flex items-center text-black-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <a className="text-3xl font-bold leading-none" href="#">
                    <img src="../../../public/images/LearnWise-logo.png" width="130px" alt="" />
                </a>
                <div className="flex items-center md:order-2 cursor-pointer">


                    {user.firstName ? <img className="w-9 h-9 rounded-full object-cover" src={user.id ? user.image : 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'} alt="user photo"
                        onClick={() => {
                            setProfileBox(!profileBox);
                        }} />
                        :
                        <div>
                            <Link to={'/login'}>
                            <div className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</div>
                            </Link>

                            <Link to={'/signup'}>
                            <div className="hidden lg:inline-block py-2 px-5 bg-green-400 hover:bg-green-500 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</div>
                            </Link>

                            <div className=' lg:hidden '>


                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>


                    }

                    <div style={profileBox ? { display: 'block' } : { display: 'none' }} className="z-50 absolute right-2 top-12  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        {/* <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div> */}
                        <ul className="py-2" aria-labelledby="user-menu-button">
                        
                            <li>
                                <Link to={'/my-enrollments'}>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Enrollments</p>
                                </Link>
                            </li>
                            <li>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    onClick={() => {
                                        localStorage.removeItem('JwtToken');
                                        dispatch(setSignoutState());
                                        // navigate('/login');
                                    }}

                                >Sign out</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <Link to={'/'}>
                            <p className="text-sm text-gray-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" >Home</p>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <Link to={'/courses'}>
                        <p className="text-sm text-gray-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" >Courses</p>
                        </Link>
                        </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-gray-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" href="#">Community</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-gray-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" href="#">Challenges</a></li>

                </ul>

            </nav>
            <div className={sidebar ? "navbar-menu relative z-50  " : " navbar-menu relative z-50 hidden"}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-4/6 max-w-xs py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <svg className="h-12" alt="logo" viewBox="0 0 100 100">
                                <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z" />
                            </svg>
                        </a>
                        <button className="navbar-close"
                            onClick={() => {
                                setSidebar(!sidebar)
                            }}
                        >
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>

        </div>

    )
}

export default UserHeader