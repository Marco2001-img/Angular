import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string ='Hulk'
  public edad:number = 23

  get Capital():string{
    return this.nombre.toLocaleUpperCase();
  } 
  getDescripcion():string{
    return `${this.nombre}- ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre='Capitan america'
    
  }

  cambiarEdad():void{
    
    this.edad=40
  }

  Limpiar():void{
    this.nombre="Hulk"
    this.edad=23
  }

}
