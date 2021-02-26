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
    this.vaccines = _simpleChanges.vaccines.currentValue
    this.errorMessage = _simpleChanges.errorMessage.currentValue
    this.loading = _simpleChanges.loading.currentValue
  }

  hasError(): boolean {
    return isDefined(this.errorMessage) && this.errorMessage !== ''
  }
}
