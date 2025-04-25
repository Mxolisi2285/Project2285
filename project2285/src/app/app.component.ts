import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InformationComponent } from './information/information.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2285';
}
