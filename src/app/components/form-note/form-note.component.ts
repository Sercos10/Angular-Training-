import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { INote } from 'src/app/model/INote';
import { NotesComponent } from 'src/app/pages/notes/notes.component';

@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  public form:FormGroup;
  //@ViewChild('title') title!:ElementRef;
  //public description!:string;

  constructor(private fb:FormBuilder,
    private noteS:NotesComponent) {

    /*
    this.form=new FormGroup({
      title:new FormGroup('')
    })
    */
    this.form = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(4)]],
      description:['']
    })
   }

  ngOnInit(): void {
  }
  submit(): void{
    console.log(this.form);
    let newNote:INote = {
      title: this.form.value.title,
      description: this.form.value.description
    }
    this.noteS.createNote(newNote);
    this.form.reset();
  }

}
