import { Component, OnInit } from '@angular/core';

// create a model-like template that defines a food
export class Food {
  id: number;
  name: string;
  country: string;
}

// create a list of foods
const FOODS: Food[] = [
  { id: 100, name: 'Fish Tacos', country: 'Mexico' },
  { id: 101, name: 'Sushi', country: 'Japan' },
  { id: 102, name: 'Bibimbap', country: 'Korea' }
];

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  // initialize the mock list of foods
  foods = FOODS;
  // create selectedFood property
  selectedFood: Food;
  // set the selectedFood property equal the food the user clicked in the ui
  onSelect(food: Food): void {
    this.selectedFood = food;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
