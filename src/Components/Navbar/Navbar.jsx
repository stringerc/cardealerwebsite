import React, {useState} from 'react'
import './Navbar.css'

// Imported Images
import logo from '../../Assets/logo.png'

//Imported Icons
import{IoIosCloseCircle} from 'react-icons/io'
import{TbGridDots} from 'react-icons/tb'


const Navbar = () => {

    //Statement to hold the navbar state
    const [navbar, setNavbar] = useState('navbar')
    //function to show navbar on smaller width screens
    const showNavbar = ()=> {
        setNavbar('navbar showNavbar')
    }
    //function to remove navbar on smaller width screens
    const removeNavbar = ()=> {
        setNavbar('navbar')
    }

    //function to add a background to the Navbar when we scroll a certain height on the window

    const [header, setHeader] = useState('header')
    const addBg = ()=>{
        if(window.screenY >= 20){
            setHeader('header addBg')
        }
    }
    window.addEventListener('scroll', addBg)

  return (
    <div className={header}>
        <div className="logoDiv">
            <img src={logo} alt='Logo Image' className='logo' />
        </div>
        <div className={navbar}>
            <ul onClick={removeNavbar} className="listItem">
                <a href="/" className="link">Used Cars</a>
            </ul>
            <ul onClick={removeNavbar} className="listItem">
                <a href="/" className="link">New Cars</a>
            </ul>
            <ul onClick={removeNavbar} className="listItem">
                <a href="/" className="link">Auctions</a>
            </ul>
            <ul onClick={removeNavbar} className="listItem">
                <a href="/" className="link">Sell</a>
            </ul>

            {/* An icon that will close navbar on small screens
             */}

             <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
             
        </div>

        <div className="signUp flex">
            <div className="text">Sign Up</div>
            {/* An icon that will open/show navbar on small screens
             */}
             <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
        </div>
    </div>

  )
}

export default Navbar
