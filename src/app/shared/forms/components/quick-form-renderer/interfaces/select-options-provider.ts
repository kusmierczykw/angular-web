import { Observable } from 'rxjs';
import { SelectOption } from '@shared/forms/components/quick-form-renderer/models/select-option';

export interface SelectOptionsProvider<Value = unknown> {
  options$: Observable<SelectOption<Value>[]>;
}
