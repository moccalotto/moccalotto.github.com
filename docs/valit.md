---
layout: default
title: Valit
excerpt: Validate variables using a fluent syntax. Easily assert that variables pass certain criteria. Re-use the same validators for many variables.
tags: [validate, assert, ensure, check, php]
---

<a href="https://github.com/moccalotto/valit">
<img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png">
</a>

# Valit

Validate variables using a fluent syntax.

## Installation

To add this package as a local, per-project dependency to your project, simply add a dependency on
 `moccalotto/valit` to your project's `composer.json` file like so:

```json
{
    "require": {
        "moccalotto/valit": "~1.0",
    }
}
```

Alternatively execute the following command in your shell.

```bash
composer require moccalotto/valit
```

## Usage

```php
use Valit\Check;

Ensure::that($age)
    ->isNumeric()
    ->isGreaterThanOrEqual(18)
    ->isLowerThanOrEqual(75);
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
    ->isLessThan(100)           // Success
    ->valid();                  // true

var_dump($valid);               // bool(true)
```

### Error Messages
If you want to know precisely which checks failed,
you can use the `errorMessages` method.

```php
$x = 42; // the variable to validate

$errors = Check::that($x)
    ->isNumeric()       // Success
    ->isFloat()         // Fail
    ->isCloseTo(40)     // Fail
    ->errorMessages();

print_r($errors);

/*
Array
(
    [0] => value must have the type "double"
    [1] => value must equal 40 with a margin of error of 1.0e-5
)
 */
```

### Aliases
If you display the error messages to the end user,
you can tell them exactly which variable failed the validation by giving the
value an alias. This is done via the `as` method. If you prefer, you can
use the `alias` method, which does exactly the same.

```php
$email = 'foo@example.com';

$errors = Check::that($email)
    ->as('Your Email Address')
    ->isEmail()             // Success
    ->endsWith('.co.uk')    // Fail
    ->errorMessages();

/*
Array
(
    [0] => Your Email Address must end with the string ".co.uk"
)
*/

// Notice it says "Your Email Address" rather than "value".
```

### Ensuring
If you want to assert that all checks must pass, you can
use the `Ensure` facade.

If a single check fails, we throw a
`Valit\Exceptions\InvalidValueException` that contains the
error message for the first failed check.


```php
use Valit\Ensure;
use Valit\Exceptions\InvalidValueException;

$email = 'Doctor.Hansen@Example.com';

try {
    Ensure::that($x)
        ->as('Email')
        ->isEmail()             // Success
        ->isLowercase()         // Throws InvalidValueException
        ->endsWith('.co.uk');   // Not executed
} catch (InvalidValueException $e) {
    var_dump($e->getMessage());
    /*
        string(42) "Email must be a syntax-valid email address"
     */
}
```

### Ensuring all checks
If you want to assert that all checks pass, and you want
info about all tests, you can use the Check facade in
combination with the `orThrowException` method.

The thrown `InvalidValueException` will contain a list of
all the error messages. These can be accessed via the
`errorMessages` method like so:

```php
use Valit\Check;
use Valit\Exceptions\InvalidValueException;

$age = '42.3';

try {
    Check::that($age)
        ->as('your age')
        ->isNaturalNumber()     // Fail
        ->isGreaterThan(18)     // Success
        ->isLowerThan(30)       // Fail
        ->orThrowException();
} catch (InvalidValueException $e) {
    print_r($e->errorMessages());
    /*
        Array
        (
            [0] => your age must be a natural number
            [1] => your age must be less than 30
        )
     */
}
```


### Checking arrays and containers

You can easily test an entire array, for instance posted fields or a json response,
in a structured and well defined way like the example below:

