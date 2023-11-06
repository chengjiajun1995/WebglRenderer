let cameraPoos = [30, 30, 30];


GameMain();

function GameMain() 
{
    // Init canvas and gl
	const canvas = document.querySelector('#glcanvas');
	canvas.width = window.screen.width;
	canvas.height = window.screen.height;
	const gl = canvas.getContext('webgl');
	if (!gl) {
		console.log('Unable to initialize WebGL. Your browser or machine may not support it.');
		return;
	}

	//camera
	const camera = new THREE.PerspectiveCamera(75, gl.canvas.clientWidth / gl.canvas.clientHeight, 1e-2, 1000);


	//render
	const renderer = new WebglRenderer(gl, camera);


	//light



	//ui
	renderer.render();



	//gameLoop
	function mainLoop()
	{
		
		renderer.render();
		requestAnimationFrame(mainLoop);
	}

	requestAnimationFrame(mainLoop);
    
}