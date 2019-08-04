import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// wszystko z materiala jest importowane z jednego pliku
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotesComponent } from './components/notes/notes.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteCardComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent, DeleteDialogComponent]
})
export class AppModule {

}
