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

<pre>
  {{floydString}}
</pre>
`,
  styleUrls: ['./floyd.component.css'],
  providers:[TriangleService]
})
export class FloydComponent implements OnInit {
  public floydString:string='';
  private static startOfAlphabet=97;

  constructor(private triangleService:TriangleService){

  }
  ngOnInit() {
  }

  onClick(rows:any,checked:Boolean){
    if(checked){
      this.floydString = this.triangleService.evenFloydTriangle(rows);
      }else{
      this.floydString = this.triangleService.floydTriangle(rows);
      }
  }
}
