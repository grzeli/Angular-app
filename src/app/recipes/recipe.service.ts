import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'this is a test',
            'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('french fries', 11),
            ]
        ),
        new Recipe(
            'A test Recipe2',
            'this is a test2',
            'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('french fries', 11),
                new Ingredient('salad', 14),
                new Ingredient('broccoli', 15),
            ]
        )
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}