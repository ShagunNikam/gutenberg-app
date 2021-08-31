import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  @Input() title: string
  @Output() dataEvent = new EventEmitter<any>();
  public getData: any;
  public showHomePage: boolean = false;
  public name: string = '';
  public getImgUrl: any;
  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.getAllBookList();
  }

  public getAllBookList() {
    this.bookService.getDetails().subscribe((response) => {
      this.getData = response.results;
      console.log(this.getData)
    })
  }

  public backToPage() {
    this.dataEvent.emit(this.showHomePage);
  }

  public clearInputValue(){
    this.name = '';
  }
}
