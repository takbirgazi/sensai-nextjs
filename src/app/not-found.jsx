import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className="bg-[#60f] min-h-screen flex flex-col items-center justify-center gap-10">
            <div>
                <img src="assets/images/error-1.png" alt="Error Page" />
            </div>
            <div className="py-10">
                <p className="font-bold text-center text-5xl text-gray-100">Oops! That Page Can Not be Found.</p>
                <div className="flex items-center justify-center py-5">
                    <Link href="/" className="relative inline-block overflow-hidden align-middle text-center text-white font-medium text-[18px] leading-[30px] px-[40px] py-[15px] rounded-[55px] z-10 transition-all duration-500 ease-in-out bg-gray-950 hover:bg-gray-100 hover:text-[#ff4b22]" >Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;