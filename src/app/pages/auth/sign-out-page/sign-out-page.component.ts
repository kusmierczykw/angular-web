import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/services';
import { NavigationService } from '@core/routing/services';
import { RoutePath } from '@core/routing/paths';

@Component({
  selector: 'app-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss'],
})
export class SignOutPageComponent implements OnInit {
  public constructor(
    private readonly auth: AuthService,
    private readonly navigateService: NavigationService,
  ) {}

  public ngOnInit() {
    this.signOut();
  }

  private signOut(): void {
    this.auth.signOut().subscribe(() => this.navigateToSignInPage());
  }

  private navigateToSignInPage(): void {
    this.navigateService.navigate(RoutePath.SIGN_IN);
  }
}
