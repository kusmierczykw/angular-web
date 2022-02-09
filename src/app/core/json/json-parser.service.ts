import { Injectable } from '@angular/core';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces/class-constructor.type';
import { ClassTransformOptions } from 'class-transformer/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class JsonParserService {
  public objectToClass<T>(
    object: Object,
    type: ClassConstructor<T>,
    options?: ClassTransformOptions,
  ): T {
    return plainToInstance(type, object, options);
  }

  public classToObject<T>(
    object: T,
    options?: ClassTransformOptions,
  ): Record<string, unknown> {
    return instanceToPlain(object, options);
  }

  public serialize<T>(object: T, options?: ClassTransformOptions): string {
    return JSON.stringify(this.classToObject(object, options));
  }

  public deserialize<T>(
    json: string,
    type: ClassConstructor<T>,
    options?: ClassTransformOptions,
  ): T {
    return this.objectToClass(JSON.parse(json), type, options);
  }
}
