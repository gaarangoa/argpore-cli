import { Component,  OnInit, OnDestroy} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';

import { Message } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

// services
import { Session } from '../../../services/session/session.service';
import { ConfirmationService } from 'primeng/primeng';


@Component({
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponent implements OnInit {

  private SUB: any;
  private msgs: Message[] = [];
  private items: MenuItem[];
  public activeIndex: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private confirmationService: ConfirmationService,
    private session: Session
  ) {

  }


  ngOnInit() {


      this.items = [{
                label: 'Insert Metadata',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                }
            },
            {
                label: 'Upload Files',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    
                }
            },
            {
                label: 'Setup Parameters',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    console.log('here in the two')
                }
            },
            {
                label: 'Execute',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    
                }
            }
        ];

  }

  ngOnDestroy(){

  }

}
