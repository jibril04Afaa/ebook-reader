import { CiStar } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

import TheStranger from "../img/the-stranger-img.jpg"

const Home = () => {
  return (
    <>  
        {/* Major Container */}
        <div className="h-screen">
            <div className='flex justify-between p-5'>
                <div className="">
                    <h1 className="text-6xl">The Stranger</h1>
                    <p className="text-2xl">By Albert Camus</p>
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
                                    The Stranger dolor sit amet consectetur adipisicing elit.
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
                                <FiBookOpen className="text-xl"/>
                                <button className="text-xl">READ NOW</button>
                            </div>
                            <div className="flex items-center border-2 p-2 rounded-lg">
                                <CiPlay1 className="text-xl"/>
                                <button className="text-xl">LISTEN NOW</button>
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
                <div>
                    <p className="text-2xl">MORE SIMILAR BOOKS</p>
                    {/* Book Image */}
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>




    </>

  )
}

export default Home