jest.setTimeout(60000);

const documentHTML = `
<!doctype html><html lang="en">
<head><title>Unit Test</title></head>
<body><div id="root"></div></body>
</html>`;

global.window.document.body.innerHTML = documentHTML;
global.window.innerWidth = 1680;
global.window.innerHeight = 1024;
