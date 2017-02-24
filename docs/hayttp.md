---
layout: default
title: Hayttp
excerpt: Make http api requests using a fluent and intuitive syntax.
tags: [http, api, curl, rest, http client, php]
---

<a href="https://github.com/moccalotto/hayttp">
<img
    style="position: absolute; top: 0; right: 0; border: 0;"
    src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
    alt="Fork me on GitHub"
    data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
>
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

$response = Hayttp::put($url)
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

### Send blobs and files

Files and blobs can be sent as fields in multipart/form-data post requsts.

Sending a single blob:

```php
Hayttp::post($url)
    ->addBlob(
        'formFieldName',    // name of form field
        json_encode($data), // the blob data
        'application/json'  // the mime type of the data (optional)
    )->send()
```

Sending a single file:

```php
Hayttp::post($url)
    ->addFile(
        'fieldName[]',
        '/path/to/file',
        'nameOfFileWhenPosted.txt',
        'text/plain'
    )->send()
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
    ->timeout(2.5) // 2.5 second timeout
    ->withHeaders([
        'X-My-Request-Id' => uniqid(),
        'X-Foo-Bar' => 'Baz',
    ])
    ->userAgent('API-Requester Service')
        'fieldName[]',
         file_get_contents('myimg.gif'),
         'r.gif',
         'image/gif'
     )->send();
```


### Take charge of the encryption

You can control which cryptographical method is used via the `withEncryption` method.

Thje possible options are: `any`, `sslv3`, `tls`, `tlsv1.0`, `tlsv1.1`,`tlsv1.2`,

```php
Hayttp::post($url)
    ->withCryptoMethod('tlsv1.2')
    ->send();
```


If you prefer constants, you can use the following constants on `Moccalotto\Hayttp\Contracts\Request`:

```php

namespace Moccalotto\Hayttp\Contracts;

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
use Moccalotto\Hayttp\Engines\CurlEngine;

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


### Stringify Requests and Responses

Requests and Responses are not just objects. They can be turned into strings for logging purposes.
When stringifying a Request or Response, it will turn into an actual http message as you would expect
to see it if using telnet (or openssl s_client, etc.).

Turning a request into a string:

```php
$requestStr =
    (string) Hayttp::get('http://mydomain.dev/my-path')
    ->withHeader('X-Foo-Bar', 'Baz');

// GET /my-path HTTP/1.0\x0D
// Host: mydomain.dev\x0D
// User-agent: Hayttp\x0D
// X-Foo-Bar: Baz\x0D
```

Turning a response into a string:

```php
$responseString =
    (string) Hayttp::get('http://mydomain.dev/my-path')
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



### Metadata

When executing a request, the engine records some metadata and stores it on the response.
This data can be accessed via the `$response->metadata()` method like so:

```php
$metadata = Hayttp::get($url)->send()->metadata();
```

The metadata is completely engine-specific;
the `CurlEngine` is great for benchmarking and the `NativeEngine`
is great for determining exactly which crypto method was used.

Metadata for `Moccalotto\Hayttp\Engines\NativeEngine`:

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

Metadata for `Moccalotto\Hayttp\Engines\CurlEngine`:

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

