import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private filterPopup = new BehaviorSubject<boolean>(true);
  private filterPopupObservable = this.filterPopup.asObservable();

  constructor() { }

  getFilterPopupState(){
    return this.filterPopupObservable
  }

  setFilterPopupState(value:boolean){
    return this.filterPopup.next(value);
  }

}
