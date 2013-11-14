// jQuery 1.10.2 Visual Studio 智能提示（intellisense）简体中文文件
// 由 NetRube 整理
// 原始文件取自 asp.net mvc5 自动生成的英文文件
// 所有翻译结果均来自 http://www.css88.com/jqueryapi

intellisense.annotate(jQuery, {
  'ajax': function() {
    /// <signature>
  	///   <summary>执行一个异步的 HTTP（Ajax） 的请求</summary>
  	///   <param name="url" type="String">一个用来包含发送请求的 URL 字符串</param>
  	///   <param name="settings" type="PlainObject">一个以 "{键:值}" 组成的 AJAX 请求设置。所有选项都是可选的。可以使用 $.ajaxSetup() 设置任何默认参数。看 jQuery.ajax( settings ) 下所有设置的完整列表</param>
    ///   <returns type="jqXHR" />
    /// </signature>
    /// <signature>
  	///   <summary>执行一个异步的 HTTP（Ajax） 的请求</summary>
  	///   <param name="settings" type="PlainObject">一个以 "{键:值}" 组成的 AJAX 请求设置。所有选项都是可选的。可以使用 $.ajaxSetup() 设置任何默认参数</param>
    ///   <returns type="jqXHR" />
    /// </signature>
  },
  'ajaxPrefilter': function() {
    /// <signature>
  	///   <summary>在每个请求之前被发送和 $.ajax() 处理它们前处理，设置自定义 Ajax 选项或修改现有选项</summary>
  	///   <param name="dataTypes" type="String">一个可选的字符串，其中包含一个或多个空格分隔的数据类型</param>
  	///   <param name="handler(options, originalOptions, jqXHR)" type="Function">一个处理程序程序，用于设置未来的 Ajax 请求的默认值</param>
    /// </signature>
  },
  'ajaxSetup': function() {
    /// <signature>
  	///   <summary>为以后要用到的 Ajax 请求设置默认的值</summary>
  	///   <param name="options" type="PlainObject">一个用来配置Ajax请求的 "{键:值}" 对，所有的选项都是可选的</param>
    /// </signature>
  },
  'ajaxTransport': function() {
    /// <signature>
  	///   <summary>创建一个对象，用于处理 Ajax 数据的实际传输</summary>
  	///   <param name="dataType" type="String">一个字符串，标识使用的数据类型</param>
  	///   <param name="handler(options, originalOptions, jqXHR)" type="Function">一个处理程序，使用第一个参数中提供的数据类型返回新的传输（transport）对象</param>
    /// </signature>
  },
  'boxModel': function() {
  	/// <summary>在 jQuery 1.3 中不建议使用（查看 jQuery.support)。当前页面中浏览器是否使用标准盒模型渲染页面。 建议使用 jQuery.support.boxModel 代替 W3C CSS Box Model</summary>
    /// <returns type="Boolean" />
  },
  'browser': function() {
  	/// <summary>用来获取 useragent 的包含标志，读取自 navigator.userAgent。这个属性在 jQuery 1.9 已经被删除并且只能通过的 jQuery.migrate 插件使用。请尝试使用特征检测代替</summary>
    /// <returns type="PlainObject" />
  },
  'browser.version': function() {
  	/// <summary>用户的浏览器渲染引擎的版本号</summary>
    /// <returns type="String" />
  },
  'Callbacks': function() {
    /// <signature>
  	///   <summary>一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表</summary>
  	///   <param name="flags" type="String">一个用空格标记分隔的标志可选列表,用来改变回调列表中的行为</param>
    ///   <returns type="Callbacks" />
    /// </signature>
  },
  'contains': function() {
    /// <signature>
  	///   <summary>检查一个 DOM 元素是另一个 DOM 元素的后代</summary>
  	///   <param name="container" type="Element">DOM 元素作为容器，可以包含其他元素</param>
  	///   <param name="contained" type="Element">DOM 元素，可能被其他元素所包含</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'cssHooks': function() {
  	/// <summary>直接向 jQuery 中添加钩子，用于覆盖设置或获取特定 CSS 属性时的方法，目的是为了标准化 CSS 属性名或创建自定义属性</summary>
    /// <returns type="Object" />
  },
  'data': function() {
    /// <signature>
  	///   <summary>存储任意数据到指定的元素，返回设置的值</summary>
  	///   <param name="element" type="Element">要存储数据的 DOM 对象</param>
  	///   <param name="key" type="String">存储的数据名</param>
    ///   <returns type="Object" />
    /// </signature>
    /// <signature>
  	///   <summary>存储任意数据到指定的元素，返回设置的值</summary>
  	///   <param name="element" type="Element">要存储数据的 DOM 对象</param>
    ///   <returns type="Object" />
    /// </signature>
  },
  'Deferred': function() {
    /// <signature>
  	///   <summary>一个构造函数，返回一个链式实用对象方法来注册多个回调，回调队列，  调用回调队列，并转达任何同步或异步函数的成功或失败状态</summary>
  	///   <param name="beforeStart" type="Function">一个构造函数返回之前调用的函数</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'dequeue': function() {
    /// <signature>
  	///   <summary>在匹配的元素上执行队列中的下一个函数</summary>
  	///   <param name="element" type="Element">一个用于移除和执行列队的 DOM 元素</param>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的动画队列</param>
    /// </signature>
  },
  'each': function() {
    /// <signature>
  	///   <summary>一个通用的迭代函数，它可以用来无缝迭代对象和数组。数组和类似数组的对象通过一个长度属性（如一个函数的参数对象）来迭代数字索引，从 0 到 length - 1。其他对象通过其属性名进行迭代</summary>
  	///   <param name="collection" type="Object">遍历的对象或数组</param>
  	///   <param name="callback(indexInArray, valueOfElement)" type="Function">该函数会在每次迭代时被调用</param>
    ///   <returns type="Object" />
    /// </signature>
  },
  'error': function() {
    /// <signature>
  	///   <summary>接受一个字符串，并抛出包含这个字符串的异常</summary>
  	///   <param name="message" type="String">将要发出的消息</param>
    /// </signature>
  },
  'extend': function() {
    /// <signature>
  	///   <summary>将两个或更多对象的内容合并到第一个对象</summary>
  	///   <param name="target" type="Object">一个对象，如果附加的对象被传递给这个方法将那么它将接收新的属性，如果它是唯一的参数将扩展 jQuery 的命名空间</param>
  	///   <param name="object1" type="Object">一个对象，它包含额外的属性合并到第一个参数</param>
  	///   <param name="objectN" type="Object">包含额外的属性合并到第一个参数</param>
    ///   <returns type="Object" />
    /// </signature>
    /// <signature>
  	///   <summary>将两个或更多对象的内容合并到第一个对象</summary>
  	///   <param name="deep" type="Boolean">如果是 true，合并成为递归（又叫做深拷贝）</param>
  	///   <param name="target" type="Object">对象扩展。这将接收新的属性</param>
  	///   <param name="object1" type="Object">一个对象，它包含额外的属性合并到第一个参数</param>
  	///   <param name="objectN" type="Object">包含额外的属性合并到第一个参数</param>
    ///   <returns type="Object" />
    /// </signature>
  },
  'get': function() {
    /// <signature>
  	///   <summary>使用一个 HTTP GET 请求从服务器加载数据</summary>
  	///   <param name="url" type="String">一个包含发送请求的 URL 字符串</param>
  	///   <param name="data" type="String">发送给服务器的字符串或 Key/value 键值对</param>
  	///   <param name="success(data, textStatus, jqXHR)" type="Function">当请求成功后执行的回调函数</param>
  	///   <param name="dataType" type="String">从服务器返回的预期的数据类型。默认：智能猜测（xml, json, script, 或 html）</param>
    ///   <returns type="jqXHR" />
    /// </signature>
  },
  'getJSON': function() {
    /// <signature>
  	///   <summary>使用一个 HTTP GET 请求从服务器加载 JSON 编码的数据</summary>
  	///   <param name="url" type="String">一个包含发送请求的 URL 字符串</param>
  	///   <param name="data" type="PlainObject">发送给服务器的字符串或 Key/value 键值对</param>
  	///   <param name="success(data, textStatus, jqXHR)" type="Function">当请求成功后执行的回调函数</param>
    ///   <returns type="jqXHR" />
    /// </signature>
  },
  'getScript': function() {
    /// <signature>
  	///   <summary>使用一个 HTTP GET 请求从服务器加载并执行一个 JavaScript 文件</summary>
  	///   <param name="url" type="String">一个包含发送请求的 URL 字符串</param>
  	///   <param name="success(script, textStatus, jqXHR)" type="Function">当请求成功后执行的回调函数</param>
    ///   <returns type="jqXHR" />
    /// </signature>
  },
  'globalEval': function() {
    /// <signature>
  	///   <summary>在全局上下文下执行一些 JavaScript 代码</summary>
  	///   <param name="code" type="String">用来执行的 JavaScript 代码</param>
    /// </signature>
  },
  'grep': function() {
    /// <signature>
  	///   <summary>查找满足过滤函数的数组元素。原始数组不受影响</summary>
  	///   <param name="array" type="Array">用于查询元素的数组</param>
  	///   <param name="function(elementOfArray, indexInArray)" type="Function">该函数来处理每项元素的比对。第一个参数是正在被检查的数组的元素，第二个参数是该元素的索引值。该函数应返回一个布尔值。this 将是全局的 window 对象</param>
  	///   <param name="invert" type="Boolean">如果“invert”为 false，或没有提供，函数返回一个“callback”中返回 true 的所有元素组成的数组。如果“invert”为 true，函数返回一个“callback”中返回 false 的所有元素组成的数组</param>
    ///   <returns type="Array" />
    /// </signature>
  },
  'hasData': function() {
    /// <signature>
  	///   <summary>确定任何一个元素是否有与之相关的 jQuery 数据</summary>
  	///   <param name="element" type="Element">一个用于进行检查数据的 DOM 元素</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'holdReady': function() {
    /// <signature>
  	///   <summary>暂停或恢复 .ready() 事件的执行</summary>
  	///   <param name="hold" type="Boolean">指示是否暂停或恢复被请求的 ready 事件</param>
    /// </signature>
  },
  'inArray': function() {
    /// <signature>
  	///   <summary>在数组中查找指定值并返回它的索引（如果没有找到，则返回 -1）</summary>
  	///   <param name="value" type="Anything">要查找的值</param>
  	///   <param name="array" type="Array">一个数组，通过它来查找</param>
  	///   <param name="fromIndex" type="Number">数组索引值，表示从哪里在开始查找。默认值是 0，这将查找整个数组</param>
    ///   <returns type="Number" />
    /// </signature>
  },
  'isArray': function() {
    /// <signature>
  	///   <summary>确定的参数是一个数组</summary>
  	///   <param name="obj" type="Object">对象，用来测试是否为一个数组</param>
    ///   <returns type="boolean" />
    /// </signature>
  },
  'isEmptyObject': function() {
    /// <signature>
  	///   <summary>检查对象是否为空（不包含任何属性）</summary>
  	///   <param name="object" type="Object">将要检查是否为空的对象</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'isFunction': function() {
    /// <signature>
  	///   <summary>确定参数是否为一个 Javascript 函数</summary>
  	///   <param name="obj" type="PlainObject">将要被检查的对象。用于判断该对象是否为函数</param>
    ///   <returns type="boolean" />
    /// </signature>
  },
  'isNumeric': function() {
    /// <signature>
  	///   <summary>确定它的参数是否是一个数字</summary>
  	///   <param name="value" type="PlainObject">用于测试的值</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'isPlainObject': function() {
    /// <signature>
  	///   <summary>测试对象是否是纯粹的对象（通过 "{}" 或者 "new Object" 创建的）</summary>
  	///   <param name="object" type="PlainObject">用于测试是否为纯粹的对象</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'isWindow': function() {
    /// <signature>
  	///   <summary>确定参数是否为一个 window 对象</summary>
  	///   <param name="obj" type="PlainObject">用于测试是否为一个 window 对象</param>
    ///   <returns type="boolean" />
    /// </signature>
  },
  'isXMLDoc': function() {
    /// <signature>
  	///   <summary>检查一个 DOM 节点是否在 XML 文档中（或者是一个 XML 文档）</summary>
  	///   <param name="node" type="Element">用来检查是否在一个 XML 文档中的 DOM 节点</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'makeArray': function() {
    /// <signature>
  	///   <summary>转换一个类似数组的对象成为真正的 JavaScript 数组</summary>
  	///   <param name="obj" type="PlainObject">转换成一个原生数组的任何对象</param>
    ///   <returns type="Array" />
    /// </signature>
  },
  'map': function() {
    /// <signature>
  	///   <summary>将一个数组中的所有元素转换到另一个数组中</summary>
  	///   <param name="array" type="Array">待转换数组</param>
  	///   <param name="callback(elementOfArray, indexInArray)" type="Function">处理每一个元素的函数。第一个参数是数组元素，第二个参数是该元素的索引值。该函数可以返回任何值。在函数内部，this 将是全局的 window 对象</param>
    ///   <returns type="Array" />
    /// </signature>
    /// <signature>
    ///   <summary>将一个数组中的所有元素转换到另一个数组中</summary>
  	///   <param name="arrayOrObject" type="Object">待转换数组或对象</param>
  	///   <param name="callback( value, indexOrKey )" type="Function">处理每一个元素的函数。第一个参数是数组中元素或对象的值，第二个参数是该元素在数组中的索引值或该对象的键。该函数可以返回任何值，该返回值会被添加到数组中。若返回是数组，则会将该数组中的元素添加到最终的结果数组中。在函数内部， this 指的是全局（window）的对象</param>
    ///   <returns type="Array" />
    /// </signature>
  },
  'merge': function() {
    /// <signature>
  	///   <summary>合并两个数组内容到第一个数组</summary>
  	///   <param name="first" type="Array">第一个用于合并的数组，其中将会包含合并后的第二个数组的内容</param>
  	///   <param name="second" type="Array">第二个用于合并的数组，该数组不会被修改，其中的内容将会被合并到第一个数组中</param>
    ///   <returns type="Array" />
    /// </signature>
  },
  'noConflict': function() {
    /// <signature>
  	///   <summary>放弃 jQuery 控制 $ 变量</summary>
  	///   <param name="removeAll" type="Boolean">一个布尔值，判断是否从全局作用域中内去除所有 jQuery 变量(包括 jQuery 本身)</param>
    ///   <returns type="Object" />
    /// </signature>
  },
  'noop': function() {
  	/// <summary>一个空函数</summary>
  },
  'now': function() {
  	/// <summary>返回一个数字，表示当前时间</summary>
    /// <returns type="Number" />
  },
  'param': function() {
    /// <signature>
  	///   <summary>创建一个数组或对象序列化的的字符串，适用于一个 URL 地址查询字符串或 Ajax 请求</summary>
  	///   <param name="obj" type="Object">用于数组或序列化的对象</param>
    ///   <returns type="String" />
    /// </signature>
    /// <signature>
  	///   <summary>创建一个数组或对象序列化的的字符串，适用于一个 URL 地址查询字符串或 Ajax 请求</summary>
  	///   <param name="obj" type="Object">用于数组或序列化的对象</param>
  	///   <param name="traditional" type="Boolean">一个布尔值，指示是否执行了传统的“shallow”的序列化</param>
    ///   <returns type="String" />
    /// </signature>
  },
  'parseHTML': function() {
    /// <signature>
  	///   <summary>将字符串解析到一个 DOM 节点的数组中</summary>
  	///   <param name="data" type="String">用来解析的 HTML 字符串</param>
  	///   <param name="context" type="Element">DOM 元素的上下文，在这个上下文中将创建的 HTML 片段</param>
  	///   <param name="keepScripts" type="Boolean">一个布尔值，表明是否在传递的 HTML 字符串中包含脚本</param>
    ///   <returns type="Array" />
    /// </signature>
  },
  'parseJSON': function() {
    /// <signature>
  	///   <summary>接受一个标准格式的 JSON 字符串，并返回解析后的 JavaScript 对象</summary>
  	///   <param name="json" type="String">要解析的 JSON 字符串</param>
    ///   <returns type="Object" />
    /// </signature>
  },
  'parseXML': function() {
    /// <signature>
  	///   <summary>解析一个字符串到一个 XML 文档</summary>
  	///   <param name="data" type="String">用来解析的格式良好的 XML 字符串</param>
    ///   <returns type="XMLDocument" />
    /// </signature>
  },
  'post': function() {
    /// <signature>
  	///   <summary>使用一个 HTTP POST 请求从服务器加载数据</summary>
  	///   <param name="url" type="String">一个包含发送请求的 URL 字符串</param>
  	///   <param name="data" type="String">发送给服务器的字符串或 Key/value 键值对</param>
  	///   <param name="success(data, textStatus, jqXHR)" type="Function">当请求成功后执行的回调函数</param>
  	///   <param name="dataType" type="String">从服务器返回的预期的数据类型。默认：智能判断（xml, json, script, or html）</param>
    ///   <returns type="jqXHR" />
    /// </signature>
  },
  'proxy': function() {
    /// <signature>
  	///   <summary>接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境</summary>
  	///   <param name="function" type="Function">将要改变上下文语境的函数</param>
  	///   <param name="context" type="PlainObject">函数的上下文语境(this)会被设置成这个 object 对象</param>
    ///   <returns type="Function" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境</summary>
  	///   <param name="context" type="PlainObject">函数的上下文语境会被设置成这个 object 对象</param>
  	///   <param name="name" type="String">将要改变上下文语境的函数名(这个函数必须是前一个参数 context 对象的属性)</param>
    ///   <returns type="Function" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境</summary>
  	///   <param name="function" type="Function">将要改变上下文语境的函数</param>
  	///   <param name="context" type="PlainObject">函数的上下文语境(this)会被设置成这个 object 对象</param>
  	///   <param name="additionalArguments" type="Anything">任何数目的参数传递给 function 参数的函数引用</param>
    ///   <returns type="Function" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境</summary>
  	///   <param name="context" type="PlainObject">函数的上下文语境会被设置成这个 object 对象</param>
  	///   <param name="name" type="String">将要改变上下文语境的函数名(这个函数必须是前一个参数 context 对象的属性)</param>
  	///   <param name="additionalArguments" type="Anything">任何数目的参数传递给 name 参数中命名的函数</param>
    ///   <returns type="Function" />
    /// </signature>
  },
  'queue': function() {
    /// <signature>
  	///   <summary>显示在匹配的元素上的已经执行的函数列队</summary>
  	///   <param name="element" type="Element">一个已附加列队函数数组的 DOM 元素 </param>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的动画队列</param>
  	///   <param name="newQueue" type="Array">一个替换当前函数列队内容的数组</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>显示在匹配的元素上的已经执行的函数列队</summary>
  	///   <param name="element" type="Element">一个要附加列队函数的 DOM 元素</param>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的动画队列</param>
  	///   <param name="callback()" type="Function">添加到列队的新函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'removeData': function() {
    /// <signature>
  	///   <summary>删除一个先前存储的数据片段</summary>
  	///   <param name="element" type="Element">要移除数据的 DOM 对象</param>
  	///   <param name="name" type="String">要移除的存储数据名</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'sub': function() {
  	/// <summary>可创建一个新的 jQuery 副本，其属性和方法可以修改，而不会影响原来的 jQuery 对象</summary>
    /// <returns type="jQuery" />
  },
  'support': function() {
  	/// <summary>表示不同的浏览器功能或错误的属性的集合。 主要用于 jQuery 的内部使用;当他们不再需要在内部以提高页面的启动性能时，这些特定属性可能会被删除。（译者注：一组属性，它们代表了不同的浏览器功能或缺陷的存在的集合。)</summary>
    /// <returns type="Object" />
  },
  'trim': function() {
    /// <signature>
  	///   <summary>去掉字符串起始和结尾的空格</summary>
    ///   <param name="str" type="String">要去掉空格的字符串</param>
    ///   <returns type="String" />
    /// </signature>
  },
  'type': function() {
    /// <signature>
  	///   <summary>确定 JavaScript 对象的类型[[Class]] </summary>
  	///   <param name="obj" type="PlainObject">用来获取 JavaScript 数据类型[[Class]]的对象</param>
    ///   <returns type="String" />
    /// </signature>
  },
  'unique': function() {
    /// <signature>
  	///   <summary>删除数组中重复元素。只处理删除 DOM 元素数组，而不能处理字符串或者数字数组</summary>
  	///   <param name="array" type="Array">DOM 元素的数组</param>
    ///   <returns type="Array" />
    /// </signature>
  },
  'when': function() {
    /// <signature>
  	///   <summary>提供一种方法来执行一个或多个对象的回调函数，Deferred(延迟)对象通常表示异步事件</summary>
  	///   <param name="deferreds" type="Deferred">一个或多个延迟对象，或者普通的 JavaScript 对象</param>
    ///   <returns type="Promise" />
    /// </signature>
  },
});

