import { Component, signal } from '@angular/core';
import { EditorFiltro } from './editor-filtro/editor-filtro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorFiltro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}