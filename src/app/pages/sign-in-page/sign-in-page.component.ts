import { Component } from '@angular/core';
import { Image } from '@core/image/enums';
import { SignInModel } from '@features/auth/sign-in/models';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  public readonly SING_IN_IMAGE: Image = Image.UNDRAW_STABILITY_BALL;

  public handleSubmitClick(model: SignInModel): void {}
}
