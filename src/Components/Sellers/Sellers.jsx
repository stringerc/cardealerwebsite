import React, {useEffect} from 'react'
import './Sellers.css'

// Imported Images
import sellerImage1 from '../../Assets/logo (1).png'
import sellerImage2 from '../../Assets/logo (2).png'
import sellerImage3 from '../../Assets/logo (3).png'
import sellerImage4 from '../../Assets/logo (4).png'

// Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sellers = () => {

  //Lets intitialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000 
      }
    )
  }, [])

  return (
    <div className='sellers section'>
        <div className="secContainer container">
            <div data-aos='fade-up' className="secHeading grid">
                <div className="secTitle">
                    <h3>Explore Top Sellers in town
                    </h3>

                    <p>Joseph Samuel Girard holds the Guiness World Record for being the greatest salesman in the world</p>
                </div>

                <div className="sellersContainer grid">
                    {/* Single Seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={sellerImage1} alt="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Toyota
                            </h4>
                            <p>from $40k</p>
                        </span>
                    </div>
                    {/* Single Seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={sellerImage2} alt="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Mercedes
                            </h4>
                            <p>from $60k</p>
                        </span>
                    </div>
                    {/* Single Seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={sellerImage3} alt="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Volkswagen
                            </h4>
                            <p>from $35k</p>
                        </span>
                    </div>
                    {/* Single Seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={sellerImage4} alt="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Hyundai
                            </h4>
                            <p>from $23k</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sellers
