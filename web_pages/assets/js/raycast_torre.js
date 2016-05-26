
var raycaster = new THREE.Raycaster();

var onDropDown=false;
	$('.dropdown-menu li a').mouseover(function(){
onDropDown=true;
	});
	$('.dropdown-menu li a').mouseout(function(){
onDropDown=false;
	});



function onDocumentMouseDown( event )
{   var camera = viewer.camera;

	var scroll = $('body').scrollTop();
	var top = $('#potree_render_area').offset().top;
	var left = $('#potree_render_area').offset().left;
	// calculate mouse position in normalized device coordinates


	if (event.clientX-left>0 && event.clientY-top+scroll>0 && event.clientX < $('#potree_render_area').width()+left && event.clientY < $('#potree_render_area').height()+top - scroll && onDropDown==false)
	{var mouse = { x : 0 , y : 0 };
	mouse.x =((event.clientX-left)/ $('#potree_render_area').width()) * 2 - 1;
	mouse.y = - ((event.clientY-top+scroll)/ $('#potree_render_area').height() ) * 2 + 1;


	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	linkText_empty="<div id=\"descrizione_box\">\
						<div class=\"pull-left\">\
							<img class=\"month_img\" src=\"img/aquila_frescoes/maggio.jpg\" alt=\"Empty\">\
						</div>\
	        			<h4 id=\"month_name\">MonthName</h4>\
	        			<div id=\"month_desc\">\
							<p>The interior hall of the Torre dell’Aquila \(Eagle Tower\) include one of the most noteworthy example of International Gothic: the \"Ciclo dei Mesi\". Commissioned by the he Prince-Bishopric of Trent Giorgio di Liechtenstein, and painted by <em>Maestro Venceslao</em> at the end of  XIV, beginning of XV century, the Ciclo dei Mesi comprise eleven different panes. Originally the panes were twelve, but the month of March, painted on a wooden stand, was later destroyed during a fire.\
							 The represented scenes picture, during a timespan of different seasons, the leisure activities of the aristocracy as well as the work carried out by the working class, and are considered a precious document of the economic social and political life in Trentino in the end of the XIV century.\
							 Very much attention is given to the seasonal changes. The winter landscape, bare and white, becomes rich with lush vegetation during spring\; summer crops mark the peak of of agricultural activity, while the trees in November are surrounded by dry leaves fallen on the ground. The keen precision that the author put in the depiction of the changes in color can be found again in the details of the clothes, which, underling the local aristocratic customs, help us discover the fashion of the time. The working class is instead always depicted with humble vests during their typical working activity. The Ciclo dei Mesi allow us to picture the various activities: the plowing, the grape harvest, the sowing, the harvesting of wood for the farmers and outdoor games comprising medieval joust and hunt. The frescoes are spatially contiguous, and each of them is separated by a thin painted column, as well as identified by the name of the corresponding sign of the zodiac.\
							 Different iconographical models are used, most notably the <em>\"Tacuinum sanitatis\"</em>, the <em>\"Livre de la chasse\"</em> di Gaston Phoebus and the <em>\"Très riches heures du Duc de Berry\"</em>.</p>\
							<p><h5><em>Source wikipedia.org</em></h5></p>\
						</div>\
					</div>"

	fake_text="<p>Vivamus risus ex, varius et libero quis, placerat rhoncus mi. Aenean sit amet aliquam nibh. Aliquam tortor est, consequat vitae libero at, vehicula mattis tellus. In condimentum consequat tempor. Nullam at lorem semper, ultricies mi et, mollis turpis. Mauris ut leo ac magna dapibus luctus. Mauris mi nibh, ornare et ipsum vel, finibus molestie nulla. Nunc eleifend leo eget ipsum pellentesque, vel varius ipsum placerat. Mauris tincidunt sapien et efficitur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec at pellentesque arcu. Pellentesque justo enim, porttitor a arcu non, mollis venenatis felis.</p>\
				        <p>Praesent viverra pellentesque enim, vitae porta erat elementum quis. Maecenas posuere mattis velit rutrum iaculis. Duis non efficitur nibh. Aliquam laoreet risus a nulla auctor interdum. Ut cursus leo eu justo laoreet porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae nisi dictum, vulputate odio sed, blandit tortor. Fusce eu turpis ut mi porta bibendum nec eu libero.</p>\
				        <p>Praesent libero sem, feugiat dapibus mattis et, vehicula eu turpis. In vitae consequat leo, quis venenatis justo. Fusce auctor bibendum aliquet. Nullam eu mi lectus. Maecenas risus mauris, feugiat nec ullamcorper non, efficitur et elit. Sed porta tellus ut aliquam auctor. Vivamus id lectus sed tellus cursus sodales sit amet a velit.</p>\
				        <p>Quisque eu aliquam leo. Sed feugiat nulla massa, a faucibus nulla sagittis eget. Donec ullamcorper tincidunt risus et pharetra. Vivamus tristique dui metus, vitae gravida nisl volutpat eu. Vivamus dapibus leo sit amet metus luctus dapibus. Vivamus sodales tempor elit, at pellentesque elit eleifend sit amet. Aliquam erat volutpat.</p>"

	April_text="<p>April symbolise the beginning of the spring, and, in fact, everyone in the painting is busy reclaiming the field from the cold winter. We can see different strata in this painting, starting from the bottom right where two young dames are depicted nurturing their garden. On the bottom left two farmers are plowing the terrain, in preparation for the sowing, which is depicted in the upper parts. Here we can see an harrow, a squared or rectangular wooden framework, armed with small wooden or iron teeth, used after the plowing for crumbling the terrain, or after the sowing for covering the seeds.\
	The sower can be distinguished by the rest of the farmers by its clothes, which appear of better craftsmanship and show the belonging or a wealthier social scene. He’s wearing, in fact, a rag hat, a coloured guarnello with fringes and layers together with coloured trouser and leather shoes. The clothing style help us identifying him as probably one of the manager of the farm. On the top of the painting some space is also reserved to the awaking of the animal world. A bear appear just outside the wood, just awaken from its winter hibernation, its show here eating the \“arum\” a specific plant used by animal to clean their intestine. \
	The overall depiction show the seasonal awakening of the natural world, and its importance for the life of man and women of the castle.</p>"

	June_text=" <p>This fresco, as the one of May, is divided into three distinct scenes. In the bottom part, a heavenly garden welcomes the dance, accompanied by five musicians, of five aristocratic couples. One of the leading musicians is wearing Bernando Cles coat of arms, and the cardinal himself is represented as one of the characters in procession. The addition of these elements is the results of the sixteenth century restoration.\
	In the upper left, as in the previous month, a city is communicating throughout a bridge with a bucolic environment, where cows are milked by crouching shepherd, some people are carrying milk and some others are producing butter alongside small wooden huts covered with shingle roofs. It is the depiction a typical alpine environment. During end of June, in fact, dairy cows, calves and sometimes mares are delivered to a shepherd who leads them towards richer and higher grazing.\
	The painter wanted to extremely accurately represent the main activities carried out by herdsmen such as milking the cattle, the production of butter with a churn \(a cylindrical container with a wooden piston\). The production of the cheese is also represented, we can, in fact, see in the foreground a farmer pressing his hands on a piece of cheese paste inside a wooden container.</p>"

	July_text="<p>The humble activities dominate the wall painting of July. On the bottom part we can see the a nobleman offering an hawk to a lady, dressed completely in white. Behind them an elegant red building surrounded by walls and, on the cusp of both its front and the rear façade it is possible to notice a storks nesting on the roof. This was until very recently a typical habit in the Bohemian-Moravian area, where, in order to allow the birds to nest on the steep roofs, they place cart wheels on them.\
	All the upper part is dedicated to the seasonal and more humble activities like fishing and mowing. All agricultural tools such as scythes, rakes, pitchforks three teeth and the boxes to bring the grindstone, are accurately represented as well as the different occupations of the farmers: mowing, moving the hay and sharpening the blade.\
	On the upper part, the border of the scene is closed by a series of multicoloured rocks, which help creating some superb chromatic effects.</p>"

     May_text=" <p>Watching this wall painting our eyes are immediately attracted by a lawn, strewn with flowers and closed by a trellis of roses. Here, sitting, standing or kneeling, they are young aristocrats or dames\: five couples and a group of two ladies with an older male character. In the background, almost unrecognisable for the loss of colour, a figure with a long sword threatens a lion, which seems hurling on him.\
     At the top we can admire a city surrounded by red walls, that seems the same which appear on February, which has at its centre a white Gothic church. From the entrance of the castle starts a bridge of planks which, crossing a moat, leads to a meadow just at the foot of the mountain. Here two couples sit around a table and sit next to a fountain, with the same colour of the castle wall, from which water flows through a slit. The scene, badly damaged, was repainted in the sixteenth century. This scene shows the heroic ideals of the typical courtly world.\
     On the top of the painting is pictured a large citadel. The walls are jagged and protected with robust high towers as well as loopholes and bretèche and at its center stand a large Gothic church, with a large portal and the characteristic buttresses. It remains unknown its identity. Some scholars, however, have speculated that its originate from a Prince Bishop\’s suggestion, and should represent the memory of a loved place.</p>"

	October_text=" <p>The harvest and the press of the grapes, as well as the preparation of must occupy the entire month of October. The only members of the aristocratic world are the two ladies in the bottom right and the gentlemen, in the bottom left, which is tasting the just produced wine.\
	The vineyard climbs high up on the slopes of the mountains, represented again by different shapes and evocative colours. A deep fissure, from the top to the bottom part, cross the the whole painting. Numerous problems trouble this fresco, from colour fading to abrasions, and it seems that the only healthy part is the one around the lathe. </p>"			        

	September_text="<p>This wall painting is divided into 4 narrative lines and it is mainly occupied by the falconry hunting scene. This courtly element is common to the month of July, August and September, like the rose garden is for the ones of April, May and June.\
	In the bottom part two ladies together with a knight come out from a red castle, the same that appear in July, for spending the day in a hunting party. In the higher part it is possible to see two riders equally intent on hunting with falcons.\
	Above them a peasant collects turnips in a field while the final scene depict two peasants leading a plow. The barn in the upper part is a continuation of the one present in previous month\’s wall painting, creating a temporal continuity between the two scenes.</p>"

	August_text="<p>In the August wall-painting we clearly see the social division between the nobles and the working class at the time of Giorgio di Liechtenstein. The scene is divided in three different parts.\
	The bottom is as usual dedicated to the nobles, which here appear relaxed and ready to enjoy one of their most loved hobby\: the falconry. The green colour dominate this part of the scene, and help us picture this bucolic environment where there is not tension, but only quiet.\
	In contrast with the bottom part the upper one show the population at work. The landscape, now coloured in yellow, it is frantic with activities, the dynamicity of the scene can clearly be seen all across the figures which appear bended and contorted and, in contrast with the one of July, they strongly express the strain and the fatigue of the work under the sun.\
	The middle part separate conceptually, but also figuratively, throughout the creation, with the use of fences, of different spaces, the two scenes, and act as a medium between the two world, merging the world of the farmers with the one of the aristocracy. In this middle part, the persons piling up can be recognised as having a different social status, because their clothes appear of better craftsmanship than the one of the farmers. A priest is also figuratively placed in this middle-earth between farmer and nobles.</p>"

	February_text="<p>In February the atmosphere, together with their colour of the painting change again, showing a more rich palette, and giving us a peek of what the life within the city looked like in that period. No nature here and no farmers, but only nobles and artisan, protagonist of the everyday life within the castle walls.\
	February was always considered the beginning of the liberation from the constraint of the winter, and this painting do not make an exception. In order to celebrate a joust is organised and the young nobles are fighting each other trying to capture the attention of the dames that are watching them. The colourfulness of the painting constraint our attention to the upper part of the composition, where the redness of the wall, the ochre of the pavment are blend together with the colour of the vests and of the horses creating a colorful palette that take us away from the more rigid month of December and January. \
	On the bottom part, on a third visual line we can find instead an old blacksmith, which in contrast with the aristocracy is occupied in his daily work. We can distinguish its tool and take a peek of what it seems doing\: horseshoe. It is not so often we can find such figures in this type of painting, and the representation of a city day, with its full life, it is a nice exception that make us understand also the importance that Giorgio di Liechtenstein and Venceslao gave to the city, not anymore only in relation to the countryside, but as an entity able to life and support itself.</p>"

January_text="<p>The snow is the protagonist of this month. A snow so white and pure that capture our eyes as soon as we look at the painting. The colour continue from the bottom to gradually become darker and more colourful until reaching the sky, where the peak of dark blue contrast with the color reflected by the more white part, creating a interesting contrast of dark and light, which is then reflected on the figure depicted in the painting.\
The aristocracy, after December, become again protagonist, with the great figure on the bottom part. Great not only for their size, but because it opens a small window on the custom and fashion of the time. The very first thing we notice are two familiar and happy group throwing balls to each other, dressed with the typical fashion of the time. The wool is here the protagonist, but the warmth of the element do not extirpate the necessity for a complex clothes, that even in winter should be distinguishable and ready to amaze the viewers. Not only clothes, but also the beard seems to comply with the fashion of the time, providing us with another document of the customs of the local aristocracy.\
The depiction of the castle in this painting has an important historical role, because we can start to see how the architectonical changes started to took place, and what’s their differences and similarities with the castle that we preserve today.\
Interesting in the upper part of the painting we can see another hunting scene. A fox, is running and trying to escape, while some local hunter with their dogs are chasing it.</p>"

	December_text="<p>In December the colours become darker and the landscape gloomy. The tree lost their leaves and all the activity seems to be oriented towards the procurement of supplies for the winter.\
	Biggest part of the painting is occupied by the city, real protagonist of this month. The outdoor activities are limited to the strict necessary and everyone seems to be close inside their own house. No happiness is shown, only work. All around the city everyone is busy and the rhythm seems almost frenetic.\
	The upper part of the painting, representing the mountain, already dressed in white, show the lumberjacks at work, while just below we can see some merchants bringing the wood, very important resource during this month, into the city. Looking at the painting we notice a quite strong absence, it is not depicted, in fact, any aristocratic activity, underling the solitude and the preference for a more intimate type of life.\
	Only on the bottom part we can see a noble woman escorted by two knights, probably leaving the city for dealing with some affair. But their expressions, captured during such daily task, seems almost covered by a veil of sadness.</p>"
	
November_text="<p>In the wall painting of November the atmosphere starts to change, preparing the viewer for the next colder and more arid month. Even if in October the colours become darker in respect of the previous and more colourful months, the green was still the main protagonist of the painting, while in November a stronger ocher tonality represent the beginning of a new life.\
If the previous months depict in rich details the work carried out in the countryside, starting November the focus come back to the Castle, a place where it is possible to hide from the harsh winter.\
Nevertheless the winter is not there yet, and some work continue. In the bottom of the painting we can notice some swineherd, not in the field anymore, which are feeding the pigs, a clear reference to the painting of the month of November in the Très riches heures du duc de Berry.\
The pigs are on their way to the city for meeting their faith. Being fed and made fat during the summer, are now brought to the butchers which, based on the medieval practice, would start at the end of the month to stock and prepared the meat for the next months.\
If the small bottom part is reserved to the city, the biggest one is instead occupied by a aristocratic practice of the time, the bear hunting.\
In the top part it is in fact possible to distinguish a female bear with its cubs, which are trying to run into woods, but they are almost surrounded by various knight with their dogs. A small part of the comitive is instead waiting trying to get warm near the fire.\
 The bear hunt was reserved at the time only to the high nobility and it was considered a very important moment to demonstrate courage and dexterity, two of the finest skills required to a knight.</p>"
	
	
	
	
	// create an array with intersections with planes
	var intersects = raycaster.intersectObjects( planes.children );
	// if there is one (or more) intersections
	if ( intersects.length > 0 ){
		// Set Default
		planes.children.forEach(function( plane ) {plane.material.opacity=[0.3];});
		//hotspots.children.forEach(function( hotspot ) {hotspot.visible=false;});

		//change the opacity of the intersected plane --> to demonstrate interaction
		intersects[ 0 ].object.material.opacity=[0.5];

		$('#descrizione').html(linkText_empty);

		// console.log(intersects[ 0 ].object.position);
		// camera.position.x = 1;
		// camera.position.y = 4.5;
		// camera.position.z = 1;
		// camera.lookAt(intersects[ 0 ].object.position);



		if (intersects[ 0 ].object.userData.name=="Jan")
			{$('.month_img').attr("src", "img/aquila_frescoes/gennaio.jpg", "alt", "January");
			 $('#month_name').text("January");
			 $('#month_desc').html(January_text);}
		if (intersects[ 0 ].object.userData.name=="Feb")
			{$('.month_img').attr("src", "img/aquila_frescoes/febbraio.jpg", "alt", "February");
			 $('#month_name').text("February");
			 $('#month_desc').html(February_text);}
		if (intersects[ 0 ].object.userData.name=="Apr")
			{$('.month_img').attr("src", "img/aquila_frescoes/aprile.jpg", "alt", "April");
			 $('#month_name').text("April");
			 $('#month_desc').html(April_text);}
		if (intersects[ 0 ].object.userData.name=="May")
			{$('.month_img').attr("src", "img/aquila_frescoes/maggio.jpg", "alt", "May");
			 $('#month_name').text("May");
			 $('#month_desc').html(May_text);}
		if (intersects[ 0 ].object.userData.name=="Jun")
			{$('.month_img').attr("src", "img/aquila_frescoes/giugno.jpg", "alt", "June");
			 $('#month_name').text("June");
			 $('#month_desc').html(June_text);}
		if (intersects[ 0 ].object.userData.name=="Jul")
			{$('.month_img').attr("src", "img/aquila_frescoes/luglio.jpg", "alt", "July");
			 $('#month_name').text("July");
			 $('#month_desc').html(July_text);}
		if (intersects[ 0 ].object.userData.name=="Aug")
			{$('.month_img').attr("src", "img/aquila_frescoes/agosto.jpg", "alt", "August");
			 $('#month_name').text("August");
			 $('#month_desc').html(August_text);}
		if (intersects[ 0 ].object.userData.name=="Sep")
			{$('.month_img').attr("src", "img/aquila_frescoes/settembre.jpg", "alt", "September");
			 $('#month_name').text("September");
			  $('#month_desc').html(September_text);}
		if (intersects[ 0 ].object.userData.name=="Oct")
			{$('.month_img').attr("src", "img/aquila_frescoes/ottobre.jpg", "alt", "October");
			 $('#month_name').text("October");
			 $('#month_desc').html(October_text);}
		if (intersects[ 0 ].object.userData.name=="Nov")
			{$('.month_img').attr("src", "img/aquila_frescoes/novembre.jpg", "alt", "November");
			 $('#month_name').text("November");
			 $('#month_desc').html(November_text);}
		if (intersects[ 0 ].object.userData.name=="Dec")
			{$('.month_img').attr("src", "img/aquila_frescoes/dicembre.jpg", "alt", "December");
			 $('#month_name').text("December");
			 $('#month_desc').html(December_text);}

	}
	else{
		planes.children.forEach(function( plane ) {plane.material.opacity=[0.3];});
		planes.children.forEach(function( plane ) {plane.visible=false;});
		//hotspots.children.forEach(function( hotspot ) {hotspot.visible=false;});



		$('#descrizione').html("<div id=\"descrizione_box\">\
						     	<div id=\"description_paragraph\" >\
							       <p>The interior hall of the Torre dell’Aquila \(Eagle Tower\) include one of the most noteworthy example of International Gothic: the \"Ciclo dei Mesi\". Commissioned by the he Prince-Bishopric of Trent Giorgio di Liechtenstein, and painted by <em>Maestro Venceslao</em> at the end of  XIV, beginning of XV century, the Ciclo dei Mesi comprise eleven different panes. Originally the panes were twelve, but the month of March, painted on a wooden stand, was later destroyed during a fire.\
							        The represented scenes picture, during a timespan of different seasons, the leisure activities of the aristocracy as well as the work carried out by the working class, and are considered a precious document of the economic social and political life in Trentino in the end of the XIV century.\
							        Very much attention is given to the seasonal changes. The winter landscape, bare and white, becomes rich with lush vegetation during spring\; summer crops mark the peak of of agricultural activity, while the trees in November are surrounded by dry leaves fallen on the ground. The keen precision that the author put in the depiction of the changes in color can be found again in the details of the clothes, which, underling the local aristocratic customs, help us discover the fashion of the time. The working class is instead always depicted with humble vests during their typical working activity. The Ciclo dei Mesi allow us to picture the various activities: the plowing, the grape harvest, the sowing, the harvesting of wood for the farmers and outdoor games comprising medieval joust and hunt. The frescoes are spatially contiguous, and each of them is separated by a thin painted column, as well as identified by the name of the corresponding sign of the zodiac.\
							        Different iconographical models are used, most notably the <em>\"Tacuinum sanitatis\"</em>, the <em>\"Livre de la chasse\"</em> di Gaston Phoebus and the <em>\"Très riches heures du Duc de Berry\"</em>.</p>\
							       <p><h5><em>Source wikipedia.org</em></h5></p>\
						       </div>\
					       </div>");
	}
}

}



