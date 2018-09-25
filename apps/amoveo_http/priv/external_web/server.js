//make ip and port as input things.

local_ip = [127,0,0,1];
local_port = 8081;
var server_ip = document.createElement("INPUT");
server_ip.setAttribute("type", "text");
server_ip.id = "chanel-ip";
server_ip.value = "amoveo.exan.tech"; // server
//server_ip.value = document.URL.split("/")[2].split(":")[0];
var server_ip_info = document.createElement("label");
server_ip_info.htmlFor = "chanel-ip";
server_ip_info.innerHTML = "Channel node IP:";
var server_port = document.createElement("INPUT");
server_port.value = "8080"; // server
//server_port.value = document.URL.split(":")[2].substring(0, 4);
server_port.id = "chanel-port";
server_port.setAttribute("type", "text");
var server_port_info = document.createElement("label");
server_port_info.htmlFor = "chanel-port";
server_port_info.innerHTML = "Port: ";

var blockchain = document.getElementById('blockchain');

var fieldset_port = document.createElement("div");
fieldset_port.className = "fieldset"
fieldset_port.appendChild(server_ip_info);
fieldset_port.appendChild(server_ip);
var fieldset_ip = document.createElement("div");
fieldset_ip.className = "fieldset"
fieldset_ip.appendChild(server_port_info);
fieldset_ip.appendChild(server_port);

function get_port() {
    return parseInt(server_port.value, 10);
}
function get_ip() {
    //return JSON.parse(server_ip.value);
    return server_ip.value;
}

(function(){

    if(nav && nav){
        var tab_id = "blockchain"
        var div = document.createElement("div");
        div.className = "tabs__content-item "+tab_id;
        div.id = tab_id;

        var blockchain_title = document.createElement("h3");
        blockchain_title.className = "tabs__nav-item";
        blockchain_title.innerHTML = tab_id;
        blockchain_title.dataset.tab = tab_id;

        if (!nav.hasChildNodes()) {
            blockchain_title.className += " active";
            div.className += " active"
        }

        var wrap = document.createElement("div");
        wrap.className = "tabs__col";
        wrap.id = "blockchain-wrap";

        wrap.appendChild(fieldset_port);
        wrap.appendChild(fieldset_ip);
        div.appendChild(wrap);
        tabs.appendChild(div);
        nav.appendChild(blockchain_title);
    }

})();
