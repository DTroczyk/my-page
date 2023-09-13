import { Component, OnInit } from '@angular/core';
import { MENU_OPTIONS } from 'src/app/config/menu-options';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public menuOptions = MENU_OPTIONS;

  constructor() {}

  ngOnInit(): void {}
}
