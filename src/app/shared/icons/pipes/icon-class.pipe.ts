import { Pipe, PipeTransform } from '@angular/core';
import { IconClassProviderService } from '@shared/icons/providers/icon-class-provider.service';
import { Icon } from '@shared/icons/enums/icon';
import { Nil } from '@utils/types/nil';
import { isNil } from '@utils/is-nil';

@Pipe({
  name: 'iconClass',
})
export class IconClassPipe implements PipeTransform {
  public constructor(
    private readonly iconClassProvider: IconClassProviderService,
  ) {}

  public transform(icon: Nil<Icon>): Nil<string> {
    if (isNil(icon)) {
      return icon;
    }

    return this.iconClassProvider.getClass(icon);
  }
}
