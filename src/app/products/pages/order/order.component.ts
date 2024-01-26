import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name:'Superman',
      canfly: true,
      color: Color.blue
    },
    {
      name:'Batman',
      canfly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canfly: false,
      color:Color.red
    },
    {
      name: 'Robin',
      canfly: false,
      color:Color.red
    },
    {
      name: 'Linterna Verde',
      canfly: true,
      color:Color.green
    }
  ]

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }
}
