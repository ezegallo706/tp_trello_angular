import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SpacePickerComponent } from '../../components/space-picker/space-picker.component';
import { FastSpacePickerComponent } from '../../components/fast-space-picker/fast-space-picker.component';
import { HomeComponent } from '../../views/home/home.component';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterModule, NavbarComponent, SpacePickerComponent, FastSpacePickerComponent, HomeComponent],
  templateUrl: './main-layout.component.html',
  styles: ``,
})
export class MainLayoutComponent {
  seRenderiza: boolean = false;
  numero: number = 58
}
