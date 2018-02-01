import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Lada', 'Bantly'];
  dates = [
    new Date(2015,2,17),
    new Date(2015,6,17),
    new Date(2015,8,13),
    new Date(2015,2,15)
  ];

  constructor() {}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
  setBigText(car: string) {
    return car.length > 4 ? true : false;
  }
}
