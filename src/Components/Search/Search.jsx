import React, {useEffect} from 'react'
import './Search.css'

//Imported Icons
import {AiOutlineSearch} from 'react-icons/ai'

// Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
  //Lets intitialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000 
      }
    )
  }, [])

  return (
    <div className='search'>
        <div className="secContainer container">
            <h3 data-aos='fade-up' className="title">
                Which Vehicle are you looking for?
            </h3>

            <div className="searchDiv grid">
                <input data-aos='fade-up' type="text" placeholder='Type' />
                <input data-aos='fade-up' type="number" placeholder='Year' />
                <input data-aos='fade-up' type="text" placeholder='Model' />
                <input data-aos='fade-up' type="number" placeholder='Price' />
                <button data-aos='fade-up' className="btn primaryBtn flex">
                    <AiOutlineSearch className='icon'/>
                    <span>
                        Search
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search
