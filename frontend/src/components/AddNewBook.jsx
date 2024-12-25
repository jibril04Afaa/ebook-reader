import { CiClock1 } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { CiStar } from "react-icons/ci";


const AddNewBook = () => {
  return (
    <>
      {/* Major Container */}
      <div className="h-screen">
          <div className='flex justify-between p-5'>
              <div className="">
                  <h1 className="text-6xl">
                    <input type="text" placeholder="Enter Book Title" className="text-gold"/>
                  </h1>
                  <p className="text-2xl">
                    By
                    <input type="text" className="text-gold text-2xl" placeholder="Enter Book Author" />
                  </p>
                  {/* Other book Info */}

                  {/* Rating and Reading/Listening Time Container */}
                  <div className="flex gap-5 items-center">  
                      <div className="">
                          {/* Rating */}
                          <div className="flex items-center">
                              <CiStar className="text-xl"/>
                              <div>
                                <select name="" id="">
                                  <option value=""></option>
                                  <option value="">1</option>
                                  <option value="">1.5</option>
                                  <option value="">2</option>
                                  <option value="">2.5</option>
                                  <option value="">3</option>
                                  <option value="">3.5</option>
                                  <option value="">4</option>
                                  <option value="">4.5</option>
                                  <option value="">5</option>
                                </select>
                              </div>
                          </div>
                      </div>

                      {/* Reading/Listening Time */}
                      <div>
                          <div className="flex items-center">
                              <CiClock1 className="text-xl"/>
                              <input type="text" name="" id="" className="text-xl" placeholder="Enter Listening Time" />
                          </div>
                      </div>
                  </div>

                  <div>
                    {/* Book description */}
                    <div>
                      <div className="mt-5 mb-5">
                        <input type="text" className="text-xl" placeholder="Enter book description"/>
                      </div>
                    </div>

                      {/* Buttons */}
                    {/* <div className="flex gap-5">
                        <div className="flex items-center border-2 p-2 rounded-lg">
                            <FiBookOpen className="text-xl font-bold"/>
                            <button className="text-xl font-bold text-gold bg">READ NOW</button>
                        </div>
                        <div className="flex items-center border-2 p-2 rounded-lg bg-gold">
                            <CiPlay1 className="text-xl font-bold"/>
                            <button className="text-xl font-bold">LISTEN NOW</button>
                        </div>
                    </div> */}
                  </div>
              </div>

              {/* Book Image */}
              <div className="ml-32 mt-10">
                  <div className="border-2">
                      <div className="flex justify-center cursor-pointer">
                        <CiCamera className="text-4xl"/>
                      </div>
                      <img alt="" width="200px" height="300px" />
                  </div>
              </div>
          </div>
      </div>
    </>

  )

}

export default AddNewBook