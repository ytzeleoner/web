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
		nombre: "Rui Lopez Modelo (Magnus Carlsen - Topalov)",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		jugadasCPU: ['','e5','Nc6','a6','Nf6','Be7','b5','d6','Rb8','axb5','O-O','Bd7','Ra8','Qxa8','h6','Re8','END'],
		jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','d3','Bb3','a4','axb5','Nbd2','Re1','c3','Rxa8','d4','Nf1','Ng3'],
		moverAuto: [true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,false],
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
				titulo: "¿Cuales son la intenciones de el reciente b5?",
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
										texto:"No, hay que asegurar el centro antes"
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
										texto: "e3, porque si Nxe4 tenemos Nd5 amenazando peón de c7 y atacando al caballo de e4"
									},
									{
										texto: "g3, si movemos Ne3, las negras tienen exd4 que tras cxd4 y Nxe4 nos dejan con peón de menos pues Nd5 atacando al peon de c7 tiene como respuesta Bd7. "
									}
								],
						respuestaCorrecta:"3"
			}
		],
		respuestas:[
		],
	}
]