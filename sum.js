// function sum( a, b )
// {
//   return a + b;
// }

// module.exports = sum;

// function myFunction( input )
// {
//   if ( typeof input !== 'number' ) // check if input is invalid)
//   {
//     throw new Error( 'Invalid Input' );
//   }
// }

// module.exports = myFunction

// function fetchData( callback )
// {
//   return new Promise( ( resolve, reject ) =>
//   {
//     setTimeout( () =>
//     {

//       callback( 'peanut butter' );
//     }, 1000 );
//   } );
// }

// module.exports = fetchData

function fetchPromise()
{
  return new Promise( ( resolve, reject ) =>
  {
    setTimeout( () =>
    {
      resolve( 'peanut butter' )
    }, 1000 )
  } )
}

module.exports = fetchPromise