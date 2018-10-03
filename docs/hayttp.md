---
layout: default
title: Hayttp
excerpt: Make http api requests using a fluent and intuitive syntax.
tags: [http, api, curl, rest, http client, php]
---

<a href="https://github.com/moccalotto/hayttp">
<img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png">
</a>

# Hayttp

HTTP request made easy!

* Lightweight, fast and small footprint.
* Syntacticly sweet, easy and intuitive.
* Short-hands to the 7 RESTful HTTP methods.
* Real file (and blob) uploads.
* Basic Auth.
* Immutable.
* Awesome advanced options:
  * Choose between CURL and php native http streams.
  * Create your own http transport engine (for instance a guzzle wrapper).
  * Choose ssl/tls scheme and version.
  * Create custom payloads.

## Installation

To add this package as a local, per-project dependency to your project, simply add a dependency on
 `moccalotto/hayttp` to your project's `composer.json` file like so:

```json
{
    "require": {
        "moccalotto/hayttp": "~1.0"
    }
}
```

Alternatively execute the following command in your shell.

```bash
composer require moccalotto/hayttp
```

## Usage

```php
use Hayttp\Hayttp;

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
    ->sendJson([
        'this' => 'associative',
        'array' => 'will',
        'be' => 'converted',
        'to' => 'a',
        'json' => 'object',
    ]);
```

A PUT request with an XML body.
The `sendsXml` method is called with a SimpleXmlElement argument:

```php
$simpleXmlElement = new SimpleXmlElement($xmlString);

$response = Hayttp::put($url)
    ->expectsXml()
    ->sendXml($simpleXmlElement);
```

A DELETE request with an XML body.
The `sendsXml` method is called with a string argument:

```php
$response = Hayttp::delete($url)
    ->expectsXml()
    ->sendXml($xmlString);
```

### Send blobs and files

Files and blobs can be sent as fields in multipart/form-data post requsts.

Sending a single blob:

```php
Hayttp::post($url)
    ->addBlob(
        'formFieldName',    // name of form field
        json_encode($data), // the blob data
        'application/json'  // the mime type of the data (optional)
    )->send();
```

Sending a single file:

```php
Hayttp::post($url)
    ->addFile(
        'fieldName[]',
        '/path/to/file',
        'nameOfFileWhenPosted.txt',
        'text/plain'
    )->send();
```

Sending a custom multipart field

```php
Hayttp::post($url)
    ->addMultipartField(
        'fieldName[]',
         file_get_contents('myimg.gif'),
         'r.gif',
         'image/gif'
     )->send();
```

### Fine-tune the request
```php
Hayttp::post($url)
    ->withTimeout(2.5) // 2.5 second timeout
    ->withHeaders([
        'X-My-Request-Id' => uniqid(),
        'X-Foo-Bar' => 'Baz',
    ])
    ->withUserAgent('API-Requester Service')
    ->send();
```

The order in which you call the request modifiers is irrelevant as long as you modify the request before calling `send`.

```php
Hayttp::withTimeout(2.5)
    ->withHeaders([
        'X-My-Request-Id' => uniqid(),
        'X-Foo-Bar' => 'Baz',
    ])
    ->withUserAgent('API-Requester Service')
    ->post($url)
    ->send();
```




### Take charge of the encryption

You can control which cryptographical method is used via the `withEncryption` method.

Thje possible options are: `any`, `sslv3`, `tls`, `tlsv1.0`, `tlsv1.1`, `tlsv1.2`,

```php
Hayttp::withCryptoMethod('tlsv1.2')
    ->post($url)
    ->send();
```


If you prefer constants, you can use the following constants on `Hayttp\Contracts\Request`:

```php
namespace Hayttp\Contracts;

interface Request {
    const CRYPTO_ANY = 'any';
    const CRYPTO_SSLV3 = 'sslv3';
    const CRYPTO_TLS = 'tls';
    const CRYPTO_TLS_1_0 = 'tlsv1.0';
    const CRYPTO_TLS_1_1 = 'tlsv1.1';
    const CRYPTO_TLS_1_2 = 'tlsv1.2';
}
```

If you want to disable all peer verification, you can use the `withInsecureSsl` meethod:

```php
Hayttp::post($url)
    ->withInsecureSsl()
    ->send();
```


### Change the engine

