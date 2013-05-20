
var httpProxy = require('http-proxy');

var rabbitmq_service_name = process.env.RABBITMQ_SERVICE_NAME
var stackato_services = JSON.parse(process.env.STACKATO_SERVICES);
var rabbitmq_settings = stackato_services[rabbitmq_service_name];

var service_host = rabbitmq_settings.host;
var service_port = parseInt(rabbitmq_settings.port) + 10000;
var listen_port = process.env.PORT;

console.log("rabbitmq_settings: ", rabbitmq_settings);
httpProxy.createServer(service_port, service_host).listen(listen_port);

