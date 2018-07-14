import {Pipe, PipeTransform} from '@angular/core';
import { format } from 'path';

@Pipe({name: 'customTitleCase'})
export class CustomTitleCasePipe implements PipeTransform {
    transform(value: string): string {

        const words = value.split(' ');
        words.forEach(function(word) {
            word = this.formatWord(word);
        });

        return words.join(' ');
    }

    formatWord(word: string): string {
        const wordInLowerCase = word.toLowerCase();

        if (wordInLowerCase === 'of' || wordInLowerCase === 'the') {
            return wordInLowerCase;
        } else {
            return wordInLowerCase.charAt(0).toUpperCase() + wordInLowerCase.slice(1);
        }
    }
}
