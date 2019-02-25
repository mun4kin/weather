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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpInterceprorService } from './common/services/http-intercepror.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { redusers } from '../store';
import { EffectsModule } from '@ngrx/effects';
import { HotelsEffects } from '../store/effects/hotel.effect';

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
    PreloaderLibModule,
    HttpClientModule,
    StoreModule.forRoot(redusers),
    EffectsModule.forRoot([HotelsEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument( )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceprorService,
      multi: true
    },

    {
      provide: 'BASE_URL',
      useValue: environment.baseUrl
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
