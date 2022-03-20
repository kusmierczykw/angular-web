import { MatDialogConfig } from '@angular/material/dialog';
import { Button } from '@shared/buttons/components/button/models/button';

export class Confirmation {
  public constructor(
    public readonly title: string,
    public readonly body: string,
    public readonly accept: Button,
    public readonly reject: Button,
    public readonly config: MatDialogConfig,
  ) {}
}
