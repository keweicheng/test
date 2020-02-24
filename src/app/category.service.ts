import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './model/category.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    public http: HttpClient
  ) { }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.serverIp);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.serverIp}categorys/${id}`);
  }

  //增
  postCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.serverIp}categorys`, category);
  }

  //改
  putCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.serverIp}categorys/${id}`, category);
  }

  //刪
  deleteCategory(id: number) {
    return this.http.delete<Category>(`${environment.serverIp}categorys/${id}`);
  }
}
