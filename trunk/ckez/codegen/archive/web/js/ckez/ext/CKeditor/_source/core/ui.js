CKEDITOR.ui=function(a){if(a.ui){return a.ui}this._={handlers:{},items:{},editor:a};return this};CKEDITOR.ui.prototype={add:function(a,c,b){this._.items[a]={type:c,command:b.command||null,args:Array.prototype.slice.call(arguments,2)}},create:function(b){var d=this._.items[b],c=d&&this._.handlers[d.type],e=d&&d.command&&this._.editor.getCommand(d.command);var a=c&&c.create.apply(this,d.args);d&&(a=CKEDITOR.tools.extend(a,this._.editor.skin[d.type],true));if(e){e.uiItems.push(a)}return a},addHandler:function(b,a){this._.handlers[b]=a}};CKEDITOR.event.implementOn(CKEDITOR.ui);