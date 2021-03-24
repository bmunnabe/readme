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


const isEvenOrOdd = ( n ) => n % 2 ? 'ODD' : 'EVEN';
// console.log( isEvenOrOdd( 2 ) ) Output : EVEN
