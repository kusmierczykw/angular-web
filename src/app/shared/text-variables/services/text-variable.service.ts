import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextVariableService {
  private readonly VARIABLE_PATTERN = /{[\w-]+}/g;

  public fetchVariablesFormText(text: string): string[] {
    return Array.from(text.match(this.VARIABLE_PATTERN) || []);
  }
}
