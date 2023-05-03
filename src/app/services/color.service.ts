import { Injectable } from '@angular/core';
import { Color } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  colors: Color[] = []

  constructor() { }

  getColors() {
    return this.colors
  }

  setColors(colors: Color[]) {
    this.colors = colors
  }
}
