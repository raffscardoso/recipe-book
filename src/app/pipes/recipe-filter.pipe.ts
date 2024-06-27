import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Pipe({
  name: 'recipeFilter',
  standalone: true,
})
export class RecipeFilterPipe implements PipeTransform {
  transform(recipes: Recipe[], searchText: string): Recipe[] {
    if (!recipes || !searchText) {
      return recipes;
    }
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
