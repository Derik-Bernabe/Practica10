import { Component } from '@angular/core';
import { LoginCard } from '../../components/login-card/login-card';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { RutinasList } from '../../components/rutinas-list/rutinas-list';
import { AvisosList } from '../../components/avisos-list/avisos-list';

@Component({
  selector: 'app-inicio',
  imports: [LoginCard, HeroBanner, RutinasList, AvisosList],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {}
