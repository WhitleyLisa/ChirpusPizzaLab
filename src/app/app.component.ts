import { Component } from '@angular/core';
import { MenuItem } from './menu-Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  menu: MenuItem[] = [
    {
      Name: "Chciken Alfredo",
      Category: "Pasta",
      Price: 11.99
    },
    {
      Name: "Baked Ziti",
      Category: "Pasta",
      Price: 10.99
    },
    {
      Name: "Chicken Pesto Penne",
      Category: "Pasta",
      Price: 12.99
    },
    {
      Name: "Cheesy Cheese",
      Category: "Pizza",
      Price: 10.00
    },
    {
      Name: "Peperoniskies",
      Category: "Pizza",
      Price: 12.99
    },
    {
      Name: "Veggie Me",
      Category: "Pizza",
      Price: 9.99
    },
    {
      Name: "Pizza Cookie",
      Category: "Dessert",
      Price: 8.99
    },
    {
      Name: "Strawberry Maddness Cake",
      Category: "Dessert",
      Price: 7.99
    },
    {
      Name: "Ice Cream Delight",
      Category: "Dessert",
      Price: 6.99
    },
  ]
  
  ;}
