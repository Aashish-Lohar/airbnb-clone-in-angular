import { Component,ElementRef,HostListener,Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  profileOpen:boolean= false;
  @ViewChild('userMenu')
  userMenu!:ElementRef
  constructor(private renderer:Renderer2,private elementRef:ElementRef){}
  ngOnInit(){
    // this.renderer.listen('document','click', (event)=>{
    //   const targetElement = event.target as ElementRef;
    //   const excludedElement = this.userMenu;
    //   if(targetElement !== excludedElement){
    //     this.profileOpen=false;
    //   }
    // })
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
}
