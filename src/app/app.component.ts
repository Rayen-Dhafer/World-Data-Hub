import { Component } from '@angular/core';

import axios from "axios";
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( private route: Router ) { }
  ngOnInit(): void {}
 


}