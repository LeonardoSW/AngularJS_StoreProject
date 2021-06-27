import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  whats(){
    window.open('https://api.whatsapp.com/send?phone=5543991921087&text=Ol%C3%A1%20%E2%98%BA%EF%B8%8F')
  }

  ngOnInit(): void {
  }

}
