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

  constructor(public auth: AuthService,public router1:Router) {

  }

  ngOnInit() {
  }
  check(form1) {
    console.log(form1.value.username);
    console.log(form1.value.password);

    this.auth.Postlogin(form1.value).subscribe(res => {
      this.valid =res.respData.data;
      console.log(res);
      this.valid2 = this.valid.usertype;
      localStorage.setItem('role',this.valid2);
     console.log(localStorage.getItem('usertype'));
        if (this.valid2 == "1") {
          console.log("superadmin");
          this.router1.navigate(['/super-admin']);

        }
        else if (this.valid2 == "2") {
          console.log("admin");
          this.router1.navigate(['/admin']);

        }
        else if (this.valid2 == "3") {
          console.log("user");
          this.router1.navigate(['/user']);
        }

      else {
        console.log("user does not exist");
        alert("Username or Password is Incorrect!");
      }


    },

      errorr => {
        alert("Error");
      });



  }
}
