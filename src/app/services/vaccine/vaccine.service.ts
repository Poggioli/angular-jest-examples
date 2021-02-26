import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Observable } from 'rxjs'
import { Vaccine } from 'src/app/interfaces/vaccine'

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
    const url = `${this.baseUrl}/${environment.api.endpoints.vaccines}`
    return this._http.get<Vaccine[]>(url)
  }
}
