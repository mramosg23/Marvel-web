import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { Antagonist1Component } from './Antagonist1/antagonist1.component';
import { Antagonist2Component } from './Antagonist2/antagonist2.component';
import { BlogComponent } from './Blog/blog.component';
import { HeaderComponent } from './Header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Antagonist1Component,
    Antagonist2Component,
    BlogComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
