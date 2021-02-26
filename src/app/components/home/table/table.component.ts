import {
  ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges
} from '@angular/core'
import { Vaccine } from '@interfaces/vaccine'
import { isDefined } from '@utils/isDefined/isDefined'

@Component({
  selector: 'aje-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnChanges {
  displayedColumns: string[] = ['name', 'tip', 'doses', 'date'];

  @Input()
  vaccines: Vaccine[] = []

  @Input()
  errorMessage = ''

  @Input()
  loading = true

  ngOnChanges(_simpleChanges: SimpleChanges): void {
    this.vaccines = _simpleChanges.vaccines?.currentValue ? _simpleChanges.vaccines.currentValue : []
    this.errorMessage = isDefined(_simpleChanges.errorMessage?.currentValue) ? _simpleChanges.errorMessage.currentValue : ''
    if (isDefined(_simpleChanges.loading?.currentValue)) {
      this.loading = _simpleChanges.loading.currentValue
    } else {
      this.loading = false
      this.errorMessage = 'Ops, aconteceu algum erro, tente novamente mais tarde'
    }
  }

  hasError(): boolean {
    return isDefined(this.errorMessage) && this.errorMessage !== ''
  }
}
