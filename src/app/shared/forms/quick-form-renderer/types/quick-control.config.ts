import { TextControlConfig } from '@shared/forms/quick-form-renderer/interfaces/text-control-config';
import { NumberControlConfig } from '@shared/forms/quick-form-renderer/interfaces/number-control-config';
import { SelectControlConfig } from '@shared/forms/quick-form-renderer/interfaces/select-control-config';

export type QuickControlConfig =
  | TextControlConfig
  | NumberControlConfig
  | SelectControlConfig;
