import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import TypeWriterPCard from "./TypeWriterPCard";

function PCard() {
    return (
        <>
            <div className=" row-start-3 row-end-5 col-start-2 col-end-6">
                <div className=" grid grid-flow-row grid-rows-6 grid-cols-6">
                    <div className="font-serif row-start-1 row-end-3 col-start-2 col-end-6 flex justify-center">
                        <h1 className="text-4xl text-zinc-100 font-bold pt-4 r">
                            Brandon Hernandez Montes
                        </h1>
                    </div>

                    <div className="text-zinc-100 text-4xl row-start-3 row-end-5 col-start-2 col-end-6">
                        <p>
                            <TypeWriterPCard />
                        </p>
                    </div>
                    <div className="row-start-6 row-end-7 col-start-2 col-end-6 text-slate-50">
                        <ul className="flex justify-evenly mt-2">
                            <li className="text-4xl cursor-pointer">
                                <BsGithub />
                            </li>
                            <li className="text-4xl cursor-pointer">
                                <BsLinkedin />
                            </li>
                            <li className="text-4xl cursor-pointer">
                                <BsInstagram />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PCard;
