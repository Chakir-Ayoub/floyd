import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paraghraphiPipe'
})
export class ParaghraphiPipePipe implements PipeTransform {

  transform(value: string,paragrapheSymbol:string): string {
    return value.replace(new RegExp("\n\r",'g'),paragrapheSymbol+"\n\r"
  );
  }

}
