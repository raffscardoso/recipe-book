import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RecipeListComponent, CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  isSelected: boolean = false;

  toggleDetails() {
    this.isSelected = !this.isSelected;
    console.log(this.isSelected.valueOf());
  }
}
