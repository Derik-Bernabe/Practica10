import { Component } from '@angular/core';

@Component({
  selector: 'app-avisos-list',
  templateUrl: './avisos-list.html',
  styleUrl: './avisos-list.scss',
})
export class AvisosList {
  avisos = [
    {
      titulo: 'Clase de bienvenida',
      detalle: 'Lunes · 18:00 h · Sala funcional',
      etiqueta: 'NUEVO',
    },
    {
      titulo: 'Evaluación física inicial',
      detalle: 'Incluida en tu membresía. Consulta en recepción.',
      etiqueta: 'PARA TI',
    },
  ];
}
