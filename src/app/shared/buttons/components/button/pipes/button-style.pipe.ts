import { Pipe, PipeTransform } from '@angular/core';
import { ButtonStyleProviderService } from '@shared/buttons/components/button/providers/button-style-provider.service';
import { ButtonStyle } from '@shared/buttons/components/button/enums/button-style';
import { Nullish } from '@utils/types/nullish';

@Pipe({
  name: 'buttonStyle',
})
export class ButtonStylePipe implements PipeTransform {
  public constructor(
    private readonly styleProvider: ButtonStyleProviderService,
  ) {}

  public transform(style?: ButtonStyle): Nullish<string> {
    if (!style) {
      return style;
    }

    return this.styleProvider.style(style);
  }
}
