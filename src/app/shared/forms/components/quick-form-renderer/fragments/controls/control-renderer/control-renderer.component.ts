import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/controls/abstract-control-renderer.component';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types';

@Component({
  selector: 'app-control-renderer',
  templateUrl: './control-renderer.component.html',
  styleUrls: ['./control-renderer.component.scss'],
})
export class ControlRendererComponent<
  ControlName extends QuickControlName,
> extends AbstractControlRendererComponent<ControlName> {}
