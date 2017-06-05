import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  user: any;
  flag=0;
  flag1=0;
  userid;
  Newuser:{
    name:String,
    password:String,
    usertype:String,
    username:String
  }={
    name:'',
    password:'',
    usertype:'',
    username:''
  }
  constructor(public search: ConnectService, public router: Router) { }

  ngOnInit() {
  }

GetUser(){
      this.search.GetUser().subscribe(res => {
        res;
        this.user = res;
         for(var i=0;i<res.length;i++)
        {
        var res1 = res[i].password.replace(/[a-zA-Z0-9!@#$%\^&*');(+=._-]/g,'*' );
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
save(id){
  this.userid =id;
  this.flag=1;
}
updateuser(dropdown){
  this.Newuser.usertype=dropdown;
  this.search.UpdateUser(this.userid, this.Newuser)
  .subscribe(res =>{
    this.GetUser();
    this.flag=0;

    if(this.GetUser){
      alert("Update Complete!");
    }
    else{
      error=>alert(error);
    }
  })

}
add(){
  this.flag1=1;
  this.flag=0;
}
addUser(dropdown){
  this.Newuser.usertype=dropdown;
  this.search.PostUser(this.Newuser).subscribe(res=>{
    this.GetUser();
    this.flag1=0;
    if(res.data!="exist")
    {
      alert("User has been added!");
    }
    else if(res.data="exist")
    {
      alert("username already exist!")
    }
    else{
      error=>alert(error);
    }
  })

}
logout() {
    localStorage.clear()
    this.router.navigate(['/header'])
  }

}
