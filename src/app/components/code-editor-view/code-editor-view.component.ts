import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';

@Component({
  selector: 'app-code-editor-view',
  templateUrl: './code-editor-view.component.html',
  styleUrls: ['./code-editor-view.component.css']
})
export class CodeEditorViewComponent implements OnInit {
  baseCode="def execute(Core):\n" +
      "  ##Write Here your code\n" +
      "  ##You can peek some parameters from the input sentence with Core.getArgs(argumentName) if defined it in the input sentence\n" +
      "  ###Example\n" +
      "  ##InputSentence: Search {item} on {searchEngine}\n" +
      "  ##You defined the paramenter \"item\" and the paramenter \"searchEngine\"\n" +
      "  pass";
  code="";


  readOnly = false;
  options = {
    lineNumbers: true,
    mode: 'python',
    theme: 'midnight'

  };

  handleChange($event: Event): void {
    this.code = $event.toString();
  }

  resetCode(): void {
    this.code = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

  loadBasicCode(): void {
    if(this.code ===''){
      this.code=this.baseCode;
    }else{
      console.log("Function not empty");
    }
  }

}
