import { Component, OnInit, Input, Inject} from '@angular/core';
import { Note } from '../../models/Note';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

export interface DialogData {
  id: string;
  title: string;
}


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note;
  @Input() icon: string;

  id: string;
  title: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.icon = 'favorite';

    if (this.note.isFavorite === true) {
      this.icon = 'favorite_border';
    }
  }

  public addToFavorites(note: Note): void {
    note.isFavorite = !note.isFavorite;

    if (this.note.isFavorite === true) {
      this.icon = 'favorite_border';
    } else {
      this.icon = 'favorite';
    }
  }

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '180px',
      width: '250px',
      // data: {id: this.id, animal: this.title}
      data: {note: this.note}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Result:' + result);
      // this.note.id = result;
    });
  }
}

