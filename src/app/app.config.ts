import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId":"fir-328c8",
      "appId":"1:96944009075:web:aaf4840b025c539f605f06",
      "storageBucket":"fir-328c8.firebasestorage.app",
      "apiKey":"AIzaSyA1GQ7d3oYRWG4s-pmxe_pdYpTGe_uDml8",
      "authDomain":"fir-328c8.firebaseapp.com",
      "messagingSenderId":"96944009075"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
};
