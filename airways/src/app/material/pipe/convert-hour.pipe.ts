import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHour'
})
export class ConvertHourPipe implements PipeTransform {

  transform(value: string | null): string {
    if(!value) {
      return ''
    }
    const [time, modifier] = value!.split(' ');

    const [_, minutes] = time.split(':');
    let [hours] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = `${parseInt(hours, 10) + 12}`;
    }

    return `${hours}:${minutes}`;
}
}
