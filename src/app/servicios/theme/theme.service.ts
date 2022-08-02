import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private estilo$ = new BehaviorSubject<boolean>(false);

  public static default = 'default';

  public get current(): string {
  	return localStorage.getItem('theme') ?? ThemeService.default;
  }

  public set current(value: string) {
  	localStorage.setItem('theme', value);
  	//this.style.href = `${value}.css`;
  }

  /* private readonly style: HTMLLinkElement; */

  constructor() {
   /*  this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);

    if (localStorage.getItem('theme') !== undefined) {
    	this.style.href = `${this.current}.css`;
    } */
  }

  
  cambioEstilo(){
    this.estilo$.next(true);
  }
  
  cambioEstiloFalso(){
    this.estilo$.next(false);
  }
  
  estadoEstilo() {
    return this.estilo$.asObservable();
  }
}
