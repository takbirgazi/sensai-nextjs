"use client"

const loading = () => {
  return (
    <div className="flex fixed bg-gray-950 top-0 bottom-0 left-0 right-0 items-center justify-center">
      <div className="absolute">
        <div className="border-2 border-white border-t-[#43ffff80] animate-spin rounded-full h-[150px] w-[150px] mx-auto mb-[45px]"></div>
      </div>
    </div>
  );
};

export default loading;