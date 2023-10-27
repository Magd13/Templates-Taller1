  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppComponent } from './app.component';
  import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
  import { SharedModule } from './shared/shared.module';
  import { WebModule } from './web/web.module';
  import { AuthModule } from './auth/auth.module';


  @NgModule({
    declarations: [
      AppComponent,
      NoPageFoundComponent
    ],
    imports: [
      BrowserModule,
      SharedModule,
      AuthModule,
      WebModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
