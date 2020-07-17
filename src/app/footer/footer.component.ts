import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
callCenter:string;
  constructor() { }

  ngOnInit(): void {
    this.callCenter='444 1 123';
  }


}
