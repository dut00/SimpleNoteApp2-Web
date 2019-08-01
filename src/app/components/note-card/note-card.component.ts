import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
    this.icon = 'favorite';

    if (this.note.isFavorite === true) {
      this.icon = 'favorite_border';
    }
  }

  public addToFav(event: Event, note: Note) {
    note.isFavorite = !note.isFavorite;

    if (this.note.isFavorite === true) {
      this.icon = 'favorite_border';
    } else {
      this.icon = 'favorite';
    }
  }
}
