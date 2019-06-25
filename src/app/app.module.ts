import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { appRouterModule } from './route';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts'

import { HomeService } from './service/home.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UploadDataComponent } from './component/upload-data/upload-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    appRouterModule,
    HttpClientModule,
    HttpModule,
    GoogleChartsModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
