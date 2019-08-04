import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor() { }

  ngOnInit() {
    this.notes = [
      {
        id: 1,
        title: 'Note one',
        // tslint:disable-next-line: max-line-length
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet fringilla purus vitae condimentum. Sed ut bibendum justo. Donec aliquet metus at dui tristique efficitur. Sed maximus tincidunt mauris nec aliquam..',
        isFavorite: false,
        linkToPic: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        tags: ['jeden', 'dwa', 'trzy']
      },
      {
        id: 2,
        title: 'Cosmos',
        // tslint:disable-next-line: max-line-length
        text: 'Integer volutpat nibh ut interdum gravida. Morbi non facilisis lacus. In blandit pretium semper. Donec sed posuere ex. Sed tempor lobortis lorem feugiat sollicitudin. Nullam eleifend velit non ornare volutpat. Nunc feugiat pretium mi, ut efficitur purus lobortis et.',
        isFavorite: true,
        linkToPic: 'https://futurism.com/wp-content/uploads/2016/08/galaxy-nebula-600x315.jpg',
        tags: null
      },
      {
        id: 3,
        title: 'Note three',
        text: 'Vestibulum quis pulvinar arcu. Aenean elit elit, tincidunt id sodales id, iaculis volutpat ipsum.',
        isFavorite: false,
        linkToPic: null,
        tags: null
      },
      {
        id: 4,
        title: null,
        text: 'Vestibulum quis pulvinar arcu. Aenean elit elit, tincidunt id sodales id, iaculis volutpat ipsum.',
        isFavorite: false,
        linkToPic: 'https://www.mathworks.com/help/matlab/dft_definition.png',
        tags: ['bieda']
      }
    ];
  }

}
