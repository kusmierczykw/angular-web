import { Component } from '@angular/core';
import { Image } from '@core/images/enums';
import { SignIn } from '@features/sign-in/models';
import { NavigationService } from '@core/routing/services';
import { RoutePath } from '@core/routing/paths';
import { AuthService } from '@core/auth/services';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  public readonly SING_IN_IMAGE: Image = Image.UNDRAW_TRAVEL_TOGETHER;

  public constructor(
    private readonly auth: AuthService,
    private readonly navigation: NavigationService,
  ) {}

  public handleSubmitClick(model: SignIn): void {
    this.signIn(model);
  }

  private signIn(model: SignIn): void {
    const { username, password } = model;

    this.auth
      .signInByUsernameAndPassword(username, password)
      .subscribe(() => this.navigateToDashboard());
  }

  private navigateToDashboard(): void {
    this.navigation.navigate(RoutePath.DASHBOARD);
  }
}
