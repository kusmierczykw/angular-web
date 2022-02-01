import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validator-errors-renderer',
  templateUrl: './validator-errors-renderer.component.html',
  styleUrls: ['./validator-errors-renderer.component.scss'],
})
export class ValidatorErrorsRendererComponent {
  @Input() public errors!: ValidationErrors;
}
