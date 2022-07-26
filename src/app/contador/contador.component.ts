import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;


  acumular(valor: number) {
    this.numero += valor;
  }

}
