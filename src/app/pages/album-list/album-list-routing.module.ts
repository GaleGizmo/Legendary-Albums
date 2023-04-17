import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list.component';

const routes: Routes = [{
  path:"",
  pathMatch: "full",
  component:AlbumListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumListRoutingModule { }
