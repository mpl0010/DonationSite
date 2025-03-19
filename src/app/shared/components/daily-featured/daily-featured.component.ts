import { Hospital } from '@/shared/models/hospital.model';
import { HospitalService } from '@/shared/services/hospital.service';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel'

@Component({
    selector: 'daily-featured',
    imports: [CardModule, CarouselModule],
    templateUrl: './daily-featured.component.html',
    styleUrl: './daily-featured.component.scss',
    providers: []
})
export class DailyFeaturedComponent implements OnInit {
    public hospitals: Hospital[];
    
    constructor(private hospitalService: HospitalService) {
        this.hospitals = [];
    }

    ngOnInit(): void {
        this.hospitalService.getHospitals().subscribe((res) => this.hospitals = res);
    }    
}