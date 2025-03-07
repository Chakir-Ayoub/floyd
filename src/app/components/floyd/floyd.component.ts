import { TriangleService } from './../../services/triangle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floyd',
  template: `
  <p>
  <input #checkbox type="checkbox" value="even">Eben<br>
  <input #rows type="text"  name="rows" >
  <button (click)="onClick(rows.value,checkbox.checked)">CLICK</button>
</p>

<pre appAngularPre [highlightColor]="color">
  {{floydString|paraghraphiPipe:{from:'\\n\\r',to:'¶ \\n\\r'} }}
</pre>
`,
  styleUrls: ['./floyd.component.css'],
  providers:[TriangleService]
})
export class FloydComponent implements OnInit {
  public floydString:string='';
  public color:"yellow"|"red";
  constructor(private triangleService:TriangleService){

  }
  ngOnInit() {
  }

  onClick(rows:any,checked:Boolean){
    if(checked){
      this.floydString = this.triangleService.evenFloydTriangle(rows);
      this.color='red';
      }else{
      this.floydString = this.triangleService.floydTriangle(rows);
      this.color='yellow';
      }
  }
}
