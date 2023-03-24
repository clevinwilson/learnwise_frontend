import React, { useEffect, useState } from 'react';
import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../axios/axios';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../Redux/Features/userSlice";
import { setAdminDetails } from '../../Redux/Features/adminSlice';
import { setTeacherDetails } from '../../Redux/Features/teacherSlice';
import { useGoogleLogin } from '@react-oauth/google';
import { authTeacher } from '../../services/teacherApi';
import { authUser } from '../../services/user';
import { authAdmin } from '../../services/adminApi'



function Login(props) {



    const { teacher } = useSelector((state) => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {

        if (props.admin) {
            authAdmin().then((response) => {
                if (response.data.status) navigate('/admin/dashboard')
            })
        } else if (props.teacher) {
            authTeacher().then((response) => {
                if (response.data.status) navigate('/teacher/add-course')
            })
        } else {
            authUser().then((response) => {
                if (response.data.status) navigate('/')
            })
        }

    }, [])

    const generateError = (err) => {
        toast.error(err, {
            position: "top-center",
        });
    };


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            try {
                console.log(codeResponse);
                axiosInstance.post("/login/google", { ...codeResponse }).then((response) => {
                    localStorage.setItem('JwtToken', response.data.token);

                    dispatch(
                        setUserDetails({
                            name: response.data.user.firstName,
                            id: response.data.user._id,
                            email: response.data.user.email,
                            image: response.data.user.picture,
                            token: response.data.token,
                        })
                    );
                    navigate("/");

                }).catch((err) => { generateError("Something went wrong please reload the page") })
            } catch (err) {
                generateError("Something went wrong please reload the page")
            }
        },
        onError: (error) => {
            console.log('Login Failed:', error);
            generateError("Login Failed")
        }
    });


    const googleAuth = () => {

        // const googleLoginURL = "http://localhost:3000/login/google"

        // window.open(
        //     googleLoginURL,
        //     "_blank",
        //     "width=500,height=600"
        // )


    }



    const handleSubmit = async () => {
        try {
            const { data } = await axiosInstance.post(
                "/login",
                {
                    ...loginData,
                }
            );
            if (data) {
                if (data.login) {
                    localStorage.setItem('JwtToken', data.token);

                    dispatch(
                        setUserDetails({
                            name: data.user.firstName,
                            id: data.user._id,
                            email: data.user.email,
                            token: data.token,
                        })
                    );
                    navigate("/");
                } else {
                    generateError(data.message)
                }
            } else {
                console.log(data);
                generateError("Error")

            }

        } catch (err) {
            generateError("something went wrong in server side");
        }
    }

    const handleAdminSubmit = async () => {
        try {
            const { data } = await axiosInstance.post(
                "/admin/login",
                {
                    ...loginData,
                }
            );
            if (data.login) {
                localStorage.setItem('adminJwtToken', data.token);
                dispatch(
                    setAdminDetails({
                        id: data.admin._id,
                        login: data.login,
                        token: data.token
                    })
                )
                navigate('/admin/dashboard')
            } else {
                generateError(data.message)
            }
        } catch (err) {
            generateError(err)

        }
    }

    const handelTeacherSubmit = async () => {
        try {
            const { data } = await axiosInstance.post(
                "/teacher/login",
                {
                    ...loginData
                }
            );

            if (data.login) {
                localStorage.setItem('teacherJwtToken', data.token);
                dispatch(
                    setTeacherDetails({
                        id: data.teacher._id,
                        email: data.teacher.email,
                        firstName: data.teacher.firstName,
                        lastName: data.teacher.lastName,
                        login: data.login,
                        token: data.token
                    })
                )
                navigate('/teacher/dashboard')
                console.log(data);
            } else {
                generateError(data.message)
            }

        } catch (err) {
            generateError("something went wrong in server side")
        }
    }
    return (
        <section className='section-box'>
            <form action="">
                <div className='grid-cols-1  form-box p-10'>
                    <h2 className='text-center text-2xl font-medium pb-8'>{props.admin ? "Admin" : props.teacher ? "Teacher" : " "} Login</h2>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                            id="email"
                            style={{ color: "black" }}
                            name='email'
                            onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}

                            placeholder="Email address" />
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                            id="password"
                            style={{ color: "black" }}
                            name='password'
                            onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}

                            placeholder="Password" />
                    </div>

                    <div className="text-center ">
                        <button className='form-btn mt-2 font-medium rounded'
                            onClick={props.admin ? handleAdminSubmit : props.teacher ? handelTeacherSubmit : handleSubmit}
                            type="button">
                            Login
                        </button>



                        {props.admin || props.teacher ?
                            ""
                            :
                            <div>
                                <div className='flex justify-center success-box-border rounded p-2 mt-8'
                                    onClick={login}
                                >
                                    <img src="../public/images/Screenshot 2023-03-01 111718.png" alt="" />
                                    <p className='ml-4'>Google</p>
                                </div>

                                <Link to={'/signup'}>
                                    <p className="mt-4 mb-0 pt-1 text-sm ">
                                        Don't have an account ?
                                        <a
                                            href="#!"
                                            className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        > Register</a>
                                    </p>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </form>
            <ToastContainer />
        </section>
    )
}

export default Login