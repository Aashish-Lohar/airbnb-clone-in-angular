import { Component, EventEmitter, Output,Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Output() signupCloseEvent = new EventEmitter<boolean>();
  @ViewChild('signup')
  signup!:ElementRef;
  constructor(private renderer:Renderer2, private el:ElementRef){}

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.renderer.removeClass(this.signup.nativeElement,'top-full');
    this.renderer.addClass(this.signup.nativeElement,'top-12')
  }
  
  signupClose(){
    console.log('signupClose() clicked');
    this.renderer.addClass(this.signup.nativeElement,'top-full')
    this.signupCloseEvent.emit(false);
  }
}
