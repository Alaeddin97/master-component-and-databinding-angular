import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy,AfterContentInit
{
  @Input() element: { name: string; type: string; content: string };
  @Input() name: string;
  @ContentChild('contentParagraph') contentChild:ElementRef;
  constructor() {
    console.log('Constructor has been called');
  }
 

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges has been called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit has been called');
    console.log("Text content of paragraph: "+this.contentChild);
    
  }
  ngAfterContentInit(): void {
    console.log("Text content of paragraph: ");
    console.log(this.contentChild);
    
  }
  ngDoCheck() {
    console.log('DoCheck got called');
  }
  ngOnDestroy(): void {
    console.log("OnDestroy called"); 
  }
}
