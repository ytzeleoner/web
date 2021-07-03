
var board = null
var game = new Chess()
var whiteSquareGrey = '#a9a9a9'
var blackSquareGrey = '#696969'


function removeGreySquares () {
  $('#myBoard .square-55d63').css('background', '')
}

function greySquare (square) {
  var $square = $('#myBoard .square-' + square)

  var background = whiteSquareGrey
  if ($square.hasClass('black-3c85d')) {
    background = blackSquareGrey
  }

  $square.css('background', background)
}

function onDragStart (source, piece) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false


  try{
    if (preguntaRespondida == false){
        alert("Primero responde la pregunta!")
          return false
      }
  } catch (error){
   // console.log(error);
  } 
  

  // or if it's not that side's turn
  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false
  }
}

function onDrop (source, target) {
  removeGreySquares()



  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })

  // illegal move
  if (move === null) return 'snapback'



  $lastMove.html(move.san)
          var bestMove=(move.san===respuestasCorrectas[movimiento]);
          var badMove=false;
          if (isApertura == true){
            badMove = (move.san===respuestasErroneas[movimiento]);
            comprobarQuiz();
          }

          if (isApertura == true && bestMove == false){
            //A ver si es una alternativa
            if (jugadasVariantes!== undefined && movimiento<jugadasVariantes.length){
              var alternativaOK=(move.san===jugadasVariantes[movimiento]);
                if (alternativaOK){
                    var idVariante=idsVariante[movimiento];
                    console.log("Cambiando a subvariante "+idVariante);
                    cargarApertura(numeroApertura,idVariante);
                    bestMove = true;
                }
            }
            

          }


          if (bestMove == true) {
            movimiento++; 
            
              var movimientoString=contestacionCPU[movimiento]
            
            if (movimientoString=='END'){
              alert("Ejercicio Resuelto");
              if (isApertura == false){
            	  cargarEjercicio();
              }else{
                nuevoTablero();
              }
            }else{

              mover(contestacionCPU[movimiento]);
              

              if (isPartida == true){
                moverAutoPartida();
              }

            }
              
            
          }else{

            if (badMove == true ){
              alert(explicacionError)
              board.draggable=false
              for (var i=0;i<simulacionErrorCPU.length;i++){
                
                 moverTiempo(simulacionErrorCPU[i],(i*2)+1);
                 moverTiempo(simulacionErrorPlayer[i],(i*2)+2);
              
              }
            }else{
              alert("NOOOO! la jugada correcta era "+respuestasCorrectas[movimiento]+" tu has hecho "+move.san);
              loadInitialPosition(posicionInicial)
            }
            
          }
          $bestMove.html(bestMove);

          updateStatus();
}



function moverAutoPartida(acabaResponder){
    console.log("Entrando en moverAutoPartida para el movimiento "+movimiento);
    console.log("Acabo de responder "+acabaResponder);
  if (acabaResponder != true){
     comprobarQuiz();  
  }
  

  console.log(preguntaRespondida)
  if (preguntaRespondida == true){
    if (jugadasAuto[movimiento]){
      console.log("Toca mover "+respuestasCorrectas[movimiento]);
        
        setTimeout(function (){
                  game.move(respuestasCorrectas[movimiento])
                  board.position(game.fen())
                  updateStatus();
                  movimiento++;
                  

                  var movimientoString=contestacionCPU[movimiento]
              
                    if (movimientoString=='END'){
                     setTimeout(function (){
                         alert("Partida Finalizada");
                        },3000);
                      if (isApertura == false){
                        cargarEjercicio();
                      }else{
                        nuevoTablero();
                      }
                    }else{
                       setTimeout(function (){
                        game.move(contestacionCPU[movimiento])
                        board.position(game.fen())
                        updateStatus();
                        moverAutoPartida();
                        },3000);
                    }



                  },2000);
        
        
         
       
           
        
    }
  }
  
}


function updateStatus () {
        var status = ''

        var moveColor = 'White'
        if (game.turn() === 'b') {
          moveColor = 'Black'

        }

        // checkmate?
        if (game.in_checkmate()) {
          status = 'Game over, ' + moveColor + ' is in checkmate.'
        }

        // draw?
        else if (game.in_draw()) {
          status = 'Game over, drawn position'
        }

        // game still on
        else {
          status = moveColor + ' to move'

          // check?
          if (game.in_check()) {
            status += ', ' + moveColor + ' is in check'
          }
        }

        $status.html(status)
        $fen.html(game.fen())
        $pgn.html(game.pgn())

      }


function onMouseoverSquare (square, piece) {
  // get list of possible moves for this square
  var moves = game.moves({
    square: square,
    verbose: true
  })

  // exit if there are no moves available for this square
  if (moves.length === 0) return

  // highlight the square they moused over
  greySquare(square)

  // highlight the possible squares for this piece
  for (var i = 0; i < moves.length; i++) {
    greySquare(moves[i].to)
  }
}

function onMouseoutSquare (square, piece) {
  removeGreySquares()
}

function onSnapEnd () {
  board.position(game.fen())
}





      function loadInitialPosition(posicionInicial){
        movimiento=0;
        
        board.position(posicionInicial)
         
        game.load(posicionInicial);


        mover(contestacionCPU[movimiento]);

        if (isPartida == true){
          moverAutoPartida();
        }

      }


  function mover(movimiento){
    moverTiempo(movimiento,1);
  }




  function moverTiempo(movimiento,tiempo){
        setTimeout(function (){
          game.move(movimiento)
          board.position(game.fen())
          },tiempo*1000);
      }


      function getRandomMaxNumber(maximo){
        console.log(Math.floor(Math.random() * maximo));
        return Math.floor(Math.random() * maximo)  
      }




  /* PARA QUIZ

  */


function pintarQuiz(pregunta){
 var html='<p class="p-0 m-0 text-center tituloPregunta"> '+pregunta.titulo+'</p> ';
    for (var i=0;i<pregunta.opciones.length;i++){
            html=html.concat('<p class="respuesta p-0 m-0">'+
        '<input class="form-check-input" type="checkbox" value="'+(i+1)+'" id="flexCheckDefault'+(i+1)+'">'+
        '<label class="form-check-label" for="flexCheckDefault'+(i+1)+'">'+
            pregunta.opciones[i].texto+
        '</label>'+
    '</p><hr>');  
    }

   

    html=html.concat(' <p class="text-center"><button id="responder" class="bg-success text-white"> Responder </button><button id="verTablero" class="bg-info text-white"> Ver Tablero </button></p> ');
    

    $quiz.html(html);
    if (isApertura==true){
     $quiz.delay(1000).show(1000); 
    }else{
      $quiz.show(1000);
    }
    
}


function comprobarRespuesta(respuestaCorrecta){
  var cadena="";
   $('.form-check-input:checked').each(
        
          function() {
             cadena=cadena+$(this).val();
          }

      );

   return cadena == respuestaCorrecta;
}


