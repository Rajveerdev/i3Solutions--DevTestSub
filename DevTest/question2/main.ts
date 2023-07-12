export function findOutlier(integers: number[]): number {
    var evenset = [], oddset = [];
    var evlen, odlen;
    for (var i = 0; i < integers.length; i++){
      // getting the modulo to see if it's odd
        if ((integers[i] % 2) != 0){
          oddset.push(integers[i]);
        }
        // This is for even
        else{
          evenset.push(integers[i]);
        }
    }

    //returing the outlier of the odd number
    if (odlen.length < evlen){
        return oddset[0];
    }

    //returing the outlier of the even number
    else{
      return evenset[0];
    }

  }

  // I feel that there is a simplier way for this.