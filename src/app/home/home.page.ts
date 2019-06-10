import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  salas = [
    {
    id: '1',
    name: 'Esportes',
    },
    {
    id: '2',
    name: 'Filmes',
    },
    {
    id: '3',
    name: 'Curiosidades',
    }
  ]

  name = null;
  hall = null;
  constructor(private navCtrl: NavController) {}

  pushPage(){
    if(this.hall != null && this.name != null){
      this.navCtrl.navigateForward(`/chat/${this.hall}/${this.name}`);
    }
    //console.log("Nome: " + this.name + "\nSala: " + this.hall);
  }
}
