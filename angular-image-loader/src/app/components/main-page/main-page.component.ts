import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { ImageLoaderComponent } from '../image-loader/image-loader.component';

@Component({
  selector: 'app-main-page',
  imports: [MenuBarComponent, ImageLoaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
