import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  antagonist1: any = "";
  antagonist2: any = "";
  antagonist1JPG: any = "";
  antagonist2JPG: any = "";
  
  constructor(public restApi: RestApiService) { } 

  ngOnInit() {   
    this.loadAntagonist1()
    this.loadAntagonist2()
  }

  loadAntagonist1() {
    return this.restApi.getIronMan().subscribe(data => {
      let chars = data.data.results;
      if(chars.length === 1){
        this.antagonist1 = chars[0]
        this.antagonist1JPG = `${this.antagonist1.thumbnail.path}.jpg`
      }
    })
  }

  loadAntagonist2() {
    return this.restApi.getCapAmerica().subscribe(data => {
      let chars = data.data.results;
      if(chars.length === 1){
        this.antagonist2 = chars[0]
        this.antagonist2JPG = `${this.antagonist2.thumbnail.path}.jpg`
      }
    })
  }
  

}
