import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCooks}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recepis.json')
            .then(res => res.json())
            .then(recipe => setRecipes(recipe));
    }, [])

    return (
        <div className='lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                recipes.map(data =>
                    <Recipe
                        key={data.recipe_id}
                        recipe={data}
                        handleCooks={handleCooks}
                    >
                    </Recipe>
                )
            }
        </div>
    );
};

Recipes.propTypes = {
    handleCooks: PropTypes.func
};

export default Recipes;