var _1228819969 = jQuery.Callbacks;
jQuery.Callbacks = function (flags) {
	/// <signature>
	///   <summary>一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表</summary>
	///   <param name="flags" type="String">一个用空格标记分隔的标志可选列表，用来改变回调列表中的行为</param>
	///   <returns type="Callbacks" />
	/// </signature>
var _object = _1228819969(flags);
intellisense.annotate(_object, {
  'add': function() {
    /// <signature>
  	///   <summary>回调列表中添加一个回调或回调的集合</summary>
  	///   <param name="callbacks" type="Array">一个函数，或者一个函数数组，用来添加到回调列表</param>
    ///   <returns type="Callbacks" />
    /// </signature>
  },
  'disable': function() {
  	/// <summary>禁用回调列表中的回调</summary>
    /// <returns type="Callbacks" />
  },
  'disabled': function() {
  	/// <summary>确定回调列表是否已被禁用</summary>
    /// <returns type="Boolean" />
  },
  'empty': function() {
  	/// <summary>从列表中删除所有的回调</summary>
    /// <returns type="Callbacks" />
  },
  'fire': function() {
    /// <signature>
  	///   <summary>用给定的参数调用所有的回调</summary>
  	///   <param name="arguments" type="Anything">这个参数或参数列表传回给回调列表</param>
    ///   <returns type="Callbacks" />
    /// </signature>
  },
  'fired': function() {
  	/// <summary>访问给定的上下文和参数列表中的所有回调</summary>
    /// <returns type="Boolean" />
  },
  'fireWith': function() {
    /// <signature>
  	///   <summary>访问给定的上下文和参数列表中的所有回调</summary>
  	///   <param name="context" type="">该列表中的回调被触发的上下文引用</param>
  	///   <param name="args" type="">一个参数或参数列表传回给回调列表</param>
    ///   <returns type="Callbacks" />
    /// </signature>
  },
  'has': function() {
    /// <signature>
  	///   <summary>确定列表中是否提供一个回调</summary>
  	///   <param name="callback" type="Function">用来查找的回调函数</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'lock': function() {
  	/// <summary>锁定当前状态的回调列表</summary>
    /// <returns type="Callbacks" />
  },
  'locked': function() {
  	/// <summary>确定回调列表是否已被锁定</summary>
    /// <returns type="Boolean" />
  },
  'remove': function() {
    /// <signature>
  	///   <summary>从回调列表中的删除一个回调或回调集合</summary>
  	///   <param name="callbacks" type="Array">从回调列表中删除的一个函数，或者函数数组</param>
    ///   <returns type="Callbacks" />
    /// </signature>
  },
});

return _object;
};
intellisense.redirectDefinition(jQuery.Callbacks, _1228819969);

