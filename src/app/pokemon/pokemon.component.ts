import { Component, OnInit } from '@angular/core';
import { debounce } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name:string = "";
  urlImage: string = "";
  description: string = "";
  constructor(private pokemonService : PokemonService) { }
  ngOnInit(): void {
  }

  search() {
    this.pokemonService.getPokemonPhoto(this.name).subscribe((data:any) => {
      this.urlImage = data.sprites.other.dream_world.front_default;
    this.pokemonService.getPokemonDescription(this.name).subscribe((data:any)=>{
      const resul = data.flavor_text_entries.filter((el:any) => el.language.name === 'es')
      this.description = resul[this.getRandomArbitrary(1,resul.length)].flavor_text;      
    }) 
    })
  }
  private getRandomArbitrary(min:any, max:any) {
    return Math.round(Math.random() * (max - min) + min);
}

}
