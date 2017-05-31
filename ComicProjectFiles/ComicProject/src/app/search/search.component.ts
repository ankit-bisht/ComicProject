import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
GetSearchComic;
GetSearchSeries;
GetSearchSeason;
searchitem1;
  constructor(public search: ConnectService) {
  }
  ngOnInit() {
  }
SearchComic(){
  this.search.GetSearchComic(this.searchitem1).subscribe(res => {
      this.GetSearchComic = res.respData.data[0];
      if(this.GetSearchComic){
      console.log(this.GetSearchComic);
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
      console.log(this.GetSearchSeries);
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
      console.log(this.GetSearchSeason);
      }
      else{
        alert('Cannot find! Try something else.');
      }
    })
}
}
