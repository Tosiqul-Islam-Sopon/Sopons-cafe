
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Navbar from './Components/Navbar/Navbar'
import Our_recipes from './Components/Our_recipes/Our_recipes'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleCooks = recipe =>{
    const newCooks = [...wantToCook, recipe];
    setWantToCook(newCooks);
  }
  const handleCurrentlyCooking = (item) =>{
    const newCooks = wantToCook.filter(cook => cook !== item)
    setWantToCook(newCooks);
    const newCurrentlyCooking = [...currentlyCooking, item];
    setCurrentlyCooking(newCurrentlyCooking);
  }

  return (
    <div className='space-y-10 my-10 mx-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Our_recipes></Our_recipes>
      <div className='flex justify-between gap-3'>
        <Recipes
          handleCooks={handleCooks}
        ></Recipes>
        <Cook
          wantToCook={wantToCook}
          handleCurrentlyCooking={handleCurrentlyCooking}
          currentlyCooking={currentlyCooking}
        ></Cook>
      </div>
    </div>
  )
}

export default App
