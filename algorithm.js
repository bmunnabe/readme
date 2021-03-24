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
