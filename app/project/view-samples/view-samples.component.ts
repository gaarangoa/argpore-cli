import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GrowlModule, Message} from 'primeng/primeng';

import { SampleService } from '../../../services/sample/sample.service';
import { Session } from '../../../services/session/session.service';
import { ConfirmationService } from 'primeng/primeng';

import { ProjectComponent } from '../project.component';

import { AbsoluteAbundance } from '../../../classes/abundance.class' 

import * as FileSaver from 'file-saver';


@Component({
  // selector: 'app-view-samples',
  templateUrl: './view-samples.component.html',
  styleUrls: ['./view-samples.component.css']
})


export class ViewSamplesComponent implements OnInit {

  private sub: any;
  msgs: Message[] = [];
  public rel_abn_type = [];
  public rel_abn_subtype = [];
  public options: Object;
  public type_csv: string;
  public subtype_csv: string;
  public absoluteAbundance: any;



  constructor(
    public router: Router, 
    private route: ActivatedRoute, 
    private sampleService: SampleService, 
    private confirmationService: ConfirmationService,
    private session: Session,
    private projectComponent: ProjectComponent,
    
  ){
    
   }

    ngOnInit(){
      
      this.sub = this.route.params.subscribe(
        params => {
          // this.dt.reset();
          
          this.sampleService.getSamplesByProject(this.projectComponent.projectID)
            .subscribe(response =>{
              
              // console.log(this.sampleService.samplesByProject)
              let samples = this.sampleService.samplesByProject
              
              this.absoluteAbundance = new AbsoluteAbundance();
              this.absoluteAbundance.getTypeAbsoluteAbundance(samples);

              this.options = {
                chart: {
                    type: 'bar'
                },
                credits: {
                    enabled: false
                },
                title : { text : 'Antibiotic Resistance Categories' },
                xAxis: {
                    categories: this.absoluteAbundance.categories
                },
                series: this.absoluteAbundance.type_series,
                legend: {
                    // shadow: true
                },
                plotOptions: {
                    series: {
                        stacking: 'percent',
                        dataLabels: {
                            enabled: false,
                      }
                    }
                },
              }

              // console.log(this.rel_abn_type, this.rel_abn_subtype);

            });
        }
      );
    }


    download_type(kind: string){
      let blob = new Blob([this.absoluteAbundance[kind]], {type: "text/plain;charset=utf-8"});
      let url = URL.createObjectURL(blob)
      // window.open(url, '_blank', "");
      FileSaver.saveAs(blob, kind+'_distribution.csv');
    }


    ngOnDestroy() {
      this.sub.unsubscribe();
    }
    

    rerun(sample: any){
      // console.log(sample)
      this.confirmationService.confirm({
            message: 'ARGpore will execute only if only there were any errors during the execution.',
            header: 'Re-run sample',
            icon: 'fa fa-play',
            accept: () => {
                this.sampleService.run(sample)
                  .subscribe(project => {
                    
                  });   
            }
        });

    }

    removeSample(sample: any) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this sample?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.sampleService.deleteSample(sample)
                  .subscribe(()=>{
                    
                  })
                
            }
        });
    }

    reRun(){

    }


}
