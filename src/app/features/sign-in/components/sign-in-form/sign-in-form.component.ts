import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignInFormControl } from './sign-in-form.control';
import { SignInForm } from './sign-in-form';
import { Observable } from 'rxjs';
import { SignIn } from '@features/sign-in/models/sign.in';
import { negate } from '@utils/rxjs/operators/negate';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  @Input()
  public model?: SignIn;

  @Output()
  public submitClick = new EventEmitter<SignIn>();

  public readonly SignInFormControl = SignInFormControl;

  public formModel!: SignInForm;
  public submit$!: Observable<boolean>;

  public constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.configureForm();
    this.configureSubmitPossibility();
  }

  public handleSubmitClick(): void {
    this.submitClick.next(this.formModel.toModel());
  }

  private configureForm(): void {
    this.formModel = new SignInForm(this.formBuilder, this.model);
  }

  private configureSubmitPossibility(): void {
    this.submit$ = this.formModel.isValid$.pipe(negate());
  }
}
