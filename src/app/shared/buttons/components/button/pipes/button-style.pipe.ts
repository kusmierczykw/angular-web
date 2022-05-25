import { Pipe, PipeTransform } from '@angular/core';
import { ButtonStyleProviderService } from '@shared/buttons/components/button/providers/button-style-provider.service';
import { ButtonStyle } from '@shared/buttons/components/button/enums/button-style';
import { Nil } from '@utils/types/nil';

@Pipe({
  name: 'buttonStyle',
})
export class ButtonStylePipe implements PipeTransform {
  public constructor(
    private readonly styleProvider: ButtonStyleProviderService,
  ) {}

  public transform(style?: ButtonStyle): Nil<string> {
    if (!style) {
      return style;
    }

    return this.styleProvider.style(style);
  }
}
