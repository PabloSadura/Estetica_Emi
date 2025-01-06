import { Component } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ServiciosComponent, SobreMiComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export default class InicioComponent {}
