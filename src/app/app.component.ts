import { Component, OnInit } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aprendiendoAngular';

  constructor (
    private personaServices : PersonaService
   ) {
    this.personaServices.getPersonas().subscribe(resp =>{
      console.log(resp)
    })

   }

  ngOnInit() {
    // ...
   }

   listapersonas() {
    // ...
   }

}
