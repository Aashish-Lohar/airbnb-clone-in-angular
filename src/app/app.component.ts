import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'airbnb';
  signupPopUp:boolean = false;

  // data from header to app component 
  onSignupClick(event:boolean){
    this.signupPopUp = event;
  }
  // data from signup to app component 
  onSignupClose(event:boolean){
    console.log('onSignupClose in parent', event);
    this.signupPopUp = event;
  }
}
