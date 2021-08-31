import { Component, OnInit } from '@angular/core';
import { BOOK_LABEL__NAME } from './labelList';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  public title:string = '';
  public listOfLabel = BOOK_LABEL__NAME;
  public isVisible : boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  getLableName($event) {
    if($event !== ''){
      this.title = $event;
      this.isVisible = true;
    }    
  }

  receiveData($event) {
    console.log($event);
    this.isVisible = $event;
  }
}
