import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(
      BrowserAnimationsModule,  // Required for animations
      ToastrModule.forRoot({
        positionClass: 'toast-top-right',  // Change position as needed
        timeOut: 3000,                     // Duration in milliseconds
        closeButton: true,                  // Show close button
                        // Show progress bar
      })   // Global Toastr configuration
    ),
  ]
};
