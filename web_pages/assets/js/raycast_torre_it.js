
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
							<p>Il Ciclo dei Mesi è un gruppo di affreschi nella Torre dell'Aquila nel castello del Buonconsiglio di Trento, dipinti dal maestro Venceslao (documentato in città nel 1397). Risalgono alla fine del XIV secolo-inizio del XV e sono il migliore esempio di gotico internazionale in Trentino e uno dei più significativi dell'Italia settentrionale.</p>\
							<p>Il ciclo si articola oggi in undici diversi riquadri, poiché il mese di Marzo era stato dipinto su un supporto di legno ed è andato perduto durante un incendio. L'insieme è strutturato come una loggia architravata sostenuta da esili colonnine tortili, dalla quale si vedono, come in un ipotetico affaccio che sfonda la parete, le varie occupazioni signorili e contadine di ciascun mese. Tutti gli sfondi e i dettagli architettonici sono raccordati tra scena e scena, come in un panorama unitario.</p>\
							<p>Le scene, ricchissime di particolari tratti dall'osservazione della vita reale (magari filtrate dalle illustrazioni dei Tacuina Sanitatis), mostrano la vita dei nobili, le attività dell'agricoltura e della pastorizia, con un continuo e pacato intreccio tra mondo cavalleresco e mondo quotidiano. Poche sono invece le concessioni al grottesco e al macabro, che caratterizzavano invece altre zone italiane ed europee.</p>\
							<p>Viene prestata molta attenzione al succedersi delle stagioni: il paesaggio invernale spoglio e imbiancato dalla neve diventa rigoglioso di vegetazione in primavera, i raccolti estivi segnano l'apice dell'attività agricola, mentre gli alberi nel mese di novembre sono circondati dalle foglie secche cadute sul terreno. La cura dei particolari ritorna nella descrizione delle vesti, l'abbigliamento infatti permette di riconoscere i caratteri tipici della moda del tempo: per i nobili, occupati in svaghi e tornei, gli abiti sono ricchi di colori, mentre molto più semplici e pratici sono quelli delle classi umili, rappresentate sempre al lavoro. Si può vedere la minuziosità dei particolari anche nei cambiamenti delle stagioni.</p>\
							<p>In ogni affresco è presente la figura del sole con accanto il segno zodiacale corrispondente ad ogni mese.</p>\
							<p>Modelli iconografici del ciclo sono, oltre al già citato Tacuinum sanitatis, il Livre de la chasse di Gaston Phoebus e le Très riches heures du Duc de Berry.</p>\
							<p><h5><em>Fonte wikipedia.org</em></h5></p>\
						</div>\
					</div>"

	fake_text="<p>Vivamus risus ex, varius et libero quis, placerat rhoncus mi. Aenean sit amet aliquam nibh. Aliquam tortor est, consequat vitae libero at, vehicula mattis tellus. In condimentum consequat tempor. Nullam at lorem semper, ultricies mi et, mollis turpis. Mauris ut leo ac magna dapibus luctus. Mauris mi nibh, ornare et ipsum vel, finibus molestie nulla. Nunc eleifend leo eget ipsum pellentesque, vel varius ipsum placerat. Mauris tincidunt sapien et efficitur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec at pellentesque arcu. Pellentesque justo enim, porttitor a arcu non, mollis venenatis felis.</p>\
				        <p>Praesent viverra pellentesque enim, vitae porta erat elementum quis. Maecenas posuere mattis velit rutrum iaculis. Duis non efficitur nibh. Aliquam laoreet risus a nulla auctor interdum. Ut cursus leo eu justo laoreet porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae nisi dictum, vulputate odio sed, blandit tortor. Fusce eu turpis ut mi porta bibendum nec eu libero.</p>\
				        <p>Praesent libero sem, feugiat dapibus mattis et, vehicula eu turpis. In vitae consequat leo, quis venenatis justo. Fusce auctor bibendum aliquet. Nullam eu mi lectus. Maecenas risus mauris, feugiat nec ullamcorper non, efficitur et elit. Sed porta tellus ut aliquam auctor. Vivamus id lectus sed tellus cursus sodales sit amet a velit.</p>\
				        <p>Quisque eu aliquam leo. Sed feugiat nulla massa, a faucibus nulla sagittis eget. Donec ullamcorper tincidunt risus et pharetra. Vivamus tristique dui metus, vitae gravida nisl volutpat eu. Vivamus dapibus leo sit amet metus luctus dapibus. Vivamus sodales tempor elit, at pellentesque elit eleifend sit amet. Aliquam erat volutpat.</p>"

	April_text="<p>Il mese di Aprile segna la ripresa delle attività agricole dopo i mesi invernali: in basso due contadini si affaccendano con un aratro, mentre in alto si procede con le successive attività di semina e di erpicatura. Anche le giovani dame al centro sono intente a curare il loro piccolo orto.\
				        In alto un orso, appena uscito dal letargo invernale, si nutre con delle erbe particolari chiamate \"arum\", che servono per pulire l\'intestino.</p>\
				        <p>Il mese di Aprile segna la ripresa delle attività agricole dopo i mesi invernali: in basso due contadini si affaccendano con un aratro, mentre in alto si procede con le successive attività di semina e di erpicatura. Anche le giovani dame al centro sono intente a curare il loro piccolo orto. \
				        In alto un orso, appena uscito dal letargo invernale, si nutre con delle erbe particolari chiamate \"arum\", che servono per pulire l\'intestino</p>\
				        <p>In questo pannello vi sono ripresi agricoltori intenti nell'attività di erpicatura: l'erpice, strumento in legno a telaio quadrato o rettangolare armato di denti in legno o in ferro, serve per sminuzzare ancora di più il terreno dopo l\'aratura oppure, avvenuta la semina, per ricoprirlo. Il lavoratore che semina (insieme all\'accatastatore di agosto) si distingue da tutti gli altri per la diversità dei vestiti che mostrano una certa agiatezza. Indossa cappello in panno con fasce pendenti, guarnelli in colore, orlati e faldati, brache aderenti colorate a tinta unite e calzature in pelle. Si tratta probabilmente di fattori che gestiscono l\'azienda agricola di qualche ricco mercante</p>"

	June_text="<p>L'impaginazione dell'affresco del mese di Giugno è del tutto analoga a quella del vicino mese di Maggio, essendo ripartita in tre scene ben distinte.\
				        In basso un giardino paradisiaco accoglie una danza di cinque coppie aristocratiche accompagnate da cinque musicanti.</p>\
				       <p> In alto a sinistra, come nel mese precedente, una città è messa in comunicazione da un ponte con un luogo alpestre dove le mucche accovacciate sono munte dalle pastore che trasportano il latte e lavorano il burro accanto a piccole malghe in legno coperte da tetti di scandole. Anche questo mese presenta alcuni restauri cinquecenteschi: uno dei musici porta sulle vesti lo stemma del Cles e lo stesso cardinale è rappresentato in uno dei personaggi del corteo.</p>\
				       <p>Verso la fine di giugno iniziano gli spostamenti del bestiame in malga: vacche da latte, vitelli, manze e a volte cavalle vengono contrassegnati e consegnati al pastore che li conduce nei pascoli ad alta quota. \
				       Nell'affresco di questo mese si trovano tutte le costruzioni concentrate in un solo luogo: necessaria è la cascina - un edificio in muratura o legno con tetto di paglia o come in questo caso in scandole – che rappresenta ambiente protetto per il lavoro caseario e rifugio per i pastori, mentre un'area esterna delimitata da un recinto raccoglie la mandria che vi dorme di notte. \
				       Il pittore ha voluto rappresentare in maniera estremamente accurata le principali attività svolte dai malgari quali la mungitura del bestiame, la produzione del burro mediante la zangola (un recipiente cilindrico con un pistone in legno immanicato) e del formaggio. Per quest'ultima attività il pittore ha rappresentato in primo piano un cascinaio che pigia con le mani una parte di pasta di formaggio dentro una fascina di legno dopo averla presa da un mastello.</p>"

	July_text="<p>Le attività umili dominano la rappresentazione di questo mese, il cui stato di conservazione è migliore di quello dei vicini mesi di maggio e giugno.\
				        La nota cortese è data in basso dall \'offerta del falco alla dama e dall'elegante dimora rossa circondata da mura, con finestre e vetrate e cicogne che nidificano sul tetto.</p>\
				        <p>A popolare la scena sono i servi che trasportano i falchi, i pescatori nel lago al centro e soprattutto i contadini intenti a rastrellare e a falciare il fieno.\
				        Tutti gli strumenti agricoli, come le falci fienaie, i rastrelli, i forconi a tre denti e gli astucci per portare la cote, sono accuratamente rappresentati, così come le diverse occupazioni dei contadini: c'è chi falcia, chi aguzza il filo e chi smuove il fieno.\
				        Un seguito di rocce di diversi colori chiude la scena nella sua parte superiore con superbi e variati effetti cromatici.</p>\
				        <p>Un particolare dell'affresco di Luglio: sulle cuspidi della facciata di accesso e quella retrostante si trovano due nidi di cicogne. Si tratta di un'usanza tipicamente boema-moraviana che resiste fino quasi ai nostri giorni e che viene predisposta sistemando sui tetti una ruota da carro per nidificare.</p>"

     May_text="<p>In basso un prato cosparso di fiori chiuso da una spalliera di rose. Sul prato, seduti, in piedi o inginocchiati, sono giovani aristocratici o dame, cinque coppie e un gruppo di due dame con un personaggio maschile più anziano. Entro il roseto si scorse una figura, quasi illeggibile per le cadute di colore, che minaccia con una lunga spada un leone che si avventa su di lui. Nella parte superiore è rappresentata una città cinta da una cortina di mura che ha al suo centro una bianca chiesa gotica. Un ponte di assi che attraversa un fossato porta ad un prato ai piedi della montagna dove due coppie siedono attorno ad una tavola imbandita accanto ad una fontana di marmo rosso da cui l'acqua fluisce attraverso una fenditura. La scena, molto danneggiata, è stata ridipinta nel restauro cinquecentesco.</p>\
     			        <p>In un particolare del mese di Maggio, sopra la sfilata di nobili, seminascosto dalla vegetazione, un cavaliere si difende dall'assalto di un leone. Questa scena evidenzia l'ideale eroico tipico del mondo cortese nel quale è stato elaborato il Ciclo dei Mesi di Torre Aquila</p>\
     			        <p>Rimane invece ancora sconosciuta l'identità della cittadella fortificata rappresentata in questo pannello. Alcuni studiosi hanno ipotizzato che il principe vescovo l'abbia suggerita al pittore in ricordo di un luogo amato. Le mura sono frastagliate da merlature e protette con torri alte e robuste fornite di feritoie e bertesche. L'ingresso alla cittadella è garantito da un ponte in legno sospeso su un fossato. Al centro di un'ampia piazza si trova una chiesa gotica, con ampio portale ed i caratteristici contrafforti, munita di due campanili in facciata. A destra dell'edificio di culto un lungo portico architravato ospita alcune botteghe dove operavano sarti, calzolai, e altri artigiani</p>"

	October_text="<p>La vendemmia, la spremitura dell’uva, la preparazione del mosto occupano interamente il mese di Ottobre. Unici componenti del mondo aristocratico sono le due dame in basso e il gentiluomo che assaggia il mosto. Il vigneto si arrampica in alto fino alle pendici delle montagne, ancora una volta rappresentate con forme e colori di grande suggestione. Una profonda fenditura, causa di estese lacune, attraversa la scena dall’alto in basso, mentre numerose sono le cadute di colore, le abrasioni e le ridipinture che l’unica parte integra risulta essere quella attorno al tornio</p>"			        

	September_text="<p>Le scene di vita signorile occupano il mese di settembre: si tratta di scene di caccia con il falco, elemento cortese che accomuna i mesi di Luglio, Agosto e Settembre come il roseto e la corte d’amore caratterizzano i mesi di Aprile, Maggio e Giugno. </p>\
				        <p>In basso due dame e un cavaliere escono dalla porta di un castello per una partita di caccia, mentre più in alto vi sono due cavalieri ugualmente intenti nella caccia con il falco.\
				        Nella zona mediana una contadina raccoglie rape in un campo, mentre in alto due contadini conducono un aratro.\
				        Il castello rosso e il fienile in alto fanno da seguito alla cinta merlata e al villaggio del mese di Agosto, dando una continuità al paesaggio.</p>"

	August_text="<p>L’affresco che raffigura il mese di Agosto ci mostra chiaramente le divisioni tra le classi sociali, nobiltà e contadini, all’epoca di Giorgio di Liechtenstein. La scena può essere divisa in tre diverse sezioni.\
	La sezione in basso è dedicata alla nobiltà, e raffigura proprio alcuni nobili, che serenamente si preparano a una delle attività preferita dalla nobiltà dell’epoca: la falconeria. Il verde domina questa scena, e ci aiuta ad immaginare un universo bucolico, senza tensioni, dove predomina la calma e la serenità.\
	La sezione in alto mostra la popolazione al lavoro. Qui il ritmo diventa frenetico, e i colori splendono di un giallo che è cornice dell’estate, un giallo che rappresenta l’affaccendarsi di molteplici attività. La scene è dinamica, e le figure appaiono piegate e contorte, affaticata da un lavoro estenuante sotto un sole cocente. Il contrasto con Luglio mette in chiara luce l’urgenza delle varie attività, quasi a simboleggiare una fine ormai prossima. \
	La sezione centrale è separata dalle altre sia concettualmente che figurativamente. Le recinzioni e l’uso di spazi vuoti aiutano a creare una sorta di sezione cuscinetto tra le due, un medium tra il mondo contadino e quello nobile. Questo viene maggiormente ricalcato dalla presenza di figure vestite con uno stile più sontuoso (tra di loro spunta anche un prete che legge il suo breviario), che  ci mostra chiaramente le complesse stratificazioni sociali dell’epoca.</p>"

	February_text="<p>Febbraio si presenta in una dimensione diversa. L’atmosfera cambia insieme ai colori, che appaiono più ricchi e tendenti a cromaticamente forti. L’artista ci mostra una scena di vita cittadina. La natura è qui assente, e i nobili e gli artigiani si presentano come i soli protagonista di questo spezzone di vita medievale. Febbraio è solitamente associato alla fine del rigore invernale, ed anche in questo frangente l’associazione tra i due risulta palese.\
	Proprio per celebrare la fine delle severità e della rigidezza, due sentimenti tipici dei mesi più freddi, viene organizzata una giostra medievale, dove è possibile notare la sfida di alcuni giovani nobili al fine di attirare le attenzioni delle giovani spettatrici. \
	La palette dei colori mischia il rosso delle pareti, l’ocra del pavimento, i colori sgargianti dei vestiti e dei cavalli, catturando la nostra attenzione e dirigendo il nostro sguardo verso la parte alta del dipinto. I colori contrastano fortemente con quelli di Dicembre e Gennaio, ricordandoci che l’inverno si sta trasformando, e il clima diventa finalmente più mite.\
	Importante la sezione più bassa del dipinto, dove si può notare un fabbro alle prese con il suo lavoro quotidiano. La raffigurazione dei particolari è qui molto importanti, poiché ci aiuta a scoprire e distinguere i tipici attrezzi in uso durante questo periodo, nonché il tipo di lavoro svolto. \
	L’illustrazione della quotidianità cittadina, come si può notare anche dai pannelli vicini, non è un tema scontato, e sottolinea l’importanza e il ruolo attribuito alla città da Giorgio di Liechtenstein e da Venceslao. Questa è oramai un entità a se stante, che vive da se e non più forzatamente in relazione alla campagna.</p>"

