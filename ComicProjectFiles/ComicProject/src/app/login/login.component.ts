import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { AuthService } from '../auth.service';
import { SuperAdminComponent } from '../super-admin/super-admin.component';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username1:string;
  password1:string;
  constructor(public send:ConnectService,public sender:AuthService) {
    this.username1;
    this.password1;
  }
  ngOnInit() {
  }
  checkUser()
  {
    console.log(this.username1);
    console.log(this.password1);
    this.send.verify().subscribe(data=>{
    this.sender.verifier(data);
  })
}
}
