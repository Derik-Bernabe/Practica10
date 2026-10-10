import { Component } from '@angular/core';

@Component({
  selector: 'app-rutinas-list',
  templateUrl: './rutinas-list.html',
  styleUrl: './rutinas-list.scss',
})
export class RutinasList {
  rutinas = [
    {
      icon: '♧',
      nombre: 'Fuerza de cuerpo completo',
      detalle: 'Fuerza · Principiante',
      duracion: '45 min',
    },
    {
      icon: '♡',
      nombre: 'Cardio y resistencia',
      detalle: 'Cardio · Intermedio',
      duracion: '30 min',
    },
    {
      icon: '▤',
      nombre: 'Movilidad y recuperación',
      detalle: 'Movilidad · Todos los niveles',
      duracion: '20 min',
    },
  ];
}
