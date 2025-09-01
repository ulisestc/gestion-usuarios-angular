import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../core/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  cargando = true;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.usuariosService.getUsuarios().subscribe(data => {
        this.usuarios = data;
        this.cargando = false;
      });
    },5000);
  }

}
