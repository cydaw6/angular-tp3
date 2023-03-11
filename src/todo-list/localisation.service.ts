import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  private cities: String[] = ['Paris', 'Toulouse', 'Marseille', 'Bordeaux'];
  constructor() {}

  searchCity(prefix: string): String[] {
    if (!prefix) {
      return this.cities;
    }
    return this.cities.filter((c) => c.startsWith(prefix));
  }
}
