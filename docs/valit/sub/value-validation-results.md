---
layout: default
title: Valit
tags: [validate, assert, ensure, check, php]
---

WORKING WITH VALIDATION RESULTS
===============================

The `Check` facade completes all assertions without throwing any exceptions.
You can use the methods described below to gain more information about the
status of the assertions.

<div class="table-wrapper" markdown="block">

| Method                | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `success()`           | Did all assertions pass?                                          |
| `hasErrors()`         | Did one or more tests fail?                                       |
| `firstErrorMessage()` | The first error message (if any)                                  |
| `errorMessages()`     | Array of error messages.                                          |
| `statusMessages()`    | Array of status message.                                          |
| `results()`           | Array of AssertionResult objects.                                 |
| `orThrowException()`  | Throw an InvalidValueException if one or more assertions failed.  |
| --------------------- | ----------------------------------------------------------------- |

</div>

Status Messages
---------------

```php
use Valit\Check;

$email = 'Some.Email@Foo.COM';

$emailCheck = Check::that($email)
    ->as('email')
    ->isEmail()
    ->isShorterThan(255)
    ->isLowercase();

print_r(
    $emailCheck->statusMessages()
);
```

Output:

```txt
Array
(
    [0] => PASS: email must be a syntax-valid email address
    [1] => PASS: email must be a string that is shorter than 255 characters
    [2] => FAIL: email must only contain lower case latin letters
)
```


Error Messages
--------------

```php
use Valit\Check;

$userInput = '-66.5';

$ageCheck = Check::that($userInput)
    ->as('age')
    ->isNaturalNumber()
    ->isGreaterThanOrEqual(18)
    ->isLowerThanOrEqual(75);

if ($ageCheck->hasErrors()) {
    print_r(
        $ageCheck->errorMessages()
    );
}
```

Output:

```txt
Array
(
    [0] => age must be a natural number
    [1] => age must be greater than or equal to 18
)
```
