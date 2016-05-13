
var raycaster = new THREE.Raycaster();


function onDocumentMouseDown( event )
{   var camera = viewer.camera;

	var scroll = $('body').scrollTop();
	var top = $('#potree_render_area').offset().top;
	var left = $('#potree_render_area').offset().left;
	// calculate mouse position in normalized device coordinates
	if (event.clientX-left>0 && event.clientY-top+scroll>0 && event.clientX < $('#potree_render_area').width()+left && event.clientY < $('#potree_render_area').height()+top - scroll)
	{var mouse = { x : 0 , y : 0 };
	mouse.x =((event.clientX-left)/ $('#potree_render_area').width()) * 2 - 1;
	mouse.y = - ((event.clientY-top+scroll)/ $('#potree_render_area').height() ) * 2 + 1;


	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// //check first if the "click" was on a poi and create an array with them
	// var intersects_poi = raycaster.intersectObjects( hotspots.children );
	// 	// if there is an intersection with a poi...
	// 	if ( intersects_poi.length > 0 ) {
	// 		//...and if the first intersected poi (in space) is visible...
	// 		if (intersects_poi[ 0 ].object.visible==true) {
	// 			//..then check which poi is it and open to a new window the appropriate link
	// 			if (intersects_poi[ 0 ].object.userData.name=="Jan")
	// 				{window.open("../../web_pages/january.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Feb")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Apr")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="May")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Jun")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Jul")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Aug")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Sep")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Oct")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Nov")
	// 				{window.open("../../web_pages/index.html")}
	// 			if (intersects_poi[ 0 ].object.userData.name=="Dec")
	// 				{window.open("../../web_pages/index.html")}
	// 		}
	// 	}


	// create an array with intersections with planes
	var intersects = raycaster.intersectObjects( planes.children );
	// if there is one (or more) intersections
	if ( intersects.length > 0 ){
		// Set Default
		planes.children.forEach(function( plane ) {plane.material.opacity=[0.3];});
		//hotspots.children.forEach(function( hotspot ) {hotspot.visible=false;});

		//change the opacity of the intersected plane --> to demonstrate interaction
		intersects[ 0 ].object.material.opacity=[0.5];

		if (intersects[ 0 ].object.userData.name=="Jan")
			{linkText="<p><h3>January</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/gennaio.jpg\" alt=\"January\" > \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Feb")
			{linkText="<p><h3>February</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/febbraio.jpg\" alt=\"February\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Apr")
			{linkText="<p><h3>April</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/aprile.jpg\" alt=\"April\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="May")
			{linkText="<p><h3>May</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/maggio.jpg\" alt=\"May\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Jun")
			{linkText="<p><h3>June</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/giugno.jpg\" alt=\"June\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Jul")
			{linkText="<p><h3>July</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/luglio.jpg\" alt=\"July\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Aug")
			{linkText="<p><h3>August</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/agosto.jpg\" alt=\"August\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Sep")
			{linkText="<p><h3>September</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/settembre.jpg\" alt=\"September\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Oct")
			{linkText="<p><h3>October</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/ottobre.jpg\" alt=\"October\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Nov")
			{linkText="<p><h3>November</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/novembre.jpg\" alt=\"November\"> \
		</p>"}
		if (intersects[ 0 ].object.userData.name=="Dec")
			{linkText="<p><h3>December</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/dicembre.jpg\" alt=\"December\"> \
		</p>"}

	

		//var linkText = 'lalalalala';
		//document.getElementById('descrizione').innerHTML = "<p><h3>Description AUgust</h3></p>";

    	// replace the contents of the div with the link text
    	$('#descrizione').html(linkText);

		// Turn on the poi that has the same name as the intersected plane
		//hotspots.children.forEach(function( hotspot ) {if (hotspot.userData.name==intersects[ 0 ].object.userData.name){hotspot.visible=true; console.log("Clicked " +intersects[ 0 ].object.userData.name);}});

	}
	else{
		planes.children.forEach(function( plane ) {plane.material.opacity=[0.3];});
		planes.children.forEach(function( plane ) {plane.visible=false;});
		hotspots.children.forEach(function( hotspot ) {hotspot.visible=false;});



		$('#descrizione').html("<p><h3>Description</h3> \
				        <p>Il Ciclo dei Mesi è un gruppo di affreschi nella Torre dell'Aquila nel castello del Buonconsiglio di Trento, dipinti dal maestro Venceslao (documentato in città nel 1397). Risalgono alla fine del XIV secolo-inizio del XV e sono il migliore esempio di gotico internazionale in Trentino e uno dei più significativi dell'Italia settentrionale.</p> \
				        <p>Il ciclo si articola oggi in undici diversi riquadri, poiché il mese di Marzo era stato dipinto su un supporto di legno ed è andato perduto durante un incendio. L'insieme è strutturato come una loggia architravata sostenuta da esili colonnine tortili, dalla quale si vedono, come in un ipotetico affaccio che sfonda la parete, le varie occupazioni signorili e contadine di ciascun mese. Tutti gli sfondi e i dettagli architettonici sono raccordati tra scena e scena, come in un panorama unitario.</p> \
				        <p>Le scene, ricchissime di particolari tratti dall'osservazione della vita reale (magari filtrate dalle illustrazioni dei Tacuina Sanitatis), mostrano la vita dei nobili, le attività dell'agricoltura e della pastorizia, con un continuo e pacato intreccio tra mondo cavalleresco e mondo quotidiano. Poche sono invece le concessioni al grottesco e al macabro, che caratterizzavano invece altre zone italiane ed europee.</p> \
				        <p>Viene prestata molta attenzione al succedersi delle stagioni: il paesaggio invernale spoglio e imbiancato dalla neve diventa rigoglioso di vegetazione in primavera, i raccolti estivi segnano l'apice dell'attività agricola, mentre gli alberi nel mese di novembre sono circondati dalle foglie secche cadute sul terreno. La cura dei particolari ritorna nella descrizione delle vesti, l'abbigliamento infatti permette di riconoscere i caratteri tipici della moda del tempo: per i nobili, occupati in svaghi e tornei, gli abiti sono ricchi di colori, mentre molto più semplici e pratici sono quelli delle classi umili, rappresentate sempre al lavoro. Si può vedere la minuziosità dei particolari anche nei cambiamenti delle stagioni.</p> \
				       <p>In ogni affresco è presente la figura del sole con accanto il segno zodiacale corrispondente ad ogni mese.</p> \
				       <p>Modelli iconografici del ciclo sono, oltre al già citato Tacuinum sanitatis, il Livre de la chasse di Gaston Phoebus e le Très riches heures du Duc de Berry.</p> \
				       <br> \
				       <p><h5><em>Fonte wikipedia.org</em></h5></p> \
				        </p> ");
	}
}

}



function onMouseMove( event ) {
	var camera = viewer.camera;

	var scroll = $('body').scrollTop();
	var top = $('#potree_render_area').offset().top;
	var left = $('#potree_render_area').offset().left;
	// calculate mouse position in normalized device coordinates
	if (event.clientX-left>0 && event.clientY-top+scroll>0 && event.clientX < $('#potree_render_area').width()+left && event.clientY < $('#potree_render_area').height()+top - scroll)
	{var mouse = { x : 0 , y : 0 };
	mouse.x =((event.clientX-left)/ $('#potree_render_area').width()) * 2 - 1;
	mouse.y = - ((event.clientY-top+scroll)/ $('#potree_render_area').height() ) * 2 + 1;




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
		}}
	else{
		planes.children.forEach(function( plane ) {plane.visible=false;});
	}



	// Make the POIs rotate towards the camera when moving  ---> If deactivated the rotation of the ROIs must be set in torre.html
	hotspots.children.forEach(function( hotspot ) {hotspot.lookAt(camera.position);});


}






