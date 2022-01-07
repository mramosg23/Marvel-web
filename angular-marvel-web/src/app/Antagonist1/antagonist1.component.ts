import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-antagonist1',
  templateUrl: './antagonist1.component.html',
  styleUrls: ['./antagonist1.component.scss']
})
export class Antagonist1Component implements OnInit {

  antagonist1: any = "";
  antagonist1JPG: any = "";
  
  constructor(public restApi: RestApiService) { } 

  ngOnInit() {   
    this.loadAntagonist1()
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

}
