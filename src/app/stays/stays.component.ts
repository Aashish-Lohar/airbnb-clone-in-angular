import { Component } from '@angular/core';

@Component({
  selector: 'app-stays',
  templateUrl: './stays.component.html',
  styleUrls: ['./stays.component.scss']
})
export class StaysComponent {

  constructor() {}
  ngOnInit(): void {}
  
  stays = [1,2,3,4,5,6,7,8]
  slides = [
  { img: "https://a0.muscache.com/im/pictures/3321347d-8c65-4d06-93f3-4c2e2162512c.jpg?im_w=720" },
  { img: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/2fd911ac-1015-4f51-9ed2-42228956ad8d.jpeg?im_w=720" },
  { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/6e6e20e5-11d6-4917-ba87-74c48bd3d38f.jpeg?im_w=720' },
  { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/60318684-d6a1-4d63-b471-95729f7a2e18.jpeg?im_w=720' },
  { img: "https://a0.muscache.com/im/pictures/3321347d-8c65-4d06-93f3-4c2e2162512c.jpg?im_w=720" },
  { img: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/2fd911ac-1015-4f51-9ed2-42228956ad8d.jpeg?im_w=720" }, 
];
slideConfig = { slidesToShow: 1, slidesToScroll: 1 ,dots:true,
  focusOnSelect: true,autoplay:false,infinite: false,};
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
