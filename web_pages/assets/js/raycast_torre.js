
var raycaster = new THREE.Raycaster();


function onDocumentMouseDown( event )
{   var camera = viewer.camera;
	// update the mouse variable
	var mouse = { x : 0 , y : 0 };
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	//check first if the "click" was on a poi and create an array with them
	var intersects_poi = raycaster.intersectObjects( hotspots.children );
		// if there is an intersection with a poi...
		if ( intersects_poi.length > 0 ) {
			//...and if the first intersected poi (in space) is visible...
			if (intersects_poi[ 0 ].object.visible==true) {
				//..then check which poi is it and open to a new window the appropriate link
				if (intersects_poi[ 0 ].object.userData.name=="Jan")
					{window.open("../../web_pages/january.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Feb")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Apr")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="May")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Jun")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Jul")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Aug")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Sep")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Oct")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Nov")
					{window.open("../../web_pages/index.html")}
				if (intersects_poi[ 0 ].object.userData.name=="Dec")
					{window.open("../../web_pages/index.html")}
			}
		}


	// create an array with intersections with planes
	var intersects = raycaster.intersectObjects( planes.children );
	// if there is one (or more) intersections
	if ( intersects.length > 0 ){	
		// Set Default
		planes.children.forEach(function( plane ) {plane.material.opacity=[0.3];});
		hotspots.children.forEach(function( hotspot ) {hotspot.visible=false;});

		//change the opacity of the intersected plane --> to demonstrate interaction
		intersects[ 0 ].object.material.opacity=[0.5];

		// Turn on the poi that has the same name as the intersected plane
		hotspots.children.forEach(function( hotspot ) {if (hotspot.userData.name==intersects[ 0 ].object.userData.name){hotspot.visible=true; console.log("Clicked " +intersects[ 0 ].object.userData.name);}});

	}
	else{
		planes.children.forEach(function( plane ) {plane.material.opacity=[0.3];});
		planes.children.forEach(function( plane ) {plane.visible=false;});
		hotspots.children.forEach(function( hotspot ) {hotspot.visible=false;});
	}		

	


}


function onMouseMove( event ) {
	var camera = viewer.camera;

	// calculate mouse position in normalized device coordinates
	var mouse = { x : 0 , y : 0 };
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );


	//Find the intersections with POIs
	var intersects_poi = raycaster.intersectObjects( hotspots.children );
	// if there is one (or more) intersections with POIs...
	if ( intersects_poi.length > 0 ){
		// And the first one is visible...
		if (intersects_poi[ 0 ].object.visible==true) {
			//....then change (slightly) the scale and the opacity to demonstrate interaction/"clickability"
			intersects_poi[ 0 ].object.scale.set(1.1,1.1,1.1);
			intersects_poi[ 0 ].object.material.opacity=[1];

		}}
	//else return to default scale and opacity
	else {hotspots.children.forEach(function( hotspot ) {hotspot.scale.set(1,1,1); hotspot.material.opacity=[poi_opacity];});}


	//Find the intersections with planes
	var intersects = raycaster.intersectObjects( planes.children );
	// if there is one (or more) intersections with planes...
	if ( intersects.length > 0 ){
		//set all planes not visible...
		planes.children.forEach(function( plane ) {plane.visible=false;});
		// .. but turn the intersected one on!
		intersects[0].object.visible = true ;
		}

	else {
		//turn off all the planes when not hovered over
		planes.children.forEach(function( plane ) {plane.visible=false;});			
		}

	// Make the POIs rotate towards the camera when moving  ---> If deactivated the rotation of the ROIs must be set in torre.html
	hotspots.children.forEach(function( hotspot ) {hotspot.lookAt(camera.position);});

}