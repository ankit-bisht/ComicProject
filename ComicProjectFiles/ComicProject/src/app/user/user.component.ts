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
  constructor(public search: ConnectService, public router: Router) {
  }
  ngOnInit() {
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
logout() {
    localStorage.clear()
    console.log(localStorage.getItem('role'))
    this.router.navigate(['/login'])
  }
}
