import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/abstract-control-renderer.component';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';

@Component({
  selector: 'app-control-renderer',
  templateUrl: './control-renderer.component.html',
  styleUrls: ['./control-renderer.component.scss'],
})
export class ControlRendererComponent<
  ControlName extends QuickControlNameType,
> extends AbstractControlRendererComponent<ControlName> {}
