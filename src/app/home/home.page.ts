import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],  
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ],
})
export class HomePage implements OnInit{
  constructor() {}    
  
  ngOnInit(): void{
    
    Browser.open({ url: 'http://192.168.0.100:4200/' });  // URL de tu aplicación Angular    
    Browser.addListener('browserFinished', ()=>{
      App.exitApp()
    });
  }
}
