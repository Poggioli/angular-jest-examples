import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatTableModule } from '@angular/material/table'

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
})
