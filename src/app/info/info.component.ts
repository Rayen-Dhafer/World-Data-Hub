import { Component, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {



  surface_area=""
  unemployment=""
  currency=""
  tourists=""
  population=""
  region=""

  country="Tunisia"
  constructor() { }

  ngOnInit(): void {
  }

  get_date(){
    const optionst = {
      method: 'GET',
      url: 'https://country-by-api-ninjas.p.rapidapi.com/v1/country',
      params: {name:  this.country},
      headers: {
        'X-RapidAPI-Key': '51f96b5b8emsh787b9cfd703acf7p10111fjsn41fa7adfc13b',
        'X-RapidAPI-Host': 'country-by-api-ninjas.p.rapidapi.com'
      }
    };
    axios.request(optionst).then( (res) => {
      this.surface_area=res.data[0].surface_area+' km²'
      this.region=res.data[0].region
      this.currency=res.data[0].currency.name
      this.population=res.data[0].population
      this.unemployment=res.data[0].unemployment+' %'
      this.tourists=res.data[0].tourists
    }).catch( (error) => {
   
    });

  }
}
