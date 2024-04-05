import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date=""
  time=""
  temp=""
  winds=""
  country="Tunisia"
  constructor() { }

  ngOnInit(): void {
  }

  get_date(){
    const optionst = {
      method: 'GET',
      url: 'https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime',
      params: {city:  this.country},
      headers: {
        'X-RapidAPI-Key': '51f96b5b8emsh787b9cfd703acf7p10111fjsn41fa7adfc13b',
        'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
      }
    };
    axios.request(optionst).then( (res) => {
      this.date=res.data.date
      this.time=res.data.hour +":"+ res.data.minute +":"+ res.data.second
    }).catch( (error) => {
      console.error(error);
    });
  
    const options2 = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: {city:  this.country},
      headers: {
        'X-RapidAPI-Key': '51f96b5b8emsh787b9cfd703acf7p10111fjsn41fa7adfc13b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    axios.request(options2).then( (res) => {
      this.temp=res.data.temp+" °C "
      this.winds=res.data.wind_speed+" km/h "
      console.log(res.data)
    }).catch(function (error) {
      console.error(error);
    });
  }
}
