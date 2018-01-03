---
layout: default
title: Valit
tags: [validate, assert, ensure, check, php]
---

Fluent Container Validation
===========================

Sometimes it can be useful to define your validation via native PHP instead of strings,
especially if you use variables instead of constants as arguments for the checks.

```php
use Valit\Check;
use Valit\Value;

$usernameMaxLength = 255;
$passwordMaxLength = 100;
$sha1Length = 40;
$rememberMeOptions = ['yes', 'no', '1', '0', ''];
$usernameMinLength = 3;
$passwordMinLength = 6;

$assertions =  [
    'username'    => Value::lengthIs('>=', $usernameMinLength)
                          ->lengthIs('<=', $usernameMaxLength),
    'password'    => Value::lengthIs('>=', $passwordMinLength)
                          ->lengthIs('<=', $passwordMaxLength),
    'remember_me' => Value::isOptional()
                          ->isOneOf($rememberMeOptions),
    'csrf_token'  => Value::hasLength($sha1Length)
                          ->isHex(),
];

$postData = [
    'username' => 'foobar',
    'password' => 'secr37',
    'remember_me' => 'foo',
    'csrf_token' => 'this is not hex',
];


$checks = Check::that($postData)->contains($assertions);

print_r(
    $checks->errorMessages()
);

```

Output:
```txt
Array
(
    [0] => remember_me must be one of "yes", "no", "1", "0", ""
    [1] => csrf_token must be a string where length is 40
    [2] => csrf_token must contain only hexidecimal characters
)
```
