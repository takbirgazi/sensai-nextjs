"use client"

const ClientSection = () => {
    return (
        <div className="w-11/12 mx-auto py-10 md:py-14 lg:py-16 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-between items-center">
                <img className="grayscale hover:filter-none duration-300 transition-colors" src="assets/images/client/clients-1.png" alt="clients-1" />
                <img className="grayscale hover:filter-none duration-300 transition-colors" src="assets/images/client/clients-2.png" alt="clients-2" />
                <img className="grayscale hover:filter-none duration-300 transition-colors" src="assets/images/client/clients-3.png" alt="clients-3" />
                <img className="grayscale hover:filter-none duration-300 transition-colors" src="assets/images/client/clients-4.png" alt="clients-4" />
                <img className="grayscale hover:filter-none duration-300 transition-colors" src="assets/images/client/clients-5.png" alt="clients-5" />

            </div>
        </div>
    );
};

export default ClientSection;