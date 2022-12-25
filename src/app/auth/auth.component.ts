import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login:boolean = true
  register:boolean = false
  constructor(private auth:AuthService,private router:Router) { }
  data:any
  email = new FormControl('')
  password = new FormControl('')

  ngOnInit(): void {
    console.log(this.login,this.register);
    this.auth.getuser().subscribe(res => {console.log(res);this.data=res})
  }
  reg(){
    this.register = true
    this.login = false
  }
  log(){
    this.login = true
    this.register = false
  }
  save(){
    for(let i of this.data){
      if(i.email == this.email.value && i.password == this.password.value){
        this.router.navigate(['info'])
      }
    }
  }
  form = new FormGroup(
    { 
      name:new FormControl(''),
      lastname:new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
      token: new FormControl(Math.random() * (1000 - 1+1)-1),
    }
  )
  add(){
    console.log(this.form.value);
    
  }
}
