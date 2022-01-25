import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/components/simple-form-renderer/fragments/abstract-control-renderer.component';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';

@Component({
  selector: 'app-control-renderer',
  templateUrl: './control-renderer.component.html',
  styleUrls: ['./control-renderer.component.scss'],
})
export class ControlRendererComponent<
  ControlName extends SimpleControlNameType,
> extends AbstractControlRendererComponent<ControlName> {}
