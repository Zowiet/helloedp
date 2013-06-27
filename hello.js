var sys = require("sys"),  
	http = require("http");  
http.createServer(function(request, response) {  
	response.sendHeader(200, {"Content-Type": "text/html"});  
	response.write("Hello EDP!");  
	response.close();  
}).listen(3000);  
sys.puts("Server running at http://localhost:3000/"); 