January_text="<p>La neve è la vera protagonista di questo affresco. Il suo candore cattura lo sguardo dello spettatore e lo trasporta dalla sezione in basso, la più pura, a un graduale oscuramento che a culmine nel blu notte del cielo. L’utilizzo di questa palette da vita a forte contrasto tra i due colori.\
La nobiltà è qui nuovamente la protagonista, e nella sezione in basso possiamo ammirare, in tutta la loro grandezza (figurativamente parlando) un gruppo di nobili che gioca con la neve. I dettagli di questa scena ci aiutano a gettare una luce su quelli che sono le abitudini e la moda del tempo. I vestiti, chiaramente in lana, sono complessi e colorati, secondo i dettami del tempo. Non solo i vestiti, ma anche le barbe sono in linea con la moda del tempo. Tutto questo assicura al dipinto lo status di documento della vita aristocratica locale al tempo di Venceslao.\
A causa della miriade di colori e del loro contrasto con il bianco della neve, i nostri occhi sono quasi ipnotizzati dalla sezione inferiore del dipinto, ignorando il resto della scena. Importante è qui l’architettura del castello, elemento di confronto con quello attuale, ma anche, nella sezione superiore, i cacciatori. Questi ultimi si dedicano alla caccia alla volpe,che si nota scappare via, seguita da una muta di cani.</p>"

	December_text="<p> Nell’affresco di Dicembre il paesaggio appare scuro e pesante. La città è al lavoro, e tutto sembra indirizzato verso la raccolta delle risorse necessarie per sopravvivere a un duro inverno.\
	Buona parte dell’affresco raffigura la città, vera protagonista di questa immagine. Tutti vi cercano rifugio, e le sole persone fuori dalle sue mura sono quelle incaricate del suo approvvigionamento. Non vi è divertimento nei visi dei contadini, ma solo la lucidità richiesta da un incessante lavoro. Tutte le figure sembrano occupate, e il dinamismo dei personaggi mostra l’impellenza e l’importanza dei loro compito. Nella sezione più alta le cime delle montagne appaiono già puntellate di bianco, e poco più in basso i taglialegna combattono contro il tempo accumulando il legname per l’inverno. La legna è portata subito in città, grazie ai dei carri trainati dai buoi, visibili nella parte più centrale.\
	I nobili, solitamente motore della narrazione e protagonisti dell’affresco, sono assenti. Venceslao sembra voler sottolineare le loro preferenze per uno stile di vita più intimo e riparato. La sola presenza è quella di una nobildonna, scortata da due cavalieri, in procinto di lasciare la città. Niente ci è svelato sui motivi del viaggio, ma vista l’espressione adombrata, che lascia trasparire un velo di tristezza, possiamo solamente immaginare un urgenza grave che la costringe a lasciare la sicurezza del focolare domestico per avviarsi in un cammino alla mercé del freddo clima invernale.</p>"
	
