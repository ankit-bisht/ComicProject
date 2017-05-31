import { Injectable } from '@angular/core';
import { Observer } from "rxjs";
import { Configuration } from './config';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/RX';
@Injectable()
export class ConnectService {
public data;
  constructor(public httpService: Http, public UrlObject: Configuration) {
   }
GetUser(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.UserUrl).map(
      data => data.json()
    );
}
GetSeason(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeasonUrl).map(
      data => data.json()
    );
}
GetComic(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.ComicUrl).map(
      data => data.json()
    );
}
GetSeries(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeriesUrl).map(
      data => data.json()
    );
}
GetSearchUser(SearchParam): Observable<any> {
    console.log(SearchParam);
    return this.httpService.get(this.UrlObject.UrlObj.UserSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
GetSearchComic(SearchParam): Observable<any> {
    console.log(SearchParam);
    return this.httpService.get(this.UrlObject.UrlObj.ComicSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
GetSearchSeries(SearchParam): Observable<any> {
    console.log(SearchParam);
    return this.httpService.get(this.UrlObject.UrlObj.SeriesSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
GetSearchSeason(SearchParam): Observable<any> {
    console.log(SearchParam);
    return this.httpService.get(this.UrlObject.UrlObj.SeasonSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
DeleteSeries(id): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeriesDeleteUrl + '/' + id).map(
      data => data.json()
    );
}
DeleteSeason(id): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeasonDeleteUrl + '/' + id).map(
      data => data.json()
    );
}
DeleteUser(id): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.UserDeleteUrl + '/' + id).map(
      data => data.json()
    );
}
DeleteComic(id): Observable<any> {

    return this.httpService.get(this.UrlObject.UrlObj.ComicDeletUrl + '/' + id).map(
      data => data.json()
    );
}
PostUser(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.UserUrl).map(
      data => data.json()
    );
}
PostSeason(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeasonUrl).map(
      data => data.json()
    );
}
PostComic(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.ComicUrl).map(
      data => data.json()
    );
}
PostSeries(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeriesUrl).map(
      data => data.json()
    );
}
// verify(){
//   let headers = new Headers({'Content-Type': 'application/json'});
//     let options = new RequestOptions({ headers: headers });
//     return this.httpService.post(this.UrlObject.UrlObj.VerifyUserUrl,headers).map(
//       (res: Response) => res.json());
// }

}
