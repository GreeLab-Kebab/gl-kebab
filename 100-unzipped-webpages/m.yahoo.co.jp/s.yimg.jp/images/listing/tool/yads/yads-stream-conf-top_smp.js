(function() {
    var js_path = "https://s.yimg.jp/images/listing/tool/yads/impl/yads-stream-conf-top_smp.js";
    var yyyymmdd = (function() {
        var date = new Date();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m.toString();
        var d = date.getDate();
        d = d < 10 ? "0" + d : d.toString();
        return date.getFullYear() + m + d;
    })();
    var release = "01"; // 緊急リリース時にここを変更
    document.write('<script type="text/javascript" language="JavaScript" src="' +
        js_path + "?" + yyyymmdd + release + '"></script>');
})();