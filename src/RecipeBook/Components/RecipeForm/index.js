import React from 'react';
import './index.css';
import {
  TextField,
  TimeField,
  NumberField,
  RadioField,
  SelectOptionField,
} from '../../Components/Inputs';

export const RecipeForm = () => (
  <div className="recipeFormWrapper">
    <h1>Recipe Form</h1>
    <form>
      <TextField name="title" label={'Title : '} fieldClassName="title" />
      <TextField
        name="description"
        label={'Description : '}
        fieldClassName="description"
        type="large"
      />
      <RadioField types={['Vegetarian', 'Non-Vegetarian']} name={'foodType'} />
      <SelectOptionField
        name="Cuisine"
        label="Cuisine : "
        options={[
          'South Indian',
          'North Indian',
          'Chinese',
          'Desserts',
          'Ice Cream',
          'Biryani',
          'Street Food',
        ]}
      />
      <label for="prepTime">
        Preparation Time
        <TimeField label="Hour : " name="prepHr" maxTime="100" />
        <TimeField label="Min : " name="prepHr" maxTime="59" />
      </label>
      <label for="cookTime">
        Cook Time
        <TimeField label="Hour : " name="cookHr" maxTime="100" />
        <TimeField label="Min : " name="cookMin" maxTime="59" />
      </label>
      <label for="totalTime">
        Total Time
        <TimeField label="Hour : " name="totalHr" maxTime="100" />
        <TimeField label="Min : " name="totalMin" maxTime="59" />
      </label>
      <NumberField label="Serves : " name="serves" max="100" />
      <NumberField label="Yields : " name="yields" max="100" />
      <TextField
        name="inspiration"
        label={'Adapted/Inspired by : '}
        fieldClassName="inspiration"
      />
      <TextField
        name="ingredients"
        label={'Ingredients : '}
        fieldClassName="ingredients"
      />
      <TextField
        name="direction"
        label={'Direction : '}
        fieldClassName="direction"
        type="large"
      />
    </form>
  </div>
);
