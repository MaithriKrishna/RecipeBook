import React from 'react';
import { Header } from '../../Components/Header';
import { RecipeForm } from '../../Components/RecipeForm';
import './index.css';

export const AddRecipe = () => (
  <div className="addRecipeWrapper">
    <Header />
    <RecipeForm />
  </div>
);
