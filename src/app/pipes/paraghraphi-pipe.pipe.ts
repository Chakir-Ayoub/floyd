import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paraghraphiPipe'
})
export class ParaghraphiPipePipe implements PipeTransform {

  transform(value: string,repalce:{from:string,to:string}): string {
    return value.replace(new RegExp(repalce.from,'g'),repalce.to
  );
  }

}
