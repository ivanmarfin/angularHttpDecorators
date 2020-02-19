import { Injector } from '@angular/core';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';

export const HttpClientFactory = {
  create: () => {
    const injector = Injector.create({
      providers: [
        { provide: HttpClient, deps: [HttpHandler] },
        { provide: HttpHandler, useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest }) },
      ],
    });
    return injector.get(HttpClient);
  }
};
