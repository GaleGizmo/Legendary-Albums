import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { SingleComponent } from './components/single/single.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByYearPipe } from './pipes/order-by-year.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { CloudinaryModule } from '@cloudinary/ng';
import { OrderByTitlePipe } from './pipes/order-by-title.pipe';
import { AutoresizeDirective } from '../core/services/Directives/autoresize.directive';
import { CoreModule } from '../core/core.module';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    FormularioComponent,
    SingleComponent,
    FilterPipe,
    OrderByYearPipe,
    OrderByTitlePipe,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CloudinaryModule,
    CoreModule,
    MatDialogModule,
  ],
  exports: [
    FormularioComponent,
    SingleComponent,
    FilterPipe,
    OrderByYearPipe,
    OrderByTitlePipe,
    ConfirmModalComponent
  ],
})
export class SharedModule {}
