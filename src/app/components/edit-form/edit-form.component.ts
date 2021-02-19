import {Component, Input, OnInit} from '@angular/core';
import {IntentList} from "../../models/intent-list.model";
import {Subscription} from "rxjs";
import {IntentService} from "../../services/intent.service";
import {CodeEditorViewComponent} from "../code-editor-view/code-editor-view.component";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  apiAddr = 'http://intenteditor.aadev.ml/';
  intentList: IntentList;
  intentName = '';
  inSent = '';
  successResponse = '';
  errorResponse = '';
  intentCode = '';
  intentLoaded: boolean;
  index = 0;
  subs: Subscription[] = [];

  @Input() codeEditor:CodeEditorViewComponent ;

  constructor(private intentService: IntentService) {
    this.intentLoaded = null;
    this.getAllIntent();
    this.intentService.setApi(this.apiAddr);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => {subscription.unsubscribe(); });
  }

  getAllIntent() {
    const sub = this.intentService.getlistIntents().subscribe(
      (data) => { this.intentList = data; this.intentLoaded = true; },
      error => { this.intentLoaded = false; }
    );
    return this.subs.push(sub);
  }

  next() {
    this.getAllIntent();
    this.index++;
    const data = this.intentList[this.index];
    this.intentName = data.intentName;
    this.getIntent()
  }

  previous() {
    this.getAllIntent();
    this.index--;
    const data = this.intentList[this.index];
    this.intentName = data.intentName;
    this.getIntent();
  }

  setIntent() {
    const sub = this.intentService.editIntent(this.intentName, this.inSent, this.successResponse, this.errorResponse,this.codeEditor.code).subscribe(
      data => { this.intentLoaded = true; },
      error => { this.intentLoaded = false; }
    );

    return this.subs.push(sub);
  }

  getIntent() {
    const sub = this.intentService.getIntent(this.intentName).subscribe(
      (data) => {
        this.intentName = data.intentName;
        this.inSent = data.inSent;
        this.successResponse = data.successResponse;
        if(data.errorResponse==null){
          this.errorResponse = "";
        }else {
          this.errorResponse = data.errorResponse;
        }
        this.intentLoaded = true;
        this.codeEditor.code = data.code;
        },
      error => { this.intentLoaded = false; }
    );

    return this.subs.push(sub);
  }

  deleteIntent() {
    const sub = this.intentService.deleteIntent(this.intentName).subscribe(
      (data) => { this.intentName = ''; this.inSent = ''; this.successResponse = ''; this.errorResponse = ''; this.intentLoaded = true; },
      error => { this.intentLoaded = false; }
    );

    return this.subs.push(sub);
  }
}
