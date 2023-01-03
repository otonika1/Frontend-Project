import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  nonExistent: boolean = false;
  login:boolean = true
  register:boolean = false
  constructor(private auth:AuthService,private router:Router,private http:HttpClient) { }
  data:any
  email = new FormControl('',[Validators.email])
  password = new FormControl('')
  
  ngOnInit(): void {
    //get users
    this.auth.getuser().subscribe(res => {console.log(res);this.data=res})
  }
  //reg switcher
  reg(){
    this.register = true
    this.login = false
  }
  //login switcher
  log(){
    this.login = true
    this.register = false
  }
  //login
  save(){
    for(let i of this.data){
      if(i.email == this.email.value && i.password == this.password.value){
        localStorage.setItem('token', i.token)
        this.router.navigate(['info'])
        this.nonExistent = false;
      }
      else{
        this.nonExistent = true;
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
      token: new FormControl(uuidv4() + Math.random() *100),
    }
  )
  //post user
  add(){
     //if passwords are equal have to be added
    this.auth.create(this.form.value).subscribe(res => {console.log(res);
    })
  }
}
