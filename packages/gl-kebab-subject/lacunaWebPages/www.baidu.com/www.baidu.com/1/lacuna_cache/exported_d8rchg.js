// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
B.load(function () {require(['wiseindex/lib/ivk/logo/logo'], function (logo) {lacuna_lazy_load("lacuna_cache/exported_d8rchg.js[77:86]", functionData => eval(functionData))});});