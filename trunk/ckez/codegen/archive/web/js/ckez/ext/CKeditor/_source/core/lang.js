(function(){var a={};CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,lt:1,lv:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,sk:1,sl:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,uk:1,vi:1,"zh-cn":1,zh:1},load:function(b,d,c){if(!b||!CKEDITOR.lang.languages[b]){b=this.detect(d,b)}if(!this[b]){CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("_source/lang/"+b+".js"),function(){c(b,this[b])},this)}else{c(b,this[b])}},detect:function(g,c){var e=this.languages;c=c||navigator.userLanguage||navigator.language;var d=c.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),f=d[1],b=d[2];if(e[f+"-"+b]){f=f+"-"+b}else{if(!e[f]){f=null}}CKEDITOR.lang.detect=f?function(){return f}:function(h){return h};return f||g}}})();