import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opponents',
  templateUrl: './opponents.component.html',
  styleUrls: ['./opponents.component.css']
})
export class OpponentsComponent implements OnInit {

  @Input() title:String = "";
  constructor() { }

  ngOnInit(): void {
    
  }

  

}
