
function classify(number) {
    // return number
    
    const getSum = ( num ) => {
        let sum = 0;
        for ( let i = 1; i <= Math.sqrt( num ); i++ ) {
           if ( num % i === 0 ) {
               if ( num / i === i ) {
                   sum += i;
               } else {
                   sum += i;
                   sum = sum + ( num / i );
               }
           } 
        }
        sum = sum - num;
        return sum;
    }

    return number === getSum( number )
        ? "Perfect" 
        : getSum( number ) > number
            ? "Abundant"
         : getSum( number ) < ( 2 * number )
            ? "Deficient"
            : "Perfect";
}



function countCircularPrimes(number) {
    const isPrime = ( num ) => {
        if ( num <= 1 ) {
            return false;
        }
        for ( let i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    
    const isCircularPrime = ( num ) => {
        let count = 0;
        let temp = num;
        
        while( temp > 0 ) {
            count++;
            temp = parseInt( temp / 10, 10 );
        }
        
        let num2 = num;
        while ( isPrime( num2 ) ) {
            let rem = num2 % 10;
            let bal = parseInt( num2 / 10, 10 );
            num2 = ( ( Math.pow( 10, count -1 ) ) * rem ) + bal;
            if( num2 === num ) {
                return true;
            }
        }
        return false;
    }
    
    // return isCircularPrime( number );
    
    let count = 0;
    for( let i = 0; i < number; i++ ) {
        count = isCircularPrime( i ) ? count + 1 : count;
    }
    
    return count;
}

function numSundaysOnFirst(year) {
   const sundaysInMonth = ( year ) => {
       const days = new Date( year, 0, 0 ).getDate();
       let sun = [];
       for ( let i = 1; i <= days; i++ ) {
           let newDate = new Date( year, 0, i );
           if ( newDate.getDay() == 6 ) {
               sun.push( i );               
           }
       }
       return sun.length;
   }
   return sundaysInMonth( year );
}


function getNumber(binary) {
    // Write your code here
    let result = '';
    while( binary !== null ) {
        result += binary.data
        binary = binary.next;
    }
    return parseInt( result, 2 );
}
