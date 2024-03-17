// import banner from '../../assets/Images/banner.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner lexend'>
            <div className="p-5 lg:p-24 space-y-8">
                <div>
                <h2 className='text-white text-4xl font-bold text-center'>Sopon&apos;s Cafe: Where Every Sip is an Adventure</h2>
                </div>
                <p className='text-white text-center'>Sopon&apos;s Cafe offers a haven for coffee aficionados, where each sip transports you on a journey of delightful discoveries. With our cozy ambiance and artisanal brews, every visit promises serendipitous moments of flavor and charm</p>
                <div className='flex gap-5 items-center justify-center'>
                    <button className='bg-[#0BE58A] p-3 rounded-xl font-medium hover:bg-gray-200'>Explore Now</button>
                    <button className='text-white font-medium bg-transparent border border-white p-3 rounded-xl hover:bg-green-500'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;