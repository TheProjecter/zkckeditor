(function(){CKEDITOR.plugins.add("xml",{});CKEDITOR.xml=function(d){var a=null;if(typeof d=="object"){a=d}else{var b=(d||"").replace(/&nbsp;/g,"\xA0");if(window.DOMParser){a=(new DOMParser()).parseFromString(b,"text/xml")}else{if(window.ActiveXObject){try{a=new ActiveXObject("MSXML2.DOMDocument")}catch(c){try{a=new ActiveXObject("Microsoft.XmlDom")}catch(c){}}if(a){a.async=false;a.resolveExternals=false;a.validateOnParse=false;a.loadXML(b)}}}}this.baseXml=a};CKEDITOR.xml.prototype={selectSingleNode:function(c,b){var d=this.baseXml;if(b||(b=d)){if(CKEDITOR.env.ie||b.selectSingleNode){return b.selectSingleNode(c)}else{if(d.evaluate){var a=d.evaluate(c,b,null,9,null);return(a&&a.singleNodeValue)||null}}}return null},selectNodes:function(d,b){var f=this.baseXml,c=[];if(b||(b=f)){if(CKEDITOR.env.ie||b.selectNodes){return b.selectNodes(d)}else{if(f.evaluate){var a=f.evaluate(d,b,null,5,null);if(a){var e;while((e=a.iterateNext())){c.push(e)}}}}}return c},getInnerXml:function(b,a){var d=this.selectSingleNode(b,a),c=[];if(d){d=d.firstChild;while(d){if(d.xml){c.push(d.xml)}else{if(window.XMLSerializer){c.push((new XMLSerializer()).serializeToString(d))}}d=d.nextSibling}}return c.length?c.join(""):null}}})();