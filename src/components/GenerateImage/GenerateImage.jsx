"use client"

import React from 'react';

const GenerateImage = () => {
    return (
        <div className="py-10 flex flex-col gap-10 relative container mx-auto">
            {/* Heading  */}
            <div className="flex flex-col gap-5 px-5">
                <p className="text-[#6600ff] font-semibold text-center">How it Works</p>
                <h2 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-4 text-center">How to Generate Image</h2>
            </div>
            {/* Card Section */}
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
                {/* Card - 1 */}
                <div className="bg-gray-200  flex flex-col gap-5 py-4 px-5 rounded-lg">
                    <div className="p-5 rounded-md flex flex-col gap-3 bg-white z-10">
                        <p className="text-gray-800 bg-[#e4d7ff] px-1">AI Content Generator Tool creates content</p>
                        <p className="text-gray-800 bg-[#e4d7ff] px-1">for a wide range professional needs. From</p>
                        <p className="text-gray-800 bg-[#e4d7ff] px-1">headlines to entire articles</p>
                    </div>
                    <div>
                        <h2 className="text-center font-bold text-gray-950 hover:text-[#6600ff] text-2xl">Type the Prompt</h2>
                        <p className="text-center ">With our AI your the can makes the never before seen images fores New</p>
                    </div>
                </div>
                {/* Card - 2 */}
                <div className="bg-gray-200  flex flex-col gap-5 py-4 px-5 rounded-lg">
                    <div className="p-5 rounded-md flex flex-col gap-3 bg-white z-10">
                        <div className="relative">
                            <p className="border-2 border-[#6600ff] p-5 rounded-md font-bold text-[#6600ff] text-center">Generate Image</p>
                            <img className="absolute top-[25px] right-[3px] md:right-10 lg:right-16" src="/assets/images/icon-1.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center font-bold text-gray-950 hover:text-[#6600ff] text-2xl">Click on Generate</h2>
                        <p className="text-center ">With our AI your the can makes the never before seen images fores New</p>
                    </div>
                </div>
                {/* Card - 1 */}
                <div className="bg-gray-200  flex flex-col gap-5 py-4 px-5 rounded-lg">
                    <div className="p-5 rounded-md flex flex-col gap-3 bg-white z-10">
                        <div className="relative">
                            <img className="rounded-md w-full" src="/assets/images/working-1.jpg" alt="" />
                            <div className="absolute top-0 left-0 border w-full h-full flex items-center justify-center overflow-hidden p-1">
                                <img className="h-8 w-8 bg-[#6600ff] rounded-full p-2 cursor-pointer" src="/assets/images/download.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center font-bold text-gray-950 hover:text-[#6600ff] text-2xl">Download Image</h2>
                        <p className="text-center ">With our AI your the can makes the never before seen images fores New</p>
                    </div>
                </div>
            </div>
            {/* Doted Image for bg */}
            <img className="absolute bottom-5 -left-28" src="/assets/images/shape/shape-1.png" alt="" />
        </div>
    );
};

export default GenerateImage;