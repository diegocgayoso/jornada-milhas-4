import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  getPassagens(search: {}){
    return this.http.get<Resultado>(this.apiUrl + 'passagem/search', {params: search})
  }
}
