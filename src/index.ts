export {};

// EXAMPLE 1 - Ignore errors using `// @ts-ignore`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function sum(a, b) {
  return a + b;
}

// ---------------------------------------------------

// // EXAMPLE 2 - Ignore errors using `// @ts-expect-error`

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-expect-error
// function sum(a, b) {
//   return a + b;
// }

// ---------------------------------------------------

// // EXAMPLE 3 - When to use ts-ignore and ts-expect-error

// function logMessage(message: string) {
//   if (typeof message !== 'string') {
//     return 'message has to be a string';
//   }

//   console.log(message);
//   return message;
// }

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-expect-error
// const result = logMessage(42);

// if (result === 'message has to be a string') {
//   console.log('test successful');
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Ignore all errors in a file

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck

// function sum(a, b) {
//   return a + b;
// }
