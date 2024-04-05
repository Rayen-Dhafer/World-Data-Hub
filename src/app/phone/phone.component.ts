import { Component, OnInit } from '@angular/core';
import axios from "axios";


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  number=""
  country="TN"

  numberType=""
  ValidNumber=""
  carrier=""
  internationalFormat=""
  location=""
  datetime=""

  constructor(  ) { }
  ngOnInit(): void {


  }
 
get_info(){
 

  const options = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    params: {number: this.number, country: this.country},
    headers: {
      'X-RapidAPI-Key': '7a656fdb18msh91acc7c21b04028p1a0382jsn60cdadbbcff0',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com'
    }
  };
  
  axios.request(options).then( (response) => {

    if(response.data.isValidNumber){this.ValidNumber='vrai'}
    else{this.ValidNumber='faux'}

    if(response.data.numberType == "MOBILE"){this.numberType='PORTABLE'}
    else{this.numberType='LIGNE FIXE'}

    this.carrier=response.data.carrier
    this.internationalFormat=response.data.internationalFormat
    this.location=response.data.location

  
  

  }).catch( (error) => {
    this.numberType=""
    this.ValidNumber="faux"
    this.carrier=""
    this.internationalFormat=""
    this.location=""
    this.datetime=""
  
  });
  


  

}


}