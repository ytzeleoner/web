var partida=[
	{
		nombre: "La Partida Inmortal (Anderssen - Kieseritzky)",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		jugadasCPU: ['','e5','exf4','Qh4+','END'],
		jugadasPlayer: ['e4','f4','Bc4','Kf1'],
		moverAuto: [true,true,true,true],
		orientation: "white",
		comentarios:[

		],
		preguntas:[
			{},{},{
				id: "1",
				titulo: "Esta era una apertura muy popular en la época llamada...",
						opciones: [
									{
										texto:"Gambito de Rey"
									},
									{
										texto: "Gambito de Dama"
									},
									{
										texto:"Rui Lopez"
									}
								],
						respuestaCorrecta:"1"
			},
			{
				id: "2",
				titulo: "Lo más normal hubiese sido Nf3 para evitar jaque de Dama en h4... ¿por qué hizo  Anderssen Bc4",
						opciones: [
									{
										texto:"Acelerar desarrollo, apuntando a peón debil rey"
									},
									{
										texto: "Da una casilla de salida al rey"
									},
									{
										texto:"Es un error que castigan las negras"
									}
								],
						respuestaCorrecta:"12"
			}
		],
		respuestas:[
		],
	},
	{
		nombre: "Rui Lopez  (Magnus Carlsen - Topalov)",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		jugadasCPU: ['','e5','Nc6','a6','Nf6','Be7','b5','d6','Rb8','axb5','O-O','Bd7','Ra8','Qxa8','h6','Re8','Qc8','Bf8','Na5','Rxf8','Re8','Bg4','exf4','Nc4','c5','cxd4','Qd8','Be6','Qa5','Nh7','g6','Nxe5','END'],
		jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','d3','Bb3','a4','axb5','Nbd2','Re1','c3','Rxa8','d4','Nf1','Ng3','Nh4','Ng6','Nxf8','Bc2','f4','Qd3','Bxf4','Bc1','Rf1','cxd4','h3','b3','Kh2','e5','d5','dxe6'],
		moverAuto:     [true, true, true, true, true,false,true,true,  true,  true, true,false, true,true, true,false,false, true, false, true,false,true,  true, true, true,  true,true,true,false,true,true,false],
		orientation: "white",
		comentarios:[

		],
		preguntas:[
			{},{},{},
			{},{},{
				id: "Be7",
				titulo: "¿Lo normal es ahora mover la torre a e1, pero si quisieramos jugar con el ataque Anderssen o centro restringido?",
						opciones: [
									{
										texto:"¡Mueve!"
									}
								],
						respuestaCorrecta:"1"
			},
			{
				id: "b5",
				titulo: "¿Cuales son la intenciones de el reciente movimiento de las negras b5?",
						opciones: [
									{
										texto:"Encerrar el alfil blanco"
									},
									{
										texto: "Propiciar una futura casilla fuerte en c4 para el caballo"
									},
									{
										texto: "Contragolpear en el centro con c5"
									},
									{
										texto: "Es mala porque genera una debilidad en b6,c5"
									}
								],
						respuestaCorrecta:"12"
			},{},
			{
				id: "a4",
				titulo: "¿Cuales son la intenciones de Magnus Carlsen con el reciente a4?",
						opciones: [
									{
										texto:"Provocar intercambio en b5"
									},
									{
										texto: "Tener ocupada a la torre protegiendo el peón de b5"
									},
									{
										texto: "Volcar el ataque en el flanco de rey al estar el de dama 'distraido'"
									},
									{
										texto: "Tener una casilla de refugio para el alfil si le ataca el caballo en a5"
									}
								],
						respuestaCorrecta:"1234"
			},{},{},
			{
				id: "c3",
				titulo: "¡MUEVE! - Está clara la intención clasica de la española de llevar el caballo a g3... ¿lo hacemos directamente?",
						opciones: [
									{
										texto:"No, hay que ganar espacio el centro antes"
									},
									{
										texto: "Si, podemos seguir el plan principal con Nf1"
									}
								],
						respuestaCorrecta:"1"
			},{},{},
			{
				id: "h6",
				titulo: "¿Por qué ha hecho Topalov el movimiento h6?",
						opciones: [
									{
										texto:"Dar aire al rey en caso de mate de pasillo"
									},
									{
										texto: "Por el movimiento del caballo a g5 con el alfil apuntando a f7"
									},
									{
										texto: "Para poder liberar la torre de la defensa de f7"
									}
								],
						respuestaCorrecta:"23"
			},
			{
				id: "Re8",
				titulo: "¡MUEVE! - Normalmente el plan de las blancas es llevar el caballo a g3 o e3 ¿Cuál es el mejor aquí?",
						opciones: [
									{
										texto:"e3 quedando el caballo más centrado"
									},
									{
										texto: "e3, porque si Nxe4 tenemos Nd5 amenazando peón de c7 y atacando al caballo de e4 con la torre en e1"
									},
									{
										texto: "g3, si movemos Ne3, las negras tienen exd4 que tras cxd4 y Nxe4 nos dejan con peón de menos pues Nd5 atacando al peon de c7 tiene como respuesta la sutil Bd7. "
									}
								],
						respuestaCorrecta:"3"
			},
			{
				id: "Nh4 (blancas)",
				titulo: "¡MUEVE! - La intención es llegar a la casilla f5 y hacer hueco a la reina",
						opciones: [
									{
										texto:"MUEVE"
									}
								],
						respuestaCorrecta:"1"
			},{},
			{
				id: "Nxf8 (blancas",
				titulo: " MUEVE ! La idea del caballo en g6 para las blancas cual es?",
						opciones: [
									{
										texto:"Queremos dejar a las negras sin su pareja de alfiles para que nuestro alfil de casillas oscuras se vuelva más poderoso"
									},
									{
										texto:"Queremos ir dejando al rey sin casillas donde escapar y el peon de f7 está clavado"
									},
									{
										texto:"Queremos propiciar un mate de la coz"
									}
								],
						respuestaCorrecta:"1"
			},{},
			{
				id: "f4 (blancas",
				titulo: "¡MUEVE! - ¿Qué tenía en mente magnus Carlsen habiendose comido el alfil anteriormente?",
						opciones: [
									{
										texto:"MUEVE - Sacrificar el alfil negro en h5 para dejar al rey sin protección"
									},
									{
										texto:"MUEVE - Abrir la posición en el flanco de rey para potenciar la pareja de alfiles"
									}
								],
						respuestaCorrecta:"2"
			},{},{},{},{},{},{},{},
			{
				id: "Kh2",
				titulo: "¡MUEVE! - ¿Nos comemos el caballito?",
						opciones: [
									{
										texto:"MUEVE - Si! las negras se han olvidado de el"
									},
									{
										texto:"MUEVE - NO! nos devolverían la captura y nos quedamos minimo sin torre"
									},
									{
										texto:"MUEVE - Vamos a por la partida, pero antes protejamos al rey del jaque de la reina"
									}
								],
						respuestaCorrecta:"23"
			},{},{},
			{
				id: "Ultimo movimiento",
				titulo: "¡MUEVE! - ¿Cual fue el movimiento que hizo que Topalov abandonase?",
						opciones: [
									{
										texto:"MUEVE!"
									}
								],
						respuestaCorrecta:"1"
			}
		],
		respuestas:[
		],
	},
	{
		nombre: "2011 - Rui Lopez  (Topalov - Ivanchuk)",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		jugadasCPU: ['','e5','Nc6','a6','Nf6','Be7','b5','d6','O-O','Na5','c5','Qc7','cxd4','Nc6','a5','a4','Bd7','Qb7','END'],
		jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','h3','Bc2','d4','Nbd2','cxd4','Nb3','Be3','Nbd2','Rc1'],
		moverAuto:     [true, true, true, true, true,true , true,true,true, true, true,true,  true, true, true,   true, false],
		orientation: "white",
		comentarios:[

		],
		preguntas:[
			{},{},{},
			{},{},{},{},{
				id: "d6",
				titulo: "d6 es una jugada muy  habitual en esta apertura, ¿qué características tiene?",
						opciones: [
									{
										texto:"Libera al caballo negro de la defensa del peón de e5 y puede amenazar y al semi-encerrado alfil blanco de b3"
									},
									{
										texto: "No es una jugada habitual contra la apertura Rui Lopez, de hecho deja encerrado al alfil negro en e7"
									},
									{
										texto: "Estratégicamente tiene una pega que es que se queda el alfil negro de e7 encerrado un tiempo"
									}
								],
						respuestaCorrecta:"13"
			},{},{},{},{},
			{
				id: "cxd4",
				titulo: "¿Por que han decidido comer el peón de d4 las negras?",
						opciones: [
									{
										texto:"Error, Ivanchuk ha  abierto la columna C con la reina en medio"
									},
									{
										texto: "Bien jugado, tienen que evitar que Topalov cierre el centro con d5 y quedaría cerrado el flanco de dama"
									},
									{
										texto: "Estratégicamente tiene una pega que es que se queda el alfil negro de e7 encerrado un tiempo"
									},
								],
						respuestaCorrecta:"2"
			},{},
			{
				id: "a5",
				titulo: "¿Cual es la idea de Ivanchuk con a5?",
						opciones: [
									{
										texto:"Buscar una casilla fuerte para el caballo en b4"
									},
									{
										texto: "Presionar el peón de d4, amenazando a un protector, el caballo de b3"
									},
									{
										texto: "Estratégicamente tiene una pega que es que se queda el alfil negro de e7 encerrado un tiempo"
									},
									{
										texto: "Bien jugado, tienen que evitar que Topalov cierre el centro con d5 y quedaría cerrado el flanco de dama"
									}
								],
						respuestaCorrecta:"2"
			},{},{},{},
			{
				id: "Qb7",
				titulo: "MUEVE: ¿Cual es el último movimiento de apertura que juega Topalov?",
						opciones: [
									{
										texto:"MUEVE"
									}
								],
						respuestaCorrecta:"1"
			}
		]
	},
	{
		nombre: "1750 - Francois Antoine de Legall de Kermeur - Saint Brie",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		jugadasCPU: ['','e5','d6','Bg4','g6','Bxd1','Ke7','END'],
		jugadasPlayer: ['e4','Nf3','Bc4','Nc3','Nxe5','Bxf7+','Nd5#'],
		moverAuto: [true,true,true,true,false,true,false],
		orientation: "white",
		comentarios:[

		],
		preguntas:[
			{},{},{
				id: "d6",
				titulo: "Esta defensa (que estan utilizando las negras) se la conoce como",
						opciones: [
									{
										texto:"Sistema Colle"
									},
									{
										texto: "Defensa Philidor"
									},
									{
										texto:"Defensa Inglesa"
									},
									{
										texto: "Defensa Petrov"
									}
								],
						respuestaCorrecta:"2"
			},{},
			{
				id: "g6",
				titulo: "MUEVE: Esta partida es famosa por castigar este error de las negras al mover g6",
						opciones: [
									{
										texto:"¡MUEVE!"
									}
								],
						respuestaCorrecta:"1"
			},{},
			{
				id: "Ke7",
				titulo: "MUEVE: ¿Cómo se conoce este mate que estás apunto de dar?",
						opciones: [
									{
										texto:"Mate de Boden"
									},
									{
										texto:"Mate de la Opera"
									},
									{
										texto:"Mate de Legal"
									},
									{
										texto:"Mate de ePaulette"
									}
								],
						respuestaCorrecta:"3"
			}
		],
		respuestas:[
		],
	}
]