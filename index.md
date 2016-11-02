---
layout: default
---

# Projects

These are my projects (of doom).

## Valit

Validate variables using a fluent syntax.
Easily assert that variables pass certain critera.
Re-use the same validators for many variables.

```php
Ensure::that($age)
    ->isNumeric()
    ->isGreaterThanOrEqual(18)
    ->isLessThanOrEqual(130)
```

[Documentation]({{ '/docs/valit' | page }})
|
[Packagist](https://packagist.org/packages/moccalotto/valit)
|
[Github](https://github.com/moccalotto/valit)

## Hayttp

Make http api requests using a fluent and intuitive syntax.

```php
$jsonResponse = Hayttp::post($url)
    ->sendsJson(['http' => 'rocks'])
    ->expectsJson()
    ->send()
    ->decoded();
```

[Documentation]({{ '/docs/hayttp' | page }})
|
[Packagist](https://packagist.org/packages/moccalotto/hayttp)
|
[Github](https://github.com/moccalotto/hayttp)
