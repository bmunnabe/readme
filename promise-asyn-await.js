const delay = seconds => new Promise(
  resolve => setTimeout(
    () => resolve( `${ seconds } seconds delayed` ),
    seconds * 1000
  )
);

const countToFive = async() => {
  console.log( 'Asyn start' );
  console.log( `${ await delay(1) } from Asyn await` );
  console.log( `${ await delay(2) } from Asyn await` );
  console.log( 'Asyn End' );
}


countToFive();

delay( 2 )
  .then( ( r ) => console.log( `${ r } from promise` ) )
  .then( () => console.log('Promise END') )
  .finally( _ => console.log( 'Finally' ) )
  .catch( ( e ) => console.log( e ) );


// Asyn start
// 1 seconds delayed from Asyn await
// 2 seconds delayed from promise
// Promise END
// Finally
// 2 seconds delayed from Asyn await
// Asyn End
