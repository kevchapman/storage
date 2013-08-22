function Lm_storage(type){
	sType = type && type === 'session' ? 'sessionStorage' : 'localStorage';
	this.s = window[sType] || new Cookie({exdays: sType === 'sessionStorage' ? 1 : false});
	this.allow = this.s.getItem('allow') || false;
}
Lm_storage.prototype = {
	init:function(){
		var t = this;
	},
	getItem:function(key){
		return this.s.getItem(key);
	},
	setItem:function(key,val,exdays){
		this.s.setItem(key,val,exdays);
	},
	removeItem:function(key){
		this.s.removeItem(key);
		if(key === 'allow'){ this.allow = false; }
	}
}