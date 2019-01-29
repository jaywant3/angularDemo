import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogin = true;
  constructor() { }

  ngOnInit() {
     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser.result) {
      this.userLogin= false;
    }  
  }

}
