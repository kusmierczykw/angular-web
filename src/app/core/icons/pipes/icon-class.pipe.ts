import { Pipe, PipeTransform } from '@angular/core';
import { IconClassProviderService } from '@core/icons/providers/icon-class-provider.service';
import { Icon } from '@core/icons/enums/icon';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';

@Pipe({
  name: 'iconClass',
})
export class IconClassPipe implements PipeTransform {
  public constructor(
    private readonly iconClassProvider: IconClassProviderService,
  ) {}

  public transform(icon: Nullish<Icon>): Nullish<string> {
    if (isNullish(icon)) {
      return icon;
    }

    return this.iconClassProvider.getClass(icon);
  }
}
