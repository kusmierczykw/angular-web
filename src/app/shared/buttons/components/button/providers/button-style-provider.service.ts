import { Injectable } from '@angular/core';
import { ButtonStyle } from '@shared/buttons/components/button/enums';

@Injectable({
  providedIn: 'root',
})
export class ButtonStyleProviderService {
  private styles: Record<ButtonStyle, string> = {
    [ButtonStyle.FLAT]: 'mat-flat-button',
    [ButtonStyle.RAISED]: 'mat-raised-button',
    [ButtonStyle.STROKED]: 'mat-stroked-button',
  };

  public style(style: ButtonStyle): string {
    return this.styles[style];
  }
}
