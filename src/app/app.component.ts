import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                  //nombre del componente
  templateUrl: './app.component.html',   //ubicacion del html que vamos a mostrar
  styleUrls: ['./app.component.css']     //estilos para esta pagina
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number  = 10;


acumular(valor: number){
  this.numero += valor;
}
}
