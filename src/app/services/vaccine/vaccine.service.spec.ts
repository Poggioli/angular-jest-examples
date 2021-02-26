import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { environment } from '@env/environment'

import { VaccineService } from './vaccine.service'

describe('VaccineService', () => {
  let service: VaccineService
  let http: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
    service = TestBed.inject(VaccineService)
    http = TestBed.inject(HttpTestingController)
  })

  beforeEach(() => {
    http.verify()
  })

  it(`DADO o serviço
      QUANDO o request for feito
      ENTÃO deverá ser feito com os valores corretos`, () => {
    service.getVaccines().subscribe((resp) => {
      expect(resp).toStrictEqual([])
    })

    const testRequest = http.expectOne(`${environment.api.baseUrl}/${environment.api.endpoints.vaccines}`)

    testRequest.flush([])
    expect(testRequest.request.method).toBe('GET')
    expect(testRequest.request.url).toBe(`${environment.api.baseUrl}/${environment.api.endpoints.vaccines}`)
  })
})
