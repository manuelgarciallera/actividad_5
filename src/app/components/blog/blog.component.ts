import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { BlogListComponent } from '../blog-list/blog-list.component';

@Component({
  selector: 'app-blog',
  imports: [BlogFormComponent, BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  // Contador para el ID de nuevas noticias
  ultimoId: number = 2;

  // Array de noticias: dueño de los datos
  arrayNoticias: INoticia[] = [
    {
      id: 1,
      titulo: 'Grand Theft Auto VI: fecha de lanzamiento confirmada',
      imagen: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800',
      texto: 'Rockstar Games ha confirmado que GTA VI llegará en otoño de 2025. La historia se ambienta en Vice City y contará con la primera protagonista femenina de la saga principal, Lucia.',
      fecha: '2026-02-10'
    },
    {
      id: 2,
      titulo: 'Nintendo Switch 2: todo lo que sabemos hasta ahora',
      imagen: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800',
      texto: 'Nintendo ha presentado oficialmente la Switch 2. Mantiene el formato híbrido pero con pantalla más grande, mayor potencia gráfica y un nuevo mando Joy-Con magnético.',
      fecha: '2026-02-15'
    }
  ];

  // Recibe la noticia emitida por blog-form y la inserta en el array
  insertarNoticia(noticia: INoticia) {
    this.ultimoId++;
    noticia.id = this.ultimoId;
    this.arrayNoticias.push(noticia);
  }

}