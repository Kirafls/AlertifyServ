import { Component,OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public alertifyservice:AlertifyService){

  }
  alerta(){
    alert("funciona");
    this.alertifyservice.error("mal ")
  }
  ngOnInit(): void {
    
  }
}
