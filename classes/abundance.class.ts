
export class AbsoluteAbundance {

    type_csv: string;
    subtype_csv: string;
    type_series: Array<Object> = [];
    subtype_series: Array<Object> = [];
    type_names: Array<string> = [];
    subtype_names: Array<string> = [];
    categories: Array<string> = [];

    constructor(){
        
    }

    getTypeAbsoluteAbundance(samples: Object){
        
            for (let sample in samples){
                
                if(!samples[sample].ARG){continue}

                let aux = Object.keys(samples[sample].ARG.type)
                this.type_names = this.type_names.concat(aux)
                this.subtype_names = this.subtype_names.concat(Object.keys(samples[sample].ARG.subtype))
                // this.categories.push(samples[sample].name)
                // console.log(this.subtype_names)
                // subtype.push(Object.keys(samples[sample].ARG.subtype))
            }

            this.type_csv = 'samples,'+this.categories.toString()+"\n";
            this.subtype_csv = 'samples,'+this.categories.toString()+"\n";

            let setT = new Set(this.type_names);
            let setSt = new Set(this.subtype_names);

            // console.log(this.subtype_names)

            this.type_names = Array.from(setT);
            for (var set=0; set<this.subtype_names.length+this.type_names.length; set++){
                // console.log(set)
                let type = [];
                let subtype = [];

                // console.log( this.subtype_names[set], this.subtype_names[set] )

                for (let sample in samples){
                    if(!samples[sample].ARG){continue} // check if the sample has been already analyzed
                    let S = samples[sample]
                    let value = S.ARG.type[this.type_names[set]]
                    if(value){type.push(value)}else{type.push(0)}
                }

                this.subtype_names = Array.from(setSt);
                for (let sample in samples){
                    if(!samples[sample].ARG){continue} // check if the sample has been already analyzed
                    let S = samples[sample]
                    let value = S.ARG.subtype[this.subtype_names[set]]
                    if(value){subtype.push(value)}else{subtype.push(0)}
                }

                if(this.subtype_names[set]){
                    this.subtype_csv += this.subtype_names[set]+","+subtype.toString()+"\n"
                    this.subtype_series.push({
                        name: this.subtype_names[set],
                        data: subtype
                    });
                }
                
                if(this.type_names[set]){
                    this.type_csv += this.type_names[set]+","+type.toString()+"\n"
                    this.type_series.push({
                        name: this.type_names[set],
                        data: type
                    });
                }
            
            }
        
    }
}