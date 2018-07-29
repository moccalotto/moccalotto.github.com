
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Hayttp" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp.html">Hayttp</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Hayttp_Contracts" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Contracts_Engine" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Contracts/Engine.html">Engine</a>                    </div>                </li>                            <li data-name="class:Hayttp_Contracts_Payload" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Contracts/Payload.html">Payload</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Engines" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Engines.html">Engines</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Engines_CurlEngine" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Engines/CurlEngine.html">CurlEngine</a>                    </div>                </li>                            <li data-name="class:Hayttp_Engines_NativeEngine" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Engines/NativeEngine.html">NativeEngine</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Hayttp_Exceptions_Response" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Exceptions/Response.html">Response</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Exceptions_Response_ContentException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Exceptions/Response/ContentException.html">ContentException</a>                    </div>                </li>                            <li data-name="class:Hayttp_Exceptions_Response_ContentTypeException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Exceptions/Response/ContentTypeException.html">ContentTypeException</a>                    </div>                </li>                            <li data-name="class:Hayttp_Exceptions_Response_HeaderException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Exceptions/Response/HeaderException.html">HeaderException</a>                    </div>                </li>                            <li data-name="class:Hayttp_Exceptions_Response_StatusCodeException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Exceptions/Response/StatusCodeException.html">StatusCodeException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Hayttp_Exceptions_CouldNotConnectException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Exceptions/CouldNotConnectException.html">CouldNotConnectException</a>                    </div>                </li>                            <li data-name="class:Hayttp_Exceptions_ResponseException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Exceptions/ResponseException.html">ResponseException</a>                    </div>                </li>                            <li data-name="class:Hayttp_Exceptions_RouteException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Exceptions/RouteException.html">RouteException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Mock" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Mock.html">Mock</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Mock_Endpoint" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Mock/Endpoint.html">Endpoint</a>                    </div>                </li>                            <li data-name="class:Hayttp_Mock_MockResponse" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Mock/MockResponse.html">MockResponse</a>                    </div>                </li>                            <li data-name="class:Hayttp_Mock_Route" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Mock/Route.html">Route</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Payloads" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Payloads.html">Payloads</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Payloads_JsonPayload" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Payloads/JsonPayload.html">JsonPayload</a>                    </div>                </li>                            <li data-name="class:Hayttp_Payloads_MultipartPayload" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Payloads/MultipartPayload.html">MultipartPayload</a>                    </div>                </li>                            <li data-name="class:Hayttp_Payloads_RawPayload" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Hayttp/Payloads/RawPayload.html">RawPayload</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Traits" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Traits.html">Traits</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Hayttp_Traits_Common" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Traits/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Traits_Common_DebugInfo" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Common/DebugInfo.html">DebugInfo</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Common_Extendable" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Common/Extendable.html">Extendable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Traits_Request" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Traits/Request.html">Request</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Traits_Request_Accessors" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Request/Accessors.html">Accessors</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Request_CanSend" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Request/CanSend.html">CanSend</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Request_DeprecatedMethods" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Request/DeprecatedMethods.html">DeprecatedMethods</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Request_ExpectsCommonMimeTypes" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Request/ExpectsCommonMimeTypes.html">ExpectsCommonMimeTypes</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Request_HasWithMethods" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Request/HasWithMethods.html">HasWithMethods</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Request_Multipart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Request/Multipart.html">Multipart</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Hayttp_Traits_Response" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Hayttp/Traits/Response.html">Response</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Hayttp_Traits_Response_Assertions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Response/Assertions.html">Assertions</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Response_Callbacks" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Response/Callbacks.html">Callbacks</a>                    </div>                </li>                            <li data-name="class:Hayttp_Traits_Response_StatusHelpers" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Hayttp/Traits/Response/StatusHelpers.html">StatusHelpers</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="class:Hayttp_Hayttp" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Hayttp/Hayttp.html">Hayttp</a>                    </div>                </li>                            <li data-name="class:Hayttp_Request" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Hayttp/Request.html">Request</a>                    </div>                </li>                            <li data-name="class:Hayttp_Response" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Hayttp/Response.html">Response</a>                    </div>                </li>                            <li data-name="class:Hayttp_Util" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Hayttp/Util.html">Util</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Hayttp.html", "name": "Hayttp", "doc": "Namespace Hayttp"},{"type": "Namespace", "link": "Hayttp/Contracts.html", "name": "Hayttp\\Contracts", "doc": "Namespace Hayttp\\Contracts"},{"type": "Namespace", "link": "Hayttp/Engines.html", "name": "Hayttp\\Engines", "doc": "Namespace Hayttp\\Engines"},{"type": "Namespace", "link": "Hayttp/Exceptions.html", "name": "Hayttp\\Exceptions", "doc": "Namespace Hayttp\\Exceptions"},{"type": "Namespace", "link": "Hayttp/Exceptions/Response.html", "name": "Hayttp\\Exceptions\\Response", "doc": "Namespace Hayttp\\Exceptions\\Response"},{"type": "Namespace", "link": "Hayttp/Mock.html", "name": "Hayttp\\Mock", "doc": "Namespace Hayttp\\Mock"},{"type": "Namespace", "link": "Hayttp/Payloads.html", "name": "Hayttp\\Payloads", "doc": "Namespace Hayttp\\Payloads"},{"type": "Namespace", "link": "Hayttp/Traits.html", "name": "Hayttp\\Traits", "doc": "Namespace Hayttp\\Traits"},{"type": "Namespace", "link": "Hayttp/Traits/Common.html", "name": "Hayttp\\Traits\\Common", "doc": "Namespace Hayttp\\Traits\\Common"},{"type": "Namespace", "link": "Hayttp/Traits/Request.html", "name": "Hayttp\\Traits\\Request", "doc": "Namespace Hayttp\\Traits\\Request"},{"type": "Namespace", "link": "Hayttp/Traits/Response.html", "name": "Hayttp\\Traits\\Response", "doc": "Namespace Hayttp\\Traits\\Response"},
            {"type": "Interface", "fromName": "Hayttp\\Contracts", "fromLink": "Hayttp/Contracts.html", "link": "Hayttp/Contracts/Engine.html", "name": "Hayttp\\Contracts\\Engine", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Contracts\\Engine", "fromLink": "Hayttp/Contracts/Engine.html", "link": "Hayttp/Contracts/Engine.html#method_send", "name": "Hayttp\\Contracts\\Engine::send", "doc": "&quot;Send a request.&quot;"},
            
            {"type": "Interface", "fromName": "Hayttp\\Contracts", "fromLink": "Hayttp/Contracts.html", "link": "Hayttp/Contracts/Payload.html", "name": "Hayttp\\Contracts\\Payload", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Contracts\\Payload", "fromLink": "Hayttp/Contracts/Payload.html", "link": "Hayttp/Contracts/Payload.html#method___toString", "name": "Hayttp\\Contracts\\Payload::__toString", "doc": "&quot;Render the body of the payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Contracts\\Payload", "fromLink": "Hayttp/Contracts/Payload.html", "link": "Hayttp/Contracts/Payload.html#method_contentType", "name": "Hayttp\\Contracts\\Payload::contentType", "doc": "&quot;The Content-Type header to use when sending this payload.&quot;"},
            
            
            {"type": "Class", "fromName": "Hayttp\\Contracts", "fromLink": "Hayttp/Contracts.html", "link": "Hayttp/Contracts/Engine.html", "name": "Hayttp\\Contracts\\Engine", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Contracts\\Engine", "fromLink": "Hayttp/Contracts/Engine.html", "link": "Hayttp/Contracts/Engine.html#method_send", "name": "Hayttp\\Contracts\\Engine::send", "doc": "&quot;Send a request.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Contracts", "fromLink": "Hayttp/Contracts.html", "link": "Hayttp/Contracts/Payload.html", "name": "Hayttp\\Contracts\\Payload", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Contracts\\Payload", "fromLink": "Hayttp/Contracts/Payload.html", "link": "Hayttp/Contracts/Payload.html#method___toString", "name": "Hayttp\\Contracts\\Payload::__toString", "doc": "&quot;Render the body of the payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Contracts\\Payload", "fromLink": "Hayttp/Contracts/Payload.html", "link": "Hayttp/Contracts/Payload.html#method_contentType", "name": "Hayttp\\Contracts\\Payload::contentType", "doc": "&quot;The Content-Type header to use when sending this payload.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Engines", "fromLink": "Hayttp/Engines.html", "link": "Hayttp/Engines/CurlEngine.html", "name": "Hayttp\\Engines\\CurlEngine", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Engines\\CurlEngine", "fromLink": "Hayttp/Engines/CurlEngine.html", "link": "Hayttp/Engines/CurlEngine.html#method_curlCryptoMethod", "name": "Hayttp\\Engines\\CurlEngine::curlCryptoMethod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Engines\\CurlEngine", "fromLink": "Hayttp/Engines/CurlEngine.html", "link": "Hayttp/Engines/CurlEngine.html#method_buildHandle", "name": "Hayttp\\Engines\\CurlEngine::buildHandle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Engines\\CurlEngine", "fromLink": "Hayttp/Engines/CurlEngine.html", "link": "Hayttp/Engines/CurlEngine.html#method_send", "name": "Hayttp\\Engines\\CurlEngine::send", "doc": "&quot;Send\/execute the request.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Engines", "fromLink": "Hayttp/Engines.html", "link": "Hayttp/Engines/NativeEngine.html", "name": "Hayttp\\Engines\\NativeEngine", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Engines\\NativeEngine", "fromLink": "Hayttp/Engines/NativeEngine.html", "link": "Hayttp/Engines/NativeEngine.html#method_buildContext", "name": "Hayttp\\Engines\\NativeEngine::buildContext", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Engines\\NativeEngine", "fromLink": "Hayttp/Engines/NativeEngine.html", "link": "Hayttp/Engines/NativeEngine.html#method_send", "name": "Hayttp\\Engines\\NativeEngine::send", "doc": "&quot;Send\/execute the request.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Exceptions", "fromLink": "Hayttp/Exceptions.html", "link": "Hayttp/Exceptions/CouldNotConnectException.html", "name": "Hayttp\\Exceptions\\CouldNotConnectException", "doc": "&quot;Http connection exception.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Exceptions\\CouldNotConnectException", "fromLink": "Hayttp/Exceptions/CouldNotConnectException.html", "link": "Hayttp/Exceptions/CouldNotConnectException.html#method___construct", "name": "Hayttp\\Exceptions\\CouldNotConnectException::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Exceptions\\CouldNotConnectException", "fromLink": "Hayttp/Exceptions/CouldNotConnectException.html", "link": "Hayttp/Exceptions/CouldNotConnectException.html#method_getRequest", "name": "Hayttp\\Exceptions\\CouldNotConnectException::getRequest", "doc": "&quot;Get the request that couldn&#039;t connect.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Exceptions\\CouldNotConnectException", "fromLink": "Hayttp/Exceptions/CouldNotConnectException.html", "link": "Hayttp/Exceptions/CouldNotConnectException.html#method_metadata", "name": "Hayttp\\Exceptions\\CouldNotConnectException::metadata", "doc": "&quot;Get the metadata for this request.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Exceptions", "fromLink": "Hayttp/Exceptions.html", "link": "Hayttp/Exceptions/ResponseException.html", "name": "Hayttp\\Exceptions\\ResponseException", "doc": "&quot;Http connection exception.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Exceptions\\ResponseException", "fromLink": "Hayttp/Exceptions/ResponseException.html", "link": "Hayttp/Exceptions/ResponseException.html#method___construct", "name": "Hayttp\\Exceptions\\ResponseException::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Exceptions\\ResponseException", "fromLink": "Hayttp/Exceptions/ResponseException.html", "link": "Hayttp/Exceptions/ResponseException.html#method_getRequest", "name": "Hayttp\\Exceptions\\ResponseException::getRequest", "doc": "&quot;Get the request that caused the bad response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Exceptions\\ResponseException", "fromLink": "Hayttp/Exceptions/ResponseException.html", "link": "Hayttp/Exceptions/ResponseException.html#method_getResponse", "name": "Hayttp\\Exceptions\\ResponseException::getResponse", "doc": "&quot;Get the response that couldn&#039;t connect.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Exceptions\\Response", "fromLink": "Hayttp/Exceptions/Response.html", "link": "Hayttp/Exceptions/Response/ContentException.html", "name": "Hayttp\\Exceptions\\Response\\ContentException", "doc": "&quot;Http connection exception.&quot;"},
                    
            {"type": "Class", "fromName": "Hayttp\\Exceptions\\Response", "fromLink": "Hayttp/Exceptions/Response.html", "link": "Hayttp/Exceptions/Response/ContentTypeException.html", "name": "Hayttp\\Exceptions\\Response\\ContentTypeException", "doc": "&quot;Http connection exception.&quot;"},
                    
            {"type": "Class", "fromName": "Hayttp\\Exceptions\\Response", "fromLink": "Hayttp/Exceptions/Response.html", "link": "Hayttp/Exceptions/Response/HeaderException.html", "name": "Hayttp\\Exceptions\\Response\\HeaderException", "doc": "&quot;Http connection exception.&quot;"},
                    
            {"type": "Class", "fromName": "Hayttp\\Exceptions\\Response", "fromLink": "Hayttp/Exceptions/Response.html", "link": "Hayttp/Exceptions/Response/StatusCodeException.html", "name": "Hayttp\\Exceptions\\Response\\StatusCodeException", "doc": "&quot;Http connection exception.&quot;"},
                    
            {"type": "Class", "fromName": "Hayttp\\Exceptions", "fromLink": "Hayttp/Exceptions.html", "link": "Hayttp/Exceptions/RouteException.html", "name": "Hayttp\\Exceptions\\RouteException", "doc": "&quot;Http connection exception.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Exceptions\\RouteException", "fromLink": "Hayttp/Exceptions/RouteException.html", "link": "Hayttp/Exceptions/RouteException.html#method___construct", "name": "Hayttp\\Exceptions\\RouteException::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Exceptions\\RouteException", "fromLink": "Hayttp/Exceptions/RouteException.html", "link": "Hayttp/Exceptions/RouteException.html#method_getRoute", "name": "Hayttp\\Exceptions\\RouteException::getRoute", "doc": "&quot;Get the route.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp", "fromLink": "Hayttp.html", "link": "Hayttp/Hayttp.html", "name": "Hayttp\\Hayttp", "doc": "&quot;Request creation facade.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_instance", "name": "Hayttp\\Hayttp::instance", "doc": "&quot;Get the default\/global instance.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_mockEndpoint", "name": "Hayttp\\Hayttp::mockEndpoint", "doc": "&quot;Add a mocked end point to all requests created by the global Hayttp facade.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_setAsGlobal", "name": "Hayttp\\Hayttp::setAsGlobal", "doc": "&quot;Set this instance as the default global instance.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_createRequest", "name": "Hayttp\\Hayttp::createRequest", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method___call", "name": "Hayttp\\Hayttp::__call", "doc": "&quot;Easy request construction.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method___callStatic", "name": "Hayttp\\Hayttp::__callStatic", "doc": "&quot;Forward calls to default instance.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_createMockResponse", "name": "Hayttp\\Hayttp::createMockResponse", "doc": "&quot;Create a mock response via a request and a route&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_with", "name": "Hayttp\\Hayttp::with", "doc": "&quot;Clone object with a new property value.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withDeferredCall", "name": "Hayttp\\Hayttp::withDeferredCall", "doc": "&quot;Having created a request, apply these calls to the.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withMockedEndpoint", "name": "Hayttp\\Hayttp::withMockedEndpoint", "doc": "&quot;Add a mocked end point to all requests created.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withMountPoint", "name": "Hayttp\\Hayttp::withMountPoint", "doc": "&quot;All requests will have this mount point prepended to their url.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withTimeout", "name": "Hayttp\\Hayttp::withTimeout", "doc": "&quot;All requests will have this timeout.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withUserAgent", "name": "Hayttp\\Hayttp::withUserAgent", "doc": "&quot;Set the user agent header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withCryptoMethod", "name": "Hayttp\\Hayttp::withCryptoMethod", "doc": "&quot;Set the allowed crypto method.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_skipCertificateChecks", "name": "Hayttp\\Hayttp::skipCertificateChecks", "doc": "&quot;Disable all SSL certificate checks.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withEngine", "name": "Hayttp\\Hayttp::withEngine", "doc": "&quot;Set the transfer engine.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withHeaders", "name": "Hayttp\\Hayttp::withHeaders", "doc": "&quot;Set all headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withAdditionalHeaders", "name": "Hayttp\\Hayttp::withAdditionalHeaders", "doc": "&quot;Add an array of headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withProxy", "name": "Hayttp\\Hayttp::withProxy", "doc": "&quot;Set the proxy server.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withHeader", "name": "Hayttp\\Hayttp::withHeader", "doc": "&quot;Add a header to the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withTls", "name": "Hayttp\\Hayttp::withTls", "doc": "&quot;Set the TLS version.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_withBasicAuth", "name": "Hayttp\\Hayttp::withBasicAuth", "doc": "&quot;Add a basic authorization (which is actually an authenticaation) header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_get", "name": "Hayttp\\Hayttp::get", "doc": "&quot;Create a GET request&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_post", "name": "Hayttp\\Hayttp::post", "doc": "&quot;Create a POST request&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_put", "name": "Hayttp\\Hayttp::put", "doc": "&quot;Create a PUT request&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_patch", "name": "Hayttp\\Hayttp::patch", "doc": "&quot;Create a PATCH request&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_head", "name": "Hayttp\\Hayttp::head", "doc": "&quot;Create a HEAD request&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_delete", "name": "Hayttp\\Hayttp::delete", "doc": "&quot;Create a DELETE request&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Hayttp", "fromLink": "Hayttp/Hayttp.html", "link": "Hayttp/Hayttp.html#method_options", "name": "Hayttp\\Hayttp::options", "doc": "&quot;Create a OPTIONS request&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Mock", "fromLink": "Hayttp/Mock.html", "link": "Hayttp/Mock/Endpoint.html", "name": "Hayttp\\Mock\\Endpoint", "doc": "&quot;Mock Endpoint.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Mock\\Endpoint", "fromLink": "Hayttp/Mock/Endpoint.html", "link": "Hayttp/Mock/Endpoint.html#method___construct", "name": "Hayttp\\Mock\\Endpoint::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Endpoint", "fromLink": "Hayttp/Mock/Endpoint.html", "link": "Hayttp/Mock/Endpoint.html#method_makeUrlRegex", "name": "Hayttp\\Mock\\Endpoint::makeUrlRegex", "doc": "&quot;Convert a url pattern into a regular expression.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Endpoint", "fromLink": "Hayttp/Mock/Endpoint.html", "link": "Hayttp/Mock/Endpoint.html#method_handles", "name": "Hayttp\\Mock\\Endpoint::handles", "doc": "&quot;Does this mock endpoint handle a given request ?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Endpoint", "fromLink": "Hayttp/Mock/Endpoint.html", "link": "Hayttp/Mock/Endpoint.html#method_handle", "name": "Hayttp\\Mock\\Endpoint::handle", "doc": "&quot;Handle\/mock a request.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Mock", "fromLink": "Hayttp/Mock.html", "link": "Hayttp/Mock/MockResponse.html", "name": "Hayttp\\Mock\\MockResponse", "doc": "&quot;Mock Request.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_new", "name": "Hayttp\\Mock\\MockResponse::new", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_with", "name": "Hayttp\\Mock\\MockResponse::with", "doc": "&quot;Clone object with a new property value.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withStatus", "name": "Hayttp\\Mock\\MockResponse::withStatus", "doc": "&quot;Set the status code and reason phrase of the http response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withHeaders", "name": "Hayttp\\Mock\\MockResponse::withHeaders", "doc": "&quot;Set headers on the mock response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withAdditionalHeaders", "name": "Hayttp\\Mock\\MockResponse::withAdditionalHeaders", "doc": "&quot;Add headers to the mock response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withContentType", "name": "Hayttp\\Mock\\MockResponse::withContentType", "doc": "&quot;Set the content type.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withHeader", "name": "Hayttp\\Mock\\MockResponse::withHeader", "doc": "&quot;Add a header to the response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withBody", "name": "Hayttp\\Mock\\MockResponse::withBody", "doc": "&quot;Set the body of the response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withJsonBody", "name": "Hayttp\\Mock\\MockResponse::withJsonBody", "doc": "&quot;Set the a json body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withXmlBody", "name": "Hayttp\\Mock\\MockResponse::withXmlBody", "doc": "&quot;Set the a json body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\MockResponse", "fromLink": "Hayttp/Mock/MockResponse.html", "link": "Hayttp/Mock/MockResponse.html#method_withRoute", "name": "Hayttp\\Mock\\MockResponse::withRoute", "doc": "&quot;Add information about the route to the response.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Mock", "fromLink": "Hayttp/Mock.html", "link": "Hayttp/Mock/Route.html", "name": "Hayttp\\Mock\\Route", "doc": "&quot;HTTP Mock server.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Mock\\Route", "fromLink": "Hayttp/Mock/Route.html", "link": "Hayttp/Mock/Route.html#method___construct", "name": "Hayttp\\Mock\\Route::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Route", "fromLink": "Hayttp/Mock/Route.html", "link": "Hayttp/Mock/Route.html#method_get", "name": "Hayttp\\Mock\\Route::get", "doc": "&quot;Get a parameter.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Route", "fromLink": "Hayttp/Mock/Route.html", "link": "Hayttp/Mock/Route.html#method_has", "name": "Hayttp\\Mock\\Route::has", "doc": "&quot;Does the given parameter exist.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Route", "fromLink": "Hayttp/Mock/Route.html", "link": "Hayttp/Mock/Route.html#method_ensureHas", "name": "Hayttp\\Mock\\Route::ensureHas", "doc": "&quot;Throw an exception if the given parameter does not exist.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Mock\\Route", "fromLink": "Hayttp/Mock/Route.html", "link": "Hayttp/Mock/Route.html#method_params", "name": "Hayttp\\Mock\\Route::params", "doc": "&quot;Get all parameters.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Payloads", "fromLink": "Hayttp/Payloads.html", "link": "Hayttp/Payloads/JsonPayload.html", "name": "Hayttp\\Payloads\\JsonPayload", "doc": "&quot;Raw (string) body Helper.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Payloads\\JsonPayload", "fromLink": "Hayttp/Payloads/JsonPayload.html", "link": "Hayttp/Payloads/JsonPayload.html#method___construct", "name": "Hayttp\\Payloads\\JsonPayload::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\JsonPayload", "fromLink": "Hayttp/Payloads/JsonPayload.html", "link": "Hayttp/Payloads/JsonPayload.html#method_contentType", "name": "Hayttp\\Payloads\\JsonPayload::contentType", "doc": "&quot;The Content-Type header to use when sending this payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\JsonPayload", "fromLink": "Hayttp/Payloads/JsonPayload.html", "link": "Hayttp/Payloads/JsonPayload.html#method_render", "name": "Hayttp\\Payloads\\JsonPayload::render", "doc": "&quot;Render into a http request body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\JsonPayload", "fromLink": "Hayttp/Payloads/JsonPayload.html", "link": "Hayttp/Payloads/JsonPayload.html#method___toString", "name": "Hayttp\\Payloads\\JsonPayload::__toString", "doc": "&quot;Render the body of the payload.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Payloads", "fromLink": "Hayttp/Payloads.html", "link": "Hayttp/Payloads/MultipartPayload.html", "name": "Hayttp\\Payloads\\MultipartPayload", "doc": "&quot;Multipart Body Helper.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Payloads\\MultipartPayload", "fromLink": "Hayttp/Payloads/MultipartPayload.html", "link": "Hayttp/Payloads/MultipartPayload.html#method___construct", "name": "Hayttp\\Payloads\\MultipartPayload::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\MultipartPayload", "fromLink": "Hayttp/Payloads/MultipartPayload.html", "link": "Hayttp/Payloads/MultipartPayload.html#method_boundary", "name": "Hayttp\\Payloads\\MultipartPayload::boundary", "doc": "&quot;get the field boundary for this message.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\MultipartPayload", "fromLink": "Hayttp/Payloads/MultipartPayload.html", "link": "Hayttp/Payloads/MultipartPayload.html#method_withField", "name": "Hayttp\\Payloads\\MultipartPayload::withField", "doc": "&quot;Add a multipart entry.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\MultipartPayload", "fromLink": "Hayttp/Payloads/MultipartPayload.html", "link": "Hayttp/Payloads/MultipartPayload.html#method_contentType", "name": "Hayttp\\Payloads\\MultipartPayload::contentType", "doc": "&quot;The Content-Type header to use when sending this payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\MultipartPayload", "fromLink": "Hayttp/Payloads/MultipartPayload.html", "link": "Hayttp/Payloads/MultipartPayload.html#method_render", "name": "Hayttp\\Payloads\\MultipartPayload::render", "doc": "&quot;Render into a http request body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\MultipartPayload", "fromLink": "Hayttp/Payloads/MultipartPayload.html", "link": "Hayttp/Payloads/MultipartPayload.html#method___toString", "name": "Hayttp\\Payloads\\MultipartPayload::__toString", "doc": "&quot;Render the body of the payload.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp\\Payloads", "fromLink": "Hayttp/Payloads.html", "link": "Hayttp/Payloads/RawPayload.html", "name": "Hayttp\\Payloads\\RawPayload", "doc": "&quot;Raw (string) body Helper.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Payloads\\RawPayload", "fromLink": "Hayttp/Payloads/RawPayload.html", "link": "Hayttp/Payloads/RawPayload.html#method___construct", "name": "Hayttp\\Payloads\\RawPayload::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\RawPayload", "fromLink": "Hayttp/Payloads/RawPayload.html", "link": "Hayttp/Payloads/RawPayload.html#method_contentType", "name": "Hayttp\\Payloads\\RawPayload::contentType", "doc": "&quot;The Content-Type header to use when sending this payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\RawPayload", "fromLink": "Hayttp/Payloads/RawPayload.html", "link": "Hayttp/Payloads/RawPayload.html#method_render", "name": "Hayttp\\Payloads\\RawPayload::render", "doc": "&quot;Render into a http request body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Payloads\\RawPayload", "fromLink": "Hayttp/Payloads/RawPayload.html", "link": "Hayttp/Payloads/RawPayload.html#method___toString", "name": "Hayttp\\Payloads\\RawPayload::__toString", "doc": "&quot;Render the body of the payload.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp", "fromLink": "Hayttp.html", "link": "Hayttp/Request.html", "name": "Hayttp\\Request", "doc": "&quot;HTTP Request class.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_with", "name": "Hayttp\\Request::with", "doc": "&quot;Clone object with a new property value.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_preparedHeaders", "name": "Hayttp\\Request::preparedHeaders", "doc": "&quot;Format headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method___construct", "name": "Hayttp\\Request::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method___toString", "name": "Hayttp\\Request::__toString", "doc": "&quot;Return the request as a string.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method___set", "name": "Hayttp\\Request::__set", "doc": "&quot;Setter.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_render", "name": "Hayttp\\Request::render", "doc": "&quot;Return the request as a string.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_responseCalls", "name": "Hayttp\\Request::responseCalls", "doc": "&quot;Get the calls that are to be executed on the response\nas soon as we have one.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method___call", "name": "Hayttp\\Request::__call", "doc": "&quot;Magic Method for dynamic method names.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_delete", "name": "Hayttp\\Request::delete", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_get", "name": "Hayttp\\Request::get", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_head", "name": "Hayttp\\Request::head", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_options", "name": "Hayttp\\Request::options", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_patch", "name": "Hayttp\\Request::patch", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_post", "name": "Hayttp\\Request::post", "doc": "&quot;Factory.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Request", "fromLink": "Hayttp/Request.html", "link": "Hayttp/Request.html#method_put", "name": "Hayttp\\Request::put", "doc": "&quot;Factory.&quot;"},
            
            {"type": "Class", "fromName": "Hayttp", "fromLink": "Hayttp.html", "link": "Hayttp/Response.html", "name": "Hayttp\\Response", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method___construct", "name": "Hayttp\\Response::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method___toString", "name": "Hayttp\\Response::__toString", "doc": "&quot;Cast to string.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_parseStatusLine", "name": "Hayttp\\Response::parseStatusLine", "doc": "&quot;Return the status line of the response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_metadata", "name": "Hayttp\\Response::metadata", "doc": "&quot;Get the (raw) metadata.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_request", "name": "Hayttp\\Response::request", "doc": "&quot;Get the request that produced this response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_statusCode", "name": "Hayttp\\Response::statusCode", "doc": "&quot;Get the HTTP Response Code.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_reasonPhrase", "name": "Hayttp\\Response::reasonPhrase", "doc": "&quot;Get the http reason phrase.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_contentType", "name": "Hayttp\\Response::contentType", "doc": "&quot;Get the contents of the Content-Type header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_contentTypeWithoutCharset", "name": "Hayttp\\Response::contentTypeWithoutCharset", "doc": "&quot;Get the content type, but remove anything after the first semi-colon.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_headers", "name": "Hayttp\\Response::headers", "doc": "&quot;Get the headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_header", "name": "Hayttp\\Response::header", "doc": "&quot;Get the contents of a given header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_isJson", "name": "Hayttp\\Response::isJson", "doc": "&quot;Is this a json response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_isXml", "name": "Hayttp\\Response::isXml", "doc": "&quot;Is this an xml response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_isPlainText", "name": "Hayttp\\Response::isPlainText", "doc": "&quot;Is the response text\/plain.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_isText", "name": "Hayttp\\Response::isText", "doc": "&quot;Is this a text response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_isUrlEncoded", "name": "Hayttp\\Response::isUrlEncoded", "doc": "&quot;Is this an url-encoded response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_hasContentType", "name": "Hayttp\\Response::hasContentType", "doc": "&quot;Does the response have a given content type.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_body", "name": "Hayttp\\Response::body", "doc": "&quot;Get the response body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_bomCharset", "name": "Hayttp\\Response::bomCharset", "doc": "&quot;If a BOM was given in the response body, return the parsed charset.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_bomEndian", "name": "Hayttp\\Response::bomEndian", "doc": "&quot;If a BOM was given in the response body, return the detected endianness.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_decoded", "name": "Hayttp\\Response::decoded", "doc": "&quot;Get the parsed body of the response.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_jsonDecoded", "name": "Hayttp\\Response::jsonDecoded", "doc": "&quot;Parse the body as json and return it as a PHP value.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_xmlDecoded", "name": "Hayttp\\Response::xmlDecoded", "doc": "&quot;Parse the body as xml and return it as a SimpleXmlElement.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_urlDecoded", "name": "Hayttp\\Response::urlDecoded", "doc": "&quot;Parse the response as url-encoded and return the parsed array.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_render", "name": "Hayttp\\Response::render", "doc": "&quot;Get the entire response, including headers, as a string.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_renderHeaders", "name": "Hayttp\\Response::renderHeaders", "doc": "&quot;Render headers in to a well-formatted string.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Response", "fromLink": "Hayttp/Response.html", "link": "Hayttp/Response.html#method_extraDebugInfo", "name": "Hayttp\\Response::extraDebugInfo", "doc": "&quot;Get extra debug information.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Common", "fromLink": "Hayttp/Traits/Common.html", "link": "Hayttp/Traits/Common/DebugInfo.html", "name": "Hayttp\\Traits\\Common\\DebugInfo", "doc": "&quot;Add __debugInfo support.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\DebugInfo", "fromLink": "Hayttp/Traits/Common/DebugInfo.html", "link": "Hayttp/Traits/Common/DebugInfo.html#method_instanceVariables", "name": "Hayttp\\Traits\\Common\\DebugInfo::instanceVariables", "doc": "&quot;Public accessor for all instance variables.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\DebugInfo", "fromLink": "Hayttp/Traits/Common/DebugInfo.html", "link": "Hayttp/Traits/Common/DebugInfo.html#method___debugInfo", "name": "Hayttp\\Traits\\Common\\DebugInfo::__debugInfo", "doc": "&quot;Return debug info for var_dump, et al.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Common", "fromLink": "Hayttp/Traits/Common.html", "link": "Hayttp/Traits/Common/Extendable.html", "name": "Hayttp\\Traits\\Common\\Extendable", "doc": "&quot;Make a class dynamically extendable.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method_hasExtension", "name": "Hayttp\\Traits\\Common\\Extendable::hasExtension", "doc": "&quot;Has this class been extended with a given method?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method_extend", "name": "Hayttp\\Traits\\Common\\Extendable::extend", "doc": "&quot;Add a method to the class.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method_mixin", "name": "Hayttp\\Traits\\Common\\Extendable::mixin", "doc": "&quot;Mix in all the public methods of an object.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method_execDynamicClosure", "name": "Hayttp\\Traits\\Common\\Extendable::execDynamicClosure", "doc": "&quot;Execute a static call with the correct class scope.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method_execStaticCallable", "name": "Hayttp\\Traits\\Common\\Extendable::execStaticCallable", "doc": "&quot;Execute a static call with the correct class scope.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method___call", "name": "Hayttp\\Traits\\Common\\Extendable::__call", "doc": "&quot;Magic Method for dynamic method names.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Common\\Extendable", "fromLink": "Hayttp/Traits/Common/Extendable.html", "link": "Hayttp/Traits/Common/Extendable.html#method___callStatic", "name": "Hayttp\\Traits\\Common\\Extendable::__callStatic", "doc": "&quot;Magic Method for dynamic names of static methods.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Request", "fromLink": "Hayttp/Traits/Request.html", "link": "Hayttp/Traits/Request/Accessors.html", "name": "Hayttp\\Traits\\Request\\Accessors", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_method", "name": "Hayttp\\Traits\\Request\\Accessors::method", "doc": "&quot;The http method.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_engine", "name": "Hayttp\\Traits\\Request\\Accessors::engine", "doc": "&quot;The request engine.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_events", "name": "Hayttp\\Traits\\Request\\Accessors::events", "doc": "&quot;All registered event hooks.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_userAgent", "name": "Hayttp\\Traits\\Request\\Accessors::userAgent", "doc": "&quot;The user agent string.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_url", "name": "Hayttp\\Traits\\Request\\Accessors::url", "doc": "&quot;The target url.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_headers", "name": "Hayttp\\Traits\\Request\\Accessors::headers", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_header", "name": "Hayttp\\Traits\\Request\\Accessors::header", "doc": "&quot;Get the contents of a given header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_payload", "name": "Hayttp\\Traits\\Request\\Accessors::payload", "doc": "&quot;The request payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_proxy", "name": "Hayttp\\Traits\\Request\\Accessors::proxy", "doc": "&quot;The proxy to use.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_secureSsl", "name": "Hayttp\\Traits\\Request\\Accessors::secureSsl", "doc": "&quot;Are we doing strict SSL checking?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_timeout", "name": "Hayttp\\Traits\\Request\\Accessors::timeout", "doc": "&quot;Timeout in seconds.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_cryptoMethod", "name": "Hayttp\\Traits\\Request\\Accessors::cryptoMethod", "doc": "&quot;Cryptographic transport method.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_body", "name": "Hayttp\\Traits\\Request\\Accessors::body", "doc": "&quot;The request body.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Accessors", "fromLink": "Hayttp/Traits/Request/Accessors.html", "link": "Hayttp/Traits/Request/Accessors.html#method_contentType", "name": "Hayttp\\Traits\\Request\\Accessors::contentType", "doc": "&quot;Get the contents of the Content-Type header.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Request", "fromLink": "Hayttp/Traits/Request.html", "link": "Hayttp/Traits/Request/CanSend.html", "name": "Hayttp\\Traits\\Request\\CanSend", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\CanSend", "fromLink": "Hayttp/Traits/Request/CanSend.html", "link": "Hayttp/Traits/Request/CanSend.html#method_send", "name": "Hayttp\\Traits\\Request\\CanSend::send", "doc": "&quot;Send\/execute the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\CanSend", "fromLink": "Hayttp/Traits/Request/CanSend.html", "link": "Hayttp/Traits/Request/CanSend.html#method_sendRaw", "name": "Hayttp\\Traits\\Request\\CanSend::sendRaw", "doc": "&quot;Set the raw payload of the request and send\/execute the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\CanSend", "fromLink": "Hayttp/Traits/Request/CanSend.html", "link": "Hayttp/Traits/Request/CanSend.html#method_sendJson", "name": "Hayttp\\Traits\\Request\\CanSend::sendJson", "doc": "&quot;Set a JSON payload and send\/execute the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\CanSend", "fromLink": "Hayttp/Traits/Request/CanSend.html", "link": "Hayttp/Traits/Request/CanSend.html#method_sendXml", "name": "Hayttp\\Traits\\Request\\CanSend::sendXml", "doc": "&quot;Set an XML payload and send\/execute the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\CanSend", "fromLink": "Hayttp/Traits/Request/CanSend.html", "link": "Hayttp/Traits/Request/CanSend.html#method_sendFormData", "name": "Hayttp\\Traits\\Request\\CanSend::sendFormData", "doc": "&quot;Set a URL-encoded payload and send\/execute the request.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Request", "fromLink": "Hayttp/Traits/Request.html", "link": "Hayttp/Traits/Request/DeprecatedMethods.html", "name": "Hayttp\\Traits\\Request\\DeprecatedMethods", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\DeprecatedMethods", "fromLink": "Hayttp/Traits/Request/DeprecatedMethods.html", "link": "Hayttp/Traits/Request/DeprecatedMethods.html#method_sendsRaw", "name": "Hayttp\\Traits\\Request\\DeprecatedMethods::sendsRaw", "doc": "&quot;Set the raw payload of the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\DeprecatedMethods", "fromLink": "Hayttp/Traits/Request/DeprecatedMethods.html", "link": "Hayttp/Traits/Request/DeprecatedMethods.html#method_sendsJson", "name": "Hayttp\\Traits\\Request\\DeprecatedMethods::sendsJson", "doc": "&quot;Set a JSON payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\DeprecatedMethods", "fromLink": "Hayttp/Traits/Request/DeprecatedMethods.html", "link": "Hayttp/Traits/Request/DeprecatedMethods.html#method_sendsXml", "name": "Hayttp\\Traits\\Request\\DeprecatedMethods::sendsXml", "doc": "&quot;Set a XML payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\DeprecatedMethods", "fromLink": "Hayttp/Traits/Request/DeprecatedMethods.html", "link": "Hayttp/Traits/Request/DeprecatedMethods.html#method_sends", "name": "Hayttp\\Traits\\Request\\DeprecatedMethods::sends", "doc": "&quot;Set a URL-encoded payload.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Request", "fromLink": "Hayttp/Traits/Request.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_accept", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::accept", "doc": "&quot;Add Accept header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_acceptMany", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::acceptMany", "doc": "&quot;Add Accept header with many types.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_acceptJson", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::acceptJson", "doc": "&quot;Accept application\/json.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_acceptXml", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::acceptXml", "doc": "&quot;Accept application\/xml.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_acceptAny", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::acceptAny", "doc": "&quot;Accept * \/ *.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_ensureJson", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::ensureJson", "doc": "&quot;Expect json response type and throw an exception if json is not returned.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes", "fromLink": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html", "link": "Hayttp/Traits/Request/ExpectsCommonMimeTypes.html#method_ensureXml", "name": "Hayttp\\Traits\\Request\\ExpectsCommonMimeTypes::ensureXml", "doc": "&quot;Expect json response type and throw an exception if json is not returned.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Request", "fromLink": "Hayttp/Traits/Request.html", "link": "Hayttp/Traits/Request/HasWithMethods.html", "name": "Hayttp\\Traits\\Request\\HasWithMethods", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withTimeout", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withTimeout", "doc": "&quot;Set the timeout.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withUserAgent", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withUserAgent", "doc": "&quot;Set the user agent header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withCryptoMethod", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withCryptoMethod", "doc": "&quot;Set the allowed crypto method.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_skipCertificateChecks", "name": "Hayttp\\Traits\\Request\\HasWithMethods::skipCertificateChecks", "doc": "&quot;Disable all SSL certificate checks.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withEngine", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withEngine", "doc": "&quot;Set the transfer engine.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withHeaders", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withHeaders", "doc": "&quot;Set all headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withAdditionalHeaders", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withAdditionalHeaders", "doc": "&quot;Add an array of headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withProxy", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withProxy", "doc": "&quot;Set the proxy server.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withHeader", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withHeader", "doc": "&quot;Add a header to the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withTls", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withTls", "doc": "&quot;Set the TLS version.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withBasicAuth", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withBasicAuth", "doc": "&quot;Add a basic authorization (which is actually an authenticaation) header.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withPayload", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withPayload", "doc": "&quot;Set the payload of the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withResponseCall", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withResponseCall", "doc": "&quot;Execute the $response-&gt;$methodName(.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withRawPayload", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withRawPayload", "doc": "&quot;Set the raw payload of the request.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withJsonPayload", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withJsonPayload", "doc": "&quot;Set a JSON payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withXmlPayload", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withXmlPayload", "doc": "&quot;Set an XML payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withFormDataPayload", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withFormDataPayload", "doc": "&quot;Set a URL-encoded payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\HasWithMethods", "fromLink": "Hayttp/Traits/Request/HasWithMethods.html", "link": "Hayttp/Traits/Request/HasWithMethods.html#method_withMockedEndpoint", "name": "Hayttp\\Traits\\Request\\HasWithMethods::withMockedEndpoint", "doc": "&quot;Mock an end point.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Request", "fromLink": "Hayttp/Traits/Request.html", "link": "Hayttp/Traits/Request/Multipart.html", "name": "Hayttp\\Traits\\Request\\Multipart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Multipart", "fromLink": "Hayttp/Traits/Request/Multipart.html", "link": "Hayttp/Traits/Request/Multipart.html#method_addMultipartField", "name": "Hayttp\\Traits\\Request\\Multipart::addMultipartField", "doc": "&quot;Add a multipart entry.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Multipart", "fromLink": "Hayttp/Traits/Request/Multipart.html", "link": "Hayttp/Traits/Request/Multipart.html#method_addFile", "name": "Hayttp\\Traits\\Request\\Multipart::addFile", "doc": "&quot;Add a file to the multipart payload.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Request\\Multipart", "fromLink": "Hayttp/Traits/Request/Multipart.html", "link": "Hayttp/Traits/Request/Multipart.html#method_addBlob", "name": "Hayttp\\Traits\\Request\\Multipart::addBlob", "doc": "&quot;Add a data field to the multipart payload.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Response", "fromLink": "Hayttp/Traits/Response.html", "link": "Hayttp/Traits/Response/Assertions.html", "name": "Hayttp\\Traits\\Response\\Assertions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure", "name": "Hayttp\\Traits\\Response\\Assertions::ensure", "doc": "&quot;Throw a ResponseException if $success is false.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureStatusInRange", "name": "Hayttp\\Traits\\Response\\Assertions::ensureStatusInRange", "doc": "&quot;Ensure that status code is in a given range.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureStatusIn", "name": "Hayttp\\Traits\\Response\\Assertions::ensureStatusIn", "doc": "&quot;Ensure that the status code is in a given et of codes.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureStatus", "name": "Hayttp\\Traits\\Response\\Assertions::ensureStatus", "doc": "&quot;Ensure that the status code equals $validCode.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure2xx", "name": "Hayttp\\Traits\\Response\\Assertions::ensure2xx", "doc": "&quot;Ensure that the status code is in the range [200.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure200", "name": "Hayttp\\Traits\\Response\\Assertions::ensure200", "doc": "&quot;Ensure that the status code is 200.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure201", "name": "Hayttp\\Traits\\Response\\Assertions::ensure201", "doc": "&quot;Ensure that the status code is 201.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure204", "name": "Hayttp\\Traits\\Response\\Assertions::ensure204", "doc": "&quot;Ensure that the status code is 204.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure301", "name": "Hayttp\\Traits\\Response\\Assertions::ensure301", "doc": "&quot;Ensure that the status code is 301.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensure302", "name": "Hayttp\\Traits\\Response\\Assertions::ensure302", "doc": "&quot;Ensure that the status code is 302.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureJson", "name": "Hayttp\\Traits\\Response\\Assertions::ensureJson", "doc": "&quot;Ensure that the content type is application\/json.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureXml", "name": "Hayttp\\Traits\\Response\\Assertions::ensureXml", "doc": "&quot;Ensure that the content type is application\/xml.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureContentType", "name": "Hayttp\\Traits\\Response\\Assertions::ensureContentType", "doc": "&quot;Ensure that the response has a given content type.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureSuccess", "name": "Hayttp\\Traits\\Response\\Assertions::ensureSuccess", "doc": "&quot;Ensure that the status code is in the range [200.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureRedirect", "name": "Hayttp\\Traits\\Response\\Assertions::ensureRedirect", "doc": "&quot;Assert whether the response is redirecting to a given URI.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureHasHeader", "name": "Hayttp\\Traits\\Response\\Assertions::ensureHasHeader", "doc": "&quot;Asserts that the response contains the given header and equals the optional value.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Assertions", "fromLink": "Hayttp/Traits/Response/Assertions.html", "link": "Hayttp/Traits/Response/Assertions.html#method_ensureContains", "name": "Hayttp\\Traits\\Response\\Assertions::ensureContains", "doc": "&quot;Assert that the given string is contained within the response.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Response", "fromLink": "Hayttp/Traits/Response.html", "link": "Hayttp/Traits/Response/Callbacks.html", "name": "Hayttp\\Traits\\Response\\Callbacks", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_transform", "name": "Hayttp\\Traits\\Response\\Callbacks::transform", "doc": "&quot;Transform this response into something else.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_apply", "name": "Hayttp\\Traits\\Response\\Callbacks::apply", "doc": "&quot;Execute a callback.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_on5xx", "name": "Hayttp\\Traits\\Response\\Callbacks::on5xx", "doc": "&quot;Execute a callback if statusCode is 5xx.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_on4xx", "name": "Hayttp\\Traits\\Response\\Callbacks::on4xx", "doc": "&quot;Execute a callback if statusCode is 4xx.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_on3xx", "name": "Hayttp\\Traits\\Response\\Callbacks::on3xx", "doc": "&quot;Execute a callback if statusCode is 3xx.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_on2xx", "name": "Hayttp\\Traits\\Response\\Callbacks::on2xx", "doc": "&quot;Execute a callback if status code is 2xx.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_onError", "name": "Hayttp\\Traits\\Response\\Callbacks::onError", "doc": "&quot;Execute a callback if status code is 4xx or 5xx.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_onRedirect", "name": "Hayttp\\Traits\\Response\\Callbacks::onRedirect", "doc": "&quot;Execute a callback if status code is 3xx.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_onSuccess", "name": "Hayttp\\Traits\\Response\\Callbacks::onSuccess", "doc": "&quot;Execute a callback if status code indicates a success.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\Callbacks", "fromLink": "Hayttp/Traits/Response/Callbacks.html", "link": "Hayttp/Traits/Response/Callbacks.html#method_onStatusCode", "name": "Hayttp\\Traits\\Response\\Callbacks::onStatusCode", "doc": "&quot;Execute a callback if status code === $statusCode.&quot;"},
            
            {"type": "Trait", "fromName": "Hayttp\\Traits\\Response", "fromLink": "Hayttp/Traits/Response.html", "link": "Hayttp/Traits/Response/StatusHelpers.html", "name": "Hayttp\\Traits\\Response\\StatusHelpers", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_is2xx", "name": "Hayttp\\Traits\\Response\\StatusHelpers::is2xx", "doc": "&quot;Is the status code 2xx ?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_is3xx", "name": "Hayttp\\Traits\\Response\\StatusHelpers::is3xx", "doc": "&quot;Is the status code 3xx ?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_is4xx", "name": "Hayttp\\Traits\\Response\\StatusHelpers::is4xx", "doc": "&quot;Is the status code 3xx ?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_is5xx", "name": "Hayttp\\Traits\\Response\\StatusHelpers::is5xx", "doc": "&quot;Is the status code 5xx ?&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_isSuccess", "name": "Hayttp\\Traits\\Response\\StatusHelpers::isSuccess", "doc": "&quot;Is this request a success? (i.e. a 2xx status code).&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_isRedirect", "name": "Hayttp\\Traits\\Response\\StatusHelpers::isRedirect", "doc": "&quot;Is this request a redirect? (i.e. a 3xx status code).&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Traits\\Response\\StatusHelpers", "fromLink": "Hayttp/Traits/Response/StatusHelpers.html", "link": "Hayttp/Traits/Response/StatusHelpers.html#method_isError", "name": "Hayttp\\Traits\\Response\\StatusHelpers::isError", "doc": "&quot;Is this request a failure? (i.e. a 4xx or 5xx status code).&quot;"},
            
            {"type": "Class", "fromName": "Hayttp", "fromLink": "Hayttp.html", "link": "Hayttp/Util.html", "name": "Hayttp\\Util", "doc": "&quot;Utility class.&quot;"},
                                                        {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_applyMountPoint", "name": "Hayttp\\Util::applyMountPoint", "doc": "&quot;Make a url, possibly prefixing a mount point.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_ensureValidUrl", "name": "Hayttp\\Util::ensureValidUrl", "doc": "&quot;Ensure that a url is valid.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_recursiveArraySort", "name": "Hayttp\\Util::recursiveArraySort", "doc": "&quot;Recursive array sort (sort by keys if possible, otherwise sort by values).&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_toJson", "name": "Hayttp\\Util::toJson", "doc": "&quot;Json stringify some data.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_toPrettyJson", "name": "Hayttp\\Util::toPrettyJson", "doc": "&quot;Json stringify some data.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_makeExpectationMessage", "name": "Hayttp\\Util::makeExpectationMessage", "doc": "&quot;Create an assertion\/expectation message for assertions.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_normalizeHeaders", "name": "Hayttp\\Util::normalizeHeaders", "doc": "&quot;Normalize an array of headers.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_normalizeHeaderName", "name": "Hayttp\\Util::normalizeHeaderName", "doc": "&quot;Normalize a header name.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_closureFromCallable", "name": "Hayttp\\Util::closureFromCallable", "doc": "&quot;Create a closure from a callable.&quot;"},
                    {"type": "Method", "fromName": "Hayttp\\Util", "fromLink": "Hayttp/Util.html", "link": "Hayttp/Util.html#method_removeBom", "name": "Hayttp\\Util::removeBom", "doc": "&quot;Remove the byte-order-mark from a string.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


