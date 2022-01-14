import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BreadcrumbsProviderService } from '@core/routing/providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'web';

  public constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly breadcrumbProvider: BreadcrumbsProviderService,
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(
          this.breadcrumbProvider.buildFromActivatedRoute(this.activatedRoute),
        );
      });
  }
}
