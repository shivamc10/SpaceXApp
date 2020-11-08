import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { VehicleDetailsComponent } from './component/vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
