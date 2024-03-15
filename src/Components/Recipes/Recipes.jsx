// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = (() => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recepis.json')
            .then(res => res.json())
            .then(recipe => setRecipes(recipe));
    }, [])

    return (
        <div className='w-3/5 grid grid-cols-2 gap-2'>
            {
                recipes.map(data =>
                    <Recipe
                        key={data.recipe_id}
                        recipe={data}
                    >
                    </Recipe>
                )
            }
        </div>
    );
});

Recipes.propTypes = {

};

export default Recipes;