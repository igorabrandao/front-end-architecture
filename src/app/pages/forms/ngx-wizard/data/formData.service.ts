import { Injectable } from '@angular/core';

import { FormData, Personal, Address } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid = false;
    private isWorkFormValid = false;
    private isAddressFormValid = false;

    constructor(private workflowService: WorkflowService) {
    }

    getPersonal(): Personal {
        const personal: Personal = {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          email: this.formData.email
        };
        return personal;
    }

    setPersonal(data: Personal) {
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork(): string {
        return this.formData.work;
    }

    setWork(data: string) {
        this.isWorkFormValid = true;
        this.formData.work = data;
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress(): Address {
        const address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        return this.formData;
    }

    resetFormData(): FormData {
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        return this.isPersonalFormValid && this.isWorkFormValid && this.isAddressFormValid;
    }
}
