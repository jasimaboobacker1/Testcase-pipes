import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example',
  standalone: true
})
export class ExamplePipe implements PipeTransform {


  transform(name: string, gender: string): string {
    if (gender === 'Male') {
      return 'Mr. ' + name;
    } else if (gender === 'Female') {
      return 'Miss ' + name;
    }
    return name;
  }

}
