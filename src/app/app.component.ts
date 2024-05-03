import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  buscar = false;
  listar = true;

  cambiarVista(accion: string){
    if (accion == 'listar'){
      this.buscar = false;
      this.listar = true;
  }
  if (accion == 'buscar'){
    this.buscar = true;
    this.listar = false;
  }
  }
}
