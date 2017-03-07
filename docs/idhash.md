---
layout: default
title: IdHash
excerpt: Validate variables using a fluent syntax. Easily assert that variables pass certain critera. Re-use the same validators for many variables.
tags: [base62, base64, hashid]
---

<a href="https://github.com/moccalotto/idhash">
<img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png">
</a>

# IdHash

A reversible (integer) ID obfuscator

Create hashes like the ones used by imgur, pastebin, youtube, etc.

By default, hashes contain only the 62 url-safe characters.

## Installation

To add this package as a local, per-project dependency to your project, simply add a dependency on
 `moccalotto/idhash` to your project's `composer.json` file like so:

```json
{
    "require": {
        "moccalotto/idhash": "~0.9"
    }
}
```

Alternatively execute the following command in your shell.

```bash
composer require moccalotto/idhash
```

## Usage

```php
use Moccalotto\IdHash\IdHash;

$hash = IdHash::intToHash($number);

$number = IdHash::hashToInt($hash);
```

### Setting the global key

When using the `intToHash` and `hashToInt` static methods directly on the `IdHash` facade,
you have to first tell the facade which key to use.

Below is an example of telling the hasher to only use the letters 'a' through 'e'.

```php
IdHash::defaultKey('abcde');
```

A key can be either a `string` or an object that implements the `Moccalotto\IdHash\Contracts\Key` interface.

### Local keys

If you want to use a specific key for a given operation you can use the `with`-helper method on the `IdHash` facade.

```php
$hash = IdHash::with($key)->intToHash($someNumber);

$number = IdHash::with($key)->hashToInt($hash);
```

Again, the given key can either be a `string` or an instance of `Moccalotto\IdHash\Contracts\Key`.

### The IntHasher

The `IntHasher` is the class that actually does all the work.

You can create one of these objects simply by calling the `with` helper.

```php
$hasher = IdHash::with($key);

$hash = $hasher->intToHash($number);

$number = $hasher->hashToInt($hash);
```


#### Large numbers

The `IntHasher` uses [bcmath](http://php.net/manual/book.bc.php) to convert numbers to hashes and back again.
This meanas that the numbers created can be quite large. So large that they might not "fit" into a normal php
integer.

This means you shoud not do math operations on these numbers unless you are certain that their size is smaller than 2^63.
Otherwise they may be converted into floats, and that way madness lies. Not that note: you should not `sprintf('%d')`
these numbers, as it may yield wierd results if the numbers are larger than 2^63.

### Generating a random key

You can generate a random hash key via the `vendor/bin/random_key` utility.
If given exactly one argument, that argument will be used as the keyspace.
I.e. the letters in the argument will be shuffled.

If you want to generate random keys programmatically, you can do it like this:

```php
use Moccalotto\IdHash\RandomKeyFactory;

require 'vendor/autoload.php';

// you can generate a randomized base62 key by running bin/random_key
$keyspace = '8w2JUNlFLxfuCXbjkOmBizsWHG9Ep5n4Pd70yZg63vAerQVTMIRhS1DKqocaYt';

// Create a key RandomKeyFactory
$keyGenerator = new RandomKeyFactory($keyspace);

// Use the factory to generate a key.
// Keys generated this way have
// - no duplicate characters.
// - different keyspace from the $keyspace
//   given in the RandomKeyFactory constructor.
$key = $keyGenerator->key();
```

### Custom keys

You can create custom key objects if you want. Any object that
implements the `Moccalotto\IdHash\Contracts\Key` interface
can be used as a key.

```php
namespace Moccalotto\IdHash\Contracts;

interface Key
{
    /**
     * Get the hash key as a string.
     *
     * @return string
     */
    public function keyString();

    /**
     * Get the number of characters in the key.
     *
     * @return int
     */
    public function keyLength();
}
```


#### Example

This is an example of how to create a custom Key class.

```php

use Moccalotto\IdHash\Contracts\Key;

class Rot13Key implements Key
{
    protected $keyString;

    public function __construct($inputKey)
    {
        $this->keyString implode(
            array_unique(
                str_split(
                    str_rot13($string)
                )
            )
        );
    }

    public function keyString()
    {
        return $this->keyString;
    }

    public function keyLength()
    {
        return strlen($this->keyString);
    }
}
```

### Tips, tricks & Hacks

Below are some fun hacking you can do with this lib.

#### Turning any number into binary

```php
$binStr = IdHash::with('01')->intTohash(bcpow(2, 100));

// output:
// 1000000000000000000000000000000000000000000000000000000000000000
```

#### Turning any number into hex

```php
$hexStr = IdHash::with('0123456789abcdef')
    ->intTohash(bcsub(bcpow(2, 64), 1));

// output:
// ffffffffffffffff
```

#### ASCII to number

```php
// create a string with all 255 characters in order.
$keyspace = implode('', array_map('chr', range(0, 255)));

// use that keyspace to "decode" a string.
$decimalStr = IdHash::with($keyspace)->hashToInt('Some string of d00m');

// output:
// 1860668540414984267147396314824037121035087981
```

#### Combining the features: ASCII to hex

```php
// setup the input and output keyspaces
$inputSpace = implode('', array_map('chr', range(0, 255)));
$outputSpace = '0123456789abcdef';

$hex = IdHash::with($outputSpace)->intToHash(
    IdHash::with($inputSpace)->hashToInt('Some string of d00m')
);

// output:
// 536f6d6520737472696e67206f66206430306d
```
