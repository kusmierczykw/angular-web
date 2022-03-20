import { Pipe, PipeTransform } from '@angular/core';
import { IconClassProviderService } from '@core/icons/providers/icon-class-provider.service';
import { Icon } from '@core/icons/enums/icon';

@Pipe({
  name: 'iconClass',
})
export class IconClassPipe implements PipeTransform {
  public constructor(
    private readonly iconClassProvider: IconClassProviderService,
  ) {}

  public transform(icon: Icon): string {
    return this.iconClassProvider.getClass(icon);
  }
}
