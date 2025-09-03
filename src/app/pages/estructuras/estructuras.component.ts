import { Component } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.scss']
})
export class EstructurasComponent {
  
  mostrar = false;

  usuarios = ['Ana', 'Luis', 'Pedro', 'Maria', 'Sofia'];

  rol = 'admin';
  
  toggleAlert() {
    this.mostrar = !this.mostrar;
  }

  cambiarListado(){
    this.usuarios = [''];
  }

  cambiarRol(rol: string){
    this.rol = rol;
  }

}
