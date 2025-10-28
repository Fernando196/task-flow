import { Component, input } from '@angular/core';

@Component({
  selector: 'app-map-icon',
  standalone: false,
  templateUrl: './map-icon.html',
  styleUrl: './map-icon.css',
})
export class MapIcon {
  height = input<number>(24);
  width = input<number>(24);
  classes = input<string>('fill-black');
  viewBox = input<string>('0 0 24 24');
  nameIcon = input<string>('');
}
