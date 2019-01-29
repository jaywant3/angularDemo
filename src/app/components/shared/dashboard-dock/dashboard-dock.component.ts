import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-dock',
  templateUrl: './dashboard-dock.component.html',
  styleUrls: ['./dashboard-dock.component.css']
})
export class DashboardDockComponent implements OnInit {

  @Input('title') title: string;
  @Input('value') value: number;
  @Input('border') border: string;
  @Input('text') text: string;

  constructor() { }

  ngOnInit() {
  }

}
