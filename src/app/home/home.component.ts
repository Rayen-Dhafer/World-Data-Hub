import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }
  go_phone(){
    this.route.navigate(['/phone'])
  }
  
  go_date(){
    this.route.navigate(['/date'])
  }

  go_info(){
    this.route.navigate(['/info'])
  }
}
