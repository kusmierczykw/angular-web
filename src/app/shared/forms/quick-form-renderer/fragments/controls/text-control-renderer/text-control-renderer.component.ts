import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/quick-form-renderer/fragments/controls/abstract-control-renderer.component';
import { TextControlConfig } from '@shared/forms/quick-form-renderer/interfaces/text-control-config';
import { QuickControlName } from '@shared/forms/quick-form-renderer/types/quick-control.name';

@Component({
  selector: 'app-text-control-renderer',
  templateUrl: './text-control-renderer.component.html',
  styleUrls: ['./text-control-renderer.component.scss'],
})
export class TextControlRendererComponent<
  ControlName extends QuickControlName,
> extends AbstractControlRendererComponent<ControlName> {
  public get config(): TextControlConfig {
    return this.control.config as TextControlConfig;
  }
}
