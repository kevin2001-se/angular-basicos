import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[ //Declaramos los componentes
    HeroeComponent,
    ListadoComponent
  ],
  exports:[ //Declaramos lo que se vera visible
    ListadoComponent
  ],
  imports:[
    //Solo van Modulos
    CommonModule //Exporta todos las directrices básicas angular y tuberías, tales como NgIf , NgForOf , DecimalPipe , y así sucesivamente
  ]
})
export class HeroesModule {

}
