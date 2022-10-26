import Link from "next/link";
import React from "react";

const TopAdsBanner = ({ promoCode, promoValue, buttonSlug }) => {
    return (
        <div className="top-header">
            <div className="bg"></div>
            <div
                className="top-close font-bold text-white cursor-pointer hover:text-orange-500"
                onClick={() => setShowTop(false)}
            >
                X
            </div>
            <div className="content">
                <div className="container mx-auto px-3 py-2">
                    <div className="flex justify-between items-center">
                        <div className="hidden sm:block">
                            <div className="flex items-center">
                                <span className="text-6xl font-bold mr-3 text-orange-400">
                                    SALE
                                </span>

                                <div className="flex flex-col items-center justify-center">
                                    <p className="m-0 text-xl font-black ">
                                        {promoValue}
                                    </p>
                                    <p className="m-0 text-xl font-black">
                                        OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="uppercase text-center font-bold ">
                            <p className="m-0 border-double border-b-4  ">
                                Special Promo Code
                            </p>

                            <p className="m-0 text-orange-400">{promoCode}</p>
                        </div>
                        <div className="mr-4 xl:mr-0 ">
                            <Link href={buttonSlug} passHref>
                                <button className="bg-orange-500 text-white font-medium px-3 py-1 sm:py-2 text-xs sm:text-base rounded-full hover:bg-orange-400">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopAdsBanner;
