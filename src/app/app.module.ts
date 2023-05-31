import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PictureGaleryComponent } from './picture-galery/picture-galery.component';
import { CommercialComponent } from './commercial/commercial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    HeaderComponent,
    AboutMeComponent,
    PictureGaleryComponent,
    CommercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
