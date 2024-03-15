// import PropTypes from 'prop-types';
import './Cook.css'

const Cook = (() => {
    return (

        <div className='w-2/5 border border-[#28282833] rounded-2xl p-2'>
            <div>
                <div className="p-4 space-y-3">
                    <h3 className="text-2xl font-semibold lexend text-center">Want to cook: 01</h3>
                    <hr />
                </div>
                <div>
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
                            <tr>
                                <td>1</td>
                                <td>Spaghetti Bolognese</td>
                                <td>30 minutes</td>
                                <td>600 calories</td>
                                <td><button className='bg-[#0BE58A] p-2 rounded-2xl'>Preparing</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="p-4 space-y-3">
                    <h3 className="text-2xl font-semibold lexend text-center">Currently cooking: 02</h3>
                    <hr />
                </div>
                <div>
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
                            <tr>
                                <td>1</td>
                                <td>Spaghetti Bolognese</td>
                                <td>30 minutes</td>
                                <td>600 calories</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Total Time = 45 minutes</td>
                                <td>Total Calories = 1050 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
});

Cook.propTypes = {

};

export default Cook;