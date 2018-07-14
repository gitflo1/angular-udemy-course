import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string) {
        if (!value) { return value; }
        const words = value.split(' ');

        for (let i = 0; i < words.length; i++) {
            if (words[i].toLowerCase() === 'of') {
                words[i] = 'of';

            } else if (words[i].toLowerCase() === 'the') {
                if (i === 0) {
                    words[0] = 'The';
                } else {
                    words[i] = 'the';
                }

            } else {
                const letters = words[i].split('');
                letters[0] = letters[0].toUpperCase();

                for (let j = 1; j < letters.length; j++) {
                    letters[j] = letters[j].toLowerCase();
                }

                words[i] = letters.join();
            }
        }

        return words.join();
    }
}
