import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuTitleComponent, BigCardComponent, HomeComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
