import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  src = 'https://source.unsplash.com/random';
  url = 'https://api.kanye.rest/';
  mensaje='';

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {

    console.log("Inicio");
    /*
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.mensaje=data.quote;
    })
    .catch(err => console.error(err));
    console.log("final");

    /*
    this.http.get(this.url).subscribe((response)=>{
      console.log(response);
    })
    */
   this.http.get(this.url,{observe: 'events', reportProgress:true}).subscribe((e) =>{
      let event = e as any;
      if((event.type as any) == HttpEventType.DownloadProgress){
        console.log(event.loaded);
        console.log(event.total);
      }
      if((event.type as any) == HttpEventType.UploadProgress){
        console.log(event.loaded);
        console.log(event.total);
      }
      if(event.type === HttpEventType.Response){
        this.mensaje=event.body.quote;
        console.log(event.body);
        console.log("final");
      }
   });
  }

}