$('.dropdown-menu li a').click(function() {

		event.stopPropagation();
		

		if ($(this).text()=="Stanza")
			{linkText="<p><h3>Description</h3> \
				        <p>Il Ciclo dei Mesi è un gruppo di affreschi nella Torre dell'Aquila nel castello del Buonconsiglio di Trento, dipinti dal maestro Venceslao (documentato in città nel 1397). Risalgono alla fine del XIV secolo-inizio del XV e sono il migliore esempio di gotico internazionale in Trentino e uno dei più significativi dell'Italia settentrionale.</p> \
				        <p>Il ciclo si articola oggi in undici diversi riquadri, poiché il mese di Marzo era stato dipinto su un supporto di legno ed è andato perduto durante un incendio. L'insieme è strutturato come una loggia architravata sostenuta da esili colonnine tortili, dalla quale si vedono, come in un ipotetico affaccio che sfonda la parete, le varie occupazioni signorili e contadine di ciascun mese. Tutti gli sfondi e i dettagli architettonici sono raccordati tra scena e scena, come in un panorama unitario.</p> \
				        <p>Le scene, ricchissime di particolari tratti dall'osservazione della vita reale (magari filtrate dalle illustrazioni dei Tacuina Sanitatis), mostrano la vita dei nobili, le attività dell'agricoltura e della pastorizia, con un continuo e pacato intreccio tra mondo cavalleresco e mondo quotidiano. Poche sono invece le concessioni al grottesco e al macabro, che caratterizzavano invece altre zone italiane ed europee.</p> \
				        <p>Viene prestata molta attenzione al succedersi delle stagioni: il paesaggio invernale spoglio e imbiancato dalla neve diventa rigoglioso di vegetazione in primavera, i raccolti estivi segnano l'apice dell'attività agricola, mentre gli alberi nel mese di novembre sono circondati dalle foglie secche cadute sul terreno. La cura dei particolari ritorna nella descrizione delle vesti, l'abbigliamento infatti permette di riconoscere i caratteri tipici della moda del tempo: per i nobili, occupati in svaghi e tornei, gli abiti sono ricchi di colori, mentre molto più semplici e pratici sono quelli delle classi umili, rappresentate sempre al lavoro. Si può vedere la minuziosità dei particolari anche nei cambiamenti delle stagioni.</p> \
				       <p>In ogni affresco è presente la figura del sole con accanto il segno zodiacale corrispondente ad ogni mese.</p> \
				       <p>Modelli iconografici del ciclo sono, oltre al già citato Tacuinum sanitatis, il Livre de la chasse di Gaston Phoebus e le Très riches heures du Duc de Berry.</p> \
				       <br> \
				       <p><h5><em>Fonte wikipedia.org</em></h5></p> \
				        </p> "}

    	if ($(this).text()=="Gennaio")
			{linkText="<p><h3>January</h3> \
		<img  class=\"month_img\" src=\"img/aquila_frescoes/gennaio.jpg\" alt=\"January\" > \
		</p>"}
		if ($(this).text()=="Febbraio ")
			{linkText="<p><h3>February</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/febbraio.jpg\" alt=\"February\"> \
		</p>"}
		if ($(this).text()=="Aprile")
			{linkText="<p><h3>April</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/aprile.jpg\" alt=\"April\"> \
		</p>"}
		if ($(this).text()=="Maggio")
			{linkText="<p><h3>May</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/maggio.jpg\" alt=\"May\"> \
		</p>"}
		if ($(this).text()=="Giugno")
			{linkText="<p><h3>June</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/giugno.jpg\" alt=\"June\"> \
		</p>"}
		if ($(this).text()=="Luglio")
			{linkText="<p><h3>July</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/luglio.jpg\" alt=\"July\"> \
		</p>"}
		if ($(this).text()=="Agosto")
			{linkText="<p><h3>August</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/agosto.jpg\" alt=\"August\"> \
		</p>"}
		if ($(this).text()=="Settembre")
			{linkText="<p><h3>September</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/settembre.jpg\" alt=\"September\"> \
		</p>"}
		if ($(this).text()=="Ottobre")
			{linkText="<p><h3>October</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/ottobre.jpg\" alt=\"October\"> \
		</p>"}
		if ($(this).text()=="Novembre")
			{linkText="<p><h3>November</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/novembre.jpg\" alt=\"November\"> \
		</p>"}
		if ($(this).text()=="Dicembre")
			{linkText="<p><h3>December</h3> \
		<img class=\"month_img\" src=\"img/aquila_frescoes/dicembre.jpg\" alt=\"December\"> \
		</p>"}


		$('#descrizione').html(linkText);


});