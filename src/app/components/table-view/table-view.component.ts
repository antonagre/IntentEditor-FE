import { Component, OnInit } from '@angular/core';
import {IntentList} from "../../models/intent-list.model";
import {Subscription} from "rxjs";
import {IntentService} from "../../services/intent.service";

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  intentList: IntentList;
  intentLoaded: boolean;
  showResponses: boolean;
  subs: Subscription[] = [];
  constructor(private intentService: IntentService) { }

  ngOnInit(): void {
    this.showResponses=false;
    this.getAllIntent();
  }

  getAllIntent() {
    const sub = this.intentService.getlistIntents().subscribe(
      (data) => { this.intentList = data;this.intentLoaded=true},
      error => { this.intentLoaded = false; }
    );

    return this.subs.push(sub);
  }

  setAllIntent() {
    const sub = this.intentService.updateListIntents(this.intentList).subscribe(
      data => { this.intentLoaded = true; },
      error => { this.intentLoaded = false; }
    );

    return this.subs.push(sub);
  }

  cleanTable() {
    this.intentList = null;
  }
}
