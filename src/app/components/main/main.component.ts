import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tableView: boolean;
  editView: boolean;

  tableTrigger(): void {
    this.tableView = true;
    this.editView = false;
  }

  editTrigger(): void {
    this.editView = true;
    this.tableView = false;
  }

  ngOnInit(): void {
    this.tableView = true;
    this.editView = null;
  }

  constructor() {

  }
}
