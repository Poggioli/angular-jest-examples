import { ChangeDetectionStrategy, SimpleChanges } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatTableModule } from '@angular/material/table'
import { By } from '@angular/platform-browser'
import { Vaccine } from '@interfaces/vaccine'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [MatTableModule]
    }).overrideComponent(TableComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
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

  describe('Testes HTML', () => {
    it(`DADO que a chamada ao serviço ainda não tenha terminado
        QUANDO o componente for instanciado
        ENTÃO deverá ter a mensagem de loading na tela`, () => {
      const loadingElement = fixture.debugElement.query(By.css('h2'))
      expect(loadingElement).toBeTruthy()
      expect(loadingElement.nativeElement.textContent.trim()).toBe('Carregando Dados')
      expect(component.loading).toBe(true)
    })

    it(`DADO que a chamada ao serviço tenha terminado
        QUANDO o componente for instanciado
        E o serviço retornou sucesso
        ENTÃO deverá ter a tabela na tela`, () => {
      expect(component.loading).toBe(true)

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
      fixture.detectChanges()

      expect(component.loading).toBe(false)

      const tableElement = fixture.debugElement.query(By.css('table'))
      expect(tableElement).toBeTruthy()
    })

    it(`DADO que a chamada ao serviço tenha terminado
        QUANDO o componente for instanciado
        E o serviço retornou sucesso
        ENTÃO deverá ter a tabela na tela`, () => {
      expect(component.loading).toBe(true)

      const simpleChanges: SimpleChanges = {
        vaccines: {
          currentValue: [],
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
          currentValue: 'Ops, aconteceu algum erro',
          firstChange: false,
          isFirstChange: undefined,
          previousValue: undefined
        }
      }

      component.ngOnChanges(simpleChanges)
      fixture.detectChanges()

      expect(component.loading).toBe(false)

      const errorElement = fixture.debugElement.query(By.css('h2'))
      expect(errorElement).toBeTruthy()
      expect(errorElement.nativeElement.textContent.trim()).toBe('Ops, aconteceu algum erro')
    })
  })
})
