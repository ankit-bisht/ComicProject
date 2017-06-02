import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flag=0;
  comic:any;
  season:any;
  series:any;
  comicName:any;
  constructor(public router: Router, public search: ConnectService) { }

  ngOnInit() {
  }

  logout() {
      localStorage.clear()
      console.log(localStorage.getItem('role'))
      this.router.navigate(['/login'])
    }
  saveComicName(name){
      this.flag=1;
      this.comicName=name;
  }

  getComic(){
    this.search.GetComic().subscribe(res=>{
      console.log(res);
      this.comic=res;
    })
  }
  getSeason(){
    this.search.GetSeason().subscribe(res=>{
      console.log(res);
      this.season=res;
    })
  }
  getSeries(){
    this.search.GetSeries().subscribe(res=>{
      console.log(res);
      this.series=res;
    })
  }
}
