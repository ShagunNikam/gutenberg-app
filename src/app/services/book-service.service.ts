import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  baseUrl = environment.apiUrl;
  constructor(private http : HttpClient) { }

  getDetails() : Observable <any> {
    const reqUrl = this.baseUrl + '/books'
    return this.http.get<any>(reqUrl);
  }
}
