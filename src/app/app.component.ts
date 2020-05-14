import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorApp';
  result:number;
  operator='op';
  firstValue:number;
  secondValue:number;

onAdd()
{
  this.result=+this.firstValue + +this.secondValue;
  this.operator='+';
}
onSubstract()
{
  this.result=this.firstValue - this.secondValue;
  this.operator='-';
}
onDivide()
{
  this.result=this.firstValue / this.secondValue;
  this.operator='/';
}
onMultiply()
{
  this.result=this.firstValue * this.secondValue;
  this.operator='*';
}

onClear()
{
  this.operator='op';
  this.result=undefined;
  this.firstValue=undefined;
  this.secondValue=undefined;
}

}