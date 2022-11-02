import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginS:LoginService) { }

  ngOnInit(): void {
    console.log("navbar init");
  }

  public logout(){
    this.loginS.signOut();
    }

}
