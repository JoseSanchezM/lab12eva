import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { ContactoComponent } from "./contacto/contacto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NosotrosComponent, ServiciosComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ikomi-peru';
}
