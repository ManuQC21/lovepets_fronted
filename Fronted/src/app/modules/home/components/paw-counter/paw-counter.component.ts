import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paw-counter',
  templateUrl: './paw-counter.component.html',
  styleUrls: ['./paw-counter.component.css']
})
export class PawCounterComponent implements OnInit {

  @Input() label: string = '';
  @Input() counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
