import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  signupobj:any ={
    email:'',
    password:''
  };


  
  constructor() {

  }

  ngOnInit(): void {
   
  }
  
  onsignup(){
  
    localStorage.setItem('email',this.signupobj.email);
    localStorage.setItem('password',this.signupobj.password);

    alert("user registered successfully...!!!");
    location.href="/login"



  }
}
