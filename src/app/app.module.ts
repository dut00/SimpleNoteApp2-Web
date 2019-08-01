import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotesComponent } from './components/notes/notes.component';

// wszystko z materiala jest importowane z jednego pliku
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
