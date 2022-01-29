import { ActionButton } from '@shared/buttons/components/action-button/models';
import { MatDialogConfig } from '@angular/material/dialog';

export class Confirmation {
  public constructor(
    public title: string,
    public body: string,
    public accept: ActionButton,
    public reject: ActionButton,
    public config: MatDialogConfig,
  ) {}
}
