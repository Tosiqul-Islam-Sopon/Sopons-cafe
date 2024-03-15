// import banner from '../../assets/Images/banner.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner lexend'>
            <div className="p-24 space-y-8">
                <div>
                <h2 className='text-white text-4xl font-bold text-center'>Discover an exceptional cooking</h2>
                <h2 className='text-white text-4xl font-bold text-center'>class tailored for you!</h2>
                </div>
                <p className='text-white text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex gap-5 items-center justify-center'>
                    <button className='bg-[#0BE58A] p-3 rounded-xl font-medium hover:bg-gray-200'>Explore Now</button>
                    <button className='text-white font-medium bg-transparent border border-white p-3 rounded-xl hover:bg-green-500'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;