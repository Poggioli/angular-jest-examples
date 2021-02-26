import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Observable, of } from 'rxjs'
import { Vaccine } from 'src/app/interfaces/vaccine'

const httpBody: Vaccine[] = [
  {
    name: 'vaccine 1',
    tip: 'tip 1',
    doses: 1,
    date: '05-21-2021'
  },
  {
    name: 'vaccine 2',
    tip: 'tip 2',
    doses: 2,
    date: '07-21-2021'
  },
  {
    name: 'vaccine 3',
    tip: 'tip 3',
    doses: 3,
    date: '05-14-2021'
  },
  {
    name: 'vaccine 4',
    tip: 'tip 4',
    doses: 4,
    date: '05-21-2021'
  },
  {
    name: 'vaccine 5',
    tip: 'tip 5',
    doses: 5,
    date: '10-21-2021'
  },
  {
    name: 'vaccine 6',
    tip: 'tip 6',
    doses: 6,
    date: '12-21-2021'
  }
]

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private baseUrl = ''

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.api.baseUrl
  }

  getVaccines(): Observable<Vaccine[]> {
    // ToDo alterar para quando serviço tiver pronto
    // const url = `${this.baseUrl}/${environment.api.endpoints.vaccines}`
    // return this._http.get<Vaccine[]>(url)
    return of(httpBody)
  }
}
