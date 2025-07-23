import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Timeline } from "./components/timeline/timeline";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Timeline],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prototype');
}
