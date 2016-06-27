base_url = "http://atlas/lights/";

$(document).ready(function() {
    function callLights(local, method) {
        $.get( base_url + local + "?method=" + method, function(data) {
            x = 1;
        });
    }

    var lightMethodMap = new Array();
    lightMethodMap.white = 'L06';
    lightMethodMap.blue = 'L04';
    lightMethodMap.red = 'L00';
    lightMethodMap.green = 'L02';
    lightMethodMap.rainbow = 'L05';
    lightMethodMap.off = 'L14';

    // unused
    lightMethodMap.color_wipe = 'L01';
    lightMethodMap.theatre_chase = 'L03';
    lightMethodMap.rainbow_chase = 'L07';
    lightMethodMap.cylon_chase = 'L08';
    lightMethodMap.rainbow_cycle = 'L09';
    lightMethodMap.breathe = 'L10';
    lightMethodMap.heartbeat = 'L11';
    lightMethodMap.christmas = 'L12';
    lightMethodMap.cycle_all = 'L13';

    function setupLightGroup(local) {
        var t = document.querySelector("#light-group");
        t.content.querySelector(".light-group").id = local;
        t.content.querySelector(".group-header").textContent = local;

        var clone = document.importNode(t.content, true);
        document.body.appendChild(clone);

        Object.keys(lightMethodMap).forEach(function(entry) {
            $("#" + local + " #" + entry).click(function(){
                callLights(local, lightMethodMap[entry]);
            });
        });
    }

    var groups = ["bedroom", "tv"];
    groups.forEach(setupLightGroup);
});
