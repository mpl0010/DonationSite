import { PageScrollService } from '@/shared/services/page-scroll.service';
import { ScrollState } from '@/shared/utilities/scroll-state';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    animations: [
        trigger('scroll', [
            state(ScrollState.TopOfPage, style({
                backgroundColor: 'transparent'
            })),
            state(ScrollState.Scrolled, style({
                backgroundColor: '#F9F8F8'
            })),
            transition(`${ScrollState.TopOfPage} => ${ScrollState.Scrolled}`, [animate('0.2s')]),
            transition(`${ScrollState.Scrolled} => ${ScrollState.TopOfPage}`, [animate('0.2s')]),
        ])
    ],
    imports: [CommonModule, ButtonModule, ToolbarModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
    public subscriptions: Subscription[];
    public scrollState: Observable<ScrollState>;

    constructor(private pageScrollService: PageScrollService) { 
        this.subscriptions = [];
        this.scrollState = this.pageScrollService.currentState;
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.pageScrollService.currentState.subscribe()
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((x) => x.unsubscribe());
    }
}