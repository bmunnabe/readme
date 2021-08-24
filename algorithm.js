// SEARCHING 0(n/2)
const _search = ( arr, v ) => {
    let result = false;
    while ( arr.length > 2 ) {
        if ( arr.shift() === v || arr.pop() === v ) {
            result = true;
            break;
        }
    }
    return result || arr.includes( v );
}
_search( [ 7,1,2,3,4,5,6,9,11,22,33,44,55,66,77,88,99,99,9], 99 )

/*
 *   const divideintoFour = ( arr, v ) => {
 *      const half = Math.floor( arr.length / 2 ); 
 *      return _search( [ ...arr ].slice( 0, half ), v ) || _search( [ ...arr ].slice( half ), v );
 *   }
 
const _search = ( input, v ) => {
    let result = false;

    let arrCopy = [ ...input ];

    while ( arrCopy.length > 4 ) {
        const half = Math.floor( arrCopy / 2 );

        const arr = [ ...arrCopy ].slice( 0, half );
        if ( arr.shift() === v || arr.pop() === v ) {
            result = true;
            break;
        }

        const arr2 = [ ...arrCopy ].slice( half ); 
        if ( arr2.shift() === v || arr2.pop() === v ) {
            result = true;
            break;
        }

        arrCopy = [ ...arr, ...arr2 ];
    }
    return result || arrCopy.includes( v );
}


 */


//INFINITE CURRY
const fn = ( a ) => ( b ) => !b ? a : fn( a +b );
fn(1)(2)(3)4(5)() // 10


//LARGEST NUMBER 
[ 3,30,34,5,9 ].sort( ( a, b ) => ( '' + b + a )-( '' + a + b ) ).join( '' );  // 9534330
// or 
[ 3,30,34,5,9 ].map( String ).sort( ( a, b ) => ( a + b )-( b - a ) ).join( '' )




const maxSubArrss = ( ...num ) => {
    let max = num[ 0 ];
    let sum = num[ 0 ];
    for ( let i = 1; i < num.length; i++ ) {
        sum =  sum > 0 ? sum + num[ i ] : num[ i ]; //  or   sum =  sum + num[ i ] > num[ i ] ? sum + num[ i ] : num[ i ];
        max = Math.max( sum, max ); 
    }
    return max;
}
maxSubArrss(-2,1,-3,4,-1,2,1,-5,4) // 6



// MERGE SORT
const merge = ( left, right ) => {
  let arr = [];
  while ( left.length && right.length ) {
    if ( left[ 0 ] < right[ 0 ] ) {
      arr.push( left.shift() );
    } else {
      arr.push( right.shift() );
    }
  }
  return [ ...arr, ...left, ...right ];
}


const mergeSort = ( arr ) => {
  const half = arr.length / 2;
  if ( arr.length < 2 ) {
     return arr;
  }
  const left = arr.splice( 0, half );
  return merge( sort( left ), sort( arr ) );
}
console.log( mergeSort( [ 4,1,5,7,1 ] ) )


// BUBBLE SORT
const sortingArray = ( arr ) => {
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = i + 1; j < arr.length; j++ ) {
      if ( arr[ i ] > arr[ j ] ) {
        [ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];
      } 
    }
  }
  return arr;
}
// console.log( sortingArr( [ 2, 4, 5, 1, 3, 5, 8 ]) ); , Output : [1, 2, 3, 4, 5, 5, 8]

//----------------------------------------------------------//
/*
getMinimumReversalOfCoins:
There are N coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. What is the minimum number of coins that must be reversed to achieve this?
Examples:

1. Given array A = [1,0, 1, 0, 1, 1], the function should return 1. After reversing the sixth coin, we achieve an alternating sequence of coins [1, 0, 1, 0, 1, 0].
2. Given array A = [1,1,0, 1, 1], the function should return 2. After reversing the first and fifth coins, we achieve an alternating sequence [0, 1, 0, 1, 0].
3. Given array A = [0, 1, 0], the function should return O. The sequence of coins is already alternating.
4. Given array A = [0, 1, 1, 0], the function should return 2. We can reverse the first and second coins to get the sequence: [1, 0, 1, 0].
*/

const getMinimumReversalOfCoins = ( list ) => {
    const reverse = ( val ) => val === 0 ? 1 : 0;
    const getReverse = ( arr, expected ) => {
        let reversed = 0;
        arr.forEach( ( item ) => {
            if ( expected !== item ) {
                reversed++;
            }
            expected = reverse( expected )
        } );
        return reversed;
    };
    return Math.min( getReverse( list, 0 ), getReverse( list, 1 ) );
}



const findMinimum = ( arr ) => {
  let currentMin;
  currentMin = arr[ 0 ];
  for ( i = 1; i < arr.length; i++ ) {
    if ( arr[ i ] < currentMin ) {
      currentMin = arr[ i ];
    }
  }
  return currentMin;
}

// findMinimum( [ 2, 4, 5, 6, 7, 10, 1, 19, 39] ), Output : 1


