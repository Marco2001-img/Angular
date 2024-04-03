import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNombre:string[] = ['spiderman','capitan america','hulk']
  public hereoBo?:string

  borrar():void{
     this.hereoBo= this.heroeNombre.pop()
  }
}
