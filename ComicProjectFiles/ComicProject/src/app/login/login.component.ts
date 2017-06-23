import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { AdminComponent } from '../admin/admin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  valid: any;
  send;
  valid2;

  constructor(public auth: AuthService, public router1: Router) {

  }

  ngOnInit() {
  }
  check(form1) {
    this.auth.Postlogin(form1.value).subscribe(res => {
      this.valid = res.respData.data;
      this.valid2 = this.valid.usertype;
      localStorage.setItem('username', res.respData.data.username);
      localStorage.setItem('usertype', res.respData.data.usertype);
      if (this.valid2 == "1") {
        this.router1.navigate(['/super-admin']);

      }
      else if (this.valid2 == "2") {
        this.router1.navigate(['/admin']);

      }
      else if (this.valid2 == "3") {
        this.router1.navigate(['/user']);
      }

      else {
        alert("Username or Password is Incorrect! or User not verified!");
      }


    },

      errorr => {
        alert("Error");
      });



  }
}
