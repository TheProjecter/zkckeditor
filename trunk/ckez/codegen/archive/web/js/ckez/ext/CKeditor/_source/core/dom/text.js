CKEDITOR.dom.text=function(b,a){if(typeof b=="string"){b=(a?a.$:document).createTextNode(b)}this.$=b};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node();CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(e){if(CKEDITOR.env.ie&&e==this.getLength()){var c=this.getDocument().createText("");c.insertAfter(this);return c}var d=this.getDocument();var b=new CKEDITOR.dom.text(this.$.splitText(e),d);if(CKEDITOR.env.ie8){var a=new CKEDITOR.dom.text("",d);a.insertAfter(b);a.remove()}return b},substring:function(b,a){if(typeof a!="number"){return this.$.nodeValue.substr(b)}else{return this.$.nodeValue.substring(b,a)}}});