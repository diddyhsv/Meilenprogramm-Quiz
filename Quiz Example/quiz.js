//Creation Date: 7/10/2015
//Description: This program provides a basic quiz application that enables individuals to
//             create personality quiz websites with no javascript knowledge. All that is 
//             needed is a basic understanding of HTML and some creativity. 




var currentQuestion = 2; //
var flyingblue = okplus = asiamiles = etihadguest = krisflyer = iberiaplus = skymiles = royalclub = aadvantage = eurobonus = flyingclub = trueblue = norwegianreward = executiveclub = asianaclub = millemiglia = finnairplus = qantas = milesandbonus = milesandsmiles = aeroflotbonus = milesandmore = 0;
var progints = [okplus, asiamiles, etihadguest, krisflyer, iberiaplus, skymiles, royalclub, aadvantage, eurobonus, flyingclub, trueblue, norwegianreward, executiveclub, asianaclub, millemiglia, finnairplus, qantas, milesandbonus, milesandsmiles, aeroflotbonus, milesandmore]
/* 
	name: startQuiz
	desc: Removes all elements that are not needed after the
		   start of the quiz. 
	parameters: none
	returns: none
*/
function startQuiz() {
        document.getElementById("lore_brief").className = "invisible";
        document.getElementById("question-1").className = "question";
        var startBtn = document.getElementById('startQuizBtn');
        startBtn.parentNode.removeChild(startBtn);
    }
	
	
	
/* 
	name: getNumberOfQuestions
	desc: Used to dynamically get the  amount of questions 
		  that have been created on the HTML page. 
    parameters: none
    returns: totalQuestions
*/
function getNumberOfQuestions() {
        //QuerySelectorAll has better browser support in exchange for being slightly slower than gEBCN. 
        var totalQuestions = document.querySelectorAll('#quiz-questions .question').length;
        return totalQuestions;
    }
	
	

/* 
	name: nextQuestion
	desc: The primary tool for users to control their quiz position and 
		  executes functions in a way that promotes separation of interests.
    parameters: none
    returns: none
*/
function nextQuestion() {
        hideQuestion(currentQuestion);
        hideAnswerButton();
        showQuestion(currentQuestion);
        currentQuestion++;
    }
	

	
/* 
	name: setAnswerButton
	desc: Sets the visibility of the button element required to 
		  advance through questions to true. 
    parameters: none
    returns: none
*/
function setAnswerButton() {
        //yes, that's correct. this is my lazy way of input validation without annoyning users 
        //(e.g. transition on-click events) on the radio buttons...
        document.getElementById("confirm_answer").className = "";
    }



/* 
	name: hideAnswerButton
	desc: Assigns an invisible class (display: none;) to the button element 
		  required to advance through questions to true. 
    parameters: none
    returns: none
*/
function hideAnswerButton() {
        document.getElementById("confirm_answer").className = "invisible";
    }	
	
	

/* 
	name: hideQuestion
	desc: Hides the the question that a user has completed so the space
	can be swapped with another question. 
    parameters: id
    returns: none
*/
function hideQuestion(id) {
        var totalQuestions = getNumberOfQuestions();
        for (var i = 1; i <= totalQuestions; i++) {
            if (i !== id) {
                document.getElementById("question-" + i).className = "question invisible";
            }
        }
    }


	
/* 
	name: showQuestion
	desc: Will identify current question using ID parameter and
		  the invisible class free that have been created on the HTML page. 
    parameters: id
    returns: none
*/
function showQuestion(id) {
        var totalQuestions = getNumberOfQuestions();
        if (id <= totalQuestions) {
            document.getElementById("question-" + id).className = "question";
        } else {
			setEndingSentence() //begins the end screen process if id is above total question
        }
    }



/* 
	name: getEndingSentence
	desc: Handles calculations and provides the necessary information for 
		  the quiz sentence genernation process to work. 
    returns: content
*/
function getEndingSentence() {
    var quizRadio = document.getElementsByName("rq");
	var content = ''; //It's easier to handle if we simply merge all sentences into a string
    for (var i = 0; i < quizRadio.length; i++) {
        if (quizRadio[i].checked) {
            content += quizRadio[i].getAttribute("data-endingsentence"); //these are the attributes used to generate quiz answers
        }
    }
	return content;
}



