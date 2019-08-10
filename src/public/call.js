
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

console.log('Calling function...');

function sendrequest()
{
	var req = new XMLHttpRequest();
	req.open('POST','/add');
	req.send(JSON.stringify({ 'item':'asd'}));
	req.setRequestHeader('Content-Type','application/json');

	req.addEventListener('load',() => {
       console.log(req.responseText);
	});

	req.addEventListener('error',() => {
		console.log('something went wrong!');
	});
}
sendrequest();
