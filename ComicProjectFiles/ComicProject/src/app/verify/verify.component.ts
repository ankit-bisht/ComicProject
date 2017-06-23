import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  verifyitem;
  VerifyCode;
  constructor(public search: ConnectService, public router: Router) { }

  ngOnInit() {
  }
  verification() {
    this.search.VerifyCode(this.verifyitem).subscribe(res => {
      if (res.data != "wrong code") {
        if (res.data.username) {
          alert("You already belong to the comic city!")
        }
        else {
          alert('Welcome to the comic city!');
          this.router.navigate(["/login"]);
        }

      }
      else {
        alert('Are you sure your code is right?');
      }
    })
  }
}
