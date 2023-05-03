import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PickerComponent } from './components/picker/picker.component';
import { ShowerComponent } from './components/shower/shower.component';
import { ColorService } from './services/color.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PickerComponent,
    ShowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
