import { Component } from '@angular/core';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';
import { SimpleControlRendererComponent } from '@shared/forms/components/simple-form-renderer/abstract/simple-control-renderer.component';

@Component({
  selector: 'app-text-control-renderer',
  templateUrl: './text-control-renderer.component.html',
  styleUrls: ['./text-control-renderer.component.scss'],
})
export class TextControlRendererComponent<
  ControlName extends SimpleControlNameType,
> extends SimpleControlRendererComponent<ControlName> {}
