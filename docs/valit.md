---
layout: default
---

# Validation

[![Build Status](https://travis-ci.org/moccalotto/valit.svg)](https://travis-ci.org/moccalotto/valit)

Validate variables using a fluent syntax.

Easily assert that variables have pass certain critera. 

Re-use the same validators for many variables.

## Installation

To add this package as a local, per-project dependency to your project, simply add a dependency on
 `moccalotto/valit` to your project's `composer.json` file like so:

```json
{
    "require": {
        "moccalotto/valit": "~0.5"
    }
}
```

Alternatively simply call 
```bash
composer require moccalotto/valit
```


## Checkers

The `Check` class is the a so-called facade of the valit package.
In short it makes it easy for you to make lots of validation checks.

```php
use Moccalotto\Valid\Facades\Check; // performs checks
use Moccalotto\Valid\Facades\Ensure; // performs checks
```

### Validity
You can determine if a variable passes all your criteria by using the 
`valid` method.

Conversely you can use the `invalid` method to check if one or more
checks did not pass.

```php
$x = 42; // the variable to validate

$valid = Check::that($x)
    ->isInt()                   // Success
    ->isGreaterThanOrEqual(42)  // Success
    ->isLowerThan(100)          // Success
    ->valid();                  // true
```

### Error Messages
If you want to know precisely which checks failed, 

```php
$x = 42; // the variable to validate

$errors = Check::that($x)
    ->isNumeric()       // Success
    ->isFloat()         // Fail
    ->isCloseTo(40)     // Fail
    ->errorMessages();
    
/*[
    "value must have the type "double"",
    "value must equal 40 with a margin of error of 1.0e-5",
]*/
```

### Aliases
If you display the error messages to the end user,
you can tell them exactly which variable failed the validation by giving the
value an alias. This is done via the `as` method. If you prefer, you can
use the `alias` method, which does exactly the same.

```php
$x = 'foo@example.com';

$errors = Check::that($x)
    ->as('Email')
    ->isEmail()             // Success
    ->endsWith('.co.uk')    // Fail
    ->errorMessages();
    
/* [
'Email must end with .co.uk, but it is string:"foo@example.com"',
] */
```

### Ensuring
If you want to assert that all checks must pass, you can call the 
`orThrowException` method, which will throw a 
`Moccalotto\Validation\ValidationException`.


```php
$x = 'Doctor.Hansen@Example.com';

Check::that($x)
    ->as('Email')
    ->isEmail()             // Success
    ->isLowercase()         // Fail
    ->endsWith('.co.uk')    // Fail
    ->orThrowException();   // Throws ValidationException
```

The `ValidationException` will contain a list of all the error messages,
that can be accessed via the `getErrorMessages` method like so:

```php
$x = '42.3';

try {
    Check::that($x)
        ->as('age')
        ->isDigits()            // Fail
        ->isGreaterThan(18)     // Success
        ->isLowerThan(100)      // Success
        ->orThrowException();
        
} catch (ValidationException $e) {
    $errors = $e->getErrorMessages();
}

/* [
 'age should only contain decimals, but is: string:"42.3"'
] */
```
