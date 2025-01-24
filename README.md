# TypeScript Type Error: String Argument to Number Parameter

This example demonstrates a common TypeScript type error that occurs when passing a string argument to a function parameter expecting a number. The error message clearly indicates the mismatch.

## Bug

The `add` function is explicitly typed to accept two numbers and return a number.  However, in the usage example, the number '2' is given as a string.  TypeScript correctly identifies this type mismatch.

## Solution

To resolve this, ensure that the arguments passed to the function match its declared types. In this case, convert the string to a number before passing it to the function using `parseInt` or `Number`.