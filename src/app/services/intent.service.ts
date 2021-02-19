import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IntentCommand} from '../models/intent-command.model';
import {HttpClient} from '@angular/common/http';
import {IntentList} from '../models/intent-list.model';

@Injectable({
  providedIn: 'root'
})
export class IntentService {
  private serverUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://intenteditor.aadev.ml/';
  }

  setApi(addr: string){
    this.serverUrl= addr;
  }
  getlistIntents(): Observable<IntentList> {
    const newURL = this.serverUrl + 'intentList/get';
    return this.http.get<IntentList>(newURL);
  }

  updateListIntents(intentList: IntentList): any {
    const newURL = this.serverUrl + 'intentList/update';
    return this.http.post<any>(newURL, intentList);
  }

  editIntent(intentName: string, inSent: string, successResponse: string, errorResponse: string, code: string): any {
    const newURL = this.serverUrl + 'intent/edit';
    const command = new IntentCommand();
    command.intentName = intentName;
    command.inSent = inSent;
    command.successResponse = successResponse;
    command.errorResponse = errorResponse;
    command.code = code;
    return this.http.post<any>(newURL, command);
  }

  getIntent(intentName: string): Observable<IntentCommand> {
    const newURL = this.serverUrl + 'intent/get';
    let ret = this.http.post<IntentCommand>(newURL, intentName);
    return ret;
  }

  deleteIntent(intentName: string): any {
    const newURL = this.serverUrl + 'intent/delete';
    return this.http.post<IntentCommand>(newURL, intentName);
  }
}

