import React, {useEffect} from 'react'
import './Auction.css'

//Imported Icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

//Imported images
import car1 from '../../Assets/pngcars (1).png'
import car2 from '../../Assets/pngcars (2).png'
import car3 from '../../Assets/pngcars (3).png'
import car4 from '../../Assets/pngcars (4).png'
import car5 from '../../Assets/pngcars (5).png'
import car6 from '../../Assets/pngcars (6).png'

// Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Auction = () => {

  //Lets intitialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000 
      }
    )
  }, [])

  return (
    <div className='auction section'>
        <div className="secContainer container">
            <div data-aos='fade-up' className="secHeading flex">
                <h3 className="secTitle">
                        Active Auctions
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon rightIcon'/>
                    </div>
                </div>

            <div className="carContainer grid">
                {/* Sing Car Div */}
                <div className="singleCar grid" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={car6} alt="Car Image" />
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

                    <div className="price_buyBtn flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
                {/* Sing Car Div */}
                <div className="singleCar grid singleCarActive" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={car5} alt="Car Image" />
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

                    <div className="price_buyBtn flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
                {/* Sing Car Div */}
                <div className="singleCar grid" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={car4} alt="Car Image" />
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

                    <div className="price_buyBtn flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
                {/* Sing Car Div */}
                <div className="singleCar grid singleCarActive" data-aos='fade-up'>
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

                    <div className="price_buyBtn flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
                {/* Sing Car Div */}
                <div className="singleCar grid" data-aos='fade-up'>
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

                    <div className="price_buyBtn flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
                {/* Sing Car Div */}
                <div className="singleCar grid singleCarActive" data-aos='fade-up'>
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

                    <div className="price_buyBtn flex">
                        <span className="flex">
                            41,200
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
            </div>
            
            
          </div>  
        </div>
    
  )
}

export default Auction
