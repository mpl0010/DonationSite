import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DailyFeaturedComponent } from "@/shared/components/daily-featured/daily-featured.component";

@Component({
    selector: 'app-landing-page',
    imports: [CardModule, DailyFeaturedComponent],
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
