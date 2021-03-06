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

[![Travis Build Status](https://img.shields.io/travis/moccalotto/valit.svg?style=flat-square)](https://travis-ci.org/moccalotto/valit)
![PHP Versions](https://img.shields.io/packagist/php-v/moccalotto/valit.svg?style=flat-square)
[![Latest Stable Version](https://img.shields.io/packagist/v/moccalotto/valit.svg?style=flat-square)](https://packagist.org/packages/moccalotto/valit)
[![License](https://img.shields.io/packagist/l/moccalotto/valit.svg?style=flat-square)](LICENSE)

Validate variables using a fluent syntax.

## Installation

Install via composer like so:

```bash
composer require moccalotto/valit
```


## Usage

Valit can be used to validate a value or a container.

Below you can see primers on the two modes:

### Value validation

```php
Ensure::that($age)
    ->isNumeric()
    ->isGreaterThanOrEqual(18)
    ->isLowerThanOrEqual(75);
```

* [Value validation](/docs/valit/sub/value-validation-intro)
* [Validation results](/docs/valit/sub/value-validation-results)
* [InvalidValueException](/docs/valit/sub/invalid-value-exception)

You can validate a container (any iterable type) like this:

### Container validation

```php
Ensure::that($postData)->contains([
    'username'    => 'string & shorterThan(256) & longerThan(2)',
    'password'    => 'string & shorterThan(256) & longerThan(4)',
    'remember_me' => 'optional & oneOf(["yes", "no"])',
]);
```

* [Container validation](/docs/valit/sub/container-intro)
* [Fluent container validation syntax](/docs/valit/sub/fluent-container-validation)
* [Container validation results](/TODO)
* [InvalidContainerException](/TODO)

### Advanced Concepts

* [Templates via the Value facade](/TODO)
* Control Structures:
    - [Introduction](/TODO)
    - [oneOf](/TODO)
    - [anyOf](/TODO)
    - [allOf](/TODO)
    - [noneOf](/TODO)
    - [allOrNone](/TODO)
    - [not](/TODO)
* Custom Check Providers:
    - [Creating your own Check Provider](/TODO)
    - [The annotation driver](/TODO)


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
