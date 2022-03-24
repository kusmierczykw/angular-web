import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/quick-form-renderer/fragments/controls/abstract-control-renderer.component';
import { QuickControlName } from '@shared/forms/quick-form-renderer/types/quick-control.name';
import { SelectControlConfig } from '@shared/forms/quick-form-renderer/interfaces/select-control-config';

@Component({
  selector: 'app-select-control-renderer',
  templateUrl: './select-control-renderer.component.html',
  styleUrls: ['./select-control-renderer.component.scss'],
})
export class SelectControlRendererComponent<
  ControlName extends QuickControlName,
> extends AbstractControlRendererComponent<ControlName> {
  public get config(): SelectControlConfig {
    return this.control.config as SelectControlConfig;
  }
}
