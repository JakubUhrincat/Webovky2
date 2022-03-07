import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-formular',
  templateUrl: './books-formular.component.html',
  styleUrls: ['./books-formular.component.css']
})
export class BooksFormularComponent implements OnInit {
  books:any=[];
  actualMenu: any;
  menu: any;

  constructor() { }

  ngOnInit(): void {
  }

}
