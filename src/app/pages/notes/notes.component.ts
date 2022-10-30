import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INote } from 'src/app/model/INote';
import { NoteComponent } from 'src/app/components/note/note.component';
import { SharedModule } from 'src/app/components/sharedModule';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('colorpicker') cp!: ElementRef;
  public color:string = '#fff';
  public page = 'Inicio';
  
  public notes:INote[] = [
    {id:1,title:'Nota1',description:'Hola Mundo'},
    {id:2,title:'Nota2',description:'Hola Mundo 2'}
  ];

  constructor() { }

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
  
  public removingNote(id:any){
    console.log("Eliminando nota");
    let newNotes = this.notes.filter((n)=>{
      return n.id!=id;
    });
    this.notes = newNotes;
  }

  public editingNote($event:INote){
    console.log("editando nota");
    console.log($event);
  }

  trackByNotes(index:number,item:INote){
    return item.id;
  }

}
