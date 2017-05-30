import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';



@Injectable()
export class AuthService implements CanActivate {
  usertype;
  constructor(public router1:Router) { }
  verifier(info){
    console.log(info.status)
    if(info.status==false)
    {
      alert("Something Went Wrong! Try Again.")
    }
    else{
      this.usertype=info.respData.data;
      localStorage.setItem("usertype",this.usertype)
      if(this.usertype=="2")
      { 
        this.router1.navigate(['/admin'])
      }
      else{
        if(this.usertype=="1")
        this.router1.navigate(['/super-admin'])
      }

      
    }
  }
  
  canActivate(route: ActivatedRouteSnapshot) {
    var x= route.data;
    console.log(x)
    if(x[0].usertype==localStorage.getItem("usertype"))
    {
      return true;
    }
    else
    {
      return false;
    } 
    
  }
}