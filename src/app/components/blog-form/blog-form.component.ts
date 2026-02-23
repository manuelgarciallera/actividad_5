import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {

  // Output para emitir la noticia al componente padre (blog)
  @Output() noticiaEmit = new EventEmitter<INoticia>();

  // Objeto enlazado con el formulario mediante two-way binding
  nuevaNoticia: INoticia = {
    id: 0,
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

  // Valida los campos y emite la noticia al padre
  guardarNoticia() {
    if (
      this.nuevaNoticia.titulo != '' &&
      this.nuevaNoticia.imagen != '' &&
      this.nuevaNoticia.texto != '' &&
      this.nuevaNoticia.fecha != ''
    ) {
      // Emitimos la noticia al componente padre
      this.noticiaEmit.emit(this.nuevaNoticia);

      // Reseteamos el formulario rompiendo la referencia
      this.nuevaNoticia = {
        id: 0,
        titulo: '',
        imagen: '',
        texto: '',
        fecha: ''
      };

    } else {
      alert('Todos los campos son obligatorios');
    }
  }

}