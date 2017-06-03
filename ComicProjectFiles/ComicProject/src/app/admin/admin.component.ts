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
  flag1=0;
  flag2=0;
  comic:any;
  season:any;
  series:any;
  comicName:any;
  comicid;
  seriesid;
  seasonid;
  newComic:{
    name:String,
    story:String
  }=
  {
    name:'',
    story:''
  };
  newSeason:{
    name:String,
    description:String,
    startson:String,
    endson:String
  }=
  {
    name:'',
    description:'',
    startson:'',
    endson:''
  }
  constructor(public router: Router, public search: ConnectService) { }

  ngOnInit() {
  }
  saveComicId(id){
      this.flag=1;
      this.comicid=id;
  }
  updateComic(){
    this.search.UpdateComic(this.comicid,this.newComic)
    .subscribe(res =>{
      this.getComic();
      this.flag=0;

      if(this.getComic){
        alert("Update Complete!");
      }
      else{
        error=>alert(error);
      }
    })

  }

  saveSeasonId(id){
      this.flag1=1;
      this.seasonid=id;
  }
  updateSeason(){
    this.search.UpdateSeason(this.seasonid,this.newSeason)
    .subscribe(res =>{
      this.getSeason();
      this.flag1=0;

      if(this.getSeason){
        alert("Update Complete!");
      }
      else{
        error=>alert(error);
      }
    })

  }

  logout() {
      localStorage.clear()
      console.log(localStorage.getItem('role'))
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
}
