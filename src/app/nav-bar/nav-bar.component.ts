import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private translateService:TranslateService,private router:Router){
    translateService.setDefaultLang('en');
    translateService.use(localStorage.getItem("lang") || 'en')
  }
  tokenPresent:boolean = false;
  lang:any

  ngOnInit(): void {
    
    this.lang = localStorage.getItem("lang") || 'en'
  }
  changeLg(lg:any){
    localStorage.setItem("lang",lg.value)
    console.log(lg.value);
    window.location.reload()
  }
  
  logout(){
      localStorage.removeItem('token')
      this.router.navigateByUrl('/').then()
      this.tokenPresent = false;
  }
}
