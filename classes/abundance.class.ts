
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
                this.categories.push(samples[sample].name)
                console.log(this.subtype_names)
                // subtype.push(Object.keys(samples[sample].ARG.subtype))
            }

            this.type_csv = 'samples,'+this.categories.toString()+"\n";
            this.subtype_csv = 'samples,'+this.categories.toString()+"\n";

            let setT = new Set(this.type_names);
            let setSt = new Set(this.subtype_names);

            this.type_names = Array.from(setT);
            for (let set in this.type_names){
                let type = [];
                let subtype = [];

                for (let sample in samples){
                    if(!samples[sample].ARG){continue}
                    let S = samples[sample]
                    let value = S.ARG.type[this.type_names[set]]
                    if(value){type.push(value)}else{type.push(0)}
                }

                this.subtype_names = Array.from(setSt);
                for (let sample in samples){
                    if(!samples[sample].ARG){continue}
                    let S = samples[sample]
                    let value = S.ARG.subtype[this.subtype_names[set]]
                    if(value){subtype.push(value)}else{subtype.push(0)}
                }

                this.subtype_csv += this.subtype_names[set]+","+subtype.toString()+"\n"
                this.subtype_series.push({
                    name: this.subtype_names[set],
                    data: subtype
                });

                this.type_csv += this.type_names[set]+","+type.toString()+"\n"
                this.type_series.push({
                    name: this.type_names[set],
                    data: type
                });
            }
        
    }
}