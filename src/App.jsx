
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Navbar from './Components/Navbar/Navbar'
import Our_recipes from './Components/Our_recipes/Our_recipes'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [cookingTime, setCookingTime] = useState(0);
  const [calories, setCalories] = useState(0);


  const handleCooks = recipe => {
    if (wantToCook.includes(recipe)) {
      toast.success("This recipe is already added !", {
        autoClose: 2000
      });
    }
    else {
      const newCooks = [...wantToCook, recipe];
      setWantToCook(newCooks);
    }
  }
  const handleCurrentlyCooking = (item) => {
    const newCooks = wantToCook.filter(cook => cook !== item)
    setWantToCook(newCooks);

    const newCurrentlyCooking = [...currentlyCooking, item];
    setCurrentlyCooking(newCurrentlyCooking);

    setCookingTime(cookingTime + item.preparing_time);
    setCalories(calories + item.calories)

  }

  return (
    <div className='space-y-10 my-10 mx-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Our_recipes></Our_recipes>
      <div className='flex flex-col lg:flex-row justify-between gap-3'>
        <Recipes
          handleCooks={handleCooks}
        ></Recipes>
        <Cook
          wantToCook={wantToCook}
          handleCurrentlyCooking={handleCurrentlyCooking}
          currentlyCooking={currentlyCooking}
          cookingTime={cookingTime}
          calories={calories}
        ></Cook>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
