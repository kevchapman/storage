#Local / Session Storage poly fill
Falls back to Cookie in older browsers
Can be local (default) or session
``` html
<script>
	core.storage = new Lm_storage();
	core.sessionStorage = new Lm_storage('session');
</script>
```
##API methods
``` html
<script>
	core.storage.getItem('key');
	core.storage.setItem('key','value');
	core.storage.removeItem('key');
</script>
```
note: values must be strings if you need to store an object, use JSON.stringify(myobj). On retrieval use JSON.parse(core.storage.getItem('key'))