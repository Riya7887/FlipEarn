import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import MyListing from './pages/MyListing'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import Messages from './pages/Messages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/marketplace' element={<Marketplace />}/>
        <Route path='/my-listings' element={<MyListing />}/>
        <Route path='/listing/:listingId' element={<ListingDetails />}/>
         <Route path='/create-listing' element={<ManageListing />}/>    
         <Route path='/edit-listing/:listingId' element={<ManageListing />}/>
          <Route path='/message' element={<Messages />}/>
         <Route path='/my-orders' element={<MyOrders />}/>
          <Route path='/loading' element={<Loading />}/>
      </Routes>

    </div>
  )
}

export default App
