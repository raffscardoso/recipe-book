import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() selectedRecipe!: Recipe;
}
