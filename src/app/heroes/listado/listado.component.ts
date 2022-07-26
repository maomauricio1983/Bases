import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor() {
  }

  heroes: string[] = ['Spiderman', 'thor', 'Megaman', 'superman'];
  heroeBorrado: string = '';


  borrarHeroe(){
    // this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
