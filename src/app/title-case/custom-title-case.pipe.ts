import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'customTitleCase'})
export class CustomTitleCasePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return null;
        }
        const words: string[] = value.split(' ');

        for (let i = 0; i < words.length; i++) {
            words[i] = this.formatWord(words[i], i);
        }
        return words.join(' ');
    }

    formatWord(word: string, index: number): string {
        const wordPassed: string = word.toString();
        const wordInLowerCase = word.toLowerCase();

        if (index !== 0 && wordInLowerCase === 'of' || wordInLowerCase === 'the') {
            return wordInLowerCase;
        } else {
            return wordInLowerCase.charAt(0).toUpperCase() + wordInLowerCase.slice(1);
        }
    }
}
