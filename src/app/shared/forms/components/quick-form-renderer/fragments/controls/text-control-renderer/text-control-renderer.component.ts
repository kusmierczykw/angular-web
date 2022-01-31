import { Component } from '@angular/core';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/controls/abstract-control-renderer.component';
import { TextControlConfig } from '@shared/forms/components/quick-form-renderer/interfaces/text-control-config';

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
