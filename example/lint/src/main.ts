import { enableProdMode, importProvidersFrom } from '@angular/core';

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(APP_ROUTES),
        importProvidersFrom(
            BrowserModule,
        ),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
}).catch(err => {
    console.error(err);
});
