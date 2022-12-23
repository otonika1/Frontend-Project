import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  lang:any
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || 'en'
  }
  changeLg(lg:any){
    localStorage.setItem("lang",lg.value)
    console.log(lg.value);
    window.location.reload()
  }
}
