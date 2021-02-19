import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS , HttpClientModule} from '@angular/common/http';
import { Interceptor } from './interceptor';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { MainComponent } from './components/main/main.component';
import { CodeEditorViewComponent } from './components/code-editor-view/code-editor-view.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { IntentCardComponent } from './components/intent-card/intent-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent,
    TableViewComponent,
    MainComponent,
    CodeEditorViewComponent,
    IntentCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CodemirrorModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule {}


