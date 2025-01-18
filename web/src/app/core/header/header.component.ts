import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { BehaviorSubject, distinctUntilChanged, fromEvent, map, Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    animations: [
        trigger('scroll', [
            state('topPage', style({
                backgroundColor: 'transparent'
            })),
            state('scrolled', style({
                backgroundColor: '#1798c3'
            })),
            transition('topPage => scrolled', [animate('0.2s')]),
            transition('scrolled => topPage', [animate('0.2s')]),
        ])
    ],
    imports: [CommonModule, ButtonModule, ToolbarModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
    private zone;
    private cdr;

    public subscriptions: Subscription[];

    scrollState = new BehaviorSubject<string>('topPage');

    constructor(zone: NgZone,
        cdr: ChangeDetectorRef
    ) {
        this.subscriptions = [];
        this.zone = zone;
        this.cdr = cdr;

        // TODO: Create a service that handles this. The component should not be responsible.
        this.zone.runOutsideAngular(() => {                     //  Run the Scroll event outside of Angular.
            const scroll = fromEvent(window, 'scroll').pipe(
                map(() => window.scrollY),                      //  Emit the scrollY position and compare it to the position of the top of the page.
                distinctUntilChanged(),                         //  Only emit when the current value is different from the last.
                map((scrollTop: number) => scrollTop > 0),      //  Compare the emitted value, emit result of comparison.
                distinctUntilChanged(),                         //  Only emit when the current value is different from the last.
            )
            .subscribe((state) => this.setTopBar(state));       //  Anytime a value is emitted, perform our funciton.


            this.subscriptions.push(scroll);                    //  Add the Subscription to the array so that it will be disposed of later.
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        // TODO: Test this when another page exists.
        this.subscriptions.forEach((x) => x.unsubscribe());
    }

    setTopBar(state: boolean) {
        this.scrollState.next(state ? 'scrolled' : 'topPage')
        this.cdr.detectChanges();
    }
}
