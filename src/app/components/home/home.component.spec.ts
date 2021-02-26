import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Vaccine } from '@interfaces/vaccine'
import { VaccineService } from '@services/vaccine/vaccine.service'
import { Observable, of } from 'rxjs'

import { MockComponent } from 'ng-mocks'
import { HomeComponent } from './home.component'
import { TableComponent } from './table/table.component'

class MockVaccineService {
  httpBody: Vaccine[] = [
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

  getVaccines(): Observable<Vaccine[]> {
    return of(this.httpBody)
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

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
