import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <p>{{numero}}</p>
 
    <button (click)="contar(+1)">+1</button>
    <button (click)="limpiar()">Reset</button>
    <button (click)="contar(-1)" >-1</button>
    `
})

export class CounterComponent {
    constructor() { }

    public numero:number=1;

  contar(value:number):void
  {
    this.numero +=value;
  }

  limpiar():void
  {
    this.numero=1;
  }

}