import { SimpleChanges } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatTableModule } from '@angular/material/table'
import { Vaccine } from '@interfaces/vaccine'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [MatTableModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it(`DADO que a chamada ao serviço tenha terminado
      QUANDO houver algum erro
      ENTÃO o método hasError deverá retornar true`, () => {
    component.errorMessage = 'erro'
    const expectedReturn = component.hasError()
    expect(expectedReturn).toBe(true)
  })

  it(`DADO que a chamada ao serviço tenha terminado
      QUANDO NÃO houver algum erro
      ENTÃO o método hasError deverá retornar false`, () => {
    component.errorMessage = ''
    const expectedReturn = component.hasError()
    expect(expectedReturn).toBe(false)
  })

  it(`DADO que a chamda ao serviço tenha terminado
      QUANDO chamar o onChanges
      ENTÃO as variaveis deverão ter seus valores corretos`, () => {
    expect(component.vaccines).toStrictEqual([])
    expect(component.loading).toBe(true)
    expect(component.errorMessage).toBe('')

    const vaccines: Vaccine[] = [
      {
        name: 'vaccine 1',
        tip: 'tip 1',
        doses: 1,
        date: '05-21-2021'
      }
    ]

    const simpleChanges: SimpleChanges = {
      vaccines: {
        currentValue: vaccines,
        firstChange: false,
        isFirstChange: undefined,
        previousValue: undefined
      },
      loading: {
        currentValue: false,
        firstChange: false,
        isFirstChange: undefined,
        previousValue: undefined
      },
      errorMessage: {
        currentValue: '',
        firstChange: false,
        isFirstChange: undefined,
        previousValue: undefined
      }
    }

    component.ngOnChanges(simpleChanges)

    expect(component.vaccines).toStrictEqual(vaccines)
    expect(component.loading).toBe(false)
    expect(component.errorMessage).toBe('')
  })
})
