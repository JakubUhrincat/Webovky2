import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowings-formular',
  templateUrl: './borrowings-formular.component.html',
  styleUrls: ['./borrowings-formular.component.css']
})
export class BorrowingsFormularComponent implements OnInit {
  borrowings:any=[];
  actualMenu: any;
  menu: any;

  constructor() { }

  ngOnInit(): void {
  }

}
