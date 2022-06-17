import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListOfObservable } from "@angular/fire"

@Injectable()
export class AppService {
    contactos: FirebaseListOfObservable<any[]>
    constructor(private angulfire: AngularFire) { }
    getListado() {
        this.contactos = this.angulfire.database.list('/contactos') as FirebaseListOfObservable<any[]>
    }
    filtrarPorNombre(filtra: string) {
        this.contactos = this.angulfire.list("/contactos", {
            query: {
                orderByChild: "nombre",
                equalTo: filtra
            }
        }) as FirebaseListOfObservable<any[]>
    }
}