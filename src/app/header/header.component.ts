import { Component,ElementRef,HostListener,Output,Renderer2, ViewChild, EventEmitter, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit  {

  @Output() signupOpen = new EventEmitter<boolean>()

  profileOpen:boolean= false;

  @ViewChild('userMenu')
  userMenu!:ElementRef;

  @ViewChildren('navBtn')
  mobileNavBtn!:QueryList<ElementRef>;

  constructor(private renderer:Renderer2,private elementRef:ElementRef){}

  ngOnInit(){

  }

  ngAfterViewInit(){
    console.log(this.mobileNavBtn);
    // this.mobileNavBtn.forEach((el,i)=>{
    //   el.nativeElement.classList.remove('active')
    // })
    
  }

  addRemoveActive(index:number){
    console.log(this.mobileNavBtn);
    this.mobileNavBtn.forEach((el,i)=>{
      el.nativeElement.classList.remove('active-nav');
      if(i==index){
        el.nativeElement.classList.add('active-nav');
      }
    })
    if(index==2){
      this.signupOpen.emit(true);
    }
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement:any) {
    const clickedInside = this.userMenu.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.profileOpen=false;
    }
    else{
      this.profileOpen=!this.profileOpen;
    }
  }

  onClickSignup(){
    console.log('click');
    
    this.signupOpen.emit(true);
  }


}
