//BOTONES
  //Obteniendo los nodos "button" del HTML
  var bSprint1 = document.getElementById('button1');
  var bSprint2 = document.getElementById('button2');
  var bSprint3 = document.getElementById('button3');
  var dSubmit = document.getElementById('button4');
  //Obteniendo los nodos "div" del HTML
  var dSP1Lessons = document.getElementById('SP1lessons');
  var dSP1Quiz = document.getElementById('SP1quiz');
  var dSP2Lessons = document.getElementById('SP2lessons');
  var dSP2Quiz = document.getElementById('SP2quiz');
  var dSP3Lessons = document.getElementById('SP3lessons');
  var dSP3Quiz = document.getElementById('SP3quiz');
  var dResults = document.getElementById('results');

  //Implementando funcion show --> muestra el Sprint seleccioado
  function show(toShow) {
    toShow.style.display = "block";
  }
  //Implementando funcion hide --> oculta el Sprint no seleccioado
  function hide(toHide) {
    toHide.style.display = "none";
  }
  //Implementando función para calcular los resultados del Quiz
  dSubmit.onclick = function (){
    var score = 0;
    var rQuestionA, rQuestionB, rQuestionC;
    if (dSP1Quiz.style.display == "block") {
      rQuestionA = document.getElementsByName('q1');
      rQuestionB = document.getElementsByName('q2');
      rQuestionC = document.getElementsByName('q3');
      hide(dSP1Quiz);
        if (rQuestionA[0].checked == false && rQuestionA[1].checked == false && rQuestionA[2].checked == false){
          alert ("Por favor responde la primera pregunta");
        } else if (rQuestionB[0].checked == false && rQuestionB[1].checked == false && rQuestionB[2].checked == false){
          alert ("Por favor responde la segunda pregunta");
        } else if (rQuestionC[0].checked == false && rQuestionC[1].checked == false && rQuestionC[2].checked == false){
          alert ("Por favor responde la tercera pregunta");
        }
    }


    if (dSP2Quiz.style.display == "block") {
      rQuestionA = document.getElementsByName('q4');
      rQuestionB = document.getElementsByName('q5');
      rQuestionC = document.getElementsByName('q6');
      hide(dSP2Quiz);
        if (rQuestionA[0].checked == false && rQuestionA[1].checked == false && rQuestionA[2].checked == false){
          alert ("Por favor responde la primera pregunta");
        } else if (rQuestionB[0].checked == false && rQuestionB[1].checked == false && rQuestionB[2].checked == false){
          alert ("Por favor responde la segunda pregunta");
        } else if (rQuestionC[0].checked == false && rQuestionC[1].checked == false && rQuestionC[2].checked == false){
          alert ("Por favor responde la tercera pregunta");
        }
    }

    for(var i = 0; i < rQuestionA.length; i++){
        if(rQuestionA[i].checked){
          score += parseInt(rQuestionA[i].value);
        }
        if(rQuestionB[i].checked){
          score += parseInt(rQuestionB[i].value);
        }
        if(rQuestionC[i].checked){
          score += parseInt(rQuestionC[i].value);
        }
      }
    show(dResults);
    dResults.innerHTML = "Tienes " + score + " correctas";
    hide(dSubmit);
  }
  //Implementando las funciones CallBack del evento onclick de cada button
  bSprint1.onclick = function () {
    document.getElementById("formQuiz").reset();
    hide(dResults);
    hide(dSP2Lessons);
    hide(dSP2Quiz);
    hide(dSP3Lessons);
    hide(dSP3Quiz);
    show(dSP1Lessons);
    show(dSP1Quiz);
    show(dSubmit);
  }
  bSprint2.onclick = function () {
    hide(dResults);
    document.getElementById("formQuiz").reset();
    hide(dSP1Lessons);
    hide(dSP1Quiz);
    hide(dSP3Lessons);
    hide(dSP3Quiz);
    show(dSP2Lessons);
    show(dSP2Quiz);
    show(dSubmit);
  }
  bSprint3.onclick = function () {
    document.getElementById("formQuiz").reset();
    hide(dResults);
    hide(dSP2Lessons);
    hide(dSP2Quiz);
    hide(dSP1Lessons);
    hide(dSP1Quiz);
    hide(dSubmit);
    show(dSP3Lessons);
    //show(dSP3Quiz);
  }

//agregando alerts: responer preguntas
