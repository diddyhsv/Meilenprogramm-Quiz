//Creation Date: 7/10/2015
//Description: This program provides a basic quiz application that enables individuals to
//             create personality quiz websites with no javascript knowledge. All that is 
//             needed is a basic understanding of HTML and some creativity. 




var currentQuestion = 2; //
var flyingblue = okplus = asiamiles = etihadguest = krisflyer = iberiaplus = skymiles = royalclub = aadvantage = eurobonus = flyingclub = trueblue = norwegianreward = executiveclub = asianaclub = millemiglia = finnairplus = qantas = milesandbonus = milesandsmiles = aeroflotbonus = milesandmore = 0;

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
	console.log("ARR");
	console.log(arr);
	arr = arr.sort(function (a,b){
        if (a.slice(-2) > b.slice(-2)) return -1;
        if (a.slice(-2) < b.slice(-2)) return 1;
        return 0;	});
	result = resultoutput(arr);
    document.getElementById("results_screen").className = "";
	document.getElementById("generated_text").innerHTML = result;

}

function resultoutput(arra){
    var endresultstring = "";
    endresultstring += arra[0]  + '%<br><br>';
    if(arra[0].includes("Flying Blue")){
        endresultstring += "Trotz der ganzen Änderungen, die Flying Blue vorgenommen hat, ist es dennoch ein gutes Programm für all jene, die öfter mit SkyTeam reisen. Auf den ersten Blick ist es vielleicht kompliziert oder ungewohnt, seine XP zu berechnen. Aber eigentlich ist es doch ganz logisch und man hat schnell den Überblick. Die initiale Qualifizierung ist etwas hart (aber auch machbar), der Statuserhalt dafür wirklich recht einfach. Gerade in Kombination mit dem Übertrag von Experience Punkten ins nächste Jahr spricht das auf lange Sicht für die Teilnahem am Flying Blue Programm.";
    }else if(arra[0].includes("OK Plus")){
        endresultstring += "OK Plus ist ein tolles Programm, speziell, wenn ihr plant, den Status über Segmente zu erfliegen. Nur 30 Segmente ist ein guter Deal. Auch, wenn 6 davon mit der Airline selbst durchgeführt werden müssen. Und das könnte der Knackpunkt sein. Wenn ihr nämlich überhaupt nie mit Czech Airlines fliegt und die Segmente quasi erzwingen müsst, ist es vielleicht schon nicht mehr ganz so interessant. Ein weiterer Nachteil ist, dass OK Plus nicht alle Flüge auch als Segmente für die Erreichung oder den Erhalt des Status zählt. Günstige Buchungsklassen von KLM oder Air France scheiden leider aus. Wenn ihr also viele kurze Strecken in Europa fliegt, diese aber mit den falschen Airlines, ist der Status vielleicht doch weiter weg, als gedacht.";
    }else if(arra[0].includes("MilleMiglia")){
        endresultstring += "Es gibt wahrlich einige Gründe, um das Vielfliegerprogramm von Alitalia zu meiden. Die finanzielle Situation der Airline. Oder die Tatsache, dass MilleMiglia jedes Jahr neu ausgerollt wird und mein keine Ahnung hat, welche Änderungen dies mit sich bringen wird. Aber wenn ihr zumindest einmal oder zweimal im Jahr mit SkyTeam Airlines in der Business Class fliegt (am besten natürlich mit Alitalia selbst) ist dies vermutlich der beste Weg, um zum SkyTeam Elite Plus Status zu gelangen.";
    }else if(arra[0].includes("SkyMiles")){
        endresultstring += "SkyMiles mag nicht das einfachste Programm sein, dass es gibt. Vor allem im Vergleich zu den Vielfliegerprogrammen, die man aus Europa kennt. Aber da es für Mitglieder, die außerhalb der USA wohnen, keine Voraussetzungen gibt, was die Qualifiyng Dollar betrifft, bietet SkyMiles auch eine angenehme Lösung, wenn es schnell zum Elite Plus gehen soll. Und die ganzen Vorteile, wie kostenlose Upgrades, das Rollover Programm und der Hertz Status machen es zu einem tollen Gesamtpaket.";
    }else if(arra[0].includes("Executive Club")){
        endresultstring += "Der Executive Club bietet eine sehr einfache Möglichkeit, mit wenigen Business- oder sogar First-Class-Flügen pro Jahr den Oneworld Sapphire Status zu erfliegen und auch dauerhaft zu behalten. Zusätzlich bietet das Programm auch einen Lifetime Gold Status nach 35.000 Tier Points an.";
    }else if(arra[0].includes("AAdvantage")){
        endresultstring += "Durch die Status Challenge ist AAdvantage aber immer noch ein interessanter Weg, um an den Sapphire Status zu kommen. Vor allem, wenn es schnell gehen soll. Die Option, den Status nun gegen eine Gebühr auch sofort nutzen zu können, gehört sicherlich zu den guten Neuerungen. Sollten bei euch eine Reihe von Flügen mit American Airlines anstehen, lohnt sich der Aufpreis bei der Challenge vielleicht, um diese Flüge schon etwas bequemer über die Bühne zu bringen.";
    }else if(arra[0].includes("Finnair Plus")){
        endresultstring += "Finnair Plus ist ein sehr attraktives Programm, besonders wenn ihr viel mit Finnair selber unterwegs seid. So sind die vier Upgrade-Voucher für jedes Jahr für Goldkunden gerade auf den längeren Strecken nach Helsinki eine coole Sache. Sehr angenehm ist aber auch, dass es keinen Zwang gibt, mit Finnair selber zu fliegen. Zwar ist der Status etwas schwieriger zu erfliegen als bei British Airways, jedoch solltet ihr im Auge behalten dass es ja auch nebenbei noch viele Punkte zum Einlösen sammelt.";
    }else if(arra[0].includes("Miles+Bonus")){
        endresultstring += "Früher war alles besser! Bis Ende 2014 konnte man den Gold Status mit 20.000 Statusmeilen innerhalb von 12 Monaten erreichen und er war dauerhaft gültig. Trotzdem sind 36.000 Statusmeilen + 6 Aegean-Flüge immer noch eine recht niedrige Hürde und vor allem die Requalifizierung mit 12.000 Statusmeilen + 4 Aegean-Flüge ist sehr einfach.";
    }else if(arra[0].includes("Asiana Club")){
        endresultstring += "40.000 Meilen innerhalb von 24 Monaten klingt nicht nach viel, trotzdem sollte man sich erst kurz vor dem ersten Flug registrieren um so auch die Statusgültigkeit zu maximieren. Seit 2018 sind für die Requalifizierung außerdem nur noch 30.000 Meilen in 2 Jahren notwendig, was das Ganze noch etwas einfacher macht.";
    }else if(arra[0].includes("Miles&Smiles")){
        endresultstring += "40.000 Statusmeilen innerhalb von 12 Monaten können durchaus eine große Hürde sein. Vor allem weil man selbst auf Flügen mit Turkish Airlines maximal 150% der Entfernungsmeilen als Status- und Prämienmeilen erhält. Dafür ist die Requalifizierung einfacher. Auch bei Miles & Smiles sind wieder die günstigen Lufthansa-Buchungsklassen (L, K, P) vom Meilensammeln ausgenommen. In anderen Buchungsklassen gibt es bis zu 200%.";
    }else if(arra[0].includes("EuroBonus")){
        endresultstring += "Eurobonus ist besonders interessant, wenn man viel in den günstigen Buchungsklassen bei Lufthansa unterwegs ist. In der Economy Class gibt es mit K, L, T immerhin noch 25% und in der Business Class mit P sogar 100% der Entfernungsmeilen als Basic Points. Außerdem ist Silver Status zum verschenken sicherlich kein Nachteil und Lifetime Gold nach 10 Jahren ebenfalls recht attraktiv. Wer 90.000 Basic Points in seinen 12 Monaten schafft, erreicht den Diamond Status und darf dann sogar eine Gold Card verschenken.";
    }else if(arra[0].includes("Miles&More")){
        endresultstring += "Viele Wege führen nach Rom und einige sind steiniger als andere. Trotzdem sollte man auch immer überlegen was man mit den gesammelten Meilen anfangen kann und wie viel man noch in Gebühren investieren muss.";
    }
    endresultstring += '<br><br>'
    for(var i = 1; i < arra.length; i++){
        endresultstring += arra[i]  + '%<br>';
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
    var lh = "Miles&More: " + milesandmore;
    var a6 = "Aegean Miles+Bonus: " + milesandbonus;
    var as = "Asiana Club: " + asianaclub;
    var tk = "Turkish Airlines Miles&Smiles: " + milesandsmiles;
    var sa = "SAS EuroBonus: " + eurobonus;
    var af = "Flying Blue: " + flyingblue;
    var sv = "Aeroflot Bonus: " + aeroflotbonus;
    var ok = "OK Plus: " + okplus;
    var az = "Alitalia MilleMiglia: " + millemiglia;
    var dl = "Delta SkyMiles: " + skymiles;
    var ba = "British Airways Executive Club: " + executiveclub;
    var aa = "American Airlines AAdvantage: " + milesandmore;
    var ay = "Finnair Plus: " + finnairplus;
    var qa = "Qantas: " + qantas;
    var rj = "Royal Jordanian Royal Club: " + royalclub;
    var vz = "Virgin Flying Club: " + flyingclub;
    var jb = "JetBlue TrueBlue: " + trueblue;
    var no = "Norwegian Reward: " + finnairplus;
    var ib = "Iberia Plus: " + iberiaplus;
    var cx = "Asia Miles: " + asiamiles;
    var sq = "KrisFlyer: " + krisflyer;
    var ey = "Etihad Guest: " + etihadguest;
    var programs = [lh, a6, as, tk, sa, af, sv, ok, az, dl, ba, aa, ay, qa, rj, vz, jb, no, cx, sq, ey, ib];
    console.log(programs);
    return programs;
}
