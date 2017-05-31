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
          this.user = res;
          for(var i=0;i<res.length;i++)
          {
          var str = res[i].password;
          var len=str.length;
          var res1 = str.replace(/a/g,'*' );
          console.log(res1);
          }
          // for(var i=0;i<res.length;)
          // {
          //   this.user=res[i];
          //   console.log(res[i]);
          //   i++;
          //   var j = res[i].password;
          //   j.replace(/a/g, 'x');
          //   console.log
          // }
        }
          , errorr => {
            alert(errorr);
          });
}
}
