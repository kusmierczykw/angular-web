import { Injectable } from '@angular/core';
import { ApiMessageBuilderService } from '@core/api/components/message/builders/api-message-builder.service';
import { ApiMessage } from '@core/api/components/message/models/api-message';

@Injectable({
  providedIn: 'root',
})
export class ApiMessageHandlerService {
  public constructor(private readonly builder: ApiMessageBuilderService) {}

  public handle(
    factory: (builder: ApiMessageBuilderService) => ApiMessage,
  ): void {
    factory(this.builder.reset());
  }
}
