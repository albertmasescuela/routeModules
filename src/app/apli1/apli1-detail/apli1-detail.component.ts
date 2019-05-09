import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apli1-detail',
  templateUrl: './apli1-detail.component.html',
  styleUrls: ['./apli1-detail.component.scss']
})
export class Apli1DetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('DETAIL SHOW');
  }
}
