import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo!';
  contador: number = 0;
  contadorClicks() : void{
    this.contador++;
  }
}
