import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  public disappear():void{
    document.querySelectorAll(".modalMenu").forEach((el)=>{
      el.classList.toggle("disappear")
    })
  }

}
