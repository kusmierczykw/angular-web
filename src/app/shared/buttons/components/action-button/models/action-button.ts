import { Observable } from 'rxjs';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums/action-button-style';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { HtmlButtonType } from '@shared/buttons/types/html-button.type';
import { ActionButtonCommand } from '@shared/buttons/components/action-button/types/action-button-command';

export class ActionButton<CommandArgument = unknown> {
  public constructor(
    public readonly label: string,
    public readonly visibility$: Observable<boolean>,
    public readonly disabled$: Observable<boolean>,
    public readonly command: ActionButtonCommand<CommandArgument>,
    public readonly style: ActionButtonStyle,
    public readonly theme: ThemePalette,
    public readonly htmlButtonType: HtmlButtonType,
  ) {}
}
