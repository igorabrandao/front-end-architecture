import { Component, OnInit, Input } from '@angular/core';

import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component ({
    selector: 'app-mt-wizard-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
    public title = 'Thank You!';
    @Input() formData: FormData;
    public isFormValid = false;

    constructor(private router: Router, private route: ActivatedRoute, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }

    submit() {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
