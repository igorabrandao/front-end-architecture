import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mt-wizard-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {
    title = 'What do you do?';
    workType: string;
    form: any;

    constructor(private router: Router,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();

    }

    save(form: any) {
        if (!form.valid) {
          return;
        }

        this.formDataService.setWork(this.workType);
        const firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
        this.router.navigate(['address'], { relativeTo: this.route.parent, skipLocationChange: true });
    }

    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
