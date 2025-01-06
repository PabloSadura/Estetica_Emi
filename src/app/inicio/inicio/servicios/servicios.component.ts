import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent {
  constructor() {}

  public typeServices = [
    {
      title: 'Coorporales',
      description:
        ' Achieve your desired body shape with our non-invasive contouring  services',
      img: 'https://placehold.co/300x200',
    },
    {
      title: 'Faciales',
      description: '',
      img: 'https://placehold.co/300x200',
    },
    {
      title: 'Capilares',
      description: '',
      img: 'https://placehold.co/300x200',
    },
    {
      title: 'LPHIFU',
      description: '',
      img: 'https://placehold.co/300x200',
    },
  ];
}
