import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/models';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css'],
})
export class PickerComponent implements OnInit{
  colors: Color[];

  constructor(private ColorStorageService: ColorService) {
    this.colors = [
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
      { name: '', color: '#fff' },
    ];
  }

  ngOnInit(): void {
      this.inputChanged()
  }

  inputChanged() {
    this.ColorStorageService.setColors({...this.colors})
  }
}