November_text="<p>Nell’affresco raffigurante Novembre possiamo notare come i colori si inscuriscano e l’atmosfera risulti più severa, quasi a prepararci al freddo che caratterizza i mesi invernali. Il verde, che anche in ottobre era visibile, si trasforma qui in color ocra, come a segnalare un nuovo inizio, una nuova stagione.\
Se negli affreschi dei mesi precedenti ci si focalizzava sul lavoro dei campi, ora l’attenzione incomincia a convergere verso il castello, futuro luogo di riparo dalle intemperie per tutta la popolazione.\
Nell’affresco possiamo notare alcuni tipici lavori novembrini. Molto importante è la macellazione del maiale, chiaro riferimento al mese di novembre nel Très riches heures du Duc de Berry. Era pratica medievale infatti, per i macellai, di macellare i maiali a fine novembre, in modo da poterne conservare al meglio le carni durante il periodo invernale. In questa raffigurazione possiamo notare, in basso, il porcaio che dirige i maiale verso le porte della città.\
Anche se il castello occupa due terzi dell’affresco, una buona parte è riservata alle pratiche nobiliari dell’epoca, in questo caso la caccia all’orso. Riservata solo ai nobili più importanti, era considerata un momento fondamentale per dare prova del proprio coraggio e della proprio destrezza.\
L’azione si concentra nella parte alta dell’affresco, dove è possibile scorgere una femmina d’orso seguita dai suoi cuccioli. Seguita dai cani corre verso il bosco, dove spera di trovare rifugio, senza rendersi conto che sarà fermata da alcuni cacciatori lì appostati.</p>"
	
	
	
	
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
							<p>Il Ciclo dei Mesi è un gruppo di affreschi nella Torre dell'Aquila nel castello del Buonconsiglio di Trento, dipinti dal maestro Venceslao (documentato in città nel 1397). Risalgono alla fine del XIV secolo-inizio del XV e sono il migliore esempio di gotico internazionale in Trentino e uno dei più significativi dell'Italia settentrionale.</p>\
							<p>Il ciclo si articola oggi in undici diversi riquadri, poiché il mese di Marzo era stato dipinto su un supporto di legno ed è andato perduto durante un incendio. L'insieme è strutturato come una loggia architravata sostenuta da esili colonnine tortili, dalla quale si vedono, come in un ipotetico affaccio che sfonda la parete, le varie occupazioni signorili e contadine di ciascun mese. Tutti gli sfondi e i dettagli architettonici sono raccordati tra scena e scena, come in un panorama unitario.</p>\
							<p>Le scene, ricchissime di particolari tratti dall'osservazione della vita reale (magari filtrate dalle illustrazioni dei Tacuina Sanitatis), mostrano la vita dei nobili, le attività dell'agricoltura e della pastorizia, con un continuo e pacato intreccio tra mondo cavalleresco e mondo quotidiano. Poche sono invece le concessioni al grottesco e al macabro, che caratterizzavano invece altre zone italiane ed europee.</p>\
							<p>Viene prestata molta attenzione al succedersi delle stagioni: il paesaggio invernale spoglio e imbiancato dalla neve diventa rigoglioso di vegetazione in primavera, i raccolti estivi segnano l'apice dell'attività agricola, mentre gli alberi nel mese di novembre sono circondati dalle foglie secche cadute sul terreno. La cura dei particolari ritorna nella descrizione delle vesti, l'abbigliamento infatti permette di riconoscere i caratteri tipici della moda del tempo: per i nobili, occupati in svaghi e tornei, gli abiti sono ricchi di colori, mentre molto più semplici e pratici sono quelli delle classi umili, rappresentate sempre al lavoro. Si può vedere la minuziosità dei particolari anche nei cambiamenti delle stagioni.</p>\
							<p>In ogni affresco è presente la figura del sole con accanto il segno zodiacale corrispondente ad ogni mese.</p>\
							<p>Modelli iconografici del ciclo sono, oltre al già citato Tacuinum sanitatis, il Livre de la chasse di Gaston Phoebus e le Très riches heures du Duc de Berry.</p>\
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