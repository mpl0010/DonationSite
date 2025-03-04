import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-landing-page',
    imports: [CardModule],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    cardDt = {
        title: {
            fontSize: '1.75rem'
        }
    };
}