/* 
	name: setEndingSentence
	desc: Collects information and outputs it to the HTML page.
    parameters: none
    returns: none
    .
*/
function setEndingSentence() {
	var personalityResults = getEndingSentence();
	var splitresult = personalityResults.split(",");
	var arr = calcResults(splitresult);
	arr = arr.sort(function (a,b){
	    if (a.substr(0,3) === "100") return -1;
        if (b.substr(0,3) === "100") return 1;
        if (parseInt(a.substr(0,2)) > parseInt(b.substr(0,2))) return -1;
        if (parseInt(a.substr(0,2)) < parseInt(b.substr(0,2))) return 1;
        return 0;	});
	result = resultoutput(arr);
    document.getElementById("results_screen").className = "";
	document.getElementById("generated_text").innerHTML = result;

}

function resultoutput(arra){
    var endresultstring = "";
    endresultstring += arra[0]  + '<br><br>';
    if(arra[0].includes("Flying Blue")){
        endresultstring += "Das Programm, das hauptsächlich von den SkyTeam Airlines Air France und KLM betrieben wird, ist unter anderem für die Mitglieder gut, die mit Economy-Class Kurzstrecken einen Status erfliegen wollen. Mit 48 Segmenten hat man den SkyTeam Elite Plus Status erreicht, fliegt man einige Langstrecken sind es sogar deutlich weniger Segmente. Die Airlines sind auch gut in Deutschland vertreten, und schon mit dem Silber Status gibt es auf absolut jedem SkyTeam Flug ein zusätzliches kostenloses Gepäckstück (auch im Light Tarif). Und wer auch in Zukunft viel fliegt bekommt irgendwann den Status auf Lebenszeit.";
    }else if(arra[0].includes("OK Plus")){
        endresultstring += "Das Programm des Tschechischen SkyTeam-Mitglieds eignet sich gut für Kurzstrecken-Economy Flieger. 30 Segmente (6 davon mit CSA) genügen für SkyTeams höchsten Status, und selbst mit dem zweithöchsten Status hätte man auf allen SkyTeam-Flügen ein kostenloses zusätzliches Freigepäckstück (auch im Light-Tarif).";
    }else if(arra[0].includes("MilleMiglia")){
        endresultstring += "Das Programm des Italianischen SkyTeam-Mitglieds Alitalia ist unter den SkyTeam-Programmen wohl das beste für Business Class Langstrecken. Da gibt es nämlich bis zu 300% als Meilengutschrift. Außerdem ist Alitalia in Deutschland gut vertreten. Schon mit dem SkyTeam Elite Status gibt es auf jedem SkyTeam-Flug ein kostenloses zusätzliches Gepäckstück, egal in welchem Tarif. Und wer die nächsten Jahre regelmäßig viel fliegt, behält irgendwann den Status auf Lebenszeit.";
    }else if(arra[0].includes("SkyMiles")){
        endresultstring += "Das Programm der US-Amerikanischen Airline Delta ist wohl für Economy-Langstrecken-Flieger kaum zu schlagen. Selbst in der allerbilligsten Economy-Klasse sehr vieler Airlines (auch außerhalb der SkyTeam-Allianz) werden 100% der Distanz gutgeschrieben! Außerdem ist Delta (und Air France - KLM) für Flüge ab Deutschland in die USA meistens eine der günstigsten Optionen. Schon mit 2 Langstrecken an die US-Westküste hat man den Silber-Status, mit dem es auf jedem SkyTeam Flug (auch im Light/Basic-Tarif) ein kostenloses Freigepäckstück dazu gibt. Und hat man irgendwann eine Million Meilen gesammelt, gibt es einen Status auf Lebenszeit.";
    }else if(arra[0].includes("Executive Club")){
        endresultstring += "Das Programm von Oneworld-Mitglied British Airways eignet sich sehr gut für regelmäßige Langstrecken-Flieger, die in einer der komfortableren Reiseklassen fliegen, auch da British Airways in Deutschland gut vertreten ist. Die gesammelten Meilen kann man auch für attraktive Flugprämien einlösen - und wenn man oft genug geflogen ist, gibt es den Status auf Lebensdauer.";
    }else if(arra[0].includes("AAdvantage")){
        endresultstring += "Das Programm von American Airlines ist wohl das beste Oneworld-Programm für Economy Langstrecken-Flieger. Unter anderem durch die Kooperation mit British Airways ist American Airlines immer eine der Top-Optionen ab Deutschland in die USA. 4 Economy-Flüge im Standard-Economy-Tarif an die US-Westküste reichen schon für den Oneworld Sapphire Status. Und nach einer Million Meilen gibt es einen Status auf Lebenszeit!";
    }else if(arra[0].includes("Finnair Plus")){
        endresultstring += "Das Finnische Oneworld-Mitglied betreibt ein interessantes Programm für Business Class Passagiere, denn für Business Class Flüge gibt es oft bis zu 300% der Distanz in Meilen. Finnair ist auch gut in Deutschland vertreten, und die Punkte können auch oft attraktiv eingelöst werden, besonders für Flüge im hohen Norden. Außerdem gibt es nach mehreren Jahren Treue den Status auf Lebenszeit.";
    }else if(arra[0].includes("Miles+Bonus")){
        endresultstring += "Das Griechische Star Alliance Mitglied betreibt ein Meilenprogramm mit einer sehr niedrigen Meilenhürde für den Star Alliance Gold Status. Gerade in guten Buchungsklassen sind die benötigten Meilen mit ein paar Langstrecken schnell erflogen. Die benötigten 4-6 Aegean-Flüge sollten auch kein allzu großes Problem darstellen, da Aegean die meisten Deutschen Großstädte anfliegt.";
    }else if(arra[0].includes("Asiana Club")){
        endresultstring += "Das Programm der Koreanischen Star Alliance Airline eignet sich sehr gut für regelmäßige Premium-Economy Passagiere. Fliegt man z.B. einigermaßen häufig in der Lufthansa Premium Economy erreicht man bestimmt die 40.000 Meilen, gerade da man 2 Jahre dafür Zeit hat. Danach hat man immer weitere 2 Jahre um 30.000 Meilen für die Requalifikation zu sammeln. Nach 500.000 Meilen gibt es außerdem den Star Alliance Gold Status auf Lebensdauer.";
    }else if(arra[0].includes("Miles&Smiles")){
        endresultstring += "Das Programm von Turkish Airlines eignet sich sehr gut für Passagiere, die auf Langstrecken zwar meistens in den komfortableren Klassen sitzen, aber halt nicht allzu oft fliegen. Bei Turkish Airlines ist nämlich die Anzahl der benötigten Meilen für den Star Alliance Gold Status niedrig, und außerdem der Status 2 Jahre lang gültig. Sammelt man einmal 80.000 Meilen innerhalb eines Jahres, gibt es den Star Alliance Gold Status sogar für 4 Jahre!";
    }else if(arra[0].includes("EuroBonus")){
        endresultstring += "Fliegt man innerhalb der Star Alliance viele Economy-Langstrecken, ist EuroBonus wohl das passendste Programm, da selbst die niedrigsten Buchungsklassen Punkte geben und als Segmente zählen. SAS ist in Deutschland gut vertreten (sowie natürlich auch die Star Alliance) und die Punkte kann man auch gut einlösen. Nach 10 Jahren behält man den Status außerdem auf Lebenszeit.";
    }else if(arra[0].includes("Miles&More")){
        endresultstring += "Desto höher die Reiseklasse, desto mehr lohnt sich Miles&More als Meilenprogramm. Und auch für Kurzstrecken-Passagiere ist Miles&More eine gute Option, da es mit 30 Segmenten schon Zugang zu allen Lufthansa-Lounges gibt. Außerdem hat Lufthansa ein breites Netzwerk an Partner-Airlines bei denen man Meilen sammeln kann, aber auch gut einlösen kann. Da man in Deutschland auch außerhalb eines Flugzeugs viele Meilen sammeln kann, kommt man hier auch recht schnell zu einem Prämienflug, vor allem wenn man eines der Meilenschnäppchen bucht. Inzwischen gibt es auch einen Lifetime-Status, auch wenn er nicht allzu leicht zu erreichen ist.";
    }else if(arra[0].includes("KrisFlyer")){
        endresultstring += "Fliegt man mit der Star Alliance viele Langstrecken ist KrisFlyer eine interessante Alternative, z.B. in Lufthansas Premium Economy. Zwar kommt man bei anderen Programmen schneller zum Status, dafür eignen sich die KrisFlyer-Meilen aber sehr gut um Prämienflüge zu buchen - vor allem mit Singapore Airlines nach Asien.";
    }else if(arra[0].includes("Iberia Plus")){
        endresultstring += "Fliegt man mit der Oneworld-Allianz viel in der Business Class, ist Iberia Plus eine gute Option. Nicht nur sammelt man viele Meilen, sondern kann diese auch wunderbar für günstige Prämienflüge ausgeben. Die Oneworld-Allianz und Iberias Partner sind ja auch gut in Deutschland vertreten. Iberia Plus ist außerdem das einfachste Programm um einen Lifetime-Status innerhalb der Oneworld Allianz zu bekommen. ";
    }else if(arra[0].includes("TrueBlue")){
        endresultstring += "Will man viel in den USA billig fliegen, kann das Programm von JetBlue eine gute Option sein. Ihr seid nicht an eine Allianz gebunden, sondern könnt auf Flügen von Emirates, Hawaiian, Icelandair, und Singapore Airlines eure Meilen sammeln. Diese Meilen könnt ihr dann für JetBlue und Hawaiian-Flüge ausgeben. Die Meilen laufen außerdem nie ab, und auch Meilenpooling wird angeboten. Für gelegenliche Flieger, die keinen großen Wert auf einen Status legen, also eine interessante Option.";
    }else if(arra[0].includes("Norwegian Reward")){
        endresultstring += "Ein Programm der etwas anderen Art: Ist man hauptsächlich in Europa in der Economy Class unterwegs, könnte Norwegian eine passende Airline zum Flugverhalten sein, gerade da Norwegian ab Deutschland mehrere Ziele nonstop anfliegt. Alle 6 Norwegian-Flüge gibt es einen weiteren Vorteil - von kostenloser Sitzplatzreservierung bis hin zum kostenlosen Freigepäck. Außerdem gibt es Meilen (CashPoints), die man unkompliziert einlösen kann.";
    }else if(arra[0].includes("Asia Miles")){
        endresultstring += "Fliegt man viele Langstrecken mit Oneworld, und auch gerne mal in den komfortableren Sitzen, ist Asia Miles sowieso schon eine der guten Optionen. Zusätzlich kann man aber auch auf einigen Flügen anderer Airlines Meilen sammeln, wie z.B. Lufthansa, SWISS, Austrian, LATAM, Air Canada, Air New Zealand, Air China, etc. - Außerdem gibt es viele attraktive Einlösemöglichkeiten. Da die Meilen nie verfallen, hat man auch als gelegentlicher Flieger irgendwann mal genug Meilen für den Prämienflug. ";
    }else if(arra[0].includes("Etihad Guest")){
        endresultstring += "Fliegt man viele Langstrecken (selbst in der Economy Class) und meidet die Bindung an eine der 3 Allianzen, kann Etihads Meilenprogramm ein angemessenes Programm sein. Schon nach 25.000 Meilen (oder 20 Segmenten) gibt es zusätzliches Freigepäck und in einigen Airports sogar Loungezugang. Besonders interessant sind aber die Optionen zum Einlösen der Meilen - besonders bei Etihads Partnerairlines. Einige Beispiele: Mit Brussels- oder American Airlines in der Business Class in die USA für 88.000-100.000 Meilen (sogar nach Alaska & Hawaii). Auch gut: Mit CSA von Prag nach Seoul für 51.220 Meilen in der Business Class.";
    }else if(arra[0].includes("Aeroflot Bonus")){
        endresultstring += "Bei dem Programm der Russischen Airline bekommt man ohne Status erstmal leicht überdurchschnittliche Meilengutschriften, aber hat man einen Status erreicht, gibt es einen ordentlichen Bonus. Hat man z.B. den Gold-Status, gibt es auf den meisten Business-Class-Flügen der SkyTeam Allianz ganze 175%. Auch gut: Schon ab dem Silber-Status (25.000 Meilen oder 25 Segmente) gibt es auf jedem SkyTeam-Flug (auch im billigsten Tarif) ein kostenloses zusätzliches Gepäckstück.";
    }else if(arra[0].includes("Royal Club")){
        endresultstring += "Fliegt man viele Oneworld-Langstrecken, bietet Royal Jordanien ein gutes Programm an. Mit 65.000 Meilen erreicht man nämlich den Emerald-Status, u.a. mit First-Class-Loungezugang! Außerdem gibt es bei Flügen mit vielen Airlines 50% der Distanz in der Economy Class, und ganze 150% in der Business Class. Ein weitere Pluspunkt: Die Meilen verfallen nie.";
    }else if(arra[0].includes("Flying Club")){
        endresultstring += "Will man sich überhaupt nicht an eine Allianz binden, ist der Flying Club eine Alternative. Da Virgin Atlantic selber keiner Allianz zugehört, haben sie viele Partner-Fluggesellschaften - darunter Delta, Air France, KLM, Singapore Airlines, SAS, Air New Zealand, ANA, und Hawaiian. Bei diesen Airlines sammelt man nicht nur Meilen, sondern genießt auch die Statusvorteile. Auch Prämienflüge kann man bei diesen Airlines buchen. Übrigens: Fliegt man mit Virgin Atlantic einen Prämienflug, so sammelt man gleichzeitig totzdem Statusmeilen - das gibt es sonst nirgendwo!";
    }
    endresultstring += '<br><br>Andere Optionen:<br><br>'
    for(var i = 1; i < arra.length; i++){
        endresultstring += arra[i]  + '<br>';
    }

    return endresultstring;
}

