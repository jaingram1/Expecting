import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoodComponent } from './food/food.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { OliveComponent } from './foods/olive/olive.component';
import { McdoComponent } from './foods/mcdo/mcdo.component';
import { TacoComponent } from './foods/taco/taco.component';
import { RoadComponent } from './foods/road/road.component';
import { PaneraComponent } from './foods/panera/panera.component';
import { AppleComponent } from './foods/apple/apple.component';
import { ChilisComponent } from './foods/chilis/chilis.component';
import { ChipotleComponent } from './foods/chipotle/chipotle.component';
import { FactoryComponent } from './foods/factory/factory.component';
import { ChangComponent } from './foods/chang/chang.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    DoctorComponent,
    ResourcesComponent,
    HomeComponent,
    FooterComponent,
    OliveComponent,
    McdoComponent,
    TacoComponent,
    RoadComponent,
    PaneraComponent,
    AppleComponent,
    ChilisComponent,
    ChipotleComponent,
    FactoryComponent,
    ChangComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
