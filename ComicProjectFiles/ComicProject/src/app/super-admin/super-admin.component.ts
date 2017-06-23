import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Pipe, PipeTransform } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  // transform (value,args){
  //   if(!args[0]){
  //     return value;
  //   }
  //   else if (value){
  //     return value.filter(item => {
  //       for (let key in item){
  //         if ((typeof item[key]==='string' || item[key] instanceof String)&&
  //       (item[key].indexOf(args[0])!==-1)){
  //         return true;
  //       }
  //       }
  //     });
  //   }
  // }
  user: any;
  flag = 0;
  flag1 = 0;
  userid;
  Newuser: {
    name: String,
    password: String,
    usertype: String,
    username: String,
    email: String,
    phoneNumber: String,
    code: String
  } = {
    name: '',
    password: '',
    usertype: '',
    username: '',
    email: '',
    phoneNumber: '',
    code: 'Super_Admin'
  };
  constructor(public search: ConnectService, public router: Router) { }

  ngOnInit() {
  }

  GetUser() {
    this.search.GetUser().subscribe(res => {
      res;
      this.user = res;
      for (var i = 0; i < res.length; i++) {
        var res1 = res[i].password.replace(/[a-zA-Z0-9!@#$%\^&*');(+=._-]/g, '*');
        this.user[i].password = res1;
      }
    }
      , error => {
        alert(error);
      });
  }

  DeleteUser(data) {
    var sure = confirm("Are you sure to delete this user?");
    if (sure == true) {
      this.search.DeleteUser(data).subscribe(res => {
        alert("Deleted" + data);
        this.GetUser();
      }
        , error => {
          alert(error);
        });
    } else {
      alert("User was not deleted!");
    }

  }
  save(id) {
    this.userid = id;
    this.flag = 1;
  }
  updateuser(dropdown) {
    this.Newuser.usertype = dropdown;
    this.search.UpdateUser(this.userid, this.Newuser)
      .subscribe(res => {
        this.GetUser();
        this.flag = 0;

        if (this.GetUser) {
          alert("Update Complete!");
        }
        else {
          error => alert(error);
        }
      })

  }
  add() {
    this.flag1 = 1;
    this.flag = 0;
  }
  addUser(dropdown) {
    this.Newuser.usertype = dropdown;
    this.search.PostUser(this.Newuser).subscribe(res => {
      this.GetUser();
      this.flag1 = 0;
      if (res.data != "exist") {
        alert("User has been added!");
      }
      else if (res.data = "exist") {
        alert("username already exist!")
      }
      else {
        error => alert(error);
      }
    })

  }
  logout() {
    localStorage.clear()
    this.router.navigate(['/header'])
  }

}
