// import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule],
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    // @angular-eslint/prefer-output-emitter-ref
    // @Output()
    // public readonly titleChanges: EventEmitter<string> = new EventEmitter<string>();
    public readonly titleChanges: OutputEmitterRef<string> = output<string>();

    public readonly a: WritableSignal<string> = signal('str1');

    public readonly b: string = 'str2';
}
