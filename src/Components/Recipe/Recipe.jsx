import PropTypes from 'prop-types';
import time from '../../assets/Images/time.png'
import calory from '../../assets/Images/calory.png'

const Recipe = ({ recipe }) => {
    const { recipe_name, recipe_image, short_description, ingredients,
        preparing_time, calories } = recipe;
    return (
        <div className='shadow-lg p-4 border border-[#28282833] rounded-2xl space-y-4'>
            <img className='h-[200px] w-[100%] rounded-2xl' src={recipe_image} alt="" />
            <h1 className='text-2xl font-semibold lexend'>{recipe_name}</h1>
            <p className='fira-sans-regular'>{short_description}</p>
            <hr />
            <div>
                <h4 className='font-medium text-[18px] lexend'>Ingredients: {ingredients.length}</h4>
                <div className='ml-10 mt-3'>
                    {
                        <ul className='list-disc fira-sans-regular'>
                            {
                                ingredients.map((ing, ind) => <li key={ind}>{ing}</li>)
                            }
                        </ul>
                    }
                </div>
            </div>
            <hr />
            <div className='flex justify-between fira-sans-regular'>
                <div className='flex items-center gap-3'>
                    <img src={time} alt="" />
                    <p><span>{preparing_time}</span> minutes</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={calory} alt="" />
                    <p>{calories}</p>
                </div>
            </div>
            <button className='bg-[#0BE58A] rounded-2xl p-3 font-medium lexend'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Recipe;