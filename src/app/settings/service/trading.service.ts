import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Instrument } from '../trading/trading.component';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  private instrumentCollection!: AngularFirestoreCollection<Instrument>;

  constructor(private readonly afs: AngularFirestore) {
    this.instrumentCollection = this.afs.collection<Instrument>(`instruments`)
  }

  saveOne(instrument: Instrument): Promise<void> {
    instrument.id = instrument.id ? instrument.id : this.afs.createId();
    return this.instrumentCollection.doc(instrument.id).update(instrument);
  }

  getAll(): Observable<Instrument[]> {
    return this.instrumentCollection.valueChanges();
  }
}