var _731531622 = jQuery.Deferred;
jQuery.Deferred = function (func) {
	/// <signature>
	///   <summary>一个构造函数，返回一个链式实用对象方法来注册多个回调，回调队列，调用回调队列，并转达任何同步或异步函数的成功或失败状态</summary>
	///   <param name="beforeStart" type="Function">一个构造函数返回之前调用的函数</param>
	///   <returns type="Deferred" />
	/// </signature>
var _object = _731531622(func);
intellisense.annotate(_object, {
  'always': function() {
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象解决或拒绝时，调用添加处理程序</summary>
  	///   <param name="alwaysCallbacks" type="Function">一个函数，或者函数数组，当 Deferred（延迟）对象得到解决或拒绝时被调用</param>
  	///   <param name="alwaysCallbacks" type="Function">可选的一个函数，或者函数数组，当 Deferred（延迟）对象得到解决或拒绝时被调用</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'done': function() {
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象解决时，调用添加处理程序</summary>
  	///   <param name="doneCallbacks" type="Function">一个函数，或者函数数组，当 Deferred（延迟）对象得到解决时被调用</param>
  	///   <param name="doneCallbacks" type="Function">可选的一个函数，或者函数数组，当 Deferred（延迟）对象得到解决时被调用</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'fail': function() {
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象拒绝时，调用添加的处理程序</summary>
  	///   <param name="failCallbacks" type="Function">一个函数，或者函数数组，当 Deferred（延迟）对象拒绝时被调用</param>
  	///   <param name="failCallbacks" type="Function">可选的一个函数，或者函数数组，当 Deferred（延迟）对象拒绝时被调用</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'isRejected': function() {
  	/// <summary>确定一个 Deferred（延迟）对象是否已被拒绝</summary>
    /// <returns type="Boolean" />
  },
  'isResolved': function() {
  	/// <summary>确定一个 Deferred（延迟）对象是否已被解决</summary>
    /// <returns type="Boolean" />
  },
  'notify': function() {
    /// <signature>
  	///   <summary>根据给定的 args 参数调用 Deferred（延迟）对象上进行中的回调 （progressCallbacks）</summary>
  	///   <param name="args" type="Object">传递一个可选的参数给进行中的回调（progressCallbacks）</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'notifyWith': function() {
    /// <signature>
  	///   <summary>根据给定的上下文（context）和 args 递延调用 Deferred（延迟）对象上进行中的回调（progressCallbacks ）</summary>
  	///   <param name="context" type="Object">Context（上下文） 作为 this 对象传递给进行中的回调（progressCallbacks ）</param>
  	///   <param name="args" type="Object">传递一个可选的参数给进行中的回调（progressCallbacks）</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'pipe': function() {
    /// <signature>
  	///   <summary>用用于过滤 and/or 链式延迟对象的工具方法</summary>
  	///   <param name="doneFilter" type="Function">一个函数，或者函数数组，当 Deferred（延迟）对象得到解决时被调用</param>
  	///   <param name="failFilter" type="Function">可选的 一个函数，或者函数数组，当 Deferred（延迟）对象拒绝时被调用</param>
    ///   <returns type="Promise" />
    /// </signature>
    /// <signature>
  	///   <summary>用用于过滤 and/or 链式延迟对象的工具方法</summary>
  	///   <param name="doneFilter" type="Function">一个函数，或者函数数组，当 Deferred（延迟）对象得到解决时被调用</param>
  	///   <param name="failFilter" type="Function">可选的 一个函数，或者函数数组，当 Deferred（延迟）对象拒绝时被调用</param>
  	///   <param name="progressFilter" type="Function">一个可选的函数，当进度通知发送给 Deferred（延迟）被调用</param>
    ///   <returns type="Promise" />
    /// </signature>
  },
  'progress': function() {
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象生成进度通知时，调用添加处理程序</summary>
  	///   <param name="progressCallbacks" type="Function">一个函数，或者函数数组，当 Deferred（延迟）对象生成进度通知时被调用的一个函数</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'promise': function() {
    /// <signature>
  	///   <summary>返回 Deferred(延迟)的 Promise（承诺）对象</summary>
  	///   <param name="target" type="Object">绑定 promise 方法的对象</param>
    ///   <returns type="Promise" />
    /// </signature>
  },
  'reject': function() {
    /// <signature>
  	///   <summary>拒绝 Deferred（延迟）对象，并根据给定的args参数调用任何失败回调函数（failCallbacks）。/summary>
  	///   <param name="args" type="Object">传递给失败回调函数（failCallbacks）的可选的参数</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'rejectWith': function() {
    /// <signature>
  	///   <summary>拒绝 Deferred（延迟）对象，并根据给定的 context 和 args 参数调用任何失败回调函数（failCallbacks）</summary>
  	///   <param name="context" type="Object">Context（上下文） 作为 this 对象传递给失败回调函数（failCallbacks ）</param>
  	///   <param name="args" type="Array">传递一个可选的参数数组给失败回调函数（failCallbacks ）</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'resolve': function() {
    /// <signature>
  	///   <summary>解决 Deferred（延迟）对象，并根据给定的 args 参数调用任何完成回调函数（doneCallbacks）</summary>
  	///   <param name="args" type="Object">传递给完成回调函数（doneCallbacks）的可选的参数</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'resolveWith': function() {
    /// <signature>
  	///   <summary>解决 Deferred（延迟）对象，并根据给定的 context 和 args 参数调用任何完成回调函数（doneCallbacks）</summary>
  	///   <param name="context" type="Object">Context（上下文） 作为 this 对象传递给完成回调函数（doneCallbacks）</param>
  	///   <param name="args" type="Array">传递一个可选的参数数组给完成回调函数（doneCallbacks）</param>
    ///   <returns type="Deferred" />
    /// </signature>
  },
  'state': function() {
  	/// <summary>确定一个 Deferred（延迟）对象的当前状态</summary>
    /// <returns type="String" />
  },
  'then': function() {
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象解决，拒绝或仍在进行中时，调用添加处理程序</summary>
  	///   <param name="doneFilter" type="Function">当 Deferred（延迟）对象得到解决时被调用的一个函数</param>
  	///   <param name="failFilter" type="Function">[可选]当 Deferred（延迟）对象拒绝时被调用的一个函数</param>
  	///   <param name="progressFilter" type="Function">[可选]当 Deferred（延迟）对象生成进度通知时被调用的一个函数</param>
    ///   <returns type="Promise" />
    /// </signature>
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象解决，拒绝或仍在进行中时，调用添加处理程序</summary>
  	///   <param name="doneCallbacks" type="Function">当 Deferred（延迟）对象得到解决时被调用的一个函数或函数数组</param>
  	///   <param name="failCallbacks" type="Function">当 Deferred（延迟）对象拒绝时被调用的一个函数或函数数组</param>
    ///   <returns type="Promise" />
    /// </signature>
    /// <signature>
  	///   <summary>当 Deferred（延迟）对象解决，拒绝或仍在进行中时，调用添加处理程序</summary>
  	///   <param name="doneCallbacks" type="Function">当 Deferred（延迟）对象得到解决时被调用的一个函数或函数数组</param>
  	///   <param name="failCallbacks" type="Function">当 Deferred（延迟）对象拒绝时被调用的一个函数或函数数组</param>
  	///   <param name="progressCallbacks" type="Function">当 Deferred（延迟）对象生成进度通知时被调用的一个函数或函数数组</param>
    ///   <returns type="Promise" />
    /// </signature>
  },
});

return _object;
};
intellisense.redirectDefinition(jQuery.Callbacks, _731531622);

intellisense.annotate(jQuery.Event.prototype, {
  'currentTarget': function() {
  	/// <summary>在事件冒泡过程中的当前DOM元素</summary>
    /// <returns type="Element" />
  },
  'data': function() {
  	/// <summary>一个可选的数据对象传递给一个事件方法，当当前正在执行的处理程序被绑定</summary>
    /// <returns type="Object" />
  },
  'delegateTarget': function() {
  	/// <summary>绑定了当前正在调用 jQuery 事件处理器的元素</summary>
    /// <returns type="Element" />
  },
  'isDefaultPrevented': function() {
  	/// <summary>根据事件对象中是否调用过 event.preventDefault() 方法，来返回一个布尔值</summary>
    /// <returns type="Boolean" />
  },
  'isImmediatePropagationStopped': function() {
  	/// <summary>根据事件对象中是否调用过 event.stopImmediatePropagation() 方法，来返回一个布尔值</summary>
    /// <returns type="Boolean" />
  },
  'isPropagationStopped': function() {
  	/// <summary>根据事件对象中是否调用过 event.stopPropagation() 方法，来返回一个布尔值</summary>
    /// <returns type="Boolean" />
  },
  'metaKey': function() {
  	/// <summary>表示事件触发时哪个 Meta 键被按下</summary>
    /// <returns type="Boolean" />
  },
  'namespace': function() {
  	/// <summary>当事件被触发时此属性包含指定的命名空间</summary>
    /// <returns type="String" />
  },
  'pageX': function() {
  	/// <summary>鼠标相对于文档的左边缘的位置</summary>
    /// <returns type="Number" />
  },
  'pageY': function() {
  	/// <summary>鼠标相对于文档的顶部边缘的位置</summary>
    /// <returns type="Number" />
  },
  'preventDefault': function() {
  	/// <summary>如果调用这个方法，默认事件行为将不再触发</summary>
  },
  'relatedTarget': function() {
  	/// <summary>在事件中涉及的其它任何 DOM 元素</summary>
    /// <returns type="Element" />
  },
  'result': function() {
  	/// <summary>事件被触发的一个事件处理程序的最后返回值，除非值是 undefined</summary>
    /// <returns type="Object" />
  },
  'stopImmediatePropagation': function() {
  	/// <summary>阻止剩余的事件处理函数执行并且防止事件冒泡到 DOM 树上</summary>
  },
  'stopPropagation': function() {
  	/// <summary>防止事件冒泡到 DOM 树上，也就是不触发的任何前辈元素上的事件处理函数</summary>
  },
  'target': function() {
  	/// <summary>触发事件的 DOM 元素</summary>
    /// <returns type="Element" />
  },
  'timeStamp': function() {
  	/// <summary>这个属性返回事件触发时距离 1970 年 1 月 1 日的毫秒数</summary>
    /// <returns type="Number" />
  },
  'type': function() {
  	/// <summary>描述事件的性质</summary>
    /// <returns type="String" />
  },
  'which': function() {
  	/// <summary>针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键</summary>
    /// <returns type="Number" />
  },
});

