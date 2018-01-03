---
layout: default
title: Valit
tags: [validate, assert, ensure, check, php]
---

Value Validation
================

The `Ensure` facade is an interface to validate variables.

If the variable is invalid a `Valit\Exceptions\InvalidValueException` (which extends `InvalidValueException`) will
be thrown.

```php
use Valit\Ensure;

$age = 42;

Ensure::that($age)
    ->isNaturalNumber()
    ->isGreaterThanOrEqual(18)
    ->isLowerThanOrEqual(75);

print 'No exceptions thrown, all assertions passed';
```
