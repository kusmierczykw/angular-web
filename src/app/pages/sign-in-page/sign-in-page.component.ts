import { Component } from '@angular/core';
import { Image } from '@core/images/enums';
import { SignInModel } from '@features/sign-in/models';
import { NavigationService } from '@core/routing/services';
import { RoutePath } from '@core/routing/paths';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  public readonly SING_IN_IMAGE: Image = Image.UNDRAW_STABILITY_BALL;

  public constructor(private readonly navigation: NavigationService) {}

  public handleSubmitClick(model: SignInModel): void {
    this.navigation.navigate(RoutePath.DASHBOARD);
  }
}
