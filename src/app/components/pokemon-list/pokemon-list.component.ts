import { Component} from '@angular/core';
import { PokemonModel } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css'],
    standalone: false
})
export class PokemonListComponent {
  Generaciones = [
    [1, 151],
    [152, 251],
    [252, 386],
    [387, 493],
    [494, 649],
    [650, 721],
    [722, 809],
    [810, 905],
  ];

  constructor(private pokemonService: PokemonService) {

  }

  pkmStorage: PokemonModel[] = [];
  Pokedex: PokemonModel[] = [];
  
  descriptions: any[] = [['']];

  gen(generacion: number) {
    this.fillData(generacion - 1);
  }

  getDesc = (el: any[], index: number) => {
    let res: string = el.find((el) => el[0] == index);
    return res;
  };

  fillData(generacion: number) {
    this.Pokedex = [];
    this.descriptions = [];
    this.pkmStorage = []

    for (let i = this.Generaciones[generacion][0]; i < this.Generaciones[generacion][1];i++)
    {
      this.pokemonService
        .getPokemonDescription(i.toString())
        .subscribe((data: any) => {
          const resul = data.flavor_text_entries.filter(
            (el: any) => el.language.name === 'es'
          );
          this.descriptions.push([data.id, resul[0].flavor_text]);
        });

      this.pokemonService.getpokemon(i).subscribe((data: any) => {
        let pkm = {
          id: data.id,
          name: data.name,
          types: data.types,
          urlImage: data.sprites.other['official-artwork'].front_default,
          desc: this.getDesc(this.descriptions, data.id),
        };
        this.pkmStorage.push(pkm);
        this.Pokedex = [...this.pkmStorage];
      });
    }
  }



  filterType(tipo: string){
    
    
    alert(tipo)

    let aux = this.pkmStorage.filter((el) => el.types[0].type.name == tipo)
    // let aux2 = this.Pokedex.filter((el) => el.types[2].type.name == tipo)
    this.Pokedex = [...aux]
    // this.Pokedex = [...aux, ...aux2]
    
  }

}
