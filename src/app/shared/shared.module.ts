import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumdsComponent } from './breadcrumds/breadcrumds.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    BreadcrumdsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    BreadcrumdsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
