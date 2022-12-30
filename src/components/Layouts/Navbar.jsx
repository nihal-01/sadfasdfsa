import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import RegisterMobileCard from "../Authentication/RegisterMobileCard";
import LoginMobileCard from "../Authentication/LoginMobileCard";
import { getHome } from "../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
    const [viewRegister, setViewRegister] = useState(false);
    const [viewlogin, setViewlogin] = useState(false);
    const [viewRegisterMobile, setViewRegisterMobile] = useState(false);
    const [viewloginMobile, setViewloginMobile] = useState(false);
    const [viewCurrency, setViewCurrency] = useState(false);
    const [viewLanguage, setViewLanguage] = useState(false);
    const [viewHelpline, setViewHelpline] = useState(false);
    

    const dispatch = useDispatch();
    const { home } = useSelector((state) => state.general);
    const { isLoggedIn } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getHome());
    }, [dispatch]);

    return (
        <>
            <div className="block bg-[#002366]">
                <div className="lg:max-w-screen-xl lg:mx-auto">
                    <div className="flex justify-between py-2">
                        <span className="flex text-sm relative">
                            <div className="flex items-center text-soft space-x-2 md:space-x-5 border-r  px-3 md:px-5">
                                <span className="text-sm">
                                    <FaFacebookF />
                                </span>
                                <span className=" lg:text-lg">
                                    <FaInstagram />
                                </span>
                                <span className="text-lg lg:text-xl">
                                    <FaGooglePlusG />
                                </span>
                            </div>
                            <div
                                className="text-soft flex space-x-1 items-center px-3 text-xs lg:text-sm whitespace-nowrap cursor-pointer"
                                onClick={() => setViewHelpline(!viewHelpline)}
                            >
                                <span className="text-xs">Help line</span>
                                <span className="text-sm">
                                    {viewHelpline ? (
                                        <AiOutlineUp />
                                    ) : (
                                        <AiOutlineDown />
                                    )}
                                </span>
                            </div>
                            {/* absolute div */}
                            {viewHelpline && (
                                <div className="absolute top-7 md:top-8 left-14 md:left-24 bg-[#002366]">
                                    {/* {helplines?.map((num) => ( */}
                                    <div className="mx-7 space-y-3 py-2">
                                        <div className="text-soft ">
                                            <a href={`tel:+915555555`}>
                                                +916555555
                                            </a>
                                        </div>
                                        <div className="text-soft ">
                                            <a href={`tel:+91$5555555`}>
                                                +9155555
                                            </a>
                                        </div>
                                    </div>
                                    {/* ))} */}
                                </div>
                            )}
                            {/* absolute div */}
                        </span>
                        <span className="flex text-sm">
                            <div className="flex px-5 space-x-2 md:space-x-5 text-soft items-center font-light">
                                <div className="cursor-pointer whitespace-nowrap text-xs lg:text-sm">
                                    <a href="https://app.mytcb2b.com/#/login">
                                        B2B Login
                                    </a>
                                </div>
                                <div
                                    className="flex space-x-1 items-center cursor-pointer relative"
                                    onClick={() =>
                                        setViewCurrency(!viewCurrency)
                                    }
                                >
                                    <span className="text-xs">AED</span>
                                    <span className="text-sm">
                                        {viewCurrency ? (
                                            <AiOutlineUp />
                                        ) : (
                                            <AiOutlineDown />
                                        )}
                                    </span>
                                    {/* absolute modal */}
                                    {viewCurrency && (
                                        <div className="absolute z-20 top-7 md:top-8 -left-8 bg-[#002366]">
                                            <div className="mx-7 space-y-3 py-2">
                                                <div className="">EUR</div>
                                                <div className="">INR</div>
                                                <div className="">USD</div>
                                            </div>
                                        </div>
                                    )}
                                    {/* absolute modal */}
                                </div>
                                <div
                                    className="flex space-x-2 items-center cursor-pointer"
                                    onClick={() =>
                                        setViewLanguage(!viewLanguage)
                                    }
                                >
                                    <span className="text-xs cursor-pointer">
                                        English
                                    </span>
                                    <span className="text-sm">
                                        {viewLanguage ? (
                                            <AiOutlineUp />
                                        ) : (
                                            <AiOutlineDown />
                                        )}
                                    </span>
                                    {/* absolute modal */}
                                    {viewLanguage && (
                                        <div className="absolute top-9 md:top-10 z-20 right-0 lg:right-auto bg-[#002366]">
                                            <div className="mx-7 space-y-3 py-2">
                                                <div className="">Arab</div>
                                                <div className="">French</div>
                                                <div className="">Hindi</div>
                                            </div>
                                        </div>
                                    )}
                                    {/* absolute modal */}
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-soft">
                <div className=" py-1 px-3 lg:max-w-screen-xl lg:mx-auto">
                    <div className="flex justify-between">
                        <Link to="/">
                            {/* {logo?.map((item) => ( */}
                            <div className="">
                                <img
                                    className="h-8 md:h-14"
                                    src={"http://127.0.0.1:5000" + home?.logo}
                                    alt={"img"}
                                />
                            </div>
                            {/* ))} */}
                            {/* <div className=''>
                <img className='h-8 md:h-14' src={travellersChoice} alt='tc' />
              </div> */}
                        </Link>
                        <div className="flex space-x-5">
                            {/* <span className='lg:hidden flex items-center text-stone-600 text-2xl '><CgProfile /></span> */}
                            {/* <span className='lg:hidden flex items-center text-stone-600 text-2xl' onClick={() => setViewMenu(!viewMenu)}><AiOutlineMenu /></span> */}
                            {/* <span className='hidden lg:flex items-center text-stone-600 text-2xl'><AiOutlineQuestionCircle /> </span> */}
                            {!isLoggedIn ? (
                                <>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3 py-2 lg:my-3 rounded-lg shadow-sm cursor-pointer"
                                        onClick={() =>
                                            setViewRegister(!viewRegister)
                                        }
                                    >
                                        Register{" "}
                                    </span>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3 py-2 lg:my-3 rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => setViewlogin(!viewlogin)}
                                    >
                                        Sign in
                                    </span>
                                </>
                            ) : (
                                <div>
                                    <div>Logged In</div>
                                </div>
                            )}
                            {/* <span
                                className="lg:hidden flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3   rounded-lg shadow-sm cursor-pointer"
                                onClick={() =>
                                    setViewRegisterMobile(!viewRegisterMobile)
                                }
                            >
                                Register{" "}
                            </span>
                            <span
                                className="lg:hidden flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3   rounded-lg shadow-sm cursor-pointer"
                                onClick={() =>
                                    setViewloginMobile(!viewloginMobile)
                                }
                            >
                                Sign in
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
            <>
                <div>
                    <RegisterMobileCard
                        viewRegisterMobile={viewRegisterMobile}
                        setViewRegisterMobile={setViewRegisterMobile}
                    />
                    {viewRegisterMobile && (
                        <div
                            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
                            onClick={() =>
                                setViewRegisterMobile(!viewRegisterMobile)
                            }
                        ></div>
                    )}
                </div>

                <div>
                    <LoginMobileCard
                        viewloginMobile={viewloginMobile}
                        setViewloginMobile={setViewloginMobile}
                    />
                    {viewloginMobile && (
                        <div
                            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
                            onClick={() => setViewloginMobile(!viewloginMobile)}
                        ></div>
                    )}
                </div>

                {viewRegister && (
                    <div
                        className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20  duration-200 ease-in transition-all `}
                    >
                        <div
                            className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`}
                            onClick={() => setViewRegister(!viewRegister)}
                        >
                            <AiOutlineClose />
                        </div>
                        <Register
                            setViewRegister={setViewRegister}
                            setViewlogin={setViewlogin}
                            viewRegister={viewRegister}
                            viewlogin={viewlogin}
                        />
                    </div>
                )}
                {viewlogin && (
                    <div
                        className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20  duration-200 ease-in transition-all `}
                    >
                        <div
                            className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`}
                            onClick={() => setViewlogin(!viewlogin)}
                        >
                            <AiOutlineClose />
                        </div>
                        <Login
                            setViewRegister={setViewRegister}
                            setViewlogin={setViewlogin}
                            viewRegister={viewRegister}
                            viewlogin={viewlogin}
                        />
                    </div>
                )}
            </>
        </>
    );
}

export default Navbar;
