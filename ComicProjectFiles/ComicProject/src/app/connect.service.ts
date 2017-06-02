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
    return this.httpService.get(this.UrlObject.UrlObj.UserSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
GetSearchComic(SearchParam): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.ComicSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
GetSearchSeries(SearchParam): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeriesSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
GetSearchSeason(SearchParam): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeasonSearchUrl + '/' + SearchParam).map(
      data => data.json()
    );
}
DeleteSeries(name): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeriesDeleteUrl + '/' + name).map(
      data => data.json()
    );
}
DeleteSeason(name): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeasonDeleteUrl + '/' + name).map(
      data => data.json()
    );
}
DeleteUser(username): Observable<any> {
    return this.httpService.delete(this.UrlObject.UrlObj.UserDeleteUrl + '/' + username).map(
      data => data.json()
    );
}
DeleteComic(name): Observable<any> {

    return this.httpService.get(this.UrlObject.UrlObj.ComicDeleteUrl + '/' + name).map(
      data => data.json()
    );
}
PostUser(a): Observable<any> {
    return this.httpService.post(this.UrlObject.UrlObj.UserUrl,a).map(
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
UpdateUser(a,newvalue ): Observable<any> {
   return this.httpService.put(this.UrlObject.UrlObj.UserUpdateUrl+'/'+ a, newvalue).map(
     data => data.json()

   )
 }
UpdateSeries(Data){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  console.log(Data);
 return this.httpService.put(this.UrlObject.UrlObj.SeriesUpdateUrl, Data, headers).map(
   (res: Response) => res.json());
}
UpdateSeason(Data){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  console.log(Data);
 return this.httpService.put(this.UrlObject.UrlObj.SeasonUpdateUrl, Data, headers).map(
   (res: Response) => res.json());
}
UpdateComic(Data){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  console.log(Data);
 return this.httpService.put(this.UrlObject.UrlObj.ComicUpdateUrl, Data, headers).map(
   (res: Response) => res.json());
}

}
