import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PictureGaleryComponent } from './picture-galery/picture-galery.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { LayoutState } from 'src/store/layout/layout.state';
import { NgxsModule } from '@ngxs/store';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    HeaderComponent,
    AboutMeComponent,
    PictureGaleryComponent,
    CommercialComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    FormsModule,
    GalleriaModule,
    HttpClientModule,
    ImageModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    NgxsModule.forRoot([LayoutState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