```php
use Valit\Check;

$assertions =  [
    'name'      => 'string & shorterThan(100)',
    'email'     => 'email & shorterThan(256)',
    'address'   => 'string & shorterThan(256)',
    'city'      => 'string & shorterThan(256)',
    'region'    => 'optional & string & shorterThan(256)',
    'country'   => 'string & hasLength(2) & isUppercase',
    'age'       => 'int & greaterThan(17) & lessThan(100)',
];

// The »region« field is not present in the container.
// It's ok because it is marked as optional.
$container = [
    'name' => 'Kim Hansen',
    'email' => 'foo@example.com',
    'address' => 'Mt Everest Street 1337',
    'city' => 'Metropolis',
    'country' => 'DK',
    'age' => 35,

];


$checks = Check::container($container)->passes($assertions);

var_dump($checks->valid()); // bool(true)
```

#### You can also use a fluent syntax to define filters
```php
use Valit\Check;
use Valit\Value;

$varCharSize = 256;
$textFieldSize = 65536;

$assertions =  [
    'name'      => Value::isString()->shorterThan($varCharSize),
    'email'     => Value::isEmail()->shorterThan($varCharSize),
    'age'       => Value::greaterThanOrEqual(18)->lowerThan(70),

    'orderLines'            => Value::isConventionalArray(),
    'orderLines/*'          => Value::isAssociativeArray(),
    'orderLines/*/id'       => Value::isUuid(),
    'orderLines/*/count'    => Value::isInt()->greaterThan(0)->lessThan(100),
    'orderLines/*/comments' => Value::isString()->shorterThan($textFieldSize),
];

$container = [
    'name' => 'Kim Hansen',
    'email' => 'foo@example.com',
    'address' => 'Mt Everest Street 1337',
    'age' => 65,

    'orderLines' => [
        [
            'id' => '053e54ab-ead9-49e3-bb5b-af550cb0c20e',
            'count' => 1,
            'comments' => 'I love this product',
        ],
        [
            'id' => 'd9e918a8-e32a-4ccb-b929-4bd273c6f06f',
            'count' => 2,
            'comments' => 'I also love this product',
        ],
    ],
];


$checks = Check::container($container)->passes($assertions);

var_dump($checks->valid()); // bool(true)
```



#### Accessing errors is simple

```php
$checks = Check::container($someDataWithErrors)->passes([
    'name'      => 'string & shorterThan(100)',
    'email'     => 'email & shorterThan(255)',
    'address'   => 'string',
    'age'       => 'greaterThanOrEqual(18) & lowerThan(70)',

    'orderLines'            => 'conventionalArray',
    'orderLines/*'          => 'associative',
    'orderLines/*/id'       => 'uuid',
    'orderLines/*/count'    => 'integer & greaterThan(0)',
    'orderLines/*/comments' => 'optional & string & shorterThan(65536)',
]);

if ($checks->hasErrors()) {
    print_r($checks->errors());
    /*
        Array
        (
            [age] => Array
                (
                    [0] => Field must be less than 70
                )

            [orderLines/0/id] => Array
                (
                    [0] => Field must be a valid UUID
                )

            [orderLines/1] => Array
                (
                    [0] => Field must be an associative array
                )
        )
     */
}
```

As you can see, check for nested data via the `/` character.

You can get the error messages for a single field like so:

```php
// get the errors associated with the top level field 'age'.
$errors = $checks->errorMessagesByPath('age');

// get the errors for the product id of the first orderLine.
$errors = $checks->errorMessagesByPath('orderLines/0/id');

// get the error associated with the second orderLine
$errors = $checks->errorMessagesByPath('orderLines/1');
```

## Checks

Below is a list of all available checks.

**Note**: <code class="language-php">$value</code> is the value that is being checked.
<br>
<br>

{% for check in site.data.validationChecks %}
<div>
    <h4>
        {% if check.headline %}
            {{ check.headline }}
        {% else %}
            {{ check.name }}
        {% endif %}
    </h4>

    {% if check.description %}
        {{ check.description | markdownify }}
    {% endif %}
    {% for alias in check.aliases %}
        <pre><code class="language-php">{{ alias }}({{ check.paramlist }})</code></pre>
    {% endfor %}
    <br>
</div>
{% endfor %}
