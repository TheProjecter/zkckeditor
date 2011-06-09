(function(){var m=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi;var f=CKEDITOR.dom.walker.whitespaces(true);function g(q){return q.isBlockBoundary()&&CKEDITOR.dtd.$empty[q.getName()]}function n(q){return function(r){if(this.mode=="wysiwyg"){this.focus();this.fire("saveSnapshot");q.call(this,r.data);CKEDITOR.tools.setTimeout(function(){this.fire("saveSnapshot")},0,this)}}}function o(u){if(this.dataProcessor){u=this.dataProcessor.toHtml(u)}var r=this.getSelection(),q=r.getRanges()[0];if(q.checkReadOnly()){return}if(CKEDITOR.env.ie){var t=r.isLocked;if(t){r.unlock()}var w=r.getNative();if(w.type=="Control"){w.clear()}else{if(r.getType()==CKEDITOR.SELECTION_TEXT){q=r.getRanges()[0];var s=q&&q.endContainer;if(s&&s.type==CKEDITOR.NODE_ELEMENT&&s.getAttribute("contenteditable")=="false"&&q.checkBoundaryOfElement(s,CKEDITOR.END)){q.setEndAfter(q.endContainer);q.deleteContents()}}}try{w.createRange().pasteHTML(u)}catch(v){}if(t){this.getSelection().lock()}}else{this.document.$.execCommand("inserthtml",false,u)}if(CKEDITOR.env.webkit){r=this.getSelection();r.scrollIntoView()}}function i(x){var v=this.getSelection(),t=v.getStartElement().hasAscendant("pre",true)?CKEDITOR.ENTER_BR:this.config.enterMode,u=t==CKEDITOR.ENTER_BR;var s=CKEDITOR.tools.htmlEncode(x.replace(/\r\n|\r/g,"\n"));s=s.replace(/^[ \t]+|[ \t]+$/g,function(A,C,B){if(A.length==1){return"&nbsp;"}else{if(!C){return CKEDITOR.tools.repeat("&nbsp;",A.length-1)+" "}else{return" "+CKEDITOR.tools.repeat("&nbsp;",A.length-1)}}});s=s.replace(/[ \t]{2,}/g,function(A){return CKEDITOR.tools.repeat("&nbsp;",A.length-1)+" "});var w=t==CKEDITOR.ENTER_P?"p":"div";if(!u){s=s.replace(/(\n{2})([\s\S]*?)(?:$|\1)/g,function(B,A,C){return"<"+w+">"+C+"</"+w+">"})}s=s.replace(/\n/g,"<br>");if(!(u||CKEDITOR.env.ie)){s=s.replace(new RegExp("<br>(?=</"+w+">)"),function(A){return CKEDITOR.tools.repeat(A,2)})}if(CKEDITOR.env.gecko||CKEDITOR.env.webkit){var z=new CKEDITOR.dom.elementPath(v.getStartElement()),q=[];for(var r=0;r<z.elements.length;r++){var y=z.elements[r].getName();if(y in CKEDITOR.dtd.$inline){q.unshift(z.elements[r].getOuterHtml().match(/^<.*?>/))}else{if(y in CKEDITOR.dtd.$block){break}}}s=q.join("")+s}o.call(this,s)}function h(v){var C=this.getSelection(),r=C.getRanges(),E=v.getName(),t=CKEDITOR.dtd.$block[E];var D=C.isLocked;if(D){C.unlock()}var x,B,A,z;for(var u=r.length-1;u>=0;u--){x=r[u];if(!x.checkReadOnly()){x.deleteContents(1);B=!u&&v||v.clone(1);var y,q;if(t){while((y=x.getCommonAncestor(0,1))&&(q=CKEDITOR.dtd[y.getName()])&&!(q&&q[E])){if(y.getName() in CKEDITOR.dtd.span){x.splitElement(y)}else{if(x.checkStartOfBlock()&&x.checkEndOfBlock()){x.setStartBefore(y);x.collapse(true);y.remove()}else{x.splitBlock()}}}}x.insertNode(B);if(!A){A=B}}}if(A){x.moveToPosition(A,CKEDITOR.POSITION_AFTER_END);if(t){var w=A.getNext(f),s=w&&w.type==CKEDITOR.NODE_ELEMENT&&w.getName();if(s&&CKEDITOR.dtd.$block[s]&&CKEDITOR.dtd[s]["#"]){x.moveToElementEditStart(w)}}}C.selectRanges([x]);if(D){this.getSelection().lock()}}function k(q){if(!q.checkDirty()){setTimeout(function(){q.resetDirty()},0)}}var l=CKEDITOR.dom.walker.whitespaces(true),d=CKEDITOR.dom.walker.bookmark(false,true);function b(q){return l(q)&&d(q)}function e(q){return q.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(q.getText()).match(/^(?:&nbsp;|\xa0)$/)}function c(q){if(q.isLocked){q.unlock();setTimeout(function(){q.lock()},0)}}function j(q){return q.getOuterHtml().match(m)}l=CKEDITOR.dom.walker.whitespaces(true);function a(z){var y=z.window,B=z.document,w=z.document.getBody(),u=w.getFirst(),v=w.getChildren().count();if(!v||v==1&&u.type==CKEDITOR.NODE_ELEMENT&&u.hasAttribute("_moz_editor_bogus_node")){k(z);var A=z.element.getDocument();var t=A.getDocumentElement();var r=t.$.scrollTop;var s=t.$.scrollLeft;var q=B.$.createEvent("KeyEvents");q.initKeyEvent("keypress",true,true,y.$,false,false,false,false,0,32);B.$.dispatchEvent(q);if(r!=t.$.scrollTop||s!=t.$.scrollLeft){A.getWindow().$.scrollTo(s,r)}v&&w.getFirst().remove();B.getBody().appendBogus();var x=new CKEDITOR.dom.range(B);x.setStartAt(w,CKEDITOR.POSITION_AFTER_START);x.select()}}function p(D){var y=D.editor,F=D.data.path,A=F.blockLimit,C=D.data.selection,v=C.getRanges()[0],x=y.document.getBody(),B=y.config.enterMode;if(CKEDITOR.env.gecko){a(y);var E=F.block||F.blockLimit,q=E&&E.getLast(b);if(E&&E.isBlockBoundary()&&!(q&&q.type==CKEDITOR.NODE_ELEMENT&&q.isBlockBoundary())&&!E.is("pre")&&!E.getBogus()){y.fire("updateSnapshot");k(y);E.appendBogus()}}if(y.config.autoParagraph!==false&&B!=CKEDITOR.ENTER_BR&&v.collapsed&&A.getName()=="body"&&!F.block){y.fire("updateSnapshot");k(y);CKEDITOR.env.ie&&c(C);var s=v.fixBlock(true,y.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p");if(CKEDITOR.env.ie){var u=s.getFirst(b);u&&e(u)&&u.remove()}if(j(s)){var t=s.getNext(l);if(t&&t.type==CKEDITOR.NODE_ELEMENT&&!g(t)){v.moveToElementEditStart(t);s.remove()}else{t=s.getPrevious(l);if(t&&t.type==CKEDITOR.NODE_ELEMENT&&!g(t)){v.moveToElementEditEnd(t);s.remove()}}}v.select();D.cancel()}var r=new CKEDITOR.dom.range(y.document);r.moveToElementEditEnd(y.document.getBody());var w=new CKEDITOR.dom.elementPath(r.startContainer);if(!w.blockLimit.is("body")){y.fire("updateSnapshot");k(y);CKEDITOR.env.ie&&c(C);var z;if(B!=CKEDITOR.ENTER_BR){z=x.append(y.document.createElement(B==CKEDITOR.ENTER_P?"p":"div"))}else{z=x}if(!CKEDITOR.env.ie){z.appendBogus()}}}CKEDITOR.plugins.add("wysiwygarea",{requires:["editingblock"],init:function(u){var x=(u.config.enterMode!=CKEDITOR.ENTER_BR&&u.config.autoParagraph!==false)?u.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p":false;var r=u.lang.editorTitle.replace("%1",u.name);var v;u.on("editingBlockReady",function(){var H,z,C,D,G,E;var A=CKEDITOR.env.isCustomDomain();var B=function(M){if(z){z.remove()}var N="document.open();"+(A?('document.domain="'+document.domain+'";'):"")+"document.close();";N=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent(N)+"}())":"";z=CKEDITOR.dom.element.createFromHtml('<iframe style="width:100%;height:100%" frameBorder="0" title="'+r+'" src="'+N+'" tabIndex="'+(CKEDITOR.env.webkit?-1:u.tabIndex)+'" allowTransparency="true"></iframe>');if(document.location.protocol=="chrome:"){CKEDITOR.event.useCapture=true}z.on("load",function(O){G=1;O.removeListener();var P=z.getFrameDocument();P.write(M);CKEDITOR.env.air&&F(P.getWindow().$)});if(document.location.protocol=="chrome:"){CKEDITOR.event.useCapture=false}var L=u.element,K=CKEDITOR.env.gecko&&!L.isVisible(),J={};if(K){L.show();J={position:L.getStyle("position"),top:L.getStyle("top")};L.setStyles({position:"absolute",top:"-3000px"})}H.append(z);if(K){setTimeout(function(){L.hide();L.setStyles(J)},1000)}};v=CKEDITOR.tools.addFunction(F);var I='<script id="cke_actscrpt" type="text/javascript" data-cke-temp="1">'+(A?('document.domain="'+document.domain+'";'):"")+"window.parent.CKEDITOR.tools.callFunction( "+v+", window );<\/script>";function F(M){if(!G){return}G=0;u.fire("ariaWidget",z);var S=M.document,N=S.body;var Q=S.getElementById("cke_actscrpt");Q&&Q.parentNode.removeChild(Q);N.spellcheck=!u.config.disableNativeSpellChecker;var K=!u.readOnly;if(CKEDITOR.env.ie){N.hideFocus=true;N.disabled=true;N.contentEditable=K;N.removeAttribute("disabled")}else{setTimeout(function(){if(CKEDITOR.env.gecko&&CKEDITOR.env.version>=10900||CKEDITOR.env.opera){S.$.body.contentEditable=K}else{if(CKEDITOR.env.webkit){S.$.body.parentNode.contentEditable=K}else{S.$.designMode=K?"off":"on"}}},0)}K&&CKEDITOR.env.gecko&&CKEDITOR.tools.setTimeout(a,0,null,u);M=u.window=new CKEDITOR.dom.window(M);S=u.document=new CKEDITOR.dom.document(S);K&&S.on("dblclick",function(T){var U=T.data.getTarget(),V={element:U,dialog:""};u.fire("doubleclick",V);V.dialog&&u.openDialog(V.dialog)});CKEDITOR.env.ie&&S.on("click",function(T){var U=T.data.getTarget();if(U.is("input")){var V=U.getAttribute("type");if(V=="submit"||V=="reset"){T.data.preventDefault()}}});if(!(CKEDITOR.env.ie||CKEDITOR.env.opera)){S.on("mousedown",function(T){var U=T.data.getTarget();if(U.is("img","hr","input","textarea","select")){u.getSelection().selectElement(U)}})}if(CKEDITOR.env.gecko){S.on("mouseup",function(U){if(U.data.$.button==2){var V=U.data.getTarget();if(!V.getOuterHtml().replace(m,"")){var T=new CKEDITOR.dom.range(S);T.moveToElementEditStart(V);T.select(true)}}})}S.on("click",function(T){T=T.data;if(T.getTarget().is("a")&&T.$.button!=2){T.preventDefault()}});if(CKEDITOR.env.webkit){S.on("mousedown",function(){P=1});S.on("click",function(T){if(T.data.getTarget().is("input","select")){T.data.preventDefault()}});S.on("mouseup",function(T){if(T.data.getTarget().is("input","textarea")){T.data.preventDefault()}})}if(K&&CKEDITOR.env.ie&&S.$.compatMode=="CSS1Compat"||CKEDITOR.env.gecko||CKEDITOR.env.opera){var L=S.getDocumentElement();L.on("mousedown",function(T){if(T.data.getTarget().equals(L)){if(CKEDITOR.env.gecko&&CKEDITOR.env.version>=10900){t()}s.focus()}})}var R=CKEDITOR.env.ie?z:M;R.on("blur",function(){u.focusManager.blur()});var P;R.on("focus",function(){var T=u.document;if(K&&CKEDITOR.env.gecko&&CKEDITOR.env.version>=10900){t()}else{if(CKEDITOR.env.opera){T.getBody().focus()}else{if(CKEDITOR.env.webkit){if(!P){u.document.getDocumentElement().focus();P=1}}}}u.focusManager.focus()});var O=u.keystrokeHandler;O.blockedKeystrokes[8]=!K;O.attach(S);if(CKEDITOR.env.ie){S.getDocumentElement().addClass(S.$.compatMode);K&&S.on("keydown",function(T){var X=T.data.getKeystroke();if(X in {8:1,46:1}){var V=u.getSelection(),W=V.getSelectedElement();if(W){u.fire("saveSnapshot");var U=V.getRanges()[0].createBookmark();W.remove();V.selectBookmarks([U]);u.fire("saveSnapshot");T.data.preventDefault()}}});if(S.$.compatMode=="CSS1Compat"){var J={33:1,34:1};S.on("keydown",function(T){if(T.data.getKeystroke() in J){setTimeout(function(){u.getSelection().scrollIntoView()},0)}})}u.config.enterMode!=CKEDITOR.ENTER_P&&S.on("selectionchange",function(){var T=S.getBody(),U=u.getSelection().getRanges()[0];if(T.getHtml().match(/^<p>&nbsp;<\/p>$/i)&&U.startContainer.equals(T)){setTimeout(function(){U=u.getSelection().getRanges()[0];if(!U.startContainer.equals("body")){T.getFirst().remove(1);U.moveToElementEditEnd(T);U.select(1)}},0)}})}if(u.contextMenu){u.contextMenu.addTarget(S,u.config.browserContextMenuOnCtrl!==false)}setTimeout(function(){u.fire("contentDom");if(E){u.mode="wysiwyg";u.fire("mode");E=false}C=false;if(D){u.focus();D=false}setTimeout(function(){u.fire("dataReady")},0);try{u.document.$.execCommand("enableInlineTableEditing",false,!u.config.disableNativeTableHandles)}catch(T){}if(u.config.disableObjectResizing){try{u.document.$.execCommand("enableObjectResizing",false,false)}catch(T){u.document.getBody().on(CKEDITOR.env.ie?"resizestart":"resize",function(U){U.data.preventDefault()})}}if(CKEDITOR.env.ie){setTimeout(function(){if(u.document){var U=u.document.$.body;U.runtimeStyle.marginBottom="0px";U.runtimeStyle.marginBottom=""}},1000)}},0)}u.addMode("wysiwyg",{load:function(J,K,L){H=J;if(CKEDITOR.env.ie&&CKEDITOR.env.quirks){J.setStyle("position","relative")}u.mayBeDirty=true;E=true;if(L){this.loadSnapshotData(K)}else{this.loadData(K)}},loadData:function(N){C=true;u._.dataStore={id:1};var L=u.config,J=L.fullPage,O=L.docType;var M='<style type="text/css" data-cke-temp="1">'+u._.styles.join("\n")+"</style>";!J&&(M=CKEDITOR.tools.buildStyleHtml(u.config.contentsCss)+M);var K=L.baseHref?'<base href="'+L.baseHref+'" data-cke-temp="1" />':"";if(J){N=N.replace(/<!DOCTYPE[^>]*>/i,function(P){u.docType=O=P;return""}).replace(/<\?xml\s[^\?]*\?>/i,function(P){u.xmlDeclaration=P;return""})}if(u.dataProcessor){N=u.dataProcessor.toHtml(N,x)}if(J){if(!(/<body[\s|>]/).test(N)){N="<body>"+N}if(!(/<html[\s|>]/).test(N)){N="<html>"+N+"</html>"}if(!(/<head[\s|>]/).test(N)){N=N.replace(/<html[^>]*>/,"$&<head><title></title></head>")}else{if(!(/<title[\s|>]/).test(N)){N=N.replace(/<head[^>]*>/,"$&<title></title>")}}K&&(N=N.replace(/<head>/,"$&"+K));N=N.replace(/<\/head\s*>/,M+"$&");N=O+N}else{N=L.docType+'<html dir="'+L.contentsLangDirection+'" lang="'+(L.contentsLanguage||u.langCode)+'"><head><title>'+r+"</title>"+K+M+"</head><body"+(L.bodyId?' id="'+L.bodyId+'"':"")+(L.bodyClass?' class="'+L.bodyClass+'"':"")+">"+N+"</html>"}if(CKEDITOR.env.gecko){N=N.replace(/<br \/>(?=\s*<\/(:?html|body)>)/,'$&<br type="_moz" />')}N+=I;this.onDispose();B(N)},getData:function(){var L=u.config,K=L.fullPage,O=K&&u.docType,J=K&&u.xmlDeclaration,N=z.getFrameDocument();var M=K?N.getDocumentElement().getOuterHtml():N.getBody().getHtml();if(CKEDITOR.env.gecko){M=M.replace(/<br>(?=\s*(:?$|<\/body>))/,"")}if(u.dataProcessor){M=u.dataProcessor.toDataFormat(M,x)}if(L.ignoreEmptyParagraph){M=M.replace(m,function(P,Q){return Q})}if(J){M=J+"\n"+M}if(O){M=O+"\n"+M}return M},getSnapshotData:function(){return z.getFrameDocument().getBody().getHtml()},loadSnapshotData:function(J){z.getFrameDocument().getBody().setHtml(J)},onDispose:function(){if(!u.document){return}u.document.getDocumentElement().clearCustomData();u.document.getBody().clearCustomData();u.window.clearCustomData();u.document.clearCustomData();z.clearCustomData();z.remove()},unload:function(J){this.onDispose();u.window=u.document=z=H=D=null;u.fire("contentDomUnload")},focus:function(){var K=u.window;if(C){D=true}else{if(CKEDITOR.env.opera&&u.document){var J=u.window.$.frameElement;J.blur(),J.focus();u.document.getBody().focus();u.selectionChange()}else{if(!CKEDITOR.env.opera&&K){CKEDITOR.env.air?setTimeout(function(){K.focus()},0):K.focus();u.selectionChange()}}}}});u.on("insertHtml",n(o),null,null,20);u.on("insertElement",n(h),null,null,20);u.on("insertText",n(i),null,null,20);u.on("selectionChange",p,null,null,1)});var q;u.on("contentDom",function(){var z=u.document.getElementsByTag("title").getItem(0);z.data("cke-title",u.document.$.title);u.document.$.title=r});u.on("readOnly",function(){if(u.mode=="wysiwyg"){var z=u.getMode();z.loadData(z.getData())}});if(CKEDITOR.document.$.documentMode>=8){u.addCss("html.CSS1Compat [contenteditable=false]{ min-height:0 !important;}");var w=[];for(var y in CKEDITOR.dtd.$removeEmpty){w.push("html.CSS1Compat "+y+"[contenteditable=false]")}u.addCss(w.join(",")+"{ display:inline-block;}")}else{if(CKEDITOR.env.gecko){u.addCss("html { height: 100% !important; }");u.addCss("img:-moz-broken { -moz-force-broken-image-icon : 1;	width : 24px; height : 24px; }")}}u.addCss("html {	_overflow-y: scroll; cursor: text;	*cursor:auto;}");u.addCss("img, input, textarea { cursor: default;}");function t(z){if(u.readOnly){return}CKEDITOR.tools.tryThese(function(){u.document.$.designMode="on";setTimeout(function(){u.document.$.designMode="off";if(CKEDITOR.currentInstance==u){u.document.getBody().focus()}},50)},function(){u.document.$.designMode="off";var A=u.document.getBody();A.setAttribute("contentEditable",false);A.setAttribute("contentEditable",true);!z&&t(1)})}if(CKEDITOR.env.gecko||CKEDITOR.env.ie||CKEDITOR.env.opera){var s;u.on("uiReady",function(){s=u.container.append(CKEDITOR.dom.element.createFromHtml('<span tabindex="-1" style="position:absolute;" role="presentation"></span>'));s.on("focus",function(){u.focus()});u.focusGrabber=s});u.on("destroy",function(){CKEDITOR.tools.removeFunction(v);s.clearCustomData();delete u.focusGrabber})}u.on("insertElement",function(z){var A=z.data;if(A.type==CKEDITOR.NODE_ELEMENT&&(A.is("input")||A.is("textarea"))){if(!A.isReadOnly()){A.data("cke-editable",A.hasAttribute("contenteditable")?"true":"1")}A.setAttribute("contentEditable",false)}})}});if(CKEDITOR.env.gecko){(function(){var q=document.body;if(!q){window.addEventListener("load",arguments.callee,false)}else{var r=q.getAttribute("onpageshow");q.setAttribute("onpageshow",(r?r+";":"")+'event.persisted && (function(){var allInstances = CKEDITOR.instances, editor, doc;for ( var i in allInstances ){	editor = allInstances[ i ];	doc = editor.document;	if ( doc )	{		doc.$.designMode = "off";		doc.$.designMode = "on";	}}})();')}})()}})();CKEDITOR.config.disableObjectResizing=false;CKEDITOR.config.disableNativeTableHandles=true;CKEDITOR.config.disableNativeSpellChecker=true;CKEDITOR.config.ignoreEmptyParagraph=true;