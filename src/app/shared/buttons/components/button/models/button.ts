import { Observable } from 'rxjs';
import { ButtonStyle } from '@shared/buttons/components/button/enums/button-style';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { ButtonCommand } from '@shared/buttons/components/button/interfaces/button-command';
import { HtmlButtonType } from '@shared/buttons/types/html-button.type';

export class Button<CommandArgument = unknown> {
  public constructor(
    public readonly label: string,
    public readonly visibility$: Observable<boolean>,
    public readonly disabled$: Observable<boolean>,
    public readonly command: ButtonCommand<CommandArgument>,
    public readonly style: ButtonStyle,
    public readonly theme: ThemePalette,
    public readonly htmlButtonType: HtmlButtonType,
  ) {}
}
