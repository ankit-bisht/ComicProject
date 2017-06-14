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
    usertype:Number,
    email:String,
    code:String,
    phoneNumber:String
  }={
    username:'',
    name:'',
    password:'',
    usertype: 3,
    email:'',
    code:'',
    phoneNumber:''
  };
  flag=0;
  text = "";
  constructor(public search: ConnectService, public router: Router) { }

  ngOnInit() {

  }
  makeid()
{
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        this.text += possible.charAt(Math.floor(Math.random() * possible.length));

    return this.text;
}
registerUser(){
  window.open("http://localhost:4200/verify", "", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  this.makeid();
this.Newuser.code=this.text;
  this.search.PostUser(this.Newuser).subscribe(res => {
    if(res.name!="ValidationError")
    {
      // alert("Registration Successful");
       this.router.navigate(["/login"])
    }
    else
    {
      alert("All the Fields are mendatory")
    }
    })
}
}
