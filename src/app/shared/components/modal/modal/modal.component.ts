import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy{
  isOpen=false;
  private subscription!: Subscription 

  constructor(public modalService: ModalService){}

  ngOnInit():void {
    this.subscription = this.modalService.show$.subscribe((id:string|null) => {
      this.isOpen=id==='deleteAlbumModal'
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
