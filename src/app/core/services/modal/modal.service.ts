import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _show$ = new BehaviorSubject<string | null>(null);
  show$ = this._show$.asObservable();

  constructor() {}

  open(id: string) {
    this._show$.next(id);
  }

  close() {
    this._show$.next(null);
  }
  get showSubject() {
    return this._show$;
  }
}
