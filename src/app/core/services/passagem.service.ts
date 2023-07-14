import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Passagem, Resultado } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  getPassagens(search: any): Observable<Resultado>{
    console.log(search);

    return this.http.get<Resultado>(this.apiUrl + '/passagem/search', {params: search})
  }
}
