import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-datos',
  templateUrl: './user-datos.component.html',
  styleUrls: ['./user-datos.component.scss']
})
export class UserDatosComponent implements OnInit {


  @Input() persona?: any
  constructor() { }

  ngOnInit(): void {
  }

}
