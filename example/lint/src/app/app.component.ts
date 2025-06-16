import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    public title = 'lint';
    // eslint-disable-next-line @stylistic/lines-between-class-members
    public arr: Array<string> = new Array<string>();

    // eslint-disable-next-line @typescript-eslint/array-type
    public arrError: string[] = ['1'];

    public constructor() {
        this.arr = this.arrError;
    }

    public ngOnInit(): void {
        new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const a: string = '1';
    }
}
