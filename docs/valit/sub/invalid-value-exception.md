---
layout: default
title: Valit
tags: [validate, assert, ensure, check, php]
---

Invalid Value Exception
=======================

The InvalidValueException is thrown:

- as soon as the first failed assertion is encountered on a variable that is validated via
  the `Ensure` facade.
- when the `Check` facade is used to validate a variable with one or more failed assertions
  and the `orThrowException` method is called.


```php
use Valit\Check;
use Valit\Exceptions\InvalidValueException;

$age = -600.66;

try {

    Check::that($age)
        ->as('entered age')
        ->isNaturalNumber()
        ->isGreaterThanOrEqual(18)
        ->isLowerThanOrEqual(75)
        ->orThrowException();

} catch (InvalidValueException $e) {

    print 'SHORT MESSAGE:' . PHP_EOL;
    print '==============' . PHP_EOL;
    print $e->getMessage();
    print PHP_EOL;
    print PHP_EOL;

    print 'DETAILED MESSAGE:' . PHP_EOL;
    print '=================' . PHP_EOL;
    print $e->detailedMessage();
}
```

Output:

```txt
SHORT MESSAGE:
==============
Validation of entered age failed

DETAILED MESSAGE:
=================
Validated of entered age failed the following expectations:
 * entered age must be a natural number.
 * entered age must be greater than or equal to 18.
```

Some people find it inconvenient to work with long exception messages
containing newlines. It might therefore be useful for you to simply
use the getShortMessage() met

WORKING WITH VALIDATION RESULTS
===============================

The `Valit\Exceptions\InvalidValueException` has the same
functionality as the `ValueValidator` that is returned
when you validate a value with the `Check` facade.
This means that you have access to all the following
utility functions on the exception object:

| --------------------- | ----------------------------------------------------------------- |
| Method                | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `getMessage()`        | The exception message.                                            |
| `detailedMessage()`   | A more detailed exception message.                                |
| `firstErrorMessage()` | The first error message.                                          |
| `errorMessages()`     | Array of error messages.                                          |
| `statusMessages()`    | Array of status message.                                          |
| `results()`           | Array of AssertionResult objects.                                 |
| --------------------- | ----------------------------------------------------------------- |
