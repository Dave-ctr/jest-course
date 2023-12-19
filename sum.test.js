// const sum = require( './sum' );

// test( 'adds 1 + 2 to equal 3', () =>
// {
//   expect( 1 + 2 ).toBe( 3 );
// } )

// toBe is used for primitive data types

// test( 'two plus two equals four', () =>
// {
//   expect( 2 + 2 ).toBe( 4 );
// } )

// test( 'object assignment', () =>
// {
//   const data = { one: 1 };
//   data[ 'two' ] = 2;
//   expect( data ).toEqual( { one: 1, two: 2 } );
// } )

// test( 'null is falsy', () =>
// {
//   const n = null;
//   expect( n ).toBeFalsy();
// } )

// test( '0 is falsy', () =>
// {
//   const n = 0;
//   expect( n ).toBeFalsy();
// } )

// test( 'undefined is falsy', () =>
// {
//   const n = undefined;
//   expect( n ).toBeFalsy();
// } )

// test( 'one is truthy', () =>
// {
//   const n = 1;
//   expect( n ).toBeTruthy();
// } )

// const myFunction = require( './sum' );

// test( 'throws on invalid input', () =>
// {
//   expect(
//     () =>
//     {
//       myFunction( 'hello' ) //'hello' passes because input is invalid; myFunction(3) would fail because input is valid;
//     }
//   ).toThrow();
// } )

// const fetchData = require( './sum' );

// test( 'the data is peanut butter', done =>
// {
//   function callback( data )
//   {
//     try
//     {
//       expect( data ).toBe( 'peanut butter' );
//       done();
//     } catch ( error )
//     {
//       done( error );
//     }
//   }
//   fetchData( callback );
// } )

const fetchPromise = require( './sum' );

// test( 'the data is peanut butter', () =>
// {
//   return expect( fetchPromise() ).resolves.toBe( 'the data is peanut butter' )
// } )

// test( 'the fetch fails with an error', () =>
// {
//   return expect( fetchPromise() ).rejects.toThrow( 'error' )
// } )

// test( 'the data is peanut butter', async () =>
// {
//   const data = await fetchPromise();
//   expect( data ).toBe( 'peanut butter' );
// } )

// const mockCallback = jest.fn(x => 42 + x);
// mockCallback(0);
// mockCallback(1);
// mockCallback(2);

// test( 'mock implementation of a basic function', () =>
// {
//   const mock = jest.fn( x => 42 + x );
//   expect( mock( 1) ).toBe( 43 );
//   expect( mock ).toHaveBeenCalledWith( 1 );
// } )

test( 'spying on a method of an object', () =>
{
  const video = {
    play()
    {
      return true;
    }
  }

  const spy = jest.spyOn( video, 'play' );
  video.play();

  expect( spy ).toHaveBeenCalled();
  spy.mockRestore();

} )