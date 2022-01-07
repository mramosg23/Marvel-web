import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  characters: any = "";

  constructor(public restApi: RestApiService) { } 

  ngOnInit() {   
    this.loadCharacters()
  }

  loadCharacters() {
    return this.restApi.getCharacters().subscribe(data => {
      this.characters = data.data.results;
    })
  }

  getJPG(character: any){
    return `${character.thumbnail.path}.jpg`
  }

  getDescription(character: any){
    if(character.description !== ""){
      return character.description
    }
    else{
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec laoreet augue, ut consectetur est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque non purus nisl. Curabitur vulputate ligula metus, vehicula suscipit augue dapibus vulputate. Nam non luctus nibh. Quisque vitae massa felis. Vestibulum non mi a mi porttitor euismod. Mauris tempus iaculis dolor consectetur blandit. Nam non tellus at est lacinia blandit. Phasellus eget consequat magna. Praesent id nibh laoreet, lacinia tellus et, laoreet dolor. In hac habitasse platea dictumst.'
    }
  }

}
