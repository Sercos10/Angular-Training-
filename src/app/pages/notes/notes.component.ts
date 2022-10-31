import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INote } from 'src/app/model/INote';
import { SharedModule } from 'src/app/components/sharedModule';
import { NotesService } from '../../services/notes.service';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FormNoteComponent } from '../../components/form-note/form-note.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule,HighlightDirective,
    FormNoteComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('colorpicker') cp!: ElementRef;
  public color:string = '#fff';
  public page = 'Inicio';

  public _editingNote!:INote;
  
  public notes:INote[] = [
    {id:1,title:'Nota1',description:'Hola Mundo'},
    {id:2,title:'Nota2',description:'Hola Mundo 2'}
  ];

  constructor(public notesS:NotesService) { }

  ngOnInit(): void {
  }

  refresh(){
    location.reload();
  }

  cambiaColor($event:any){
    console.log($event);
    this.color=$event.target.value;
  }

  public createNote(newNote:INote){

    let id=(Math.random()*1000)+1;
    this.notes.push(newNote);
  }
  
  public removingNote($event:INote){
    console.log("Eliminando nota");
    this.notesS.removeNote($event.id)
    /*
    let newNotes = this.notes.filter((n)=>{
      return n.id!=id;
    });
    this.notes = newNotes;
    */
  }

  public editingNote($event:INote){
    console.log("editando nota");
    this._editingNote=$event;
    document.getElementById("launchModal")?.click();
  }

  trackByNotes(index:number,item:INote){
    return item.id;
  }

  updateNote($event:any){
    this.notesS.updateNote($event); //<-new
    document.getElementById("closeModal")?.click();
    }

}