function calcResults(res) {
    for(var i = 0; i < res.length; i++){
        if(res[i].includes("Miles&More")){
            milesandmore += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Miles+Bonus")){
            milesandbonus += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Asiana Club")){
            asianaclub += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Miles&Smiles")){
            milesandsmiles += parseInt(res[i].slice(-2));
        } else if(res[i].includes("EuroBonus")){
            eurobonus += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Flying Blue")){
            flyingblue += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Aeroflot Bonus")){
            aeroflotbonus += parseInt(res[i].slice(-2));
        } else if(res[i].includes("OK Plus")){
            okplus += parseInt(res[i].slice(-2));
        } else if(res[i].includes("MilleMiglia")){
            millemiglia += parseInt(res[i].slice(-2));
        } else if(res[i].includes("SkyMiles")){
            skymiles += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Executive Club")){
            executiveclub += parseInt(res[i].slice(-2));
        } else if(res[i].includes("AAdvantage")){
            aadvantage += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Finnair Plus")){
            finnairplus += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Qantas")){
            qantas += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Royal Club")){
            royalclub += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Flying Club")){
            flyingclub += parseInt(res[i].slice(-2));
        } else if(res[i].includes("TrueBlue")){
            trueblue += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Norwegian Reward")){
            norwegianreward += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Iberia Plus")){
            iberiaplus += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Etihad Guest")){
            etihadguest += parseInt(res[i].slice(-2));
        } else if(res[i].includes("KrisFlyer")){
            krisflyer += parseInt(res[i].slice(-2));
        } else if(res[i].includes("Asia Miles")){
            asiamiles += parseInt(res[i].slice(-2));
        }
    }
    for(var i = 0; i < progints.length; i++){
        if(progints[i] == 5){
            progints[i] = '05';
        }
    }
    var lh = milesandmore + "%: Miles&More (Star Alliance)";
    var a6 = milesandbonus + "%: Aegean Miles+Bonus (Star Alliance)";
    var as = asianaclub + "%: Asiana Club (Star Alliance)";
    var tk = milesandsmiles + "%: Turkish Airlines Miles&Smiles (Star Alliance)";
    var sa = eurobonus + "%: SAS EuroBonus (Star Alliance)";
    var af = flyingblue + "%: Flying Blue (SkyTeam)";
    var sv = aeroflotbonus + "%: Aeroflot Bonus (SkyTeam)";
    var ok = okplus + "%: OK Plus (SkyTeam)";
    var az = millemiglia + "%: Alitalia MilleMiglia (SkyTeam)";
    var dl = skymiles + "%: Delta SkyMiles (SkyTeam)";
    var ba = executiveclub + "%: British Airways Executive Club (Oneworld)";
    var aa = aadvantage + "%: American Airlines AAdvantage (Oneworld)";
    var ay = finnairplus + "%: Finnair Plus (Oneworld)";
    var qa = qantas + "%: Qantas (Oneworld)";
    var rj = royalclub + "%: Royal Jordanian Royal Club (Oneworld)";
    var vz = flyingclub + "%: Virgin Flying Club";
    var jb = trueblue + "%: JetBlue TrueBlue";
    var no = norwegianreward + "%: Norwegian Reward";
    var ib = iberiaplus + "%: Iberia Plus (Oneworld)";
    var cx = asiamiles + "%: Asia Miles (Oneworld)";
    var sq = krisflyer + "%: KrisFlyer (Star Alliance)";
    var ey = etihadguest + "%: Etihad Guest";
    var programs = [lh, a6, as, tk, sa, af, sv, ok, az, dl, ba, aa, ay, qa, rj, vz, jb, no, cx, sq, ey, ib];
    console.log(programs);
    return programs;
}
