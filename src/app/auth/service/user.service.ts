import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@firebase/firestore';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly afs: AngularFirestore) {}

  /**
   * FETCH UserProfile by userId to give isAdmin
   *
   * @param {string} userId
   * @return {*}  {(Observable<User | null>)}
   * @memberof UserService
   */
  public getUserProfile(userId: string): Observable<User | null> {
    let user: AngularFirestoreCollection<User> = this.afs.collection<User>('users', ref =>
      ref.where('id', '==', `${userId}`)
    );
    return user.valueChanges().pipe(map(val => (val.length > 0 ? val[0] : null)));
  }

  /**
   * CREATE ONE
   *
   * @param {string} email
   * @param {string} [uid]
   * @return {*}  {Promise<void>}
   * @memberof UserService
   */
  public createUserProfile(email: string, uid?: string): Promise<void> {
    const displayName = email ? email.substring(0, email.lastIndexOf('@')) : '';
    let newUser: User = {
      createdAt: serverTimestamp(),
      username: displayName.replace(/[^a-zA-Z1-9]/g, ''),
      isAdmin: email.includes('nicolas.hornuel@gmail.com') ? true : null
    };
    newUser.id = uid ? uid : this.afs.createId();
    const userDoc: AngularFirestoreCollection<User> = this.afs.collection<User>(`users`);
    return userDoc.doc(newUser.id).set(newUser);;

  }
}
