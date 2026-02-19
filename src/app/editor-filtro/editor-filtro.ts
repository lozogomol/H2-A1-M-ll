import { Component , signal , computed } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltro {

  brillo= signal(100);
  contraste= signal(100);
  blur= signal(0);

  filtroScss= computed(() => {
    return `filter: brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px);`;
  })
  actualizar (prop:string, evento:Event){
    const valor= (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor); 
  }
}
