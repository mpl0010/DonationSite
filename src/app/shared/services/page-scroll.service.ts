import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, map, Observable, Subscription } from 'rxjs';
import { ScrollState } from '@/shared/utilities/scroll-state';

@Injectable({
    providedIn: 'root'
})
export class PageScrollService implements OnDestroy {
    private subscriptions: Subscription[];
    private zone;
    private scrollState: BehaviorSubject<ScrollState> = new BehaviorSubject<ScrollState>(ScrollState.TopOfPage);

    public currentState: Observable<ScrollState> = this.scrollState.asObservable();

    constructor(zone: NgZone) {
        this.subscriptions = [];
        this.zone = zone;
        this.zone.runOutsideAngular(() => {                     //  Run the Scroll event outside of Angular.
            const scroll = fromEvent(window, 'scroll').pipe(
                map(() => window.scrollY),                      //  Emit the scrollY position and compare it to the position of the top of the page.
                distinctUntilChanged(),                         //  Only emit when the current value is different from the last.
                map((scrollTop: number) => scrollTop > 0),      //  Compare the emitted value, emit result of comparison.
                distinctUntilChanged(),                         //  Only emit when the current value is different from the last.
            )
            .subscribe((state) => this.updateScrollState(state));       //  Anytime a value is emitted, perform our funciton.

            this.subscriptions.push(scroll);
        });
    }
    
    ngOnDestroy(): void {
        this.subscriptions.forEach(x => x.unsubscribe());
    }

    private updateScrollState(state: boolean) {
        const scrollState = state ? ScrollState.Scrolled : ScrollState.TopOfPage;
        this.scrollState.next(scrollState);
    }
}
