import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MaprotationComponent } from './maprotation/maprotation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCxiWP5u2M6oYBVKGwl9oeh6pCee6qX2FM',
  authDomain: 'apex-nexus.firebaseapp.com',
  projectId: 'apex-nexus',
  storageBucket: 'apex-nexus.appspot.com',
  messagingSenderId: '7924265933',
  appId: '1:7924265933:web:f966726f80610c53530a84',
  measurementId: 'G-YCETMZ2Y7Q',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    MaprotationComponent,
    HomeComponent,
    FooterComponent,
    PlayerstatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
