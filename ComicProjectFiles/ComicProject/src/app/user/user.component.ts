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
GetSearchSeries;
GetSearchSeason;
searchitem1;
item;
comic;
season;
series;
Id;
subscribedUser;
comm;
commentResult;
allComments;
flag=0;

newComment:{
  username:String,
  comment:String,
  comicID:String
}={
  username:localStorage.getItem('username'),
  comment:'',
  comicID:'exampleid'
}
user:{
  username: String
}={
  username:''
}
  constructor(public search: ConnectService, public router: Router) {
  }
  ngOnInit() {
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
getSeason(){
  this.search.GetSeason().subscribe(res=>{
    this.season=res;
  })
}
getSeries(){
  this.search.GetSeries().subscribe(res=>{
    this.series=res;
  })
}
SearchComic(){
  this.search.GetSearchComic(this.searchitem1).subscribe(res => {
      this.GetSearchComic = res.respData.data[0];
      if(this.GetSearchComic){
      }
      else{
        alert('Cannot find! Try something else.');
      }
    })
}

SearchSeries(){
  this.search.GetSearchSeries(this.searchitem1).subscribe(res => {
      this.GetSearchSeries = res.respData.data[0];
      if(this.GetSearchSeries){
      }
      else{
        alert('Cannot find! Try something else.');
      }
    })
}

SearchSeason(){
  this.search.GetSearchSeason(this.searchitem1).subscribe(res => {
      this.GetSearchSeason = res.respData.data[0];
      if(this.GetSearchSeason){
      }
      else{
        alert('Cannot find! Try something else.');
      }
    })
}
comment(Id,comm){
    this.newComment.comicID=Id;
    this.newComment.comment=this.comm;
  this.search.PostComment(this.newComment).subscribe(res => {
    alert("comment added!")
    console.log(this.newComment)
    })
}
getComment(Id){
  this.search.GetComment(Id).subscribe(res=>{
    this.commentResult=res[0];
    this.flag=1;
    console.log(res[0].comment)
    this.allComments=res;
    if(this.commentResult){
    }
    else{
      alert('No comments on this Comic!');
    }
  })
}
subscribe(series_id){
  this.subscribedUser=localStorage.getItem('username');
  console.log(this.subscribedUser);
  this.user.username=  this.subscribedUser;
  this.search.SubscribeUser(this.user,series_id).subscribe(res => {
    alert('Subscribed to this serires!');
  })
}
}
