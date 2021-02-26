import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Vaccine } from '@interfaces/vaccine'
import { VaccineService } from '@services/vaccine/vaccine.service'
import { Observable, of, throwError } from 'rxjs'

import { MockComponent } from 'ng-mocks'
import { By } from '@angular/platform-browser'
import { HomeComponent } from './home.component'
import { TableComponent } from './table/table.component'

const vaccinesResponse: Vaccine[] = [
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
  }
]

class MockVaccineService {
  getVaccines(): Observable<Vaccine[]> {
    return of(vaccinesResponse)
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockComponent(TableComponent)
      ],
      providers: [
        { provide: VaccineService, useClass: MockVaccineService }
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it(`DADO o componente em tela
      QUANDO o serviço retornar com sucesso
      ENTÃO as variaveis deverão ter os valores corretos`, () => {
    expect(component.vaccines).toStrictEqual(vaccinesResponse)
    expect(component.loading).toBe(false)
    expect(component.errorMessage).toBe('')
  })

  it(`DADO o componente em tela
      QUANDO o serviço retornar com erro
      ENTÃO as variaveis deverão ter os valores corretos`, () => {
    const vaccineService: VaccineService = TestBed.inject(VaccineService)
    spyOn(vaccineService, 'getVaccines').and.returnValue(throwError('error'))

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    expect(component.vaccines).toStrictEqual([])
    expect(component.loading).toBe(false)
    expect(component.errorMessage).toBe('Ops, aconteceu algum erro, tente novamente mais tarde')
  })

  describe('Testes HTML', () => {
    it(`DADO o componente da tabela
        QUANDO o serviço retornar com sucesso
        ENTÃO as variaveis deverão ter os valores corretos`, () => {
      const tableComponent = fixture.debugElement.query(By.directive(TableComponent)).injector.get(TableComponent)
      expect(tableComponent.vaccines).toStrictEqual(vaccinesResponse)
      expect(tableComponent.loading).toBe(false)
      expect(tableComponent.errorMessage).toBe('')
    })

    it(`DADO o componente em tela
        QUANDO o serviço retornar com erro
        ENTÃO as variaveis deverão ter os valores corretos`, () => {
      const vaccineService: VaccineService = TestBed.inject(VaccineService)
      spyOn(vaccineService, 'getVaccines').and.returnValue(throwError('error'))

      fixture = TestBed.createComponent(HomeComponent)
      component = fixture.componentInstance
      fixture.detectChanges()

      const tableComponent = fixture.debugElement.query(By.directive(TableComponent)).injector.get(TableComponent)
      expect(tableComponent.vaccines).toStrictEqual([])
      expect(tableComponent.loading).toBe(false)
      expect(tableComponent.errorMessage).toBe('Ops, aconteceu algum erro, tente novamente mais tarde')
    })
  })
})
