import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkAPIService } from './link-api.service';
import { IBank} from '../interface/i-bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) { }
  getAllBanks(): Observable<IBank[]> {
    return this.http.get<IBank[]>(`${this.url.link}/allbanks`);
  }
}
