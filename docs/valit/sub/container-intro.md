---
layout: default
title: Valit
tags: [validate, assert, ensure, check, php]
---

Container Validation
====================

The `Ensure` facade is an interface to validate variables.

If the variable is invalid a `Valit\Exceptions\InvalidValueException` (which extends `InvalidValueException`) will
be thrown.

```php
use Valit\Value;
use Valit\Ensure;

$assertions =  [
    'username'      => 'stringWhereLength("≤", 255) & longerThan(2)',
    'password'      => 'stringWhereLength("≤", 65535) & longerThan(4)',
    'remember_me'   => 'optional & oneOf("yes", "no")',
    'csrf_token'    => 'hexString & hasLength(40)',
];

$postData = [
    'username' => 'foobar',
    'password' => 'secr37',
    'remember_me' => 'yes',
    'csrf_token' => '4f0a8c629e23d947bb369cf420607947c24dc9a9',
];

$checks = Ensure::that($postData)->contains($assertions);

print_r(
    $checks->statusMessages()
);
```

Output:

```txt
Array
(
    [0] => PASS: username must be present
    [1] => PASS: username must have the type(s) "string"
    [2] => PASS: username must be a string where length ≤ 255
    [3] => PASS: username must be a string where length > 2
    [4] => PASS: password must be present
    [5] => PASS: password must have the type(s) "string"
    [6] => PASS: password must be a string where length ≤ 65535
    [7] => PASS: password must be a string where length > 4
    [8] => PASS: remember_me must be one of "yes", "no"
    [9] => PASS: csrf_token must be present
    [10] => PASS: csrf_token must contain only hexidecimal characters
    [11] => PASS: csrf_token must be a string that has the length 40
)
```


CONTAINER VALIDATION RESULTS
----------------------------

The `ContainerValidator` has a number of utility methods you
can use to get info about the results of validating the container.

| ------------------------- | ----------------------------------------------------------------- |
| Method                    | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `errors()`                | Array of failed AssertionResult objects.                          |
| `results()`               | Array of all AssertionResult objects.                             |
| `errorMessages()`         | Array of error messages for all fields.                           |
| `errorMessagesByPath()`   | Array of error messages for a given field.                        |
| `statusMessages()`        | Array of status messages for all fields.                          |
| `statusMessagesByPath`    | Array of status messages for a given field.                       |
| ------------------------- | ----------------------------------------------------------------- |
