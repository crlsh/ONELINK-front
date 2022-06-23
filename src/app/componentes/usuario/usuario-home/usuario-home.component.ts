import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-home',
  templateUrl: './usuario-home.component.html',
  styleUrls: ['./usuario-home.component.scss']
})
export class UsuarioHomeComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    console.log(this.router.snapshot.paramMap.get('user'))
  }

  ngOnInit(): void {
  }

}
