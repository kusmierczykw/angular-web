import { Component } from '@angular/core';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/abstract-control-renderer.component';

@Component({
  selector: 'app-text-control-renderer',
  templateUrl: './text-control-renderer.component.html',
  styleUrls: ['./text-control-renderer.component.scss'],
})
export class TextControlRendererComponent<
  ControlName extends QuickControlNameType,
> extends AbstractControlRendererComponent<ControlName> {}
