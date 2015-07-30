var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');



test('testing content route', function (t) {
  server.inject({method: 'GET', url: '/content'}, function (response) {
    t.equal(response.statusCode, 200);
    
    var contentBody= response.result;
    var page = fs.readFileSync(__dirname + '/../views/content.html', 'utf-8');
    
    function isInBody (x, y ) {
    	if(x.indexOf(y) !==-1) {
			 return true;
    	}else{
    	 return false;
    	}
    }

    t.equal(isInBody(contentBody,page), true);
    server.stop();
    t.end();
  });
});