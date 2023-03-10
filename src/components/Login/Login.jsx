import React,{useState} from 'react';
import './Login.scss';
import {useNavigate,Link} from 'react-router-dom';
import axiosInstance from '../../axios/axios';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../Redux/Features/userSlice";



function Login(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const generateError = (err) => {
        toast.error(err, {
            position: "top-center",
        });
    };

    const handleSubmit=async()=>{
        try{
            const { data } = await axiosInstance.post(
                "/login",
                {
                    ...loginData,
                }
            );

            if(data){
                if (data.created){
                    console.log(data);
                    dispatch(
                        setUserDetails({
                            name: data.user.firstName,
                            id: data.user._id,
                            email: data.user.email,
                            token: data.token,
                        })
                    );
                    navigate("/");
                }else{
                    generateError(data.message)
                }
            }else{
                console.log(data);
            }

        }catch(err){
            alert(err)
        }
    }

    const handleAdminSubmit=async()=>{
        try{
            const { data } = await axiosInstance.post(
                "/admin/login",
                {
                    ...loginData,
                }
            );

            console.log(data);
        }catch(err){
            alert(err)
        }
    }
  return (
      <section className='section-box'>
          <form action="">
              <div className='grid-cols-1  form-box p-10'>
                  <h2 className='text-center text-2xl font-medium pb-8'>{props.admin ? "Admin" : " "} Login</h2>

                  <div class="relative mb-6" data-te-input-wrapper-init>
                      <input
                          type="email"
                          className="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                          id="exampleFormControlInput2"
                          style={{ color: "black" }}
                          name='email'
                          onChange={(e) => { setLoginData({...loginData,email:e.target.value})}}

                          placeholder="Email address" />
                  </div>

                  <div class="relative mb-6" data-te-input-wrapper-init>
                      <input
                          type="password"
                          className="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                          id="exampleFormControlInput2"
                          style={{ color: "black" }}
                          name='password'
                          onChange={(e) => { setLoginData({...loginData,password:e.target.value}) }}

                          placeholder="Password" />
                  </div>
                 
                  <div class="text-center ">
                      <button className='form-btn mt-2 font-medium rounded'
                          onClick={props.admin ? handleAdminSubmit : handleSubmit}
                          type="button">
                          Login
                      </button>

                     

                      {props.admin?
                      ""
                      :
                      <div>
                              <div className='flex justify-center success-box-border rounded p-2 mt-8'>
                                  <img src="../public/images/Screenshot 2023-03-01 111718.png" alt="" />
                                  <p className='ml-4'>Google</p>
                              </div>
                              <Link to={'/signup'}>
                                  <p class="mt-4 mb-0 pt-1 text-sm ">
                                      Don't have an account ?
                                      <a
                                          href="#!"
                                          class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
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