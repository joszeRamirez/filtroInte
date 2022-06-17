import { Component, OnInit } from '@angular/core';
import { AppService } from './app.services';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Contacto {
  nombre: string,
  cedula: String,
  email: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filtroInter';
  contactos: Observable<Contacto[]>;
  constructor(firestore: Firestore, private servicio: AppService) {
    const collection = collection(firestore, 'contactos')
    this.contactos = collectionData(collection)
  }

  ngOnInit(): void {
    this.servicio.getListado()
      .subscribe(contactos => this.contactos = contactos)
  }
}
