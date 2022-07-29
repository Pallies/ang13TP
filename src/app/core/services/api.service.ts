import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T extends { id: number }> {
  private _name!: string;

  constructor(private http: HttpClient) {}

  set name(name: string) {
    this._name = name;
  }

  getOne(data: T): Observable<T> {
    return this.http.get<T>(`${url}/${this._name}/${data.id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${url}/${this._name}`);
  }

  add(data: T): Observable<T> {
    return this.http.post<T>(`${url}/${this._name}`, data);
  }

  update(data: T): Observable<T> {
    //console.log(data);
    return this.http.put<T>(`${url}/${this._name}/${data.id}`, data);
  }

  delete(data: T): Observable<T> {
    return this.http.delete<T>(`${url}/${this._name}/${data.id}`);
  }
}
