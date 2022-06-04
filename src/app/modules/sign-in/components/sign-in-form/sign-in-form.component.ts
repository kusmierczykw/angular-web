import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SignIn } from '../../models/sign.in';
import { negate } from '@utils/rxjs/operators/negate';
import { AbstractControlStatus } from '@shared/forms/operators/abstract-control-status';

interface SignInForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  @Input() public model?: SignIn;

  @Output() public submitClickEvent = new EventEmitter<SignIn>();

  public form!: FormGroup<SignInForm>;
  public submit$!: Observable<boolean>;

  public constructor(private readonly builder: FormBuilder) {}

  public ngOnInit() {
    this.configureForm();
    this.configureSubmitPossibility();
  }

  public handleSubmitClick(): void {
    const {
      value: { username, password },
    } = this.form;

    this.submitClickEvent.next(new SignIn(username!, password!));
  }

  private configureForm(): void {
    this.form = this.builder.group<SignInForm>({
      username: this.builder.control(null),
      password: this.builder.control(null),
    });
  }

  private configureSubmitPossibility(): void {
    this.submit$ = this.isValid$().pipe(negate());
  }

  private isValid$(): Observable<boolean> {
    return this.form.statusChanges.pipe(
      AbstractControlStatus.onlyValidOrInvalid(),
      AbstractControlStatus.isValid(),
    );
  }
}
