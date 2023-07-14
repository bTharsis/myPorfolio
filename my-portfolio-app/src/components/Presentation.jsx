import NavBar from "./NavBar";
import PCard from "./PCard";

function Presentation() {
    return (
        <>
            <div className="bg-black h-auto w-full grid grid-rows-4">
                <div className=" border-2 h-screen row-start-1 row-end-2 grid grid-rows-6 grid-cols-6">
                    <NavBar />
                    <PCard />
                </div>
            </div>
            {/* 
                <div className="border-2 h-screen row-start-2 row-end-3 grid grid-rows-6 grid-cols-6  text-white">
                    <div className=" row-start-1 row-end-7 col-start-2 col-end-6 grid grid-cols-6 grid-rows-6"></div>
                </div>
                <div className="border-2 h-screen row-start-3 row-end-4 grid grid-rows-6 grid-cols-6  text-white">
                    <div className=" row-start-1 row-end-7 col-start-2 col-end-6 grid grid-cols-6 grid-rows-6"></div>
                </div>
                <div className="border-2 h-screen row-start-4 row-end-5 grid grid-rows-6 grid-cols-6  text-white">
                    <div className="row-start-1 row-end-7 col-start-2 col-end-6 grid grid-cols-6 grid-rows-6"></div>
                </div>
            </div> */}
        </>
    );
}

export default Presentation;
