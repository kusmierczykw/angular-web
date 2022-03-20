import { InjectionToken } from '@angular/core';
import { Storage } from '@core/storage/interfaces/storage.interface';

export const STORAGE_TOKEN = new InjectionToken<Storage>('STORAGE_TOKEN');
