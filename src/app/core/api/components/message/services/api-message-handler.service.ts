import { Injectable } from '@angular/core';
import { ApiMessageBuilder } from '@core/api/components/message/builders/api-message.builder';
import { ApiMessage } from '@core/api/components/message/models/api-message';

@Injectable({
  providedIn: 'root',
})
export class ApiMessageHandlerService {
  public handle(factory: (builder: ApiMessageBuilder) => ApiMessage): void {
    factory(new ApiMessageBuilder());
  }
}
