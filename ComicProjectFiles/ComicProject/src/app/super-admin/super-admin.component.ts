import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  user: any;

  constructor(public search: ConnectService) { }

  ngOnInit() {
  }
  GetUser(){
        this.search.GetUser().subscribe(res => {
            res;
            this.user = res;
            console.log(res)
           for(var i=0;i<res.length;i++)
          {
          var res1 = res[i].password.replace(/[a-zA-Z0-9!@#$%\^&*)(+=._-]/g,'*' );
          this.user[i].password = res1;
          }
        }
          , error => {
            alert(error);
          });
}
}
