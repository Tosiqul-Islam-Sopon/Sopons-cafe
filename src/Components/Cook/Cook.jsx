import PropTypes from 'prop-types';
import './Cook.css'
// import { useState } from 'react';
import WantToCook from './WantToCook';
import CurrentlyCooking from './CurrentlyCooking';

const Cook = ({ wantToCook, handleCurrentlyCooking, currentlyCooking, cookingTime, calories }) => {

    return (
        <div className='lg:w-2/5 border border-[#28282833] rounded-2xl space-y-3'>
            <div>
                <WantToCook
                    wantToCook={wantToCook}
                    handleCurrentlyCooking={handleCurrentlyCooking}
                ></WantToCook>
                <CurrentlyCooking
                    currentlyCooking={currentlyCooking}
                    cookingTime={cookingTime}
                    calories={calories}
                ></CurrentlyCooking>
            </div>

        </div>
    );
};

Cook.propTypes = {
    wantToCook: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func,
    currentlyCooking: PropTypes.array,
    cookingTime: PropTypes.number,
    calories: PropTypes.number
};

export default Cook;