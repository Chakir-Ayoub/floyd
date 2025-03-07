import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paraghraphiPipe'
})
export class ParaghraphiPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
