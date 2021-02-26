import { Component, OnInit } from '@angular/core'
import { VaccineService } from '@services/vaccine/vaccine.service'
import { Vaccine } from 'src/app/interfaces/vaccine'

@Component({
  selector: 'aje-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vaccines: Vaccine[] = []

  errorMessage = ''

  loading = true

  constructor(private _vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.getVaccines()
  }

  private getVaccines(): void {
    this.loading = true
    this.errorMessage = ''
    this._vaccineService.getVaccines()
      .subscribe(
        (resp) => {
          this.vaccines = this.orderByDate(resp)
        }, () => {
          this.vaccines = []
          this.errorMessage = 'Ops, aconteceu algum erro, tente novamente mais tarde'
        }
      ).add(() => {
        this.loading = false
      })
  }

  private orderByDate(vaccines: Vaccine[]): Vaccine[] {
    return vaccines
  }
}
