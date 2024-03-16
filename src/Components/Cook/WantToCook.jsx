import PropTypes from 'prop-types';

const WantToCook = ({wantToCook, handleCurrentlyCooking}) => {
    
    return (
        <div>
            <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold lexend text-center">Want to cook: {wantToCook.length}</h3>
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
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            wantToCook.map(recipe => <tr key={recipe.recipe_id}>
                                <td>{recipe.recipe_id}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                                <td><button onClick={() => handleCurrentlyCooking(recipe)} className='bg-[#0BE58A] p-2 rounded-2xl'>Preparing</button></td>
                            </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func
};

export default WantToCook;