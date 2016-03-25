
var raycaster = new THREE.Raycaster();



	
function onDocumentMouseDown( event ) 
{   //event.preventDefault();
	//https://it.wikipedia.org/wiki/Torre_Aquila
	//drawImage();
	var camera = viewer.camera;

	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	
	console.log("Click.");
	
	
	// update the mouse variable
	var mouse = { x : 0 , y : 0 };
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


	// mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	// mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	

	// update the picking ray with the camera and mouse position	
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects = raycaster.intersectObjects( [cube] );
	
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		console.log("Hit right @ " + toString( intersects[0].point ) );
		window.open("../../../../torre.html", "_self")
		// change the color of the closest face.
		//intersects[0].object.callback();
		intersects[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 ); 
		intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
		// window.alert("Questo Ã¨ un esempio di alert incluso nello script.");
		winW = ""+(screen.width / 2) -200 ;
		winH = ""+(screen.height / 2) -200 ;
		// window.open("http://www.gazzetta.it", "_blank", " scrollbars=yes, resizable=yes, top=" + winH + ", left="+ winW +", width=400, height=400");
		// window.open("", "MsgWindow", "resizable=yes", "top=500", "left=500", "width=100", "height=100");
	}
	// else{
	// 	viewer.scenePointCloud.remove(plane);
	// }

}
function onMouseMove( event ) {
	var camera = viewer.camera;

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components
	var mouse = { x : 0 , y : 0 };
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	// update the picking ray with the camera and mouse position	
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects = raycaster.intersectObjects( [cube,cube2] );
	
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		console.log("Hit this @ " + toString( intersects[0].point ) );
		// change the color of the closest face.
		intersects[ 0 ].object.material.color.setRGB(1,0.3,1); 
		intersects[ 0 ].object.material.opacity=[0.3]; 
		intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
		plane_hs.visible=true
	}
	else {
		cube.material.color.setRGB( 1,0,1); 
		cube.geometry.colorsNeedUpdate = true;
		cube.material.opacity=[0]; 
		// cube2.material.color.setRGB( 1,0,1); 
		// cube2.geometry.colorsNeedUpdate = true;
		// cube2.material.opacity=[0]; 
		plane_hs.visible=false
	}
	//plane.lookAt(camera.position);
	
}

// function drawImage(){
// 	var camera = viewer.camera;
// 	// var scene = viewer.scenePointCloud;


//     // var img = new THREE.MeshBasicMaterial({ map:THREE.ImageUtils.loadTexture('d.jpg') });
//     // img.map.needsUpdate = true; //ADDED

//     // // plane
//     // var plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10),img);
//     // plane.overdraw = true;


//     // plane.rotation.y = (-Math.PI / 2);
//     // plane.position.y = 10;
//     // plane.position.z = 10;
//     // plane.position.x = -10;
// 	// plane.rotation.z = (-Math.PI / 2);

//     viewer.scenePointCloud.add(plane);
    
//     // add subtle ambient lighting
//     // var ambientLight = new THREE.AmbientLight(0x555555);
//     // scene.add(ambientLight);

//     // add directional light source
//     // var directionalLight = new THREE.DirectionalLight(0xffffff);
//     // directionalLight.position.set(1, 1, 1).normalize();
//     // scene.add(directionalLight);

//     // create wrapper object that contains three.js objects
//     // var three = {
//     //     renderer: renderer,
//     //     camera: camera,
//     //     scene: scene,
//     //     plane: plane
//     // };
//     // renderer.render(scene,camera);
// }