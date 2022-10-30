import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNoteComponent } from 'src/app/components/form-note/form-note.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule,FormNoteComponent],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
