import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
  Observable,
  of,
  BehaviorSubject,
  merge,
  concat,
  combineLatest
} from 'rxjs';
import {
  mergeMap,
  debounceTime,
  map,
  tap,
  mergeAll,
  pairwise,
  filter,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-autoComplate',
  templateUrl: './autoComplate.component.html',
  styleUrls: ['./autoComplate.component.css']
})
export class AutoComplateComponent implements OnInit {
  asyncSelected: string;
  public typeaheadLoading: boolean;
  private typeaheadNoResults: boolean;
  dataSource$: Observable<any>;
  _field: string;

  @Input() url: string;
  @Input() favoriteData: any[];
  @Input()
  set field(value: string) {
    this._field = (value && value.trim()) || '<no field set>';
  }

  get field(): string {
    return this._field;
  }
  @Input() placeholder: string;
  @Output() value: EventEmitter<string> = new EventEmitter();

  constructor(private service: PostsService) {
    this.dataSource$ = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).pipe(
      debounceTime(400),
      filter((query: string) => query.length > 2),
      distinctUntilChanged(),
      switchMap((token: string) => this.getStatesAsObservable2(token))
    );
  }

  getStatesAsObservable2(token: string): Observable<any> {
    const query = new RegExp(token, 'i');

    const observable1$ = of(this.favoriteData).pipe(
      tap(ele => console.log(`elements 1:${ele}`))
    );
    const observable2$: Observable<any[]> = this.service
      .search(this.url, token)
      .pipe(debounceTime(300));

    // const observable3$: Observable<any[]> = this.service
    //   .search(this.url, token.substr(0, 2))
    //   .pipe(debounceTime(300));

    return combineLatest(observable1$, observable2$).pipe(
      map(([result1, result2]) => result1.concat(result2)),
      tap(console.log)
    );
  }

  getStatesAsObservable3(token: string): Observable<any> {
    const query = new RegExp(token, 'i');

    const observable1$ = of(this.favoriteData).pipe(
      tap(ele => console.log(`elements 1:${ele}`))
    );
    const observable2$: Observable<any[]> = this.service
      .search(this.url, token)
      .pipe(debounceTime(300));

    const observable3$: Observable<any[]> = this.service
      .search(this.url, token.substr(0, 2))
      .pipe(debounceTime(300));

    return concat(observable1$, observable2$, observable3$);
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    const er = 'fre';
    console.log('Selected value: ', e.value);
  }

  ngOnInit() {}
}
