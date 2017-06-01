import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  user: any;
  Newuser: {
   username: String,
   password: String,
   usertype: String
 }
 =
 {
   username: '',
   password: '',
   usertype: ''
 };
 flag = 0;
 upuser: any;
 users: any;
 status:any;
  constructor(public search: ConnectService) { }

  ngOnInit() {
  }

GetUser(){
      this.search.GetUser().subscribe(res => {
        res;
        this.user = res;
         for(var i=0;i<res.length;i++)
        {
        var res1 = res[i].password.replace(/[a-zA-Z0-9!@#$%\^&*')(+=._-]/g,'*' );
        this.user[i].password = res1;
        }
      }
        , error => {
          alert(error);
        });
}

DeleteUser(data)
{
   this.search.DeleteUser(data).subscribe(res => {
    alert("Deleted" + data);
    this.GetUser();
  }
    ,error => {
      alert(error);
    });
}
gusers() {
  this.search.GetUser()
    .subscribe(resdata => {
      this.users = resdata.respData.data;
      console.log(this.users);
    })
}

save(username) {
    this.Newuser.username = username;
    this.flag = 1;
    console.log(this.Newuser.username);
  }

updateuser(dropdown) {
    this.Newuser.usertype = dropdown;
    console.log(this.Newuser);
    this.search.UpdateUser(this.Newuser)
      .subscribe(resdata => {
        this.upuser = resdata.respData.data;

        this.status = resdata.status;
        console.log(this.status);

        if (this.status = "true") {
          alert(this.Newuser.username + "Updated");
          console.log(this.upuser, "updated");
          this.gusers();
          this.flag = 0;
        }
        else {
          alert("error");
          this.gusers();
        }

      })
  }



}
