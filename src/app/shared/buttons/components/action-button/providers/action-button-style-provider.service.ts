import { Injectable } from '@angular/core';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums';

@Injectable({
  providedIn: 'root',
})
export class ActionButtonStyleProviderService {
  private styles: Record<ActionButtonStyle, string> = {
    [ActionButtonStyle.FLAT]: 'mat-flat-button',
    [ActionButtonStyle.RAISED]: 'mat-raised-button',
    [ActionButtonStyle.STROKED]: 'mat-stroked-button',
  };

  public style(style: ActionButtonStyle): string {
    return this.styles[style];
  }
}
