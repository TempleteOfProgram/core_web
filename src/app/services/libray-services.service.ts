import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrayServicesService {
  searchSkills(query: string): import("rxjs").ObservableInput<unknown> {
    throw new Error("Method not implemented.");
  }

  readonly rootUrl = 'https://www.google.com/';
  constructor(private http: HttpClient) { }


  hiGoogle(){   // get request
    return this.http.get( this.rootUrl);
  }

  get_booklist(){      // get request
    return this.http.get( this.rootUrl +"book_list");
  }
  
  search_a_book(book_name:string){  //get request
    return null;
  }

  add_a_book(book_name:string){ //post request
    return null;
  }
}
