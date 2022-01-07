import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-antagonist2',
  templateUrl: './antagonist2.component.html',
  styleUrls: ['./antagonist2.component.scss']
})
export class Antagonist2Component implements OnInit {

  antagonist2: any = "";
  antagonist2JPG: any = "";
  
  constructor(public restApi: RestApiService) { } 

  ngOnInit() {   
    this.loadAntagonist1()
  }

  loadAntagonist1() {
    return this.restApi.getCapAmerica().subscribe(data => {
      let chars = data.data.results;
      if(chars.length === 1){
        this.antagonist2 = chars[0]
        this.antagonist2JPG = `${this.antagonist2.thumbnail.path}.jpg`
      }
    })
  }

}
