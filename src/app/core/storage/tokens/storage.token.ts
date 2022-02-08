import { InjectionToken } from '@angular/core';
import { Storage } from '@core/storage/interfaces';

export const STORAGE_TOKEN = new InjectionToken<Storage>('STORAGE_TOKEN');
