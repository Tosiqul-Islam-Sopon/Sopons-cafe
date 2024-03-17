import PropTypes from 'prop-types';

const CurrentlyCooking = ({currentlyCooking, cookingTime, calories}) => {
    
    return (
        <div>
            <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold lexend text-center">Currently cooking: {currentlyCooking.length}</h3>
                <hr />
            </div>
            <div className='fira-sans-regular'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentlyCooking.map(recipe => <tr key={recipe.recipe_id}>
                                <td>{recipe.recipe_id}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minutes</td>
                                <td>{recipe.calories} calories</td>
                            </tr>
                            )
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time = {cookingTime} minutes</td>
                            <td>Total Calories = {calories} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.array,
    cookingTime: PropTypes.number,
    calories: PropTypes.number
};

export default CurrentlyCooking;