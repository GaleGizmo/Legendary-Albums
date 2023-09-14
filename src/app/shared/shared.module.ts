import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { SingleComponent } from './components/single/single.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByYearPipe } from './pipes/order-by-year.pipe';


import { OrderByTitlePipe } from './pipes/order-by-title.pipe';

import { CoreModule } from '../core/core.module';
import { ModalComponent } from './components/modal/modal/modal.component';



@NgModule({
  declarations: [
    FormularioComponent,
    SingleComponent,
    FilterPipe,
    OrderByYearPipe,
    OrderByTitlePipe,
    ModalComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

   
    CoreModule,
    
    
  ],
  exports:[
    FormularioComponent,
    SingleComponent,
    FilterPipe,
    OrderByYearPipe,
    OrderByTitlePipe,
    ModalComponent
  ]
})
export class SharedModule { }
