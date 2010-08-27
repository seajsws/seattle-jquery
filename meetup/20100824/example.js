$("#holder").html("loaded");

$.ajax(
    "https://graph.facebook.com/btaylor?access_token=2227470867|2.MKt6kUPv_phNPcag4HrMzg__.3600.1282708800-1178471455|NkYuw9WGEUo6jq_KpP1Kxc_bZ0w.",
    function(data) {
	$("#holder").html(data);
    }
);