intellisense.annotate(jQuery.fn, {
  'add': function() {
    /// <signature>
  	///   <summary>添加元素到匹配的元素集合</summary>
  	///   <param name="selector" type="String">一个字符串表示的选择器表达式，找到更多的元素添加到匹配的元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>添加元素到匹配的元素集合</summary>
  	///   <param name="elements" type="Array">一个或多个元素添加到匹配的元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>添加元素到匹配的元素集合</summary>
  	///   <param name="html" type="String">HTML 片段添加到匹配的元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>添加元素到匹配的元素集合</summary>
  	///   <param name="jQuery object" type="jQuery object ">一个现有的 jQuery 对象添加到匹配的元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>添加元素到匹配的元素集合</summary>
  	///   <param name="selector" type="String">一个字符串表示的选择器表达式，找到更多的元素添加到匹配的元素集合</param>
  	///   <param name="context" type="Element">指定选择器查找元素所在的上下文; 类似 $(selector, context) 方法的 context（上下文)参数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'addBack': function() {
    /// <signature>
  	///   <summary>添加堆栈中元素集合到当前集合，一个选择性的过滤选择器</summary>
  	///   <param name="selector" type="String">一个字符串，其中包含一个选择器表达式，匹配当前元素集合不包括在内的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'addClass': function() {
    /// <signature>
  	///   <summary>为每个匹配的元素添加指定的样式类名</summary>
  	///   <param name="className" type="String">为每个匹配元素所要增加的一个或多个样式名</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为每个匹配的元素添加指定的样式类名</summary>
  	///   <param name="function(index, currentClass)" type="Function">这个函数返回一个或更多用空格隔开的要增加的样式名。接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容。在函数中 this 指向匹配元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'after': function() {
    /// <signature>
  	///   <summary>在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点</summary>
  	///   <param name="content" type="jQuery">一个元素、HTML 字符串或者 jQuery 对象，用来插在每个匹配元素的后面</param>
  	///   <param name="content" type="jQuery">添加的一个或多个 DOM 元素、元素的数组、HTML 字符串或 jQuery 对象，插在每个匹配元素的后面</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点</summary>
  	///   <param name="function(index)" type="Function">一个返回 HTML 字符串、DOM 元素或者 jQuery 对象的函数，插在每个匹配元素的后面。接收元素在集合中的索引位置作为参数。在函数中 this 指向元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'ajaxComplete': function() {
    /// <signature>
  	///   <summary>当 Ajax 请求完成后注册一个回调函数。这是一个 AjaxEvent</summary>
  	///   <param name="handler(event, XMLHttpRequest, ajaxOptions)" type="Function">被调用的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'ajaxError': function() {
    /// <signature>
  	///   <summary>Ajax 请求出错时注册一个回调处理函数，这是一个 Ajax Event</summary>
  	///   <param name="handler(event, jqXHR, ajaxSettings, thrownError)" type="Function">被调用的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'ajaxSend': function() {
    /// <signature>
  	///   <summary>在 Ajax 请求发送之前绑定一个要执行的函数，这是一个 Ajax Event</summary>
  	///   <param name="handler(event, jqXHR, ajaxOptions)" type="Function">被调用的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'ajaxStart': function() {
    /// <signature>
  	///   <summary>在 AJAX 请求刚开始时执行一个处理函数。 这是一个 Ajax Event</summary>
  	///   <param name="handler()" type="Function">被调用的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'ajaxStop': function() {
    /// <signature>
  	///   <summary>在 AJAX 请求完成时执行一个处理函数。 这是一个 Ajax Event</summary>
  	///   <param name="handler()" type="Function">被调用的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'ajaxSuccess': function() {
    /// <signature>
  	///   <summary>绑定一个函数当 Ajax 请求成功完成时执行。 这是一个 Ajax Event</summary>
  	///   <param name="handler(event, XMLHttpRequest, ajaxOptions)" type="Function">被调用的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'all': function() {
  	/// <summary>选择所有元素</summary>
  },
  'andSelf': function() {
  	/// <summary>添加先前的堆栈元素集合到当前组合</summary>
    /// <returns type="jQuery" />
  },
  'animate': function() {
    /// <signature>
  	///   <summary>根据一组 CSS 属性，执行自定义动画</summary>
  	///   <param name="properties" type="PlainObject">一个 CSS 属性和值的对象，动画将根据这组对象移动</param>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久。（愚人码头注：默认值: "normal"， 三种预定速度的字符串("slow", "normal", 或 "fast")或表示动画时长的毫秒数值(如：1000) ）</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>根据一组 CSS 属性，执行自定义动画</summary>
  	///   <param name="properties" type="PlainObject">一个 CSS 属性和值的对象,动画将根据这组对象移动</param>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'animated': function() {
  	/// <summary>选择所有正在执行动画效果的元素</summary>
  },
  'append': function() {
    /// <signature>
  	///   <summary>在每个匹配元素里面的末尾处插入参数内容</summary>
  	///   <param name="content" type="jQuery">DOM 元素、DOM 元素数组、HTML 字符串或者 jQuery 对象，用来插在每个匹配元素里面的末尾</param>
  	///   <param name="content" type="jQuery">一个或多个 DOM 元素、元素数组、HTML 字符串或 jQuery 对象插入到每个匹配元素的末尾</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在每个匹配元素里面的末尾处插入参数内容</summary>
  	///   <param name="function(index, html)" type="Function">一个返回 HTML 字符串、DOM 元素、jQuery 对象的函数，该字符串用来插入到匹配元素的末尾。接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容。在函数中 this 指向元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'appendTo': function() {
    /// <signature>
  	///   <summary>将匹配的元素插入到目标元素的最后面（译者注：内部插入）</summary>
  	///   <param name="target" type="jQuery">一个选择符、元素、HTML 字符串、DOM 元素数组或者 jQuery 对象；符合的元素们会被插入到由参数指定的目标的末尾</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'attr': function() {
    /// <signature>
  	///   <summary>设置每一个匹配元素的一个或多个属性</summary>
  	///   <param name="attributeName" type="String">要设置值的属性名</param>
  	///   <param name="value" type="Number">这个属性设置的值</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置每一个匹配元素的一个或多个属性</summary>
  	///   <param name="attributes" type="PlainObject">一个 属性 - 值 集合对象。（译者注：例如{ alt: '愚人码头', title: 'WEB前端开发-http://www.css88.com }）</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置每一个匹配元素的一个或多个属性</summary>
  	///   <param name="attributeName" type="String">要设置值的属性名</param>
  	///   <param name="function(index, attr)" type="Function">这个函数返回用来设置的值，this 指向当前的元素。接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'attributeContains': function() {
    /// <signature>
  	///   <summary>选择指定属性具有包含一个给定的子字符串的元素。（选择给定的属性是以包含某些值的元素）</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'attributeContainsPrefix': function() {
    /// <signature>
  	///   <summary>选择指定属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个连字符“-”）的元素</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，引号是可选的. 可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'attributeContainsWord': function() {
    /// <signature>
  	///   <summary>选择指定属性用空格分隔的值中包含一个给定值的元素</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'attributeEndsWith': function() {
    /// <signature>
  	///   <summary>选择指定属性是以给定值结尾的元素。这个比较是区分大小写的</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'attributeEquals': function() {
    /// <signature>
  	///   <summary>选择指定属性是给定值的元素</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'attributeHas': function() {
    /// <signature>
  	///   <summary>选择所有具有指定属性的元素，该属性可以是任何值</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
    /// </signature>
  },
  'attributeMultiple': function() {
    /// <signature>
  	///   <summary>选择匹配所有指定的属性筛选器的元素</summary>
  	///   <param name="attributeFilter1" type="String">一个属性过滤器</param>
  	///   <param name="attributeFilter2" type="String">另一个属性过滤器, 用于进一步减少被选择的元素</param>
  	///   <param name="attributeFilterN" type="String">根据需要有更多的属性过滤器</param>
    /// </signature>
  },
  'attributeNotEqual': function() {
    /// <signature>
  	///   <summary>选择不存在指定属性，或者指定的属性值不等于给定值的元素</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'attributeStartsWith': function() {
    /// <signature>
  	///   <summary>选择指定属性是以给定字符串开始的元素</summary>
  	///   <param name="attribute" type="String">一个属性名</param>
  	///   <param name="value" type="String">一个属性值，可以是一个不带引号的一个单词或带一个引号的字符串</param>
    /// </signature>
  },
  'before': function() {
    /// <signature>
  	///   <summary>根据参数设定，在匹配元素的前面插入内容（译者注：外部插入）</summary>
  	///   <param name="content" type="jQuery">HTML 字符串、DOM 元素、元素数组或者 jQuery 对象，用来插在集合中每个匹配元素前面</param>
  	///   <param name="content" type="jQuery"一个或多个 DOM 元素、元素数组、HTML 字符串、或 jQuery 对象，用来插在集合中每个匹配元素前面</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>根据参数设定，在匹配元素的前面插入内容（译者注：外部插入）</summary>
  	///   <param name="function" type="Function">一个返回 HTML 字符串、DOM 元素、jQuery 对象的函数，该字符串用来插在集合中每个匹配元素前面。 接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容。在函数中 this 指向元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'bind': function() {
    /// <signature>
  	///   <summary>为一个元素绑定一个事件处理程序</summary>
  	///   <param name="eventType" type="String">一个包含一个或多个 DOM 事件类型的字符串，比如 "click" 或 "submit" 或自定义事件的名称</param>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为一个元素绑定一个事件处理程序</summary>
  	///   <param name="eventType" type="String">一个包含一个或多个 DOM 事件类型的字符串，比如 "click" 或 "submit" 或自定义事件的名称</param>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="preventBubble" type="Boolean">第三个参数设置为 false 将绑定一个函数，防止默认事件，阻止事件冒泡。默认值是 true</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为一个元素绑定一个事件处理程序</summary>
  	///   <param name="events" type="Object">一个对象，包含一个或多个 DOM 事件类型和函数并执行它们</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'blur': function() {
    /// <signature>
  	///   <summary>为 "blur" 事件绑定一个处理函数，或者触发元素上的 "blur" 事件（愚人码头注：此事件不支持冒泡）</summary>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 "blur" 事件绑定一个处理函数，或者触发元素上的 "blur" 事件（愚人码头注：此事件不支持冒泡）</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'button': function() {
  	/// <summary>选择所有按钮元素和类型为按钮的元素</summary>
  },
  'change': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "change" 事件绑定一个处理函数，或者触发元素上的 "change" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的一个函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "change" 事件绑定一个处理函数，或者触发元素上的 "change" 事件</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的一个函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'checkbox': function() {
  	/// <summary>选择所有类型为复选框的元素</summary>
  },
  'checked': function() {
  	/// <summary>匹配所有勾选的元素</summary>
  },
  'child': function() {
    /// <signature>
  	///   <summary>选择所有指定“parent”元素中指定的 "child" 的直接子元素</summary>
  	///   <param name="parent" type="String">任何有效的选择器</param>
  	///   <param name="child" type="String">用来筛选子元素的选择器</param>
    /// </signature>
  },
  'children': function() {
    /// <signature>
  	///   <summary>获得匹配元素集合中每个元素的子元素，选择器选择性筛选</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'class': function() {
    /// <signature>
  	///   <summary>选择给定样式类名的所有元素</summary>
  	///   <param name="class" type="String">一个用来查找的类名。一个元素可以有多个类；其中只有一个必须匹配</param>
    /// </signature>
  },
  'clearQueue': function() {
    /// <signature>
  	///   <summary>从列队中移除所有未执行的项</summary>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的效果队列</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'click': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "click" 事件绑定一个处理器，或者触发元素上的 "click" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "click" 事件绑定一个处理器，或者触发元素上的 "click" 事件</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'clone': function() {
    /// <signature>
  	///   <summary>创建一个匹配的元素集合的深度拷贝副本</summary>
  	///   <param name="withDataAndEvents" type="Boolean">一个 Boolean 值，表示是否会复制元素上的事件处理函数。从 jQuery 1.4 开始，元素数据也会被复制</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>创建一个匹配的元素集合的深度拷贝副本</summary>
  	///   <param name="withDataAndEvents" type="Boolean">一个 Boolean 值，表示是否会复制元素上的事件处理函数。 默认值是 false。*对于 1.5.0 的默认值被不适当地设置成了 true，将在 1.5.1 以上改回 false</param>
  	///   <param name="deepWithDataAndEvents" type="Boolean">一个布尔值，指示是否对事件处理程序和克隆的元素的所有子元素的数据应该被复制。默认情况下它的值相匹配的第一个参数的值（ 默认值是 false）</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'closest': function() {
    /// <signature>
  	///   <summary>从元素本身开始，在 DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从元素本身开始，在 DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
  	///   <param name="context" type="Element">DOM 元素在其中一个匹配的元素可以被发现。如果没有上下文在当时的情况下通过了 jQuery 集合将被使用</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从元素本身开始，在 DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素</summary>
  	///   <param name="jQuery object" type="jQuery">一个用于匹配元素的 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从元素本身开始，在 DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素</summary>
  	///   <param name="element" type="Element">一个用于匹配元素的 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'contains': function() {
    /// <signature>
  	///   <summary>选择所有包含指定文本的元素</summary>
  	///   <param name="text" type="String">用来查找的一个文本字符串。这是区分大小写的</param>
    /// </signature>
  },
  'contents': function() {
  	/// <summary>获得匹配元素集合中每个元素的子元素，包括文字和注释节点</summary>
    /// <returns type="jQuery" />
  },
  'context': function() {
  	/// <summary>原始的 DOM 节点的内容传给 jQuery()；如果没有东西被传递，那么上下文将可能是该文档（document）</summary>
    /// <returns type="Element" />
  },
  'css': function() {
    /// <signature>
  	///   <summary>设置每个匹配元素的一个或多个 CSS 属性</summary>
  	///   <param name="propertyName" type="String">一个 CSS 属性名</param>
  	///   <param name="value" type="Number">设置这个 CSS 属性的值</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置每个匹配元素的一个或多个 CSS 属性</summary>
  	///   <param name="propertyName" type="String">一个 CSS 属性名</param>
  	///   <param name="function(index, value)" type="Function">一个返回设置值的函数。this 是当前元素。接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置每个匹配元素的一个或多个 CSS 属性</summary>
  	///   <param name="properties" type="PlainObject">一个 属性-值 配对的对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'data': function() {
    /// <signature>
  	///   <summary>在匹配元素上存储任意相关数据</summary>
  	///   <param name="key" type="String">一个字符串，用户存储数据的名称。（译者注：存储的数据名）</param>
  	///   <param name="value" type="Object">新的数据值；它可以是任意的 Javascript 数据类型，包括 Array 或者 Object</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配元素上存储任意相关数据</summary>
  	///   <param name="obj" type="Object">一个用于更新数据的 键/值对</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'dblclick': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "dblclick" 事件绑定一个处理函数，或者触发元素上的 "dblclick" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "dblclick" 事件绑定一个处理函数，或者触发元素上的 "dblclick" 事件</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'delay': function() {
    /// <signature>
  	///   <summary>设置一个延时来推迟执行队列中后续的项</summary>
  	///   <param name="duration" type="Number">一个整数，指示的毫秒数，用于设定下个队列推迟执行的时间</param>
  	///   <param name="queueName" type="String">一个作为队列名的字符串。默认是动画队列 fx。标准的效果队列</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'delegate': function() {
    /// <signature>
  	///   <summary>所有匹配选择器（selector 参数）的元素绑定一个或多个事件处理函数，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素</summary>
  	///   <param name="selector" type="String">选择器字符串，用于过滤器触发事件的元素</param>
  	///   <param name="eventType" type="String">一个包含一个或多个用空格隔开的 JavaScript 事件类型的字符串，比如 "click" 或 "keydown" 或自定义事件的名称</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>所有匹配选择器（selector 参数）的元素绑定一个或多个事件处理函数，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素</summary>
  	///   <param name="selector" type="String">选择器字符串，用于过滤器触发事件的元素</param>
  	///   <param name="eventType" type="String">一个包含一个或多个用空格隔开的 JavaScript 事件类型的字符串，比如 "click" 或 "keydown" 或自定义事件的名称</param>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>所有匹配选择器（selector 参数）的元素绑定一个或多个事件处理函数，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素</summary>
  	///   <param name="selector" type="String">选择器字符串，用于过滤器触发事件的元素</param>
  	///   <param name="events" type="PlainObject">一个对象，包含一个或多个 DOM 事件类型和函数并执行它们</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'dequeue': function() {
    /// <signature>
  	///   <summary>执行匹配元素队列的下一个函数</summary>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的效果队列</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'descendant': function() {
    /// <signature>
  	///   <summary>选择给定的祖先元素的所有后代元素</summary>
  	///   <param name="ancestor" type="String">任何有效的选择器</param>
  	///   <param name="descendant" type="String"> 一个用来筛选后代元素的选择器</param>
    /// </signature>
  },
  'detach': function() {
    /// <signature>
  	///   <summary>从DOM中去掉所有匹配的元素</summary>
  	///   <param name="selector" type="String">一个选择表达式将需要移除的元素从匹配的元素中过滤出来</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'die': function() {
    /// <signature>
  	///   <summary>从元素中删除先前用 .live() 绑定的所有事件</summary>
  	///   <param name="eventType" type="String">一个包含一个 JavaScript 事件类型的字符串，比如 click 或 keydown</param>
  	///   <param name="handler" type="String">将来不再执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从元素中删除先前用 .live() 绑定的所有事件</summary>
  	///   <param name="events" type="PlainObject">包含一个或多个事件类型的一个普通对象，比如 click 或者 keydown 并且其相应的函数将来不再被执行</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'disabled': function() {
  	/// <summary>选择所有被禁用的元素</summary>
  },
  'each': function() {
    /// <signature>
  	///   <summary>遍历一个 jQuery 对象，为每个匹配元素执行一个函数</summary>
  	///   <param name="function(index, Element)" type="Function">为每个匹配元素执行的一个函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'element': function() {
    /// <signature>
  	///   <summary>根据给定（html）标记名称选择所有的元素</summary>
  	///   <param name="element" type="String">一个用来搜索的元素。指 DOM 节点的标签名</param>
    /// </signature>
  },
  'empty': function() {
  	/// <summary>选择所有没有子元素的元素（包括文本节点）</summary>
  },
  'enabled': function() {
  	/// <summary>选择所有可用的（愚人码头注：未被禁用的元素）元素</summary>
  },
  'end': function() {
  	/// <summary>终止在当前链的最新过滤操作，并返回匹配的元素的以前状态</summary>
    /// <returns type="jQuery" />
  },
  'eq': function() {
    /// <signature>
  	///   <summary>在匹配的集合中选择索引值为 index 的元素</summary>
  	///   <param name="index" type="Number">要匹配元素的索引值（从 0 开始计数）</param>
    /// </signature>
    /// <signature>
  	///   <summary>在匹配的集合中选择索引值为 index 的元素</summary>
  	///   <param name="-index" type="Number">要匹配元素的索引值（从 0 开始计数）, 从最后一个元素开始倒计数</param>
    /// </signature>
  },
  'error': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "error" 事件绑定一个处理函数</summary>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "error" 事件绑定一个处理函数</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'even': function() {
  	/// <summary>选择所引值为偶数的元素，从 0 开始计数。 也可以查看 odd</summary>
  },
  'fadeIn': function() {
    /// <signature>
  	///   <summary>通过淡入的方式显示匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过淡入的方式显示匹配元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过淡入的方式显示匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'fadeOut': function() {
    /// <signature>
  	///   <summary>通过淡出的方式隐藏匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过淡出的方式隐藏匹配元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合。支持的选项</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过淡出的方式隐藏匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'fadeTo': function() {
    /// <signature>
  	///   <summary>调整匹配元素的透明度</summary>
  	///   <param name="duration" type="Number">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="opacity" type="Number">0和1之间的数字表示目标元素的不透明度</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>调整匹配元素的透明度</summary>
  	///   <param name="duration" type="Number">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="opacity" type="Number">0 和 1 之间的数字表示目标元素的不透明度</param>
  	///   <param name="easing" type="String">一个字符串，表示动画过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'fadeToggle': function() {
    /// <signature>
  	///   <summary>通过匹配的元素的不透明度动画，来显示或隐藏它们</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过匹配的元素的不透明度动画，来显示或隐藏它们</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'file': function() {
  	/// <summary>选择所有类型为文件（file）的元素</summary>
  },
  'filter': function() {
    /// <signature>
  	///   <summary>筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合</summary>
  	///   <param name="function(index)" type="Function">一个函数用作测试集合中的每个元素。this 是当前 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合</summary>
  	///   <param name="element" type="Element">一个匹配当前元素集合的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合</summary>
  	///   <param name="jQuery object" type="Object">现有 jQuery 对象，用于进一步筛选当前元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'find': function() {
    /// <signature>
  	///   <summary>通过一个选择器，jQuery 对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过一个选择器，jQuery 对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代</summary>
  	///   <param name="jQuery object" type="Object">现有匹配当前元素集合的 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过一个选择器，jQuery 对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代</summary>
  	///   <param name="element" type="Element">一个匹配当前元素集合的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'finish': function() {
    /// <signature>
  	///   <summary>停止当前正在运行的动画，删除所有排队的动画，并完成匹配元素所有的动画</summary>
  	///   <param name="queue" type="String">停止动画队列中的名称</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'first': function() {
  	/// <summary>选择第一个匹配的元素</summary>
  },
  'first-child': function() {
  	/// <summary>选择所有父级元素下的第一个子元素</summary>
  },
  'first-of-type': function() {
  	/// <summary>选择所有相同的元素名称的第一个兄弟元素</summary>
  },
  'focus': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "focus" 事件绑定一个处理函数，或者触发元素上的 "focus" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "focus" 事件绑定一个处理函数，或者触发元素上的 "focus" 事件</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'focusin': function() {
    /// <signature>
  	///   <summary>将一个事件函数绑定到 "focusin" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>将一个事件函数绑定到 "focusin" 事件</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'focusout': function() {
    /// <signature>
  	///   <summary>将一个事件函数绑定到 "focusout" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>将一个事件函数绑定到 "focusout" 事件</summary>
  	///   <param name="eventData" type="Object">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'get': function() {
    /// <signature>
  	///   <summary>通过 jQuery 对象获取一个对应的 DOM 元素</summary>
  	///   <param name="index" type="Number">从 0 开始计数，用来确定获取哪个元素</param>
    ///   <returns type="Element, Array" />
    /// </signature>
  },
  'gt': function() {
    /// <signature>
  	///   <summary>选择匹配集合中所有大于给定 index（索引值）的元素</summary>
  	///   <param name="index" type="Number">从 0 开始计数的索引值</param>
    /// </signature>
  },
  'has': function() {
    /// <signature>
  	///   <summary>筛选匹配元素集合中的那些有相匹配的选择器或 DOM 元素的后代元素</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>筛选匹配元素集合中的那些有相匹配的选择器或 DOM 元素的后代元素</summary>
  	///   <param name="contained" type="Element">用于匹配元素的 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'hasClass': function() {
    /// <signature>
  	///   <summary>确定任何一个匹配元素是否有被分配给定的（样式）类</summary>
  	///   <param name="className" type="String">要查询的样式名</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'header': function() {
  	/// <summary>选择所有标题元素，像 h1, h2, h3 等</summary>
  },
  'height': function() {
    /// <signature>
  	///   <summary>设置每一个匹配元素的高度值</summary>
  	///   <param name="value" type="Number">一个正整数代表的像素数,或是整数和一个可选的附加单位（默认是：“px”）(作为一个字符串)</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置每一个匹配元素的高度值</summary>
  	///   <param name="function(index, height)" type="Function">返回用于设置高度的一个函数。该函数接受两个参数，index 参数表示元素在集合中的位置，height 参数表示原来的高度。在这个函数中，this 指向元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'hidden': function() {
  	/// <summary>选择所有隐藏的元素</summary>
  },
  'hide': function() {
    /// <signature>
  	///   <summary>隐藏匹配的元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>隐藏匹配的元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>隐藏匹配的元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'hover': function() {
    /// <signature>
  	///   <summary>将二个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行</summary>
  	///   <param name="handlerIn(eventObject)" type="Function">当鼠标指针进入元素时触发执行的事件函数</param>
  	///   <param name="handlerOut(eventObject)" type="Function">当鼠标指针离开元素时触发执行的事件函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'html': function() {
    /// <signature>
  	///   <summary>设置每一个匹配元素的 html 内容</summary>
  	///   <param name="htmlString" type="String">用来设置每个匹配元素的一个 HTML 字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置每一个匹配元素的 html 内容</summary>
  	///   <param name="function(index, oldhtml)" type="Function">用来返回设置 HTML 内容的一个函数。接收元素的索引位置和元素原先的 HTML 作为参数。jQuery 的调用这个函数之前会清空元素；使用 oldhtml 参数引用先前的内容。在这个函数中，this 指向元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'id': function() {
    /// <signature>
  	///   <summary>选择一个具有给定 id 属性的单个元素</summary>
  	///   <param name="id" type="String">一个用来查找的 ID，即元素的 id 属性</param>
    /// </signature>
  },
  'image': function() {
  	/// <summary>选择所有图像类型的元素</summary>
  },
  'index': function() {
    /// <signature>
  	///   <summary>从匹配的元素中搜索给定元素的索引值，从 0 开始计数</summary>
  	///   <param name="selector" type="String">一个选择器，代表一个 jQuery 对象，将会从这个对象中查找元素</param>
    ///   <returns type="Number" />
    /// </signature>
    /// <signature>
  	///   <summary>从匹配的元素中搜索给定元素的索引值，从 0 开始计数</summary>
  	///   <param name="element" type="jQuery">将要用于查找的 DOM 元素，或者 jQuery 对象中的第一个元素</param>
    ///   <returns type="Number" />
    /// </signature>
  },
  'init': function () {
  	/// <signature>
  	///   <summary>接受一个包含一个 CSS 选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="selector" type="String">一个包含 CSS 选择器的字符串</param>
  	///   <param name="context" type="jQuery">一个 DOM 元素、文档或 作为上下文（context）的 jQuery 对象</param>
  	///   <returns type="jQuery" />
  	/// </signature>
  	/// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="element" type="Element">一个用于封装成 jQuery 对象的 DOM 元素</param>
  	///   <returns type="jQuery" />
  	/// </signature>
  	/// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="elementArray" type="Array">一个用于封装成 jQuery 对象的 DOM 元素数组</param>
  	///   <returns type="jQuery" />
  	/// </signature>
  	/// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="object" type="PlainObject">一个普通的对象包装在一个 jQuery 对象</param>
  	///   <returns type="jQuery" />
  	/// </signature>
  	/// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="jQuery object" type="PlainObject">一个用于克隆的 jQuery 对象</param>
  	///   <returns type="jQuery" />
  	/// </signature>
  },
  'innerHeight': function() {
  	/// <summary>为匹配的元素集合中获取第一个元素的当前计算高度值，包括 padding，但是不包括 border</summary>
    /// <returns type="Integer" />
  },
  'innerWidth': function() {
  	/// <summary>为匹配的元素集合中获取第一个元素的当前计算宽度值，包括 padding，但是不包括 border</summary>
    /// <returns type="Integer" />
  },
  'input': function() {
  	/// <summary>选择所有 input、textarea、select 和 button 元素</summary>
  },
  'insertAfter': function() {
    /// <signature>
  	///   <summary>在目标元素后面插入集合中每个匹配的元素(愚人码头注：插入的元素作为目标元素的兄弟元素)</summary>
  	///   <param name="target" type="jQuery">一个选择器，元素、HTML 字符串或者 jQuery 对象，匹配的元素将会被插入在由参数指定的目标后面</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'insertBefore': function() {
    /// <signature>
  	///   <summary>在目标元素前面插入集合中每个匹配的元素(愚人码头注：插入的元素作为目标元素的兄弟元素)</summary>
  	///   <param name="target" type="jQuery">一个选择器，元素、HTML 字符串或者 jQuery 对象，匹配的元素将会被插入在由参数指定的目标后面</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'is': function() {
    /// <signature>
  	///   <summary>判断当前匹配的元素集合中的元素，是否为一个选择器、DOM 元素或者 jQuery 对象，如果这些元素至少一个匹配给定的参数，那么返回 true</summary>
  	///   <param name="selector" type="String">一个字符串，包含一个用来匹配元素的选择器表达式</param>
    ///   <returns type="Boolean" />
    /// </signature>
    /// <signature>
  	///   <summary>判断当前匹配的元素集合中的元素，是否为一个选择器、DOM 元素或者 jQuery 对象，如果这些元素至少一个匹配给定的参数，那么返回 true</summary>
  	///   <param name="function(index)" type="Function">一个函数，用来测试集合中的元素。它接受一个参数，index ，这是元素在 jQuery 集合的索引位置。在函数中， this 指的是当前的 DOM 元素</param>
    ///   <returns type="Boolean" />
    /// </signature>
    /// <signature>
  	///   <summary>判断当前匹配的元素集合中的元素，是否为一个选择器、DOM 元素或者 jQuery 对象，如果这些元素至少一个匹配给定的参数，那么返回 true</summary>
  	///   <param name="jQuery object" type="Object">现有的 jQuery 对象，以匹配当前的元素</param>
    ///   <returns type="Boolean" />
    /// </signature>
    /// <signature>
  	///   <summary>判断当前匹配的元素集合中的元素，是否为一个选择器、DOM 元素或者 jQuery 对象，如果这些元素至少一个匹配给定的参数，那么返回 true</summary>
  	///   <param name="element" type="Element">个用于匹配元素的 DOM 元素</param>
    ///   <returns type="Boolean" />
    /// </signature>
  },
  'jquery': function() {
  	/// <summary>一个包含了 jQuery 版本号的字符串</summary>
    /// <returns type="String" />
  },
  'keydown': function() {
    /// <signature>
  	///   <summary>为 "keydown" 事件绑定一个处理函数，或者触发元素上的 "keydown" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 "keydown" 事件绑定一个处理函数，或者触发元素上的 "keydown" 事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'keypress': function() {
    /// <signature>
  	///   <summary>为 "keypress" 事件绑定一个处理函数，或者触发元素上的 "keypress" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 "keypress" 事件绑定一个处理函数，或者触发元素上的 "keypress" 事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'keyup': function() {
    /// <signature>
  	///   <summary>为 "keyup" 事件绑定一个处理函数，或者触发元素上的 "keyup" 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 "keyup" 事件绑定一个处理函数，或者触发元素上的 "keyup" 事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'lang': function() {
    /// <signature>
  	///   <summary>选择指定语言的所有元素</summary>
  	///   <param name="language" type="String">语言代码</param>
    /// </signature>
  },
  'last': function() {
  	/// <summary>选择最后一个匹配的元素</summary>
  },
  'last-child': function() {
  	/// <summary>选择所有父级元素下的最后一个子元素</summary>
  },
  'last-of-type': function() {
  	/// <summary>选择的所有元素之间具有相同元素名称的最后一个兄弟元素</summary>
  },
  'length': function() {
  	/// <summary>在 jQuery 对象中元素的数量</summary>
    /// <returns type="Number" />
  },
  'live': function() {
    /// <signature>
  	///   <summary>附加一个事件处理器到匹配目前选择器的所有元素，现在和未来</summary>
  	///   <param name="events" type="String">一个包含一个 JavaScript 事件类型的字符串，比如 "click" 或 "keydown,"或自定义事件的名称。从 jQuery 1.4 开始，字符串可以包含多个空格分隔的事件类型或自定义事件的名称</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>附加一个事件处理器到匹配目前选择器的所有元素，现在和未来</summary>
  	///   <param name="events" type="String">一个包含一个 JavaScript 事件类型的字符串，比如 "click" 或 "keydown,"或自定义事件的名称。从 jQuery 1.4 开始，字符串可以包含多个空格分隔的事件类型或自定义事件的名称</param>
  	///   <param name="data" type="PlainObject">一个包含数据的对象将被传递到事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>附加一个事件处理器到匹配目前选择器的所有元素，现在和未来</summary>
  	///   <param name="events" type="PlainObject">一个或多个 JavaScript 事件类型的一个普通的对象及其对应的执行函数组成的映射</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'load': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "load" 事件绑定一个处理函数</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "load" 事件绑定一个处理函数</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'lt': function() {
    /// <signature>
  	///   <summary>选择匹配集合中所有索引值小于给定 index 参数的元素</summary>
  	///   <param name="index" type="Number">从 0 开始计数的索引值</param>
    /// </signature>
  },
  'map': function() {
    /// <signature>
  	///   <summary>通过一个函数匹配当前集合中的每个元素,产生一个包含新的 jQuery 对象</summary>
  	///   <param name="callback(index, domElement)" type="Function">一个函数对象，会在处理集合中的每个元素时被调用</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mousedown': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "mousedown" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "mousedown" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mouseenter': function() {
    /// <signature>
  	///   <summary>为 mouse enters（鼠标进入） 事件绑定一个处理函数，或者触发元素上的 mouse enters（鼠标进入） 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 mouse enters（鼠标进入） 事件绑定一个处理函数，或者触发元素上的 mouse enters（鼠标进入） 事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mouseleave': function() {
    /// <signature>
  	///   <summary>为 mouse leaves（鼠标离开） 事件绑定一个处理函数，或者触发元素上的 mouse leaves（鼠标离开） 事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 mouse leaves（鼠标离开） 事件绑定一个处理函数，或者触发元素上的 mouse leaves（鼠标离开） 事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mousemove': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "mousemove" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "mousemove" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mouseout': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "mouseout" 事件绑定一个处理函数，或者触发元素上的该事件。（愚人码头注：支持事件冒泡）</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "mouseout" 事件绑定一个处理函数，或者触发元素上的该事件。（愚人码头注：支持事件冒泡）</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mouseover': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "mouseover" 事件绑定一个处理函数，或者触发元素上的该事件。（愚人码头注：支持事件冒泡）</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "mouseover" 事件绑定一个处理函数，或者触发元素上的该事件。（愚人码头注：支持事件冒泡）</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'mouseup': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "mouseup" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "mouseup" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'multiple': function() {
    /// <signature>
  	///   <summary>将每一个选择器匹配到的元素合并后一起返回</summary>
  	///   <param name="selector1" type="String">任何有效的选择</param>
  	///   <param name="selector2" type="String">其他有效的选择</param>
  	///   <param name="selectorN" type="String">更多有效的选择只要你喜欢</param>
    /// </signature>
  },
  'next': function() {
    /// <signature>
  	///   <summary>取得匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，那么只有紧跟着的兄弟元素满足选择器时，才会返回此元素</summary>
  	///   <param name="selector" type="String">一个字符串，其中包含一个选择器表达式针对匹配元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'next adjacent': function() {
    /// <signature>
  	///   <summary>选择所有紧接在“prev”元素后的“next”元素</summary>
  	///   <param name="prev" type="String">任何有效的选择器</param>
  	///   <param name="next" type="String">用于筛选紧跟在 "prev" 后面的元素的选择器</param>
    /// </signature>
  },
  'next siblings': function() {
    /// <signature>
  	///   <summary>匹配“prev”元素之后的所有兄弟元素。具有相同的父元素，并匹配过滤“siblings”选择器</summary>
  	///   <param name="prev" type="String">任何有效的选择器</param>
  	///   <param name="siblings" type="String">一个选择器来过滤第一选择器以后的兄弟元素</param>
    /// </signature>
  },
  'nextAll': function() {
    /// <signature>
  	///   <summary>获得每个匹配元素集合中所有下面的同辈元素，选择性筛选的选择器</summary>
  	///   <param name="selector" type="String">一个字符串，其中包含一个选择器表达式针对匹配元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'nextUntil': function() {
    /// <signature>
  	///   <summary>通过选择器、DOM节点或 jQuery 对象得到每个元素之后的所有兄弟元素，但不包括匹配的元素</summary>
  	///   <param name="selector" type="String">一个字符串，其中包含一个表示匹配元素的选择器表达式</param>
  	///   <param name="filter" type="String">一个字符串，其中包含一个选择器表达式用来匹配的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>通过选择器、DOM 节点或 jQuery 对象得到每个元素之后的所有兄弟元素，但不包括匹配的元素</summary>
  	///   <param name="element" type="Element">一个 DOM 节点或 jQuery 对象说明哪里开始停止匹配接下来的同级元素</param>
  	///   <param name="filter" type="String">一个字符串，其中包含一个选择器表达式用来匹配的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'not': function() {
    /// <signature>
  	///   <summary>从匹配的元素集合中移除指定的元素</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从匹配的元素集合中移除指定的元素</summary>
  	///   <param name="elements" type="Array">要从匹配元素集合中移除的一个或多个 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从匹配的元素集合中移除指定的元素</summary>
  	///   <param name="function(index)" type="Function">一个函数用作测试集合中的每个元素。this 是当前 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从匹配的元素集合中移除指定的元素</summary>
  	///   <param name="jQuery object" type="PlainObject">现有匹配当前元素集合的 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'nth-child': function() {
    /// <signature>
  	///   <summary>选择的他们所有父元素的第 n 个子元素</summary>
  	///   <param name="index" type="String">每个相匹配子元素的索引值，从 1 开始，也可以是字符串 even 或 odd，或一个方程式( 例如 :nth-child(even), :nth-child(4n) )</param>
    /// </signature>
  },
  'nth-last-child': function() {
    /// <signature>
  	///   <summary>选择所有他们父元素的第 n 个子元素。计数从最后一个元素开始到第一个</summary>
  	///   <param name="index" type="String">每个相匹配子元素的索引值，从最后一个开始 (1)，也可以是字符串 even 或 odd，或一个方程式( 例如 :nth-last-child(even), :nth-last-child(4n) )</param>
    /// </signature>
  },
  'nth-last-of-type': function() {
    /// <signature>
  	///   <summary>选择的所有他们的父级元素的第 n 个子元素，计数从最后一个元素到第一个</summary>
  	///   <param name="index" type="String">每个相匹配子元素的索引值，从最后一个开始 (1)，也可以是字符串 even 或 odd，或一个方程式( 例如 :nth-last-of-type(even), :nth-last-of-type(4n) )</param>
    /// </signature>
  },
  'nth-of-type': function() {
    /// <signature>
  	///   <summary>选择同属于一个父元素之下，并且标签名相同的子元素中的第 n 个</summary>
  	///   <param name="index" type="String">每个相匹配子元素的索引值，从 1 开始，也可以是字符串 even 或 odd，或一个方程式( 例如 :nth-of-type(even), :nth-of-type(4n) )</param>
    /// </signature>
  },
  'odd': function() {
  	/// <summary>选择索引值为奇数元素，从 0 开始计数。同样查看偶数 even</summary>
  },
  'off': function() {
    /// <signature>
  	///   <summary>移除一个事件处理函数</summary>
  	///   <param name="events" type="String">一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如 "click"、"keydown.myPlugin" 或者 ".myPlugin"</param>
  	///   <param name="selector" type="String">一个选择器，当绑定事件处理程序时最初传递给 .on() 的那个</param>
  	///   <param name="handler(eventObject)" type="Function">事件处理程序函数以前附加事件上，或特殊值 false</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>移除一个事件处理函数</summary>
  	///   <param name="events" type="PlainObject">一个对象的字符串键所代表的一个或多个空格分隔的事件类型和可选的命名空间，值表示先前事件绑定的处理函数</param>
  	///   <param name="selector" type="String">一个选择器，当绑定事件处理程序时最初传递给 .on() 的那个</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'offset': function() {
    /// <signature>
  	///   <summary>设置匹配的元素集合中每一个元素的坐标，坐标相对于文档</summary>
  	///   <param name="coordinates" type="PlainObject">一个包含 top 和 left 属性的对象，用整数指明元素的新顶部和左边坐标</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置匹配的元素集合中每一个元素的坐标，坐标相对于文档</summary>
  	///   <param name="function(index, coords)" type="Function">返回用于设置坐标的一个函数。接收元素在匹配的元素集合中的索引位置作为第一个参数，和当前坐标作为第二个参数。这个函数应该返回一个包含 top 和 left 属性的对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'offsetParent': function() {
  	/// <summary>取得离指定元素最近的含有定位信息的祖先元素。含有定位信息的元素指的是，CSS 的 position 属性是 relative、absolute 或 fixed 的元素</summary>
    /// <returns type="jQuery" />
  },
  'on': function() {
    /// <signature>
  	///   <summary>在选定的元素上绑定一个或多个事件处理函数</summary>
  	///   <param name="events" type="String">一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如 "click"、"keydown.myPlugin" 或者 ".myPlugin"</param>
  	///   <param name="selector" type="String">一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是 null 或者忽略了该选择器，那么被选中的元素总是能触发事件</param>
  	///   <param name="data" type="Anything">当一个事件被触发时，要传递给事件处理函数的 event.data</param>
  	///   <param name="handler(eventObject)" type="Function">事件被触发时，执行的函数。若该函数只是要执行 return false 的话，那么该参数位置可以直接简写成 false</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在选定的元素上绑定一个或多个事件处理函数</summary>
  	///   <param name="events" type="PlainObject">一个对象，键是由一个或多个由空格分隔的事件类型及可选的名字空间，值是这些事件类型所对应的事件处理函数</param>
  	///   <param name="selector" type="String">一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是 null 或者忽略了该选择器，那么被选中的元素总是能触发事件</param>
  	///   <param name="data" type="Anything">当一个事件被触发时，要传递给事件处理函数的 event.data</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'one': function() {
    /// <signature>
  	///   <summary>为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次</summary>
  	///   <param name="events" type="String">一个包含一个或多个 JavaScript 事件类型的字符串，比如“click”或“submit”，或自定义的事件名称</param>
  	///   <param name="data" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次</summary>
  	///   <param name="events" type="String">一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如 "click"、"keydown.css88" 或者 ".myPlugin"</param>
  	///   <param name="selector" type="String">一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是 null 或被省略，那么被选中的元素总是能触发事件</param>
  	///   <param name="data" type="Anything">当一个事件被触发时，要传递给事件处理函数的 event.data</param>
  	///   <param name="handler(eventObject)" type="Function">事件被触发时，执行的函数。若该函数只是要执行 return false 的话，那么该参数位置可以直接简写成 false</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次</summary>
  	///   <param name="events" type="PlainObject">一个映射，键是由一个或多个由空格分隔的事件类型及可选的名字空间，值是这些事件类型所对应的事件处理函数</param>
  	///   <param name="selector" type="String">一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是 null 或被省略，那么被选中的元素总是能触发事件</param>
  	///   <param name="data" type="Anything">当一个事件被触发时，要传递给事件处理函数的 event.data</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'only-child': function() {
  	/// <summary>如果某个元素是其父元素的唯一子元素，那么它就会被选中</summary>
  },
  'only-of-type': function() {
  	/// <summary>选择所有没有兄弟元素，且具有相同的元素名称的元素</summary>
  },
  'outerHeight': function() {
    /// <signature>
  	///   <summary>获取元素集合中第一个元素的当前计算高度值，包括 padding、border 和选择性的 margin。返回一个整数（不包含“px”）表示的值  ，或如果在一个空集合上调用该方法，则会返回 null</summary>
  	///   <param name="includeMargin" type="Boolean">一个布尔值，表明是否在计算时包含元素的 margin 值</param>
    ///   <returns type="Integer" />
    /// </signature>
  },
  'outerWidth': function() {
    /// <signature>
  	///   <summary>获取元素集合中第一个元素的当前计算宽度值，包括 padding、border 和选择性的 margin。（愚人码头注：返回一个整数（不包含“px”）表示的值，或如果在一个空集合上调用该方法，则会返回 null。）</summary>
  	///   <param name="includeMargin" type="Boolean">一个布尔值，表明是否在计算时包含元素的 margin 值</param>
    ///   <returns type="Integer" />
    /// </signature>
  },
  'parent': function() {
    /// <signature>
  	///   <summary>取得匹配元素集合中，每个元素的父元素，可以提供一个可选的选择器</summary>
  	///   <param name="selector" type="String">一个字符串，用于匹配元素的选择器表达式字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'parents': function() {
    /// <signature>
  	///   <summary>获得集合中每个匹配元素的祖先元素，可以提供一个可选的选择器作为参数</summary>
  	///   <param name="selector" type="String">一个选择器字符串，用于匹配元素的选择器表达式字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'parentsUntil': function() {
    /// <signature>
  	///   <summary>查找当前元素的所有的前辈元素，直到遇到选择器， DOM 节点或 jQuery 对象匹配的元素为止，但不包括这些元素</summary>
  	///   <param name="selector" type="String">选择器字符串，用于确定匹配到哪个祖先元素时停止匹配</param>
  	///   <param name="filter" type="String">一个字符串，用于匹配元素的选择器表达式字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>查找当前元素的所有的前辈元素，直到遇到选择器， DOM 节点或 jQuery 对象匹配的元素为止，但不包括这些元素</summary>
  	///   <param name="element" type="Element">DOM 节点或 jQuery 对象，用于确定到哪个前辈元素时停止匹配</param>
  	///   <param name="filter" type="String">一个字符串，用于匹配元素的选择器表达式字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'password': function() {
  	/// <summary>选择所有类型为密码的元素</summary>
  },
  'position': function() {
  	/// <summary>获取匹配元素中第一个元素的当前坐标，相对于 offset parent 的坐标。( 译者注：offset parent 指离该元素最近的而且被定位过的祖先元素 )</summary>
    /// <returns type="Object" />
  },
  'prepend': function() {
    /// <signature>
  	///   <summary>将参数内容插入到每个匹配元素的前面（元素内部）</summary>
  	///   <param name="content" type="jQuery">DOM 元素，元素数组，HTML 字符串，或者 jQuery 对象，将被插入到匹配元素前的内容</param>
  	///   <param name="content" type="jQuery">一个或多个 DOM 元素，元素数组，HTML 字符串，或者 jQuery 对象，将被插入到匹配元素前的内容</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>将参数内容插入到每个匹配元素的前面（元素内部）</summary>
  	///   <param name="function(index, html)" type="Function">一个返回 HTML 字符串，DOM 元素，jQuery 对象的函数，该字符串用来插入到匹配元素的开始处。 接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容。在函数中 this 指向元素集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'prependTo': function() {
    /// <signature>
  	///   <summary>将所有元素插入到目标前面（元素内）</summary>
  	///   <param name="target" type="jQuery">一个选择器, DOM 元素，元素数组，HTML 字符串，或者 jQuery 对象，将被插入到匹配元素前的内容</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'prev': function() {
    /// <signature>
  	///   <summary>取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。选择性筛选的选择器</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'prevAll': function() {
    /// <signature>
  	///   <summary>获得集合中每个匹配元素的所有前面的兄弟元素，选择性筛选的选择器</summary>
  	///   <param name="selector" type="String">一个字符串，其中包含一个选择器表达式匹配元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'prevUntil': function() {
    /// <signature>
  	///   <summary>获取每个元素但不包括选择器，DOM 节点，或者 jQuery 对象匹配的元素的所有前面的兄弟元素</summary>
  	///   <param name="selector" type="String">选择器字符串，用于确定到哪个排在前面的同辈元素时停止匹配</param>
  	///   <param name="filter" type="String">一个字符串，其中包含一个选择器表达式用来匹配的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>获取每个元素但不包括选择器，DOM 节点，或者 jQuery 对象匹配的元素的所有前面的兄弟元素</summary>
  	///   <param name="element" type="Element">一个 DOM 节点或 jQuery 对象说明哪里开始停止匹配接下来的同级元素</param>
  	///   <param name="filter" type="String">一个字符串，其中包含一个选择器表达式用来匹配的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'promise': function() {
    /// <signature>
  	///   <summary>返回一个 Promise 对象，用来观察当某种类型的所有行动绑定到集合，排队与否还是已经完成</summary>
  	///   <param name="type" type="String">需要待观察队列类型</param>
  	///   <param name="target" type="PlainObject">将要绑定 promise 方法的对象</param>
    ///   <returns type="Promise" />
    /// </signature>
  },
  'prop': function() {
    /// <signature>
  	///   <summary>为匹配的元素设置一个或多个属性（properties）</summary>
  	///   <param name="propertyName" type="String">要设置的属性（properties）的名称</param>
  	///   <param name="value" type="Boolean">一个值来设置属性值</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为匹配的元素设置一个或多个属性（properties）</summary>
  	///   <param name="properties" type="PlainObject">用来设置的 属性 - 值对 的对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为匹配的元素设置一个或多个属性（properties）</summary>
  	///   <param name="propertyName" type="String">要设置的属性（properties）的名称</param>
  	///   <param name="function(index, oldPropertyValue)" type="Function">一个函数，返回将要被设置的值。index 参数表示集合中元素的索引位置。oldPropertyValue 参数表示原有的属性值。this 指向当前的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'pushStack': function() {
    /// <signature>
  	///   <summary>将一个 DOM 元素集合加入到 jQuery 栈</summary>
  	///   <param name="elements" type="Array">将要压入 jQuery 栈的元素，用于生成一个新的 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>将一个 DOM 元素集合加入到 jQuery 栈</summary>
  	///   <param name="elements" type="Array">将要压入 jQuery 栈的元素，用于生成一个新的 jQuery 对象</param>
    ///   <param name="name" type="String">用于生成元素数组的 jQuery 方法名称</param>
  	///   <param name="arguments" type="Array">传递给 jQuery 方法的参数(用于序列化)</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'queue': function() {
    /// <signature>
  	///   <summary>在匹配元素上操作已经附加函数的列表</summary>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的动画队列</param>
  	///   <param name="newQueue" type="Array">一个替换当前列队内容的函数数组</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配元素上操作已经附加函数的列表</summary>
  	///   <param name="queueName" type="String">一个含有队列名的字符串。默认是 fx，标准的动画队列</param>
  	///   <param name="callback( next )" type="Function">将要添加到队列中的新函数。当该函数被调用时，会从弹出队列中的下一个元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'radio': function() {
  	/// <summary>选择所有类型为单选框的元素</summary>
  },
  'ready': function() {
    /// <signature>
  	///   <summary>当 DOM 准备就绪时，指定一个函数来执行</summary>
  	///   <param name="handler" type="Function">当 DOM 准备就绪时，执行的一个函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'remove': function() {
    /// <signature>
  	///   <summary>将匹配元素集合从 DOM 中删除。（愚人码头注：同时移除元素上的事件及 jQuery 数据。）</summary>
  	///   <param name="selector" type="String">一个选择器表达式用来过滤将被移除的匹配元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'removeAttr': function() {
    /// <signature>
  	///   <summary>为匹配的元素集合中的每个元素中移除一个属性（attribute）</summary>
  	///   <param name="attributeName" type="String">要移除的属性名，从 1.7 版本开始，它可以是一个空格分隔的属性列表</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'removeClass': function() {
    /// <signature>
  	///   <summary>移除集合中每个匹配元素上一个，多个或全部样式</summary>
  	///   <param name="className" type="String">每个匹配元素移除的一个或多个用空格隔开的样式名</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>移除集合中每个匹配元素上一个，多个或全部样式</summary>
  	///   <param name="function(index, class)" type="Function">一个函数，返回一个或多个将要被移除的样式名。index 参数表示在所有匹配元素的集合中当前元素的索引位置。class 参数表示原有的样式名</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'removeData': function() {
    /// <signature>
  	///   <summary>在元素上移除绑定的数据</summary>
  	///   <param name="name" type="String">要移除的存储数据名</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在元素上移除绑定的数据</summary>
  	///   <param name="list" type="String">一个数组或空间分隔的字符串命名要删除的数据块</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'removeProp': function() {
    /// <signature>
  	///   <summary>为集合中匹配的元素删除一个属性（property）</summary>
  	///   <param name="propertyName" type="String">要移除属性的名称</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'replaceAll': function() {
    /// <signature>
  	///   <summary>用集合的匹配元素替换每个目标元素</summary>
  	///   <param name="target" type="String">一个选择器字符串，jQuery 对象，DOM 元素，或者元素数组，包含哪个元素被替换</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'replaceWith': function() {
    /// <signature>
  	///   <summary>用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合</summary>
  	///   <param name="newContent" type="jQuery">用来插入的内容，可能是 HTML 字符串，DOM 元素，或者 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合</summary>
  	///   <param name="function" type="Function">一个函数，返回的内容会替换匹配的元素集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'reset': function() {
  	/// <summary>选择所有类型为重置的元素</summary>
  },
  'resize': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "resize" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "resize" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'root': function() {
    /// <signature>
  	///   <summary>选择该文档的根元素</summary>
    ///   <param name="index" type="String">The index of each child to match, starting with 1, the string even or odd, or an equation ( eg. :nth-last-child(even), :nth-last-child(4n) )</param>
    /// </signature>
  },
  'scroll': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "scroll" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "scroll" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'scrollLeft': function() {
    /// <signature>
  	///   <summary>设置每个匹配元素的水平滚动条位置</summary>
  	///   <param name="value" type="Number">一个用来设置滚动条水平位置的正整数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'scrollTop': function() {
    /// <signature>
  	///   <summary>设置每个匹配元素的垂直滚动条位置</summary>
  	///   <param name="value" type="Number">一个用来设置滚动条垂直位置的正整数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'select': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "select" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "select" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'selected': function() {
  	/// <summary>获取 select 元素中所有被选中的元素</summary>
  },
  'selector': function() {
  	/// <summary>返回传给 jQuery() 的原始选择器</summary>
    /// <returns type="String" />
  },
  'serialize': function() {
  	/// <summary>将用作提交的表单元素的值编译成字符串</summary>
    /// <returns type="String" />
  },
  'serializeArray': function() {
  	/// <summary>将用作提交的表单元素的值编译成拥有 name 和v alue 对象组成的数组。例如[ { name: a value: 1 }, { name: b value: 2 },...]</summary>
    /// <returns type="Array" />
  },
  'show': function() {
    /// <signature>
  	///   <summary>显示匹配的元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>显示匹配的元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>显示匹配的元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'siblings': function() {
    /// <signature>
  	///   <summary>获得匹配元素集合中每个元素的兄弟元素，可以提供一个可选的选择器</summary>
  	///   <param name="selector" type="String">一个用于匹配元素的选择器字符串</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'size': function() {
  	/// <summary>返回的 jQuery 对象匹配的 DOM 元素的数量</summary>
    /// <returns type="Number" />
  },
  'slice': function() {
    /// <signature>
  	///   <summary>根据指定的下标范围，过滤匹配的元素集合，并生成一个新的 jQuery 对象</summary>
  	///   <param name="start" type="Number">一个整数，从 0 开始计数的下标。代表将要被选择的元素的起始下标。如果指定的下标是一个负数，那么代表从末尾开始计数</param>
  	///   <param name="end" type="Number">一个整数，从 0 开始计数的下标。代表将要被选择的元素的结束下标。如果指定的下标是一个负数，那么代表从末尾开始计数。如果忽略此参数，则选择的范围是从 start 开始，一直到最后</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'slideDown': function() {
    /// <signature>
  	///   <summary>用滑动动画显示一个匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用滑动动画显示一个匹配元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用滑动动画显示一个匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'slideToggle': function() {
    /// <signature>
  	///   <summary>用滑动动画显示或隐藏一个匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用滑动动画显示或隐藏一个匹配元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用滑动动画显示或隐藏一个匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'slideUp': function() {
    /// <signature>
  	///   <summary>用滑动动画隐藏一个匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用滑动动画隐藏一个匹配元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>用滑动动画隐藏一个匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'stop': function() {
    /// <signature>
  	///   <summary>停止匹配元素当前正在运行的动画</summary>
  	///   <param name="clearQueue" type="Boolean">一个布尔值，指示是否取消以列队动画。默认 false</param>
  	///   <param name="jumpToEnd" type="Boolean">一个布尔值指示是否当前动画立即完成。默认 false</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>停止匹配元素当前正在运行的动画</summary>
  	///   <param name="queue" type="String">停止动画队列的名称</param>
  	///   <param name="clearQueue" type="Boolean">一个布尔值，指示是否取消以列队动画。默认 false</param>
  	///   <param name="jumpToEnd" type="Boolean">一个布尔值指示是否当前动画立即完成。默认 false</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'submit': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "submit" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "submit" 事件绑定一个处理函数，或者触发元素上的该事件</summary>
  	///   <param name="eventData" type="PlainObject">一个对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'target': function() {
  	/// <summary>选择由文档 URI 的格式化识别码表示的目标元素</summary>
  },
  'text': function() {
    /// <signature>
  	///   <summary>设置匹配元素集合中每个元素的文本内容为指定的文本内容</summary>
  	///   <param name="textString" type="String">用于设置匹配元素内容的文本</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置匹配元素集合中每个元素的文本内容为指定的文本内容</summary>
  	///   <param name="function(index, text)" type="Function">用来返回设置文本内容的一个函数。接收元素的索引位置和文本值作为参数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'toArray': function() {
  	/// <summary>返回一个包含 jQuery 对象集合中的所有 DOM 元素的数组</summary>
    /// <returns type="Array" />
  },
  'toggle': function() {
    /// <signature>
  	///   <summary>显示或隐藏匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>显示或隐藏匹配元素</summary>
  	///   <param name="options" type="PlainObject">一组包含动画选项的值的集合</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>显示或隐藏匹配元素</summary>
  	///   <param name="duration" type="">一个字符串或者数字决定动画将运行多久</param>
  	///   <param name="easing" type="String">一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery 自身提供 "linear" 和 "swing"，其他可以使用相关的插件）</param>
  	///   <param name="complete" type="Function">在动画完成时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>显示或隐藏匹配元素</summary>
  	///   <param name="showOrHide" type="Boolean">一个布尔值，指示元素是显示或隐藏</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'toggleClass': function() {
    /// <signature>
  	///   <summary>在匹配的元素集合中的每个元素上添加或删除一个或多个样式类，取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类</summary>
  	///   <param name="className" type="String">在匹配的元素集合中的每个元素上用来切换的一个或多个（用空格隔开）样式类名</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配的元素集合中的每个元素上添加或删除一个或多个样式类，取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类</summary>
  	///   <param name="className" type="String">在匹配的元素集合中的每个元素上用来切换的一个或多个（用空格隔开）样式类名</param>
  	///   <param name="switch" type="Boolean">一个布尔值，用于判断样式是否应该被添加或移除</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配的元素集合中的每个元素上添加或删除一个或多个样式类，取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类</summary>
  	///   <param name="switch" type="Boolean">一个用来判断样式类添加还是移除的 布尔值</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配的元素集合中的每个元素上添加或删除一个或多个样式类，取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类</summary>
  	///   <param name="function(index, class, switch)" type="Function">用来返回在匹配的元素集合中的每个元素上用来切换的样式类名的一个函数。接收元素的索引位置和元素旧的样式类作为参数</param>
  	///   <param name="switch" type="Boolean">一个用来判断样式类添加还是移除的 布尔值</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'trigger': function() {
    /// <signature>
  	///   <summary>根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为</summary>
  	///   <param name="eventType" type="String">以后包含 JavaScript 事件类型的字符串，比如 click 或 submit</param>
  	///   <param name="extraParameters" type="PlainObject">传递给事件处理程序的额外数组参数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为</summary>
  	///   <param name="event" type="Event">一个 jQuery.Event 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'triggerHandler': function() {
    /// <signature>
  	///   <summary>为一个事件执行附加到元素的所有处理程序</summary>
  	///   <param name="eventType" type="String">以后包含 JavaScript 事件类型的字符串，比如 click 或 submit</param>
  	///   <param name="extraParameters" type="Array">传递给事件处理程序的额外数组参数</param>
    ///   <returns type="Object" />
    /// </signature>
  },
  'unbind': function() {
    /// <signature>
  	///   <summary>从元素上删除一个以前附加事件处理程序</summary>
  	///   <param name="eventType" type="String">以后包含 JavaScript 事件类型的字符串，比如 click 或 submit</param>
  	///   <param name="handler(eventObject)" type="Function">这个函数今后不在执行</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从元素上删除一个以前附加事件处理程序</summary>
  	///   <param name="eventType" type="String">以后包含 JavaScript 事件类型的字符串，比如 click 或 submit</param>
  	///   <param name="false" type="Boolean">解除绑定相应的 'return false' 函数，这个函数使用 .bind( eventType, false )绑定</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>从元素上删除一个以前附加事件处理程序</summary>
  	///   <param name="event" type="Object">一个JavaScript事件对象传递给一个事件处理器</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'undelegate': function() {
    /// <signature>
  	///   <summary>删除当前选择器匹配的所有元素的事件处理程序，根据一组特定根元素的集合</summary>
  	///   <param name="selector" type="String">选择器字符串，用于过滤器触发事件的元素</param>
  	///   <param name="eventType" type="String">一个包含一个或多个用空格隔开的 JavaScript 事件类型的字符串，比如 "click" 或 "keydown"</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>删除当前选择器匹配的所有元素的事件处理程序，根据一组特定根元素的集合</summary>
  	///   <param name="selector" type="String">选择器字符串，用于过滤器触发事件的元素</param>
  	///   <param name="eventType" type="String">一个包含一个或多个用空格隔开的 JavaScript 事件类型的字符串，比如 "click" 或 "keydown"</param>
  	///   <param name="handler(eventObject)" type="Function">每当事件触发时执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>删除当前选择器匹配的所有元素的事件处理程序，根据一组特定根元素的集合</summary>
  	///   <param name="selector" type="String">选择器字符串，用于过滤器触发事件的元素</param>
  	///   <param name="events" type="PlainObject">一个或多个事件类型和以前绑定的函数组成的一个对象，用来以解除他们（处理程序）</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>删除当前选择器匹配的所有元素的事件处理程序，根据一组特定根元素的集合</summary>
  	///   <param name="namespace" type="String">一个字符串，其中包含一个命名空间，以解除所有事件</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'unload': function() {
    /// <signature>
  	///   <summary>为 JavaScript 的 "unload" 事件绑定一个处理函数</summary>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>为 JavaScript 的 "unload" 事件绑定一个处理函数</summary>
  	///   <param name="eventData" type="Object">一个普通对象，它包含的数据键值对映射将被传递给事件处理程序</param>
  	///   <param name="handler(eventObject)" type="Function">每次事件触发时会执行的函数</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'unwrap': function() {
  	/// <summary>将匹配元素集合的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置</summary>
    /// <returns type="jQuery" />
  },
  'val': function() {
    /// <signature>
  	///   <summary>设置匹配的元素集合中每个元素的值</summary>
  	///   <param name="value" type="Array">一个文本字符串或一个以字符串形式的数组来设定每个匹配元素的值</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>设置匹配的元素集合中每个元素的值</summary>
  	///   <param name="function(index, value)" type="Function">一个用来返回设置值的函数。this 指向当前元素。接收的集合中的元素，旧的值作为参数的索引位置</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'visible': function() {
  	/// <summary>选择所有可见的元素</summary>
  },
  'width': function() {
    /// <signature>
  	///   <summary>给每个匹配的元素设置 CSS 宽度</summary>
  	///   <param name="value" type="Number">一个正整数代表的像素数，或是整数和一个可选的附加单位（默认是：“px”）(作为一个字符串)</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>给每个匹配的元素设置 CSS 宽度</summary>
  	///   <param name="function(index, width)" type="Function">返回用于设置宽度的一个函数。接收元素的索引位置和元素旧的高度值作为参数。在函数中 this 指向集合中当前的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'wrap': function() {
    /// <signature>
  	///   <summary>在每个匹配的元素外层包上一个 html 元素</summary>
  	///   <param name="wrappingElement" type="jQuery">一个 HTML 片段，选择表达式，jQuery 对象，或者 DOM 元素，用来包在匹配元素的外层</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在每个匹配的元素外层包上一个 html 元素</summary>
  	///   <param name="function(index)" type="Function">回调函数，返回用于包裹匹配元素的 HTML 内容或 jQuery 对象。index 参数表示匹配元素在集合中的集合。该函数内的 this 指向集合中的当前元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'wrapAll': function() {
    /// <signature>
  	///   <summary>在所有匹配元素外面包一层 HTML 结构</summary>
  	///   <param name="wrappingElement" type="jQuery">用来包在外面的 HTML 片段，选择表达式，jQuery 对象或者 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
  'wrapInner': function() {
    /// <signature>
  	///   <summary>在匹配元素里的内容外包一层结构</summary>
  	///   <param name="wrappingElement" type="String">用来包在匹配元素的内容外面的 HTML 片段，选择表达式，jQuery 对象或者 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>在匹配元素里的内容外包一层结构</summary>
  	///   <param name="function(index)" type="Function">一个返回HTML结构的函数，用来包在匹配元素内容的外面。接收集合中元素的索引位置作为参数。在函数中 ，this 指向集合中当前的元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
});

intellisense.annotate(window, {
  '$': function() {
    /// <signature>
  	///   <summary>接受一个包含一个 CSS 选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="selector" type="String">一个包含 CSS 选择器的字符串</param>
  	///   <param name="context" type="jQuery">一个 DOM 元素、文档或 作为上下文（context）的 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="element" type="Element">一个用于封装成 jQuery 对象的 DOM 元素</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="elementArray" type="Array">一个用于封装成 jQuery 对象的 DOM 元素数组</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="object" type="PlainObject">一个普通的对象包装在一个 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
    /// <signature>
  	///   <summary>接受一个包含一个CSS选择器的字符串，用于匹配的一组元素</summary>
  	///   <param name="jQuery object" type="PlainObject">一个用于克隆的 jQuery 对象</param>
    ///   <returns type="jQuery" />
    /// </signature>
  },
});
