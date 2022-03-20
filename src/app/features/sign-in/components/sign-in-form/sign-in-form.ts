import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SignInFormControl } from './sign-in-form.control';
import { Observable } from 'rxjs';
import { SignIn } from '@features/sign-in/models/sign.in';
import { abstractControlStatus } from '@shared/forms/operators/abstract-control-status';

export class SignInForm {
  public readonly form: FormGroup;

  public constructor(
    private readonly builder: FormBuilder,
    private readonly model?: SignIn,
  ) {
    this.form = this.build();
  }

  public get isValid$(): Observable<boolean> {
    return this.form.statusChanges.pipe(abstractControlStatus());
  }

  public toModel(): SignIn {
    const username: string = this.getControlValue(
      SignInFormControl.FC_USERNAME,
    );
    const password: string = this.getControlValue(
      SignInFormControl.FC_PASSWORD,
    );

    return new SignIn(username, password);
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

  private getControlValue<T>(name: SignInFormControl): T {
    return this.getControl(name).value as T;
  }

  private getControl(name: SignInFormControl): FormControl {
    return this.form.get(name) as FormControl;
  }
}
