import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hospital } from '@/shared/models/hospital.model';

@Injectable({
    providedIn: 'root'
})
export class HospitalService {
    private hospitals: Hospital[] = [];

    constructor() { 
        // TODO: Temporary data. Remove when fetching from API
        this.hospitals = [
            {
                id: 1,
                name: "Children's of Alabama",
                imageLink: '/assets/img/coa735x300.jpg',
                state: 'AL',
                city: 'Birmingham'
            },
            {
                id: 2,
                name: "Other Hospital",
                imageLink: 'test',
                state: 'FL',
                city: 'Destin'
            }
        ]
    }

    getHospitals(): Observable<Hospital[]> {
        return of(this.hospitals);
    }
}
