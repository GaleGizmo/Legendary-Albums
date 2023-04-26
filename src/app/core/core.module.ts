import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AutoresizeDirective } from './services/Directives/autoresize.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AutoresizeDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AutoresizeDirective
  ]
})
export class CoreModule { }
