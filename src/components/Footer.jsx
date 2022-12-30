import React from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useSelector } from "react-redux";

function Footer() {
    const [viewSupport, setViewSupport] = useState(false);

    const { home } = useSelector((state) => state.general);

    return (
        <div className="bg-dark">
            <div className="mx-5 lg:max-w-screen-xl lg:mx-auto">
                <div className="md:grid md:grid-cols-5 md:gap-5">
                    {home?.footer?.map((item) => (
                        <div className="py-4 border-text border-b-2 space-y-2 md:border-none">
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setViewSupport(!viewSupport)}
                            >
                                <div className="font-medium">{item.title}</div>
                                <div className="md:hidden text-lg mb-2">
                                    {viewSupport ? (
                                        <AiOutlineUp />
                                    ) : (
                                        <AiOutlineDown />
                                    )}
                                </div>
                            </div>
                            {viewSupport &&
                                item?.navLinks?.map((links) => (
                                    <div className="space-y-2 md:hidden">
                                        <div className="text-sm">
                                            {links?.name}
                                        </div>
                                    </div>
                                ))}
                            {item?.navLinks?.map((links) => (
                                <div className="space-y-2 hidden md:block">
                                    <div className="text-sm">{links?.name}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center py-7 border-text border-b-2 space-x-5">
                    <div className="">
                        <img
                            src={home?.logo}
                            alt="tc"
                            className="h-10 md:h-auto"
                        />
                    </div>
                </div>

                <div className="text-text text-xs py-5 text-center leading-relaxed space-y-2">
                    <div className="">
                        Booking.com is part of Booking Holdings Inc., the world
                        leader in online travel and related services.
                    </div>
                    <div className="">
                        Copyright © 1996–{new Date().getFullYear()}{" "}
                        TravellersChoice.com™. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
