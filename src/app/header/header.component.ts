import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

//string
//number
//array<string>
//boolean
//any

//name:any;
callCenter:string;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    //this.name='Mahmut';
    this.callCenter=this.testService.callCenter;
  }

}
