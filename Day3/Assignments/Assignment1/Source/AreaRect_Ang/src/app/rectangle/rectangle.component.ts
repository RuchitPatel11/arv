import { Component,  } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent{
  height:string=''
  width:string=''
  area:number=0


  computeArea(){
    this.area= parseInt(this.height) * parseInt(this.width)
  }
  

}
