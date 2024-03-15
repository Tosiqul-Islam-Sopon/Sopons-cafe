
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Navbar from './Components/Navbar/Navbar'
import Our_recipes from './Components/Our_recipes/Our_recipes'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <div className='space-y-10 my-10 mx-14'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Our_recipes></Our_recipes>
      <div className='flex justify-between gap-3'>
        <Recipes></Recipes>
        <Cook></Cook>
      </div>
    </div>
  )
}

export default App
