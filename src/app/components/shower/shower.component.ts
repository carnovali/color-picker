import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/models';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.css']
})
export class ShowerComponent implements OnInit{

  colors: Color[] = []

  constructor(private ColorStorageService: ColorService) {
  }

  ngOnInit(): void {
     setTimeout(() => {
      this.getColors()
     }, 1000)
  }

  getColors() {
    this.colors = this.ColorStorageService.getColors()
  }
}
