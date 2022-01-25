import { Pipe, PipeTransform } from '@angular/core';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums';
import { ActionButtonStyleProviderService } from '@shared/buttons/components/action-button/providers/action-button-style-provider.service';

@Pipe({
  name: 'actionButtonStyle',
})
export class ActionButtonStylePipe implements PipeTransform {
  public constructor(
    private readonly styleProvider: ActionButtonStyleProviderService,
  ) {}

  public transform(style?: ActionButtonStyle): string | undefined {
    if (!style) {
      return style;
    }

    return this.styleProvider.style(style);
  }
}
