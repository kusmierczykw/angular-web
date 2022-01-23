import { Observable } from 'rxjs';

export class SimpleFormButton {
  public constructor(
    public readonly label: string,
    public readonly visibility: Observable<boolean>,
    public readonly disabled: Observable<boolean>,
    public readonly command: () => void,
  ) {}
}
