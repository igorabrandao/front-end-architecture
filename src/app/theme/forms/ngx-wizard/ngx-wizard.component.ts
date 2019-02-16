import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-multi-step-wizard',
    templateUrl: './ngx-wizard.component.html',
    styleUrls: ['./ngx-wizard.component.scss']
})

export class NGXFormWizardComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    }

}