function getMaxTwoNumber( arr ) {
  let max = 0;
  let nextMax = 0;

  for ( const val of arr ) {
    if ( val > max ) {
      [ nextMax, max ] = [ max, val ];
    } else if ( val < max && val > nextMax ) {
      nextMax = val;
    }
  }
  return [ max, nextMax ];
}
//getMaxTwoNumber( [ 1, 3,4,5,6,7,9,16, 12,7,1,67,8, 81 ] ), OUTPUT : [ 81, 67 ]


var findValueInArray = ( arr, value ) => {
    let result;
    for( let index = 0; index < arr.length; index++ ) {
      if ( arr[ index ] === value ) {
        result = { value : arr[ index ], index }
        break;
      }
    }
    return result;
}



const sortingArray = ( arr ) => {
  for ( let i = 0; i < arr.length; i++ ) {
    let currentItem = arr[ i ];
    for ( let j = i + 1; j < arr.length; j++ ) {
      let nextItem = arr[ j ];
      if ( currentItem > nextItem ) {
        arr[ i ] = nextItem;
        arr[ j ] = currentItem;
        currentItem = arr[ i ];
        nextItem = arr[ j ];
      } 
    }
  }
  return arr;
}




const isEvenOrOdd = ( n ) => n % 2 ? 'ODD' : 'EVEN';
// console.log( isEvenOrOdd( 2 ) ) Output : EVEN


// Count Anagrams
function countingAnagrams( words ) {
  let sortedWords = words.map( item => item.split('').sort().join('') );
  let uniqueWords = [ ...new Set( sortedWords ) ];
  let countMap = {};

  for ( let item of uniqueWords ) {
    let arrIndex = sortedWords.reduce( ( acc, word, index ) => {
      if ( item === word ) {
        acc.push(index);
      }
      return acc;
    }, [] );
    countMap[ item ] = arrIndex;
  }

  let finalArr = [];
  for ( let reduceItem in countMap ) {
    finalArr.push( countMap[ reduceItem ].map( item => words[ item ] ) );
  }
  return finalArr;

  // return finalArr.reduce( ( acc, item ) => item.length > 1 ? acc + 1 : acc, 0 ); OUTPUT : 2 (since str, a are anagrams)
}

countingAnagrams( 'str', 'rst', 'a', 'a', 'b' ) // output [ [ "str","rst" ], [ "a","a" ],[ "b" ] ]



var data = [
  { name: 'users' , parent : null },
  { name: 'distalx' , parent : 'users' },
  { name: 'guest' , parent : 'users' },
  { name: 'shared' , parent : 'users' },
  { name: 'documents' , parent : 'distalx' },
  { name: 'music' , parent : 'distalx' },
  { name: 'desktop' , parent : 'distalx' },
  { name: 'javascript' , parent : 'documents' },
  { name: 'funjs' , parent : 'documents' },
  { name: 'functions' , parent : 'documents' }
];


const sortDirectories= ( myArray, parent ) => {
  const output = [];
  myArray
    .filter( ( item ) => item.parent === parent )
    .forEach( ( item ) => output.push( { ...item, child : sortDirectories( myArray, item.name ) } ) )
  return output;
}

console.log( sortDirectories( data, null ) );




var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
/*
[
  { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
  { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
  { skill: 'html', user: ['Sue'], count: 1 }
];
*/

const converToFormat = ( arr ) => {
    const getMap = ( arr ) =>
      arr.reduce( ( acc, { skill, user } ) => {
        acc[ skill ] = [ ...( acc[ skill ] ? acc[ skill ] : [] ), user ];
        return acc;
      }, {} );

    const result = []
    const mapped = getMap( arr );
    for( let key in mapped ) {
      result.push(
        { skill : key, user : mapped[ key ], length : mapped[ key ].length }
      );
    }
    return result;
}


parentArray = [ 5, 10, 15, 20, 25, 30 ]
childArray = [ 10, 20, 30 ] // true
// childArray2 = [15, 5, 30] // false
// childArray3 = [5, 10, 30, 40]  // false
 
 
 function isSeq( parent, child ) {
   let result;
 	 for ( let i = 0; i < child.length; i++ ) {
   		const item = child[ i ];
   		const index = parent.indexOf( item );

        if ( index === -1 ) {
          result = false;
          break;
        }

        const nextItem = child[ i + 1 ];
        const nextIndex = parent.indexOf( nextItem );
        if ( nextItem && ( nextIndex === -1 || index > nextIndex ) ) {
          result = false;
          break;
        }
      
    	result = true;
   }
    return result;
 }



// FLAT ARRAY |   [ 0, 1, 2, [3, 4], [5, 6, 7] ]
function flatten( items ) {
   const result = [];
   items.forEach(
    ( ele ) => Array.isArray( ele )
      ? result.push( ...flatten( ele ) )
      : result.push( ele )
   );
   return result;
}
// or  [ 0, 1, 2, [3, 4], [5, 6, 7] ].toString().split(',')
