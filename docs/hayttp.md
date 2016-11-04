---
layout: default
---

# Hayttp

HTTP request made easy!

* Lightweight, fast and small footprint.
* Syntacticly sweet, easy and intuitive.
* Short-hands to the 7 RESTful HTTP methods.
* Real file (and blob) uploads.
* Basic Auth.
* Immutable.
* Awesome advanced options:
  * Choose between CURL and php native http stream wrapper.
  * Create your own http transport engine (for instance a guzzle wrapper).
  * Choose ssl/tls scheme and version:
  * Create custom payloads.

## Installation

To add this package as a local, per-project dependency to your project, simply add a dependency on
 `moccalotto/hayttp` to your project's `composer.json` file like so:

```json
{
    "require": {
        "moccalotto/hayttp": "~0.8"
    }
}
```


## Usage

```php
use Moccalotto\Hayttp\Hayttp;

$response = Hayttp::get($url)->send();
```

### REST Methods
Hayttp is essentially a factory that can create and initialize `Request` objects.
It has methods for each of the 7 RESTful HTTP methods.

Making GET Requests: 

```php
$response = Hayttp::get($url)->send();
```

A more interesting POST example.

```php
$response = Hayttp::post($url)
    ->expectsJson()
    ->sendsJson([
        'this' => 'array',
        'will' => 'be',
        'converted' => 'to',
        'json' => 'weee!',
    ]);
```

A PUT request with an XML body.
The `sendsXml` method is called with a SimpleXmlElement argument:

```php
$simpleXmlElement = new SimpleXmlElement($xmlString);

$response = Hayttp::post($url)
    ->expectsXml()
    ->sendsXml($simpleXmlElement)
    ->send();
```

A DELETE request with an XML body.
The `sendsXml` method is called with a string argument:

```php
$response = Hayttp::delete($url)
    ->expectsXml()
    ->sendsXml($xmlString)
    ->send();
```


### Decode responses

You can parse/unserialize the response payloads into native php data structures.
Hayttp currently supports json, xml and rfc3986.

Below is an example of how parse a response as json.
Json objects are converted to `stdClass` objects, and json arrays are converted to php arrays:

```php
$stdClass = Hayttp::get($url)
    ->expectsJson()
    ->send()
    ->jsonDecoded();
```

Here is an example of a response decoded into a `SimpleXmlElement`:

```php
$simpleXmlElement = Hayttp::get($url)
    ->expectsXml()
    ->send()
    ->xmlDecoded();
```

Decode a url-encoded string into an associative array:

```php
$array = Hayttp::get($url)
    ->send()
    ->urlDecoded();
```

Decode the respose, inferring the data type from the Content-Type header:

```php
$variable = Hayttp::get($url)->send()->decoded();
```

### Stringify Requests and Responses

Requests and Responses are not just objects. They can be turned into strings for logging purposes.
When stringifying a Request or Response, it will turn into an actual http message as you would expect
to see it if using telnet (or openssl s_client, etc.).

Turning a request into a string:

```php
$requestStr =
    (string) Hayttp::get(http://mydomain.dev/my-path)
    ->withHeader('X-Foo-Bar', 'Baz');

// GET /my-path HTTP/1.0\x0D
// Host: mydomain.dev\x0D
// User-agent: Hayttp\x0D
// X-Foo-Bar: Baz\x0D
```

Turning a response into a string:

```php
$responseString =
    (string) Hayttp::get(http://mydomain.dev/my-path)
    ->withHeader('X-Foo-Bar', 'Baz')
    ->send();

// HTTP/1.1 200 OK\x0D
// Server: nginx\x0D
// Date: Fri, 01 Jan 2000 12:00:00 GMT\x0D
// Content-Type: application/json\x0D
// Content-Length: 250\x0D
// Connection: close\x0D
// Access-Control-Allow-Origin: *\x0D
// Access-Control-Allow-Credentials: true\x0D
// \x0D
// {\n
//   "args": {}, \n
//   "data": "", \n
//   "files": {}, \n
//   "form": {}, \n
//   "headers": {\n
//     "Host": "mydomain.dev", \n
//     "User-Agent": "Hayttp", \n
//     "X-Foo-Bar": "Baz"\n
//   }, \n
//   "json": null, \n
//   "origin": "123.12.34.56", \n
//   "url": "https://mydomain.dev/post"\n
// }\n
```
