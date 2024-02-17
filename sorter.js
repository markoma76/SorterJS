
    Array.prototype.NuSortAs = function(){
        let origin = [...this];
        
        for (const ar of origin) {
            if (typeof(ar) !== 'number') {
                return console.error('this Array does not contain only numbers');
            }; 
        };
        
       let uredjenj = [];
        while (origin.length > 0) {
             let veliki = Math.max(...origin);
        for (let i = 0; i < origin.length; i++) {
            if(origin[i] === veliki){
                uredjenj.unshift(origin[i]);
                origin.splice(i,1);
                };};};
        return uredjenj;
        };

    Array.prototype.NuSortDe = function(){
        let origin = [...this];
        
        for (const ar of origin) {
            if (typeof(ar) !== 'number') {
                return console.error('this Array does not contain only numbers');
            }; 
        };
        let uredjenj = [];
            while (origin.length > 0) {
                 let veliki = Math.min(...origin);
            for (let i = 0; i < origin.length; i++) {
                if(origin[i] === veliki){
                    uredjenj.unshift(origin[i]);
                    origin.splice(i,1);
                    };};};
            return uredjenj;
            };    
   


    


