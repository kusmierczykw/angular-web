import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { IconClassProviderService } from '@core/icons/providers/icon-class-provider.service';

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
