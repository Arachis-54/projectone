/*!

 @Title: Layui
 @Descriptionï¼šç»å…¸æ¨¡å—åŒ–å‰ç«¯æ¡†æž¶
 @Site: www.layui.com
 @Author: è´¤å¿ƒ
 @Licenseï¼šMIT

 */

;!function(win){
    "use strict";

    var doc = document, config = {
            modules: {} //è®°å½•æ¨¡å—ç‰©ç†è·¯å¾„
            ,status: {} //è®°å½•æ¨¡å—åŠ è½½çŠ¶æ€
            ,timeout: 10 //ç¬¦åˆè§„èŒƒçš„æ¨¡å—è¯·æ±‚æœ€é•¿ç­‰å¾…ç§’æ•°
            ,event: {} //è®°å½•æ¨¡å—è‡ªå®šä¹‰äº‹ä»¶
        }

        ,Layui = function(){
            this.v = '2.5.4'; //ç‰ˆæœ¬å·
        }

        //èŽ·å–layuiæ‰€åœ¨ç›®å½•
        ,getPath = function(){
            var jsPath = doc.currentScript ? doc.currentScript.src : function(){
                var js = doc.scripts
                    ,last = js.length - 1
                    ,src;
                for(var i = last; i > 0; i--){
                    if(js[i].readyState === 'interactive'){
                        src = js[i].src;
                        break;
                    }
                }
                return src || js[last].src;
            }();
            return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
        }()

        //å¼‚å¸¸æç¤º
        ,error = function(msg){
            win.console && console.error && console.error('Layui hint: ' + msg);
        }

        ,isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]'

        //å†…ç½®æ¨¡å—
        ,modules = {
            layer: 'modules/layer' //å¼¹å±‚
            ,laydate: 'modules/laydate' //æ—¥æœŸ
            ,laypage: 'modules/laypage' //åˆ†é¡µ
            ,laytpl: 'modules/laytpl' //æ¨¡æ¿å¼•æ“Ž
            ,layim: 'modules/layim' //webé€šè®¯
            ,layedit: 'modules/layedit' //å¯Œæ–‡æœ¬ç¼–è¾‘å™¨
            ,form: 'modules/form' //è¡¨å•é›†
            ,upload: 'modules/upload' //ä¸Šä¼
            ,transfer: 'modules/transfer' //ä¸Šä¼
            ,tree: 'modules/tree' //æ ‘ç»“æž„
            ,table: 'modules/table' //è¡¨æ ¼
            ,element: 'modules/element' //å¸¸ç”¨å…ƒç´ æ“ä½œ
            ,rate: 'modules/rate'  //è¯„åˆ†ç»„ä»¶
            ,colorpicker: 'modules/colorpicker' //é¢œè‰²é€‰æ‹©å™¨
            ,slider: 'modules/slider' //æ»‘å—
            ,carousel: 'modules/carousel' //è½®æ’­
            ,flow: 'modules/flow' //æµåŠ è½½
            ,util: 'modules/util' //å·¥å…·å—
            ,code: 'modules/code' //ä»£ç ä¿®é¥°å™¨
            ,jquery: 'modules/jquery' //DOMåº“ï¼ˆç¬¬ä¸‰æ–¹ï¼‰

            ,mobile: 'modules/mobile' //ç§»åŠ¨å¤§æ¨¡å— | è‹¥å½“å‰ä¸ºå¼€å‘ç›®å½•ï¼Œåˆ™ä¸ºç§»åŠ¨æ¨¡å—å…¥å£ï¼Œå¦åˆ™ä¸ºç§»åŠ¨æ¨¡å—é›†åˆ
            ,'layui.all': '../layui.all' //PCæ¨¡å—åˆå¹¶ç‰ˆ
        };

    //è®°å½•åŸºç¡€æ•°æ®
    Layui.prototype.cache = config;

    //å®šä¹‰æ¨¡å—
    Layui.prototype.define = function(deps, factory){
        var that = this
            ,type = typeof deps === 'function'
            ,callback = function(){
            var setApp = function(app, exports){
                layui[app] = exports;
                config.status[app] = true;
            };
            typeof factory === 'function' && factory(function(app, exports){
                setApp(app, exports);
                config.callback[app] = function(){
                    factory(setApp);
                }
            });
            return this;
        };

        type && (
            factory = deps,
                deps = []
        );

        if((!layui['layui.all'] && layui['layui.mobile'])){
            return callback.call(that);
        }

        that.use(deps, callback);
        return that;
    };

    //ä½¿ç”¨ç‰¹å®šæ¨¡å—
    Layui.prototype.use = function(apps, callback, exports){
        var that = this
            ,dir = config.dir = config.dir ? config.dir : getPath
            ,head = doc.getElementsByTagName('head')[0];

        apps = typeof apps === 'string' ? [apps] : apps;

        //å¦‚æžœé¡µé¢å·²ç»å­˜åœ¨jQuery1.7+åº“ä¸”æ‰€å®šä¹‰çš„æ¨¡å—ä¾èµ–jQueryï¼Œåˆ™ä¸åŠ è½½å†…éƒ¨jqueryæ¨¡å—
        if(window.jQuery && jQuery.fn.on){
            that.each(apps, function(index, item){
                if(item === 'jquery'){
                    apps.splice(index, 1);
                }
            });
            layui.jquery = layui.$ = jQuery;
        }

        var item = apps[0]
            ,timeout = 0;
        exports = exports || [];

        //é™æ€èµ„æºhost
        config.host = config.host || (dir.match(/\/\/([\s\S]+?)\//)||['//'+ location.host +'/'])[0];

        //åŠ è½½å®Œæ¯•
        function onScriptLoad(e, url){
            var readyRegExp = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/
            if (e.type === 'load' || (readyRegExp.test((e.currentTarget || e.srcElement).readyState))) {
                config.modules[item] = url;
                head.removeChild(node);
                (function poll() {
                    if(++timeout > config.timeout * 1000 / 4){
                        return error(item + ' is not a valid module');
                    };
                    config.status[item] ? onCallback() : setTimeout(poll, 4);
                }());
            }
        }

        //å›žè°ƒ
        function onCallback(){
            exports.push(layui[item]);
            apps.length > 1 ?
                that.use(apps.slice(1), callback, exports)
                : ( typeof callback === 'function' && callback.apply(layui, exports) );
        }

        //å¦‚æžœå¼•å…¥äº†å®Œæ•´åº“ï¼ˆlayui.all.jsï¼‰ï¼Œå†…ç½®çš„æ¨¡å—åˆ™ä¸å¿…å†åŠ è½½
        if(apps.length === 0
            || (layui['layui.all'] && modules[item])
            || (!layui['layui.all'] && layui['layui.mobile'] && modules[item])
        ){
            return onCallback(), that;
        }

        //é¦–æ¬¡åŠ è½½æ¨¡å—
        if(!config.modules[item]){
            var node = doc.createElement('script')

                //å¦‚æžœæ˜¯å†…ç½®æ¨¡å—ï¼Œåˆ™æŒ‰ç…§ dir å‚æ•°æ‹¼æŽ¥æ¨¡å—è·¯å¾„
                //å¦‚æžœæ˜¯æ‰©å±•æ¨¡å—ï¼Œåˆ™åˆ¤æ–­æ¨¡å—è·¯å¾„å€¼æ˜¯å¦ä¸º {/} å¼€å¤´ï¼Œ
                //å¦‚æžœè·¯å¾„å€¼æ˜¯ {/} å¼€å¤´ï¼Œåˆ™æ¨¡å—è·¯å¾„å³ä¸ºåŽé¢ç´§è·Ÿçš„å­—ç¬¦ã€‚
                //å¦åˆ™ï¼Œåˆ™æŒ‰ç…§ base å‚æ•°æ‹¼æŽ¥æ¨¡å—è·¯å¾„
                ,url = ( modules[item] ? (dir + 'lay/')
                    : (/^\{\/\}/.test(that.modules[item]) ? '' : (config.base || ''))
                ) + (that.modules[item] || item) + '.js';

            url = url.replace(/^\{\/\}/, '');

            node.async = true;
            node.charset = 'utf-8';
            node.src = url + function(){
                var version = config.version === true
                    ? (config.v || (new Date()).getTime())
                    : (config.version||'');
                return version ? ('?v=' + version) : '';
            }();

            head.appendChild(node);

            if(node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) && !isOpera){
                node.attachEvent('onreadystatechange', function(e){
                    onScriptLoad(e, url);
                });
            } else {
                node.addEventListener('load', function(e){
                    onScriptLoad(e, url);
                }, false);
            }

            config.modules[item] = url;
        } else { //ç¼“å­˜
            (function poll() {
                if(++timeout > config.timeout * 1000 / 4){
                    return error(item + ' is not a valid module');
                };
                (typeof config.modules[item] === 'string' && config.status[item])
                    ? onCallback()
                    : setTimeout(poll, 4);
            }());
        }

        return that;
    };

    //èŽ·å–èŠ‚ç‚¹çš„styleå±žæ€§å€¼
    Layui.prototype.getStyle = function(node, name){
        var style = node.currentStyle ? node.currentStyle : win.getComputedStyle(node, null);
        return style[style.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](name);
    };

    //csså¤–éƒ¨åŠ è½½å™¨
    Layui.prototype.link = function(href, fn, cssname){
        var that = this
            ,link = doc.createElement('link')
            ,head = doc.getElementsByTagName('head')[0];

        if(typeof fn === 'string') cssname = fn;

        var app = (cssname || href).replace(/\.|\//g, '')
            ,id = link.id = 'layuicss-'+app
            ,timeout = 0;

        link.rel = 'stylesheet';
        link.href = href + (config.debug ? '?v='+new Date().getTime() : '');
        link.media = 'all';

        if(!doc.getElementById(id)){
            head.appendChild(link);
        }

        if(typeof fn !== 'function') return that;

        //è½®è¯¢cssæ˜¯å¦åŠ è½½å®Œæ¯•
        (function poll() {
            if(++timeout > config.timeout * 1000 / 100){
                return error(href + ' timeout');
            };
            parseInt(that.getStyle(doc.getElementById(id), 'width')) === 1989 ? function(){
                fn();
            }() : setTimeout(poll, 100);
        }());

        return that;
    };

    //å­˜å‚¨æ¨¡å—çš„å›žè°ƒ
    config.callback = {};

    //é‡æ–°æ‰§è¡Œæ¨¡å—çš„å·¥åŽ‚å‡½æ•°
    Layui.prototype.factory = function(modName){
        if(layui[modName]){
            return typeof config.callback[modName] === 'function'
                ? config.callback[modName]
                : null;
        }
    };

    //csså†…éƒ¨åŠ è½½å™¨
    Layui.prototype.addcss = function(firename, fn, cssname){
        return layui.link(config.dir + 'css/' + firename, fn, cssname);
    };

    //å›¾ç‰‡é¢„åŠ è½½
    Layui.prototype.img = function(url, callback, error) {
        var img = new Image();
        img.src = url;
        if(img.complete){
            return callback(img);
        }
        img.onload = function(){
            img.onload = null;
            typeof callback === 'function' && callback(img);
        };
        img.onerror = function(e){
            img.onerror = null;
            typeof error === 'function' && error(e);
        };
    };

    //å…¨å±€é…ç½®
    Layui.prototype.config = function(options){
        options = options || {};
        for(var key in options){
            config[key] = options[key];
        }
        return this;
    };

    //è®°å½•å…¨éƒ¨æ¨¡å—
    Layui.prototype.modules = function(){
        var clone = {};
        for(var o in modules){
            clone[o] = modules[o];
        }
        return clone;
    }();

    //æ‹“å±•æ¨¡å—
    Layui.prototype.extend = function(options){
        var that = this;

        //éªŒè¯æ¨¡å—æ˜¯å¦è¢«å ç”¨
        options = options || {};
        for(var o in options){
            if(that[o] || that.modules[o]){
                error('\u6A21\u5757\u540D '+ o +' \u5DF2\u88AB\u5360\u7528');
            } else {
                that.modules[o] = options[o];
            }
        }

        return that;
    };

    //è·¯ç”±è§£æž
    Layui.prototype.router = function(hash){
        var that = this
            ,hash = hash || location.hash
            ,data = {
            path: []
            ,search: {}
            ,hash: (hash.match(/[^#](#.*$)/) || [])[1] || ''
        };

        if(!/^#\//.test(hash)) return data; //ç¦æ­¢éžè·¯ç”±è§„èŒƒ
        hash = hash.replace(/^#\//, '');
        data.href = '/' + hash;
        hash = hash.replace(/([^#])(#.*$)/, '$1').split('/') || [];

        //æå–Hashç»“æž„
        that.each(hash, function(index, item){
            /^\w+=/.test(item) ? function(){
                item = item.split('=');
                data.search[item[0]] = item[1];
            }() : data.path.push(item);
        });

        return data;
    };

    //æœ¬åœ°æŒä¹…æ€§å­˜å‚¨
    Layui.prototype.data = function(table, settings, storage){
        table = table || 'layui';
        storage = storage || localStorage;

        if(!win.JSON || !win.JSON.parse) return;

        //å¦‚æžœsettingsä¸ºnullï¼Œåˆ™åˆ é™¤è¡¨
        if(settings === null){
            return delete storage[table];
        }

        settings = typeof settings === 'object'
            ? settings
            : {key: settings};

        try{
            var data = JSON.parse(storage[table]);
        } catch(e){
            var data = {};
        }

        if('value' in settings) data[settings.key] = settings.value;
        if(settings.remove) delete data[settings.key];
        storage[table] = JSON.stringify(data);

        return settings.key ? data[settings.key] : data;
    };

    //æœ¬åœ°ä¼šè¯æ€§å­˜å‚¨
    Layui.prototype.sessionData = function(table, settings){
        return this.data(table, settings, sessionStorage);
    }

    //è®¾å¤‡ä¿¡æ¯
    Layui.prototype.device = function(key){
        var agent = navigator.userAgent.toLowerCase()

            //èŽ·å–ç‰ˆæœ¬å·
            ,getVersion = function(label){
                var exp = new RegExp(label + '/([^\\s\\_\\-]+)');
                label = (agent.match(exp)||[])[1];
                return label || false;
            }

            //è¿”å›žç»“æžœé›†
            ,result = {
                os: function(){ //åº•å±‚æ“ä½œç³»ç»Ÿ
                    if(/windows/.test(agent)){
                        return 'windows';
                    } else if(/linux/.test(agent)){
                        return 'linux';
                    } else if(/iphone|ipod|ipad|ios/.test(agent)){
                        return 'ios';
                    } else if(/mac/.test(agent)){
                        return 'mac';
                    }
                }()
                ,ie: function(){ //ieç‰ˆæœ¬
                    return (!!win.ActiveXObject || "ActiveXObject" in win) ? (
                        (agent.match(/msie\s(\d+)/) || [])[1] || '11' //ç”±äºŽie11å¹¶æ²¡æœ‰msieçš„æ ‡è¯†
                    ) : false;
                }()
                ,weixin: getVersion('micromessenger')  //æ˜¯å¦å¾®ä¿¡
            };

        //ä»»æ„çš„key
        if(key && !result[key]){
            result[key] = getVersion(key);
        }

        //ç§»åŠ¨è®¾å¤‡
        result.android = /android/.test(agent);
        result.ios = result.os === 'ios';

        return result;
    };

    //æç¤º
    Layui.prototype.hint = function(){
        return {
            error: error
        }
    };

    //éåŽ†
    Layui.prototype.each = function(obj, fn){
        var key
            ,that = this;
        if(typeof fn !== 'function') return that;
        obj = obj || [];
        if(obj.constructor === Object){
            for(key in obj){
                if(fn.call(obj[key], key, obj[key])) break;
            }
        } else {
            for(key = 0; key < obj.length; key++){
                if(fn.call(obj[key], key, obj[key])) break;
            }
        }
        return that;
    };

    //å°†æ•°ç»„ä¸­çš„å¯¹è±¡æŒ‰å…¶æŸä¸ªæˆå‘˜æŽ’åº
    Layui.prototype.sort = function(obj, key, desc){
        var clone = JSON.parse(
            JSON.stringify(obj || [])
        );

        if(!key) return clone;

        //å¦‚æžœæ˜¯æ•°å­—ï¼ŒæŒ‰å¤§å°æŽ’åºï¼Œå¦‚æžœæ˜¯éžæ•°å­—ï¼ŒæŒ‰å­—å…¸åºæŽ’åº
        clone.sort(function(o1, o2){
            var isNum = /^-?\d+$/
                ,v1 = o1[key]
                ,v2 = o2[key];

            if(isNum.test(v1)) v1 = parseFloat(v1);
            if(isNum.test(v2)) v2 = parseFloat(v2);

            if(v1 && !v2){
                return 1;
            } else if(!v1 && v2){
                return -1;
            }

            if(v1 > v2){
                return 1;
            } else if (v1 < v2) {
                return -1;
            } else {
                return 0;
            }
        });

        desc && clone.reverse(); //å€’åº
        return clone;
    };

    //é˜»æ­¢äº‹ä»¶å†’æ³¡
    Layui.prototype.stope = function(thisEvent){
        thisEvent = thisEvent || win.event;
        try { thisEvent.stopPropagation() } catch(e){
            thisEvent.cancelBubble = true;
        }
    };

    //è‡ªå®šä¹‰æ¨¡å—äº‹ä»¶
    Layui.prototype.onevent = function(modName, events, callback){
        if(typeof modName !== 'string'
            || typeof callback !== 'function') return this;

        return Layui.event(modName, events, null, callback);
    };

    //æ‰§è¡Œè‡ªå®šä¹‰æ¨¡å—äº‹ä»¶
    Layui.prototype.event = Layui.event = function(modName, events, params, fn){
        var that = this
            ,result = null
            ,filter = events.match(/\((.*)\)$/)||[] //æå–äº‹ä»¶è¿‡æ»¤å™¨å­—ç¬¦ç»“æž„ï¼Œå¦‚ï¼šselect(xxx)
            ,eventName = (modName + '.'+ events).replace(filter[0], '') //èŽ·å–äº‹ä»¶åç§°ï¼Œå¦‚ï¼šform.select
            ,filterName = filter[1] || '' //èŽ·å–è¿‡æ»¤å™¨åç§°,ï¼Œå¦‚ï¼šxxx
            ,callback = function(_, item){
            var res = item && item.call(that, params);
            res === false && result === null && (result = false);
        };

        //æ·»åŠ äº‹ä»¶
        if(fn){
            config.event[eventName] = config.event[eventName] || {};

            //è¿™é‡Œä¸å†å¯¹å¤šæ¬¡äº‹ä»¶ç›‘å¬åšæ”¯æŒï¼Œé¿å…æ›´å¤šéº»çƒ¦
            //config.event[eventName][filterName] ? config.event[eventName][filterName].push(fn) :
            config.event[eventName][filterName] = [fn];
            return this;
        }

        //æ‰§è¡Œäº‹ä»¶å›žè°ƒ
        layui.each(config.event[eventName], function(key, item){
            //æ‰§è¡Œå½“å‰æ¨¡å—çš„å…¨éƒ¨äº‹ä»¶
            if(filterName === '{*}'){
                layui.each(item, callback);
                return;
            }

            //æ‰§è¡ŒæŒ‡å®šäº‹ä»¶
            key === '' && layui.each(item, callback);
            (filterName && key === filterName) && layui.each(item, callback);
        });

        return result;
    };

    win.layui = new Layui();

}(window);
