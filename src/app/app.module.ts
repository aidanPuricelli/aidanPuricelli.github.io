import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroImgComponent } from './home/hero-img/hero-img.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroImgComponent,
    NavbarComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
