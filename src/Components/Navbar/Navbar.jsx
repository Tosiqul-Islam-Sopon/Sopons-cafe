import img1 from '../../assets/Images/Frame 5.png'
import search from '../../assets/Images/search.png'
import '../../index.css'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center lexend'>
            <div>
                <h3 className='text-3xl font-bold hover:bg-gray-200 p-2 rounded-xl'>Sopon&apos;s Cafe</h3>
            </div>
            <div className='flex justify-between gap-4'>
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className='flex gap-3 '>
                
                <div className='flex items-center bg-[#150B2B0D] gap-2 p-3 rounded-xl'>
                    <img src={search} alt="" />
                    <input className='p-1 rounded-xl' type="text" placeholder='Search' />
                </div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Navbar;