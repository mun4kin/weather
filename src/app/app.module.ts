import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { FollowersComponent } from './followers/followers.component';
import { MenuComponent } from './menu/menu.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AboutComponent } from './about/about.component';
import { PreloaderLibModule } from 'preloader-lib';
import { MaskPipe } from './list-item/mask.pipe';
import { FilterHotelsPipe } from './main-body/filter-hotels.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    TemperaturComponent,
    FollowersComponent,
    MenuComponent,
    ListItemComponent,
    AboutComponent,
    MaskPipe,
    FilterHotelsPipe

  ],
  imports: [
    BrowserModule,
    PreloaderLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
