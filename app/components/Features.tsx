import Image from "next/image"
import EIALogo from "@/public/EIALogo.png"
import {BsBatteryCharging} from "react-icons/bs"
import {LiaUserFriendsSolid} from "react-icons/lia"
import {GiField} from "react-icons/gi"
import {FaLightbulb, FaCalendarDay,FaFacebookSquare} from "react-icons/fa"
import {FaChildCombatant} from "react-icons/fa6"

const Features = () => {
  return (
    <section id="features" className="py-5">
                    <div className="flex items-center justify-items-center font-bold w-[89%] m-auto max-w-[1400px] grid text-3xl p-2">What Makes The Community Great</div>
        <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-5">
            <div>
                <ul className="space-y-10">
                    <li>
                        <div className="flex gap-2 items-center text-xl font-bold text-dark">
                            <h3></h3>
                            <div>
                                <LiaUserFriendsSolid size={40}/> 
                            </div>
                        </div>
                        <p>Make Some New Friends</p>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center text-xl font-bold text-dark">
                            <h3></h3>
                            <div>
                                <GiField size={40}/>
                            </div>
                        </div>
                        <p>Play At Amazing Places</p>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center text-xl font-bold text-dark">
                            <h3></h3>
                            <div>
                                <FaLightbulb size={40}/>
                            </div>
                        </div>
                        <p>Learn Some New Skills</p>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <Image src={EIALogo} width={500} height={500} alt="secondLogo"/>
            </div>
            <div>
                <ul className="space-y-10 text-right">
                    <li>
                        <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                            <h3></h3>
                            <div>
                                <FaCalendarDay size={25}/>
                            </div>
                        </div>
                        <p>Events Almost Every Week</p>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                            <h3></h3>
                            <div>
                                <FaChildCombatant size={25}/>
                            </div>
                        </div>
                        <p>Build Casual Or Authentic Kits</p>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                            <h3></h3>
                            <div>
                                <FaFacebookSquare size={25}/>
                            </div>
                        </div>
                        <p>Large Social Media Pages</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Features