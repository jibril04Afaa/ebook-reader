import { CiStar } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

import TheStranger from "../img/the-stranger-img.jpg"
import FallOfUsher from "../img/fall-of-the-house-of-usher.jpg"
import Meditations from "../img/meditations.jpg"
import JaneEyre from "../img/jane-eyre.jpg"

const Home = () => {
  return (
    <>  
        {/* Major Container */}
        <div className="h-screen">
            <div className='flex justify-between p-5'>
                <div className="">
                    <h1 className="text-6xl text-gold">The Stranger</h1>
                    <p className="text-2xl">By <span className="text-gold">Albert Camus</span></p>
                    {/* Other book Info */}

                    {/* Rating and Reading/Listening Time Container */}
                    <div className="">  
                        <div className="flex gap-5">
                            {/* Rating */}
                            <div className="flex items-center">
                                <CiStar className="text-xl"/>
                                <p className="text-xl">4.5</p>
                            </div>

                        {/* Reading/Listening Time */}
                            <div className="flex items-center">
                                <CiClock1 className="text-xl"/>
                                <p className="text-xl">18 hrs 10 mins</p>
                            </div>
                        </div>


                        {/* Book description */}
                        <div>
                            <div className="mt-5 mb-5">
                                <p className="text-xl">
                                    <span className="text-gold">The Stranger</span> dolor sit amet consectetur adipisicing elit.
                                    <br />
                                    Itaque fugit laboriosam error cupiditate. Omnis in, error
                                    <br /> 
                                    sequi molestias nam repellat. Itaque nemo fuga ducimus
                                    <br /> 
                                    maxime repudiandae inventore amet animi ex!
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-5">
                            <div className="flex items-center border-2 p-2 rounded-lg">
                                <FiBookOpen className="text-xl font-bold"/>
                                <button className="text-xl font-bold text-gold bg">READ NOW</button>
                            </div>
                            <div className="flex items-center border-2 p-2 rounded-lg bg-gold">
                                <CiPlay1 className="text-xl font-bold"/>
                                <button className="text-xl font-bold">LISTEN NOW</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Book Image */}
                <div className="ml-32 mt-10">
                    <div className="border-2">
                        <img src={TheStranger} alt="" width="200px" height="100px" />
                    </div>
                </div>

            </div>

            {/* More Similar Books */}
            <div className="p-5">
                <p className="text-2xl mb-5">MORE SIMILAR BOOKS</p>
                <div className="">
                    {/* Book Image */}
                    <div className="flex justify-between">
                        <img src={FallOfUsher} alt="" width="200px" height="100px"/>
                        <img src={Meditations} alt="" width="200px" height="100px"/>
                        <img src={JaneEyre} alt="" width="200px" height="100px"/>
                    </div>
                </div>
            </div>
        </div>




    </>

  )
}

export default Home