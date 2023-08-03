import NavBar from "./NavBar";
import PCard from "./PCard";

function Presentation() {
    return (
        <>
            <div className="bg-black h-auto w-full grid grid-rows-4">
                <div className="h-screen row-start-1 row-end-2 grid grid-rows-6 grid-cols-6">
                    <NavBar />
                    <PCard />
                </div>
            </div>
        </>
    );
}

export default Presentation;
