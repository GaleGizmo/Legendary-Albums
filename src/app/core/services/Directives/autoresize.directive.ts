import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoresize]'
})
export class AutoresizeDirective {

  constructor(private elementRef: ElementRef) { }
@HostListener('input')
onInput() {
  this.adjust();

}
ngOnInit() {
  this.adjust();

}

adjust() {
  const textarea = this.elementRef.nativeElement as HTMLTextAreaElement;
  textarea.style.overflow = 'hidden';
   textarea.style.height = 'auto';
   textarea.style.height = textarea.scrollHeight + 'px';
   textarea.style.width = '100%';
   textarea.style.resize  = 'none';
}
}
