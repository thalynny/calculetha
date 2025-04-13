import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Registra o locale 'pt-BR' com os formatos corretos
registerLocaleData(localePt, 'pt-BR');

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    { provide: LOCALE_ID, useValue: 'pt-BR' } // Força a localização como padrão
  ]
}).catch((err) => console.error(err));
