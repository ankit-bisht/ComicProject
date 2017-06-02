import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
usertype:number;
  Newuser:{
    username:String,
    name:String,
    password:String,
    usertype:Number
  }={
    username:'',
    name:'',
    password:'',
    usertype: 3
  }
  flag=0;
  constructor(public search: ConnectService, public router: Router) { }

  ngOnInit() {
  }
registerUser(){
  this.search.PostUser(this.Newuser).subscribe(res => {
    if(res.name!="ValidationError")
    {
      alert("Registration Successful");
       this.router.navigate(["/login"])
    }
    else
    {
      alert("All the Fields are mendatory")
    }
    })
}
}
