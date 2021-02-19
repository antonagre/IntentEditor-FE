import {Component, Input, OnInit} from '@angular/core';
import {IntentCommand} from "../../models/intent-command.model";

@Component({
  selector: 'app-intent-card',
  templateUrl: './intent-card.component.html',
  styleUrls: ['./intent-card.component.css']
})
export class IntentCardComponent implements OnInit {
  @Input() intent:IntentCommand;
  @Input() globalShow:boolean;

  public showResponses:boolean;
  public showCodeEditor:boolean;

  constructor() { }

  ngOnInit(): void {
    this.showResponses=false;
  }

  toggleResponse(){
    this.showResponses=!this.showResponses;
  }

}
