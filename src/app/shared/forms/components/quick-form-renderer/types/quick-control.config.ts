import {
  NumberControlConfig,
  SelectControlConfig,
  TextControlConfig,
} from '@shared/forms/components/quick-form-renderer/interfaces';

export type QuickControlConfig =
  | TextControlConfig
  | NumberControlConfig
  | SelectControlConfig;
