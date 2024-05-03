import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  Generaciones = [[1,151],[152,251],[252,386],[387,493],[494,649],[650,721],[722,809],[810,905]]
  
  constructor(private pokemonService : PokemonService) { }

  Pokedex: any[] = [];
  descriptions: any[] = [[""]];


gen(generacion: number){
  this.fillData(generacion-1)
}

desc = (el: any[], index: number) =>{
  let res:string =  el.find(el => el[0] == index)
  return res
}


  fillData(generacion: number) { 
    this.Pokedex = [];
    this.descriptions = [];
    for(let i = this.Generaciones[generacion][0]; i < this.Generaciones[generacion][1]; i++){
    this.pokemonService.getpokemon(i).subscribe(
      (data:any) =>{

       this.Pokedex.push([
         data.id,
         data.name,
         data.types,
         data.sprites.other['official-artwork'].front_default,
        ]
       )
      }
    )

    this.pokemonService.getPokemonDescription(i.toString()).subscribe((data:any) =>{
      const resul = data.flavor_text_entries.filter((el:any) => el.language.name === 'es')
      this.descriptions.push([data.id,resul[0].flavor_text]);    
    })
  }
  console.log(this.descriptions)
  }
}
 