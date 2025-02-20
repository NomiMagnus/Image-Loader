import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private apiUrl = `${environment.serverUrl}/image`;

  constructor(private http: HttpClient) { }

  getImage(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
