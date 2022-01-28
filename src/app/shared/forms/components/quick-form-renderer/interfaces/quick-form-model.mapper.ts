import { FormGroup } from '@angular/forms';

export interface QuickFormModelMapper<Model> {
  map(form: FormGroup): Model;
}
