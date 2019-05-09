import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  search(url, search): Observable<any[]> {
    // return this.http.get<any[]>(`http://localhost:3000/posts?q=${search}`);
    return this.http.get<any[]>(`${url}?q=${search}`);
  }

  search2(url, search): Observable<any[]> {
    // return this.http.get<any[]>(`http://localhost:3000/posts?q=${search}`);
    return this.http.get<any[]>(`${url}?q2=${search}`);
  }
}