Hayttp uses the internal PHP http [stream wrapper](http://php.net/manual/wrappers.http.php).

We also provide support for curl. The only real difference from the user's point of view is
the execution metadata available. Curl has a lot of timing information that can be used for benchmarking.

To access that metadata, use the `response()` method on the response.


Below is an example of using the CurlEngine provided out of the box:

```php
use Hayttp\Engines\CurlEngine;

$request = Hayttp::get($url)->withEngine(new CurlEngine());
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
$variable = Hayttp::get($url)
    ->send()
    ->decoded();
```

You can also enforce a given response type, using the `ensureXxx` methods.

These methods assert that the response must have a given content type.
If the content does not match the asserted type, a `Hayttp\Exceptions\ResponseException` is thrown.

```php
$simpleXmlElement = Hayttp::get($url)
    ->ensureXml()   // if response type is not application/xml, a ResponseException is thrown.
    ->send()
    ->decoded();
```

### Stringify Requests and Responses

Requests and Responses are not just objects. They can be turned into strings for logging purposes.
When stringifying a Request or Response, it will turn into an actual http message as you would expect
to see it if using telnet (or openssl s_client, etc.).

Turning a request into a string:

```php
(string) Hayttp::get('http://mydomain.dev/my-path')
    ->withHeader('X-Foo-Bar', 'Baz');

// GET /my-path HTTP/1.0\r\n
// Host: mydomain.dev\r\n
// User-agent: Hayttp\r\n
// X-Foo-Bar: Baz\r\n
```

Turning a response into a string:

```php
(string) Hayttp::get('http://mydomain.dev/my-path')
    ->withHeader('X-Foo-Bar', 'Baz')
    ->send();

// HTTP/1.1 200 OK\r\n
// Server: nginx\r\n
// Date: Fri, 01 Jan 2000 12:00:00 GMT\r\n
// Content-Type: application/json\r\n
// Content-Length: 250\r\n
// Connection: close\r\n
// Access-Control-Allow-Origin: *\r\n
// Access-Control-Allow-Credentials: true\r\n
// \r\n
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



### Metadata

When executing a request, the engine records some metadata and stores it on the response.
This data can be accessed via the `$response->metadata()` method like so:

```php
$metadata = Hayttp::get($url)->send()->metadata();
```

The metadata is completely engine-specific;
the `CurlEngine` is great for benchmarking and the `NativeEngine`
is great for determining exactly which crypto method was used.

Metadata for `Hayttp\Engines\NativeEngine`:

```php
[
    // crypto info only available for https requests.
     "crypto" => [
       "protocol" => "TLSv1.2",
       "cipher_name" => "ECDHE-RSA-AES256-GCM-SHA384",
       "cipher_bits" => 256,
       "cipher_version" => "TLSv1/SSLv3",
     ],
     "timed_out" => false,
     "blocked" => true,
     "eof" => true,
     "wrapper_data" => [
     /* all http headers are stored here */
     ],
     "wrapper_type" => "http",
     "stream_type" => "tcp_socket/ssl",
     "mode" => "r",
     "unread_bytes" => 0,
     "seekable" => false,
     "uri" => "https://mysite.dev",
 ]
```

Metadata for `Hayttp\Engines\CurlEngine`:

```php
[
     "url" => "https://mysite.dev",
     "content_type" => "application/json",
     "http_code" => 200,
     "header_size" => 215,
     "request_size" => 159,
     "filetime" => -1,
     "ssl_verify_result" => 0,
     "redirect_count" => 0,
     "total_time" => 0.586272,
     "namelookup_time" => 0.034034,
     "connect_time" => 0.130231,
     "pretransfer_time" => 0.48859,
     "size_upload" => 0.0,
     "size_download" => 357.0,
     "speed_download" => 608.0,
     "speed_upload" => 0.0,
     "download_content_length" => 357.0,
     "upload_content_length" => 0.0,
     "starttransfer_time" => 0.586214,
     "redirect_time" => 0.0,
     "redirect_url" => "",
     "primary_ip" => "123.1.2.3",
     "certinfo" => [],
     "primary_port" => 443,
     "local_ip" => "1.2.3.4",
     "local_port" => 54294,
]
```


## Mocking and Testing

You can mock/intercept outgoing requests when testing.

```php
use Hayttp\Request;
use Hayttp\Mock\Route;

// This controller handles incomming (intercepted) http requests.
$controller = function (Request $request, Route $route) {
    return Hayttp::createMockResponse($request, $route)
        ->withJsonBody(
            [
                'demo' => true,
                $route->get('path') => $route->params(),
            ]
        );
};

// Mock GET, POST, and PUT requests to foo.bar/{path} using any scheme.
// We will match these requests:
// * GET https://foo.bar/thing1
// * POST https://foo.bar/thing2
// * PUT http://foo.bar/thing2
// 
// We will NOT match these requests:
// * DELETE https://foo.bar/thing1
// * OPTIONS https://foo.bar/thing2
// * GET http://foo.bar/dir1/dir2
// * GET http://foo.bar
//
Hayttp::mockEndpoint(
    'GET|POST|PUT',               // match GET, POST and PUT requests
    '{scheme}://foo.bar/{path}',  // match requests to foo.bar/{path}
    $controller                   // the code to execute for the given route.
);
```

The example above intercepts all http requests to `foo.bar/{path}`.
This means that `foo.bar/thing` would be intercepted, but `foo.bar/thing/2` would not.

```php
// This request would be intercepted,
// so no external HTTP call would be attempted.
// 
$response = Hayttp::get('https://foo.bar/some-path');

// The response would look like this:
// stdClass Object
// (
//     [demo] => 1
//     [some-path] => stdClass Object
//         (
//             [scheme] => https
//             [path] => some-path
//         )
// )
```
