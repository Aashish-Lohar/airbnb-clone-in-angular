import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @ViewChildren('slide')
  myClassElements!: QueryList<ElementRef>;
  constructor(private renderer:Renderer2) {
    // setTimeout(() => {
    //   let button = document.querySelector(".slick-prev");
    //   let img = document.createElement("img");
    //   img.src = "../../assets/prev.png";
    //   button!.innerHTML = "";
    //   button!.appendChild(img);    
    // }, 1000);
  
    // setTimeout(() => {
    //   let button = document.querySelector(".slick-next");
    //   let img = document.createElement("img");
    //   img.src = "../../assets/next.png";
    //   button!.innerHTML = "";
    //   button!.appendChild(img);    
    // }, 1000);
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
      let button1 = document.querySelector(".slick-prev");
      let img1 = document.createElement("img");
      img1.src = "../../assets/prev.png";
      button1!.innerHTML = "";
      button1!.appendChild(img1);    

      let button = document.querySelector(".slick-next");
      let img = document.createElement("img");
      img.src = "../../assets/next.png";
      button!.innerHTML = "";
      button!.appendChild(img);    
  }

  addRemove(i:any){
    this.myClassElements.forEach((ele, index) => {
      if (index !== i) {
        this.renderer.removeClass(ele.nativeElement, 'active');
        ele.nativeElement.addEventListener('mouseenter', () => {
          ele.nativeElement.style.opacity = 1;
        })
        ele.nativeElement.addEventListener('mouseleave', () => {
          ele.nativeElement.style.opacity = 0.6;
        })
      }
    });

    this.renderer.addClass(this.myClassElements.toArray()[i].nativeElement, 'active');
    this.myClassElements.toArray()[i].nativeElement.style.opacity=1;
  }
  

  stay_types = [
    {
      type:'farms',
      imgUrl:'../../assets/stay_types/farm.jpg'
    },
    {
      type:'Amazing Views',
      imgUrl:'../../assets/stay_types/amazing.jpg'
    },
    {
      type:'beach',
      imgUrl:'../../assets/stay_types/beach.jpg'
    },
    {
      type:'camping',
      imgUrl:'../../assets/stay_types/camping.jpg'
    },
    {
      type:'castles',
      imgUrl:'../../assets/stay_types/castles.jpg'
    },
    {
      type:'countryside',
      imgUrl:'../../assets/stay_types/countryside.jpg'
    },
    {
      type:'domes',
      imgUrl:'../../assets/stay_types/doms.jpg'
    },
    {
      type:'farms',
      imgUrl:'../../assets/stay_types/farm.jpg'
    },
    {
      type:'tinyhomes',
      imgUrl:'../../assets/stay_types/tinyhomes.jpg'
    },
    {
      type:'OMG!',
      imgUrl:'../../assets/stay_types/ufo.jpg'
    },
    {
      type:'Amazing Views',
      imgUrl:'../../assets/stay_types/amazing.jpg'
    },
    {
      type:'beach',
      imgUrl:'../../assets/stay_types/beach.jpg'
    },
    {
      type:'camping',
      imgUrl:'../../assets/stay_types/camping.jpg'
    },
    {
      type:'castles',
      imgUrl:'../../assets/stay_types/castles.jpg'
    },
    {
      type:'countryside',
      imgUrl:'../../assets/stay_types/countryside.jpg'
    },
    {
      type:'domes',
      imgUrl:'../../assets/stay_types/doms.jpg'
    },
    {
      type:'farms',
      imgUrl:'../../assets/stay_types/farm.jpg'
    },
    {
      type:'tinyhomes',
      imgUrl:'../../assets/stay_types/tinyhomes.jpg'
    },
    {
      type:'OMG!',
      imgUrl:'../../assets/stay_types/ufo.jpg'
    },
    {
      type:'Amazing Views',
      imgUrl:'../../assets/stay_types/amazing.jpg'
    },
    {
      type:'beach',
      imgUrl:'../../assets/stay_types/beach.jpg'
    },
    {
      type:'camping',
      imgUrl:'../../assets/stay_types/camping.jpg'
    },
    {
      type:'castles',
      imgUrl:'../../assets/stay_types/castles.jpg'
    },
    {
      type:'countryside',
      imgUrl:'../../assets/stay_types/countryside.jpg'
    },
    {
      type:'domes',
      imgUrl:'../../assets/stay_types/doms.jpg'
    },       
]

slideConfig = { slidesToShow: 11, slidesToScroll: 11, infinite: false,swipe:false};
// addSlide() {
//   this.stay_types.push({ img: 'http://placehold.it/350x150/777777' });
// }
slickInit(e: any) {
  // console.log('slick initialized');
}
breakpoint(e: any) {
  // console.log('breakpoint');
}
afterChange(e: any) {
  // console.log('afterChange');
}
beforeChange(e: any) {
  // console.log('beforeChange');
}


}
