import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
})
export class MusicaComponent {
  control: boolean = false;
  pausarIniciar: boolean = false;

  musicas: any = [
    {
      nombre: 'pechuguita',
      tipo: ' mp3',
      imagen: 'imagen1.jpg',
      genero: 'rap Dominicano',
      ruta: 'assets/music/musica1.mp3',
    },
    {
      nombre: 'Solamente tu',
      tipo: 'mp3',
      imagen: 'imagen2.jpg',
      genero: 'rap Dominicano',
      ruta: 'assets/music/musica2.mp3',
    },
    {
      nombre: 'Pensando en ti',
      tipo: 'mp3',
      imagen: 'imagen3.jpg',
      genero: 'rap Dominicano',
      ruta: 'assets/music/musica3.mp3',
    },
    {
      nombre: 'A veces',
      tipo: 'mp3',
      imagen: 'imagen4.jpg',
      genero: 'rap Dominicano',
      ruta: 'assets/music/musica4.mp3',
    },
  ];
  constructor() {}

  audio: any = new Audio();

  iniciar(nombre: any): void {
    this.control = true;
    this.audio.src = nombre;
    this.audio.load();
    this.audio.play();
  }
  numero = 1;
  direccionales = {
    direccion: 'assets/music/musica' + this.numero + '.mp3',
  };

  pausar(): void {
    this.audio.pause();
    this.pausarIniciar = true;
  }

  iniciarMusica() {
    this.audio.play();
    this.pausarIniciar = false;
  }

  izquierda() {
    this.numero -= 1;
    this.audio.src = 'assets/music/musica' + this.numero + '.mp3';
    this.audio.load();
    this.audio.play();
  }

  derecha() {
    this.numero += 1;
    this.audio.src = 'assets/music/musica' + this.numero + '.mp3';
    this.audio.load();
    this.audio.play()
  }

  ngOnInit() {
    console.log((this.numero -= 1));
  }
}
