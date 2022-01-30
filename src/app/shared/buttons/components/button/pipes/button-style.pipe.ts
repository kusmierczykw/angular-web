import { Pipe, PipeTransform } from '@angular/core';
import { ButtonStyle } from '@shared/buttons/components/button/enums';
import { ButtonStyleProviderService } from '@shared/buttons/components/button/providers/button-style-provider.service';

@Pipe({
  name: 'buttonStyle',
})
export class ButtonStylePipe implements PipeTransform {
  public constructor(
    private readonly styleProvider: ButtonStyleProviderService,
  ) {}

  public transform(style?: ButtonStyle): string | undefined {
    if (!style) {
      return style;
    }

    return this.styleProvider.style(style);
  }
}
