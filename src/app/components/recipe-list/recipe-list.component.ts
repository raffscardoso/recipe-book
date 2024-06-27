import { Component } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { RecipeFilterPipe } from '../../pipes/recipe-filter.pipe';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, FormsModule, RecipeFilterPipe],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  searchText: string = '';
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Bolognese',
      'A classic Italian pasta dish',
      ['Spaghetti', 'Minced Meat', 'Tomato Sauce'],
      ['Cook the spaghetti', 'Prepare the sauce', 'Mix and serve']
    ),
    new Recipe(
      'Chicken Curry',
      'A flavorful chicken curry',
      ['Chicken', 'Curry powder', 'Coconut milk'],
      ['Cook the chicken', 'Add curry powder', 'Simmer with coconut milk']
    ),
    new Recipe(
      'Pancakes',
      'Fluffy breakfast pancakes',
      ['Flour', 'Milk', 'Eggs', 'Sugar', 'Baking powder'],
      [
        'Mix dry ingredients',
        'Add wet ingredients',
        'Cook on a griddle',
        'Serve with syrup',
      ]
    ),
    new Recipe(
      'Caesar Salad',
      'A classic Caesar salad',
      ['Romaine lettuce', 'Caesar dressing', 'Parmesan cheese', 'Croutons'],
      [
        'Chop the lettuce',
        'Toss with dressing',
        'Sprinkle with cheese and croutons',
        'Serve immediately',
      ]
    ),
    new Recipe(
      'Beef Stroganoff',
      'A creamy beef and mushroom dish',
      ['Beef', 'Mushrooms', 'Onion', 'Sour cream', 'Beef broth'],
      [
        'Sauté beef and onions',
        'Add mushrooms and cook',
        'Stir in sour cream and broth',
        'Serve over noodles',
      ]
    ),
    new Recipe(
      'Vegetable Stir-fry',
      'A quick and healthy stir-fry',
      ['Mixed vegetables', 'Soy sauce', 'Garlic', 'Ginger', 'Olive oil'],
      [
        'Heat oil in a pan',
        'Add garlic and ginger',
        'Stir-fry vegetables',
        'Add soy sauce and serve',
      ]
    ),
    new Recipe(
      'Chocolate Chip Cookies',
      'Classic chocolate chip cookies',
      [
        'Flour',
        'Butter',
        'Sugar',
        'Brown sugar',
        'Eggs',
        'Chocolate chips',
        'Baking soda',
      ],
      [
        'Cream butter and sugars',
        'Add eggs and mix',
        'Stir in dry ingredients',
        'Fold in chocolate chips',
        'Bake at 350°F for 10-12 minutes',
      ]
    ),
    new Recipe(
      'Guacamole',
      'A fresh and creamy avocado dip',
      ['Avocados', 'Lime', 'Onion', 'Tomato', 'Cilantro', 'Salt'],
      [
        'Mash the avocados',
        'Add lime juice',
        'Mix in chopped onion, tomato, and cilantro',
        'Season with salt and serve',
      ]
    ),
    new Recipe(
      'Tomato Soup',
      'A comforting tomato soup',
      [
        'Tomatoes',
        'Onion',
        'Garlic',
        'Vegetable broth',
        'Basil',
        'Salt',
        'Pepper',
      ],
      [
        'Sauté onion and garlic',
        'Add tomatoes and broth',
        'Simmer for 20 minutes',
        'Blend until smooth',
        'Season with basil, salt, and pepper',
      ]
    ),
    new Recipe(
      'Grilled Cheese Sandwich',
      'A crispy and gooey grilled cheese sandwich',
      ['Bread', 'Butter', 'Cheese'],
      [
        'Butter the bread',
        'Place cheese between slices',
        'Grill until golden brown and cheese is melted',
        'Serve hot',
      ]
    ),
    new Recipe(
      'Tacos',
      'A versatile and delicious taco recipe',
      [
        'Tortillas',
        'Ground beef',
        'Taco seasoning',
        'Lettuce',
        'Tomato',
        'Cheese',
        'Sour cream',
      ],
      [
        'Cook the ground beef with taco seasoning',
        'Warm the tortillas',
        'Assemble with lettuce, tomato, cheese, and sour cream',
        'Serve immediately',
      ]
    ),
    new Recipe(
      'Lemonade',
      'A refreshing homemade lemonade',
      ['Lemons', 'Sugar', 'Water'],
      [
        'Juice the lemons',
        'Mix with sugar and water',
        'Stir until sugar dissolves',
        'Serve chilled',
      ]
    ),
  ];
}
