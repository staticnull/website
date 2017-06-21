import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'substring'
})
export class SubstringPipe implements PipeTransform{
    transform(value: string, args: number) : string {
        if(value) {
            let limit = args ? args : 10;
            let trail = '';

            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    }
}