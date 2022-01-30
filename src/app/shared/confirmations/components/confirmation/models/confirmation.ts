import { Button } from '@shared/buttons/components/button/models';
import { MatDialogConfig } from '@angular/material/dialog';

export class Confirmation {
  public constructor(
    public title: string,
    public body: string,
    public accept: Button,
    public reject: Button,
    public config: MatDialogConfig,
  ) {}
}
