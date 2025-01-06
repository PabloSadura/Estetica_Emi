import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';
import { FormComponent } from '../pages/form/form.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, FormComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export default class InicioComponent {}
