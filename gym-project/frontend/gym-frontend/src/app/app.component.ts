import { Component, OnInit } from '@angular/core';
import { GymService } from './gym.service';  // Assicurati di importare il servizio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  gyms: any[] = [];  // Dichiarare una variabile vuota per contenere i dati delle palestre
  loading: boolean = true;  // Aggiungere una variabile di caricamento

  constructor(private gymService: GymService) {}

  ngOnInit() {
    // Chiamata per ottenere i dati dal servizio
    this.gymService.getGyms().subscribe(
      (data) => {
        this.gyms = data;  // Assegna i dati alla variabile gyms
        this.loading = false;  // Imposta il caricamento a false una volta ricevuti i dati
      },
      (error) => {
        console.error('Errore nel caricamento dei dati:', error);
        this.loading = false;  // Imposta il caricamento a false in caso di errore
      }
    );
  }
}
