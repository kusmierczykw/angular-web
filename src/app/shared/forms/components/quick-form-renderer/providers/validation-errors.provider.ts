import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationErrorsProvider {
  private readonly messages: Record<string, string> = {
    required: 'To pole jest wymagane.',
  };

  public message(key: string): string {
    return this.messages[key];
  }
}
