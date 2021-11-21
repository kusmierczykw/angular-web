import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SignInModel } from '../../models';
import { SignInFormControl } from './sign-in-form.control';
import { Observable } from 'rxjs';
import { isValid } from '@shared/forms/operators';
import { negate } from '@core/operators';

export class SignInFormModel {
  public readonly form: FormGroup;

  public isValid$: Observable<boolean>;

  private readonly fcUsername: FormControl;
  private readonly fcPassword: FormControl;

  public constructor(
    private readonly builder: FormBuilder,
    private readonly model?: SignInModel,
  ) {
    this.form = this.build();
    this.isValid$ = this.isValid();

    this.fcUsername = this.getControl(SignInFormControl.FC_USERNAME);
    this.fcPassword = this.getControl(SignInFormControl.FC_PASSWORD);
  }

  public toModel(): SignInModel {
    return new SignInModel(this.fcUsername.value, this.fcPassword.value);
  }

  private isValid(): Observable<boolean> {
    return this.form.statusChanges.pipe(isValid, negate);
  }

  private build(): FormGroup {
    return this.builder.group({
      [SignInFormControl.FC_USERNAME]: this.builder.control(
        this.model?.username,
        [Validators.required],
      ),
      [SignInFormControl.FC_PASSWORD]: this.builder.control(
        this.model?.password,
        [Validators.required],
      ),
    });
  }

  private getControl(name: SignInFormControl): FormControl {
    return this.form.get(name) as FormControl;
  }
}
