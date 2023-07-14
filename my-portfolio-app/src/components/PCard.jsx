import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
function PCard() {
    return (
        <>
            <div className=" row-start-3 row-end-5 col-start-2 col-end-6">
                <div className=" border-2 grid grid-flow-row grid-rows-6 grid-cols-6">
                    <div className="font-serif row-start-1 row-end-3 col-start-2 col-end-6 flex justify-center">
                        <h1 className="text-4xl text-zinc-100 font-bold pt-4 r">
                            Brandon Hernandez Montes
                        </h1>
                    </div>

                    <div className="text-slate-400 row-start-3 row-end-5 col-start-2 col-end-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quis adipisci veniam explicabo quas. Eum,
                            quasi! Consequatur quaerat, blanditiis esse nostrum,
                            libero, iste deleniti omnis delectus nisi ut
                            voluptatum non eaque!
                        </p>
                    </div>
                    <div className="border-2 row-start-6 row-end-7 col-start-2 col-end-6 text-slate-50">
                        <ul className="flex justify-evenly mt-2">
                            <li>
                                <BsGithub />
                            </li>
                            <li>
                                <BsLinkedin />
                            </li>
                            <li>
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
