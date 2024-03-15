
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className='space-y-10 my-10 mx-14'>
      {/* <h1 classNameName='text-4xl'>Vite + React</h1> */}
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  )
}

export default App