function onMouseMove( event ) {
	var camera = viewer.camera;

	var scroll = $('body').scrollTop();
	var top = $('#potree_render_area').offset().top;
	var left = $('#potree_render_area').offset().left;
	// calculate mouse position in normalized device coordinates
	if (event.clientX-left>0 && event.clientY-top+scroll>0 && event.clientX < $('#potree_render_area').width()+left && event.clientY < $('#potree_render_area').height()+top - scroll && onDropDown==false)
	{var mouse = { x : 0 , y : 0 };
	mouse.x =((event.clientX-left)/ $('#potree_render_area').width()) * 2 - 1;
	mouse.y = - ((event.clientY-top+scroll)/ $('#potree_render_area').height() ) * 2 + 1;




	raycaster.setFromCamera( mouse, camera );


	// //Find the intersections with POIs
	// var intersects_poi = raycaster.intersectObjects( hotspots.children );
	// // if there is one (or more) intersections with POIs...
	// if ( intersects_poi.length > 0 ){
	// 	// And the first one is visible...
	// 	if (intersects_poi[ 0 ].object.visible==true) {
	// 		//....then change (slightly) the scale and the opacity to demonstrate interaction/"clickability"
	// 		intersects_poi[ 0 ].object.scale.set(1.1,1.1,1.1);
	// 		intersects_poi[ 0 ].object.material.opacity=[1];

	// 	}}
	//else return to default scale and opacity
	//else {hotspots.children.forEach(function( hotspot ) {hotspot.scale.set(1,1,1); hotspot.material.opacity=[poi_opacity];});}


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
	//hotspots.children.forEach(function( hotspot ) {hotspot.lookAt(camera.position);});


}






$('.dropdown-menu li a').click(function() {

		// event.stopPropagation();
		

		if ($(this).text()=="Stanza")
			{linkText="<div id=\"descrizione_box\">\
						     	<div id=\"description_paragraph\" >\
							        <p>Il Ciclo dei Mesi è un gruppo di affreschi nella Torre dell'Aquila nel castello del Buonconsiglio di Trento, dipinti dal maestro Venceslao (documentato in città nel 1397). Risalgono alla fine del XIV secolo-inizio del XV e sono il migliore esempio di gotico internazionale in Trentino e uno dei più significativi dell'Italia settentrionale.</p>\
							        <p>Il ciclo si articola oggi in undici diversi riquadri, poiché il mese di Marzo era stato dipinto su un supporto di legno ed è andato perduto durante un incendio. L\'insieme è strutturato come una loggia architravata sostenuta da esili colonnine tortili, dalla quale si vedono, come in un ipotetico affaccio che sfonda la parete, le varie occupazioni signorili e contadine di ciascun mese. Tutti gli sfondi e i dettagli architettonici sono raccordati tra scena e scena, come in un panorama unitario.</p>\
							        <p>Le scene, ricchissime di particolari tratti dall\'osservazione della vita reale (magari filtrate dalle illustrazioni dei Tacuina Sanitatis), mostrano la vita dei nobili, le attività dell\'agricoltura e della pastorizia, con un continuo e pacato intreccio tra mondo cavalleresco e mondo quotidiano. Poche sono invece le concessioni al grottesco e al macabro, che caratterizzavano invece altre zone italiane ed europee.</p>\
							        <p>Viene prestata molta attenzione al succedersi delle stagioni: il paesaggio invernale spoglio e imbiancato dalla neve diventa rigoglioso di vegetazione in primavera, i raccolti estivi segnano l\'apice dell\'attività agricola, mentre gli alberi nel mese di novembre sono circondati dalle foglie secche cadute sul terreno. La cura dei particolari ritorna nella descrizione delle vesti, l\'abbigliamento infatti permette di riconoscere i caratteri tipici della moda del tempo: per i nobili, occupati in svaghi e tornei, gli abiti sono ricchi di colori, mentre molto più semplici e pratici sono quelli delle classi umili, rappresentate sempre al lavoro. Si può vedere la minuziosità dei particolari anche nei cambiamenti delle stagioni.</p>\
							       <p>In ogni affresco è presente la figura del sole con accanto il segno zodiacale corrispondente ad ogni mese.</p>\
							       <p>Modelli iconografici del ciclo sono, oltre al già citato Tacuinum sanitatis, il Livre de la chasse di Gaston Phoebus e le Très riches heures du Duc de Berry.</p>\
							       <br>\
							       <p><h5><em>Fonte wikipedia.org</em></h5></p>\
						       </div>\
					       </div>"
				$('#descrizione').html(linkText);	}

		else { $('#descrizione').html(linkText_empty);

		    	if ($(this).text()=="Gennaio")
					{$('.month_img').attr("src", "img/aquila_frescoes/gennaio.jpg", "alt", "gennaio");
					 $('#month_name').text("Gennaio");
					 $('#month_desc').html(fake_text);}
				if ($(this).text()=="Febbraio ")
					{$('.month_img').attr("src", "img/aquila_frescoes/febbraio.jpg", "alt", "febbraio");
					 $('#month_name').text("Febbraio");
					 $('#month_desc').html(fake_text);}
				if ($(this).text()=="Aprile")
					{$('.month_img').attr("src", "img/aquila_frescoes/aprile.jpg", "alt", "aprile");
					 $('#month_name').text("Aprile");
					 $('#month_desc').html(April_text);}
				if ($(this).text()=="Maggio")
					{$('.month_img').attr("src", "img/aquila_frescoes/maggio.jpg", "alt", "maggio");
					 $('#month_name').text("Maggio");
					 $('#month_desc').html(May_text);}
				if ($(this).text()=="Giugno")
					{$('.month_img').attr("src", "img/aquila_frescoes/giugno.jpg", "alt", "giugno");
					 $('#month_name').text("Giugno");
					 $('#month_desc').html(June_text);}
				if ($(this).text()=="Luglio")
					{$('.month_img').attr("src", "img/aquila_frescoes/luglio.jpg", "alt", "luglio");
					 $('#month_name').text("Luglio");
					 $('#month_desc').html(July_text);}
				if ($(this).text()=="Agosto")
					{$('.month_img').attr("src", "img/aquila_frescoes/agosto.jpg", "alt", "agosto");
					 $('#month_name').text("Agosto");
					 $('#month_desc').html(fake_text);}
				if ($(this).text()=="Settembre")
					{$('.month_img').attr("src", "img/aquila_frescoes/settembre.jpg", "alt", "settembre");
					 $('#month_name').text("Settembre");
					 $('#month_desc').html(September_text);}
				if ($(this).text()=="Ottobre")
					{$('.month_img').attr("src", "img/aquila_frescoes/ottobre.jpg", "alt", "ottobre");
					 $('#month_name').text("Ottobre");
					 $('#month_desc').html(October_text);}
				if ($(this).text()=="Novembre")
					{$('.month_img').attr("src", "img/aquila_frescoes/novembre.jpg", "alt", "novembre");
					 $('#month_name').text("Novembre");
					 $('#month_desc').html(fake_text);}
				if ($(this).text()=="Dicembre")
					{$('.month_img').attr("src", "img/aquila_frescoes/dicembre.jpg", "alt", "dicembre");
					 $('#month_name').text("Dicembre");
					 $('#month_desc').html(fake_text);}
			}


	


});