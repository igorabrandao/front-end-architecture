import { Injectable } from '@angular/core';
import { STEPS } from './workflow.model';

@Injectable()
export class WorkflowService {
    private workflow = [
        { step: STEPS.personal, valid: false },
        { step: STEPS.work, valid: false },
        { step: STEPS.address, valid: false },
        { step: STEPS.result, valid: false }
    ];

    validateStep(step: string) {
        let found = false;
        for (let i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    }

    resetSteps() {
        this.workflow.forEach(element => {
            element.valid = false;
        });
    }

    getFirstInvalidStep(step: string): string {
        let found = false;
        let valid = true;
        let redirectToStep = '';
        for (let i = 0; i < this.workflow.length && !found && valid; i++) {
            const item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            } else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    }
}
