import { Button } from '@shared/buttons/components/button/models';
import { MatDialogConfig } from '@angular/material/dialog';

export class Confirmation {
  public constructor(
    public readonly title: string,
    public readonly body: string,
    public readonly accept: Button,
    public readonly reject: Button,
    public readonly config: MatDialogConfig,
  ) {}
}
