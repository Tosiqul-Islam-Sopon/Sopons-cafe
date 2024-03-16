import PropTypes from 'prop-types';
import './Cook.css'
// import { useState } from 'react';
import WantToCook from './WantToCook';
import CurrentlyCooking from './CurrentlyCooking';

const Cook = ({ wantToCook, handleCurrentlyCooking, currentlyCooking }) => {
    // const [cookings, setCookings] = useState([]);

    // const handleCookings = (recipe) => {
    //     const newCookings = [...cookings, recipe];
    //     setCookings(newCookings);

    //     // wantToCook = wantToCook.filter(data => data !== recipe);
    // }

    return (
        <div className='w-2/5 border border-[#28282833] rounded-2xl space-y-3'>
            <div>
                <WantToCook
                    wantToCook={wantToCook}
                    handleCurrentlyCooking={handleCurrentlyCooking}
                ></WantToCook>
                <CurrentlyCooking currentlyCooking={currentlyCooking}></CurrentlyCooking>
            </div>

        </div>
    );
};

Cook.propTypes = {
    wantToCook: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func,
    currentlyCooking: PropTypes.array
};

export default Cook;