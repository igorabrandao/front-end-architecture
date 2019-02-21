import { Component, OnInit } from '@angular/core';

import { Address } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mt-wizard-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})

export class AddressComponent implements OnInit {
    title = 'Where do you live?';
    address: Address;
    form: any;

    constructor(private router: Router,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();

    }

    save(form: any) {
        if (!form.valid) {
          return;
        }

        this.formDataService.setAddress(this.address);
        const firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    }

    cancel() {
        this.router.navigate(['work'], { relativeTo: this.route.parent, skipLocationChange: true });
    }

}
