import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flag = 0;
  flag1 = 0;
  flag2 = 0;
  flag3 = 0;
  flag4 = 0;
  flag5 = 0;
  reqflag = 0;
  comic: any;
  season: any;
  series: any;
  id: any;
  comicid;
  seriesid;
  seasonid;
  comicreq;
  newComic: {
    seriesid: String,
    seasonid: String,
    name: String,
    story: String,
    image: String
  } = {
    seriesid: '',
    seasonid: '',
    name: '',
    story: '',
    image: ''
  };
  newSeason: {
    seriesid: String,
    name: String,
    description: String,
    startson: String,
    endson: String
  } = {
    seriesid: '',
    name: '',
    description: '',
    startson: '',
    endson: ''
  }
  newSeries: {
    name: String,
    description: String,
    createdby: String
  } = {
    name: '',
    description: '',
    createdby: ''
  }




  constructor(public router: Router, public search: ConnectService) { }

  ngOnInit() {
  }
  flagComic() {
    this.flag3 = 1;
  }
  addComic() {
    this.search.PostComic(this.newComic).subscribe(res => {
      if (res) {
        alert("comic has been added");
        this.router.navigate(["/admin"])
      }
      else {
        alert("All the Fields are mendatory")
      }
    })
  }


  getallrequests() {
    this.reqflag = 1;
    this.search.getRequest().subscribe(res => {
      this.comicreq = res;
    })
  }


  flagSeason() {
    this.flag4 = 1;
  }
  addSeason() {
    this.search.PostSeason(this.newSeason).subscribe(res => {
      if (res) {
        alert("Season has been added");
        this.router.navigate(["/admin"])
      }
      else {
        alert("All the Fields are mendatory")
      }
    })
  }




  flagSeries() {
    this.flag5 = 1;
  }
  addSeries() {
    this.search.PostSeries(this.newSeries).subscribe(res => {
      if (res) {
        alert("Series has been added");
        this.router.navigate(["/admin"])
      }
      else {
        alert("All the Fields are mendatory")
      }
    })
  }





  saveComicId(id) {
    this.flag = 1;
    this.comicid = id;
  }
  updateComic() {
    this.search.UpdateComic(this.comicid, this.newComic)
      .subscribe(res => {
        this.getComic();
        this.flag = 0;

        if (this.getComic) {
          alert("Update Complete!");
        }
        else {
          error => alert(error);
        }
      })

  }

  saveSeasonId(id) {
    this.flag1 = 1;
    this.seasonid = id;
  }
  updateSeason() {
    this.search.UpdateSeason(this.seasonid, this.newSeason)
      .subscribe(res => {
        this.getSeason();
        this.flag1 = 0;

        if (this.getSeason) {
          alert("Update Complete!");
        }
        else {
          error => alert(error);
        }
      })

  }

  saveSeriesId(id) {
    this.flag2 = 1;
    this.seriesid = id;
  }
  updateSeries() {
    this.search.UpdateSeries(this.seriesid, this.newSeries)
      .subscribe(res => {
        this.getSeries();
        this.flag2 = 0;

        if (this.getSeries) {
          alert("Update Complete!");
        }
        else {
          error => alert(error);
        }
      })

  }


  logout() {
    localStorage.clear()
    this.router.navigate(['/header'])
  }


  getComic() {
    this.search.GetComic().subscribe(res => {
      this.comic = res;
    })
  }
  getSeason() {
    this.search.GetSeason().subscribe(res => {
      this.season = res;
    })
  }
  getSeries() {
    this.search.GetSeries().subscribe(res => {
      this.series = res;
    })
  }
  deleteComic(data) {
    this.search.DeleteComic(data).subscribe(res => {
      alert("Deleted" + data);
      this.getComic();
    }
      , error => {
        alert(error);
      });
  }
  deleteSeries(data) {
    this.search.DeleteSeries(data).subscribe(res => {
      alert("Deleted" + data);
      this.getSeries();
    }
      , error => {
        alert(error);
      });
  }
  deleteSeason(data) {
    this.search.DeleteSeason(data).subscribe(res => {
      alert("Deleted" + data);
      this.getSeason();
    }
      , error => {
        alert(error);
      });
  }
}
