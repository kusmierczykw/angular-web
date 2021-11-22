import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignInModel } from '../../models';
import { SignInFormControl } from './sign-in-form.control';
import { SignInFormModel } from './sign-in-form.model';
import { Observable } from 'rxjs';
import { negate } from '@core/operators';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  @Input()
  public model?: SignInModel;

  @Output()
  public submitClick: EventEmitter<SignInModel> = new EventEmitter<SignInModel>();

  public readonly SignInFormControl = SignInFormControl;

  public formModel!: SignInFormModel;
  public submit$!: Observable<boolean>;

  public constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.prepareFormModel();
    this.prepareSubmitPossibility();
  }

  public handleSubmitClick(): void {
    this.submitClick.next(this.formModel.toModel());
  }

  private prepareFormModel(): void {
    this.formModel = new SignInFormModel(this.formBuilder, this.model);
  }

  private prepareSubmitPossibility(): void {
    this.submit$ = this.formModel.isValid$.pipe(negate);
  }
}
