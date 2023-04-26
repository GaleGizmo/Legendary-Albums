import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { SingleComponent } from './components/single/single.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByYearPipe } from './pipes/order-by-year.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CloudinaryModule } from '@cloudinary/ng';
import { OrderByTitlePipe } from './pipes/order-by-title.pipe';
import { AutoresizeDirective } from '../core/services/Directives/autoresize.directive';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    FormularioComponent,
    SingleComponent,
    FilterPipe,
    OrderByYearPipe,
    OrderByTitlePipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxDropzoneModule,
    CloudinaryModule,
    CoreModule,
    
    
  ],
  exports:[
    FormularioComponent,
    SingleComponent,
    FilterPipe,
    OrderByYearPipe,
    OrderByTitlePipe
  ]
})
export class SharedModule { }
