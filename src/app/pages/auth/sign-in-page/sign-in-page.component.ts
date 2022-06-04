import { Component } from '@angular/core';
import { Image } from '@shared/images/enums/image';
import { AuthService } from '@core/auth/services/auth.service';
import { NavigationService } from '@core/routing/services/navigation.service';
import { SignIn } from '@modules/sign-in/models/sign.in';
import { RoutePath } from '@core/routing/paths/route-path';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImagesModule } from '@shared/images/images.module';
import { SignInFormModule } from '@modules/sign-in/components/sign-in-form/sign-in-form.module';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  standalone: true,
  imports: [MatGridListModule, ImagesModule, SignInFormModule],
})
export class SignInPageComponent {
  public readonly SING_IN_IMAGE = Image.UNDRAW_TRAVEL_TOGETHER;

  public constructor(
    private readonly auth: AuthService,
    private readonly navigation: NavigationService,
  ) {}

  public handleSubmitClickEvent(model: SignIn): void {
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
