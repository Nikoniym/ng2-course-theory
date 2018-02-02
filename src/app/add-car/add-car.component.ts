import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2017;
  @Output('onAddCar') onAddCar = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameE1: HTMLInputElement) {
    this.onAddCar.emit({
      name: carNameE1.value,
      year: this.carYear
    })

    console.log (carNameE1.value);
    carNameE1.value = '';
    this.carYear = 2017;
  }

}
