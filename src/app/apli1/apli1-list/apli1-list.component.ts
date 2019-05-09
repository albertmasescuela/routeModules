import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apli1-list',
  templateUrl: './apli1-list.component.html',
  styleUrls: ['./apli1-list.component.scss']
})
export class Apli1ListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/apli1/detail']);
  }
}
