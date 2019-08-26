import React from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';
import RecipeForm from '../RecipeForm/RecipeForm';

export default ({existsAlready}) => {
  const addRecipe = fields => {};
  const modRecipe = fields => {};
  return (
    <>
      <Navbar />
      <RecipeForm submit={existsAlready ? modRecipe : addRecipe}/>
    </>
  );
}