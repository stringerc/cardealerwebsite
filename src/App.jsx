import React from 'react'
import './App.scss'

// Import all the components into our App
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Trending from './Components/Trending/Trending'
import Sellers from './Components/Sellers/Sellers'
import Auction from './Components/Auction/Auction'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer'

//

const App = () => {
  return (
    <div className='title'>
      <Navbar/>
      <Home/>
      <Search/>
      <Trending/>
      <Sellers/>
      <Auction/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
