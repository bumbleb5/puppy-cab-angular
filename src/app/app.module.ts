import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { HomeModule } from './modules/home/home.module';

// Componenets
import { AppBarComponent } from './components/app-bar/app-bar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanTransportComponent } from './pages/plan-transport/plan-transport.component';
import { ManageRailroadComponent } from './pages/manage-railroad/manage-railroad.component';
import { ManageTripsComponent } from './pages/manage-trips/manage-trips.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        HomePageComponent,
        PlanTransportComponent,
        ManageRailroadComponent,
        ManageTripsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule, 
        MatButtonModule,
        MatIconModule,
        HomeModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
