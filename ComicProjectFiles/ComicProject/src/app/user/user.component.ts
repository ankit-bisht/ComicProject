import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
GetSearchComic;
searchitem1;
item;
comic;
Id;
comm;
commentResult;

newComment:{
  username:String,
  comment:String,
  comicID:String
}={
  username:localStorage.getItem('username'),
  comment:'',
  comicID:'exampleid'
}
  constructor(public search: ConnectService, public router: Router) {
  }
  ngOnInit() {
  }
searchComic(){
  this.search.GetSearchComic(this.searchitem1).subscribe(res => {
      this.GetSearchComic = res.respData.data[0];
      if(this.GetSearchComic){
      }
      else{
        alert('Cannot find! Try something else.');
      }
    })
}
logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
getComic(){
    this.search.GetComic().subscribe(res=>{
      this.comic=res;
    })
}
comment(Id,comm){
    this.newComment.comicID=Id;
    this.newComment.comment=this.comm;
  this.search.PostComment(this.newComment).subscribe(res => {
    alert("comment added!")
    })
}
getComment(Id){
  this.search.GetComment(Id).subscribe(res=>{
    this.commentResult=res[0];
    console.log(res[0].comment)
    if(this.commentResult){
    }
    else{
      alert('No comments on this Comic!');
    }
  })
}
}
