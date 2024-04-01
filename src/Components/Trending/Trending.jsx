import React, {useEffect} from 'react'
import './Trending.css'

//Imported Icons

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

//Imported Images
import car1 from '../../Assets/image4.png'
import car2 from '../../Assets/image6.png'
import car3 from '../../Assets/image7.png'

// Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Trending = () => {

      //Lets intitialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000 
      }
    )
  }, [])

  return (
    <div className='trending section'>
        <div className="secContainer container">
            <div data-aos='fade-up' className="secHeading flex">
                <h3 className="secTitle">
                        Trending Near You
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon rightIcon'/>
                    </div>   
            </div>
            <div className="carContainer grid">
                {/* Sing Car Div */}
                <div data-aos='fade-up' className="singleCar grid">
                    <div className="imgDiv">
                        <img src={car1} alt="Car Image" />
                    </div>
                    <h5 className="carTitle">
                        Used 2019 Audi S4 Premium Plus
                    </h5>
                    <span className="miles">
                        11457 Miles
                    </span>
                    <span className="AWD">
                        AWD 4-Cylinder Turbo
                    </span>

                    <div className="price_seller flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="seller">
                            Best Seller
                        </span>
                    </div>
                </div>
            
            
                {/* Sing Car Div */}
                <div data-aos='fade-up' className="singleCar grid">
                    <div className="imgDiv">
                        <img src={car2} alt="Car Image" />
                    </div>
                    <h5 className="carTitle">
                        Used 2019 Audi S4 Premium Plus
                    </h5>
                    <span className="miles">
                        11457 Miles
                    </span>
                    <span className="AWD">
                        AWD 4-Cylinder Turbo
                    </span>

                    <div className="price_seller flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="seller">
                            Best Seller
                        </span>
                    </div>
                </div>
            
                {/* Sing Car Div */}
                <div data-aos='fade-up' className="singleCar grid">
                    <div className="imgDiv">
                        <img src={car3} alt="Car Image" />
                    </div>
                    <h5 className="carTitle">
                        Used 2019 Audi S4 Premium Plus
                    </h5>
                    <span className="miles">
                        11457 Miles
                    </span>
                    <span className="AWD">
                        AWD 4-Cylinder Turbo
                    </span>

                    <div className="price_seller flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="seller">
                            Best Seller
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending
