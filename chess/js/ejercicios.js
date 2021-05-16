var ejercicios=[
	{
		nombre: "Ejercicio 1",
		idchesscom: "https://www.chess.com/puzzles/problem/984352",
		posicionInicial: '4r3/1p4kp/2p5/p1b3p1/P7/1PP2R2/1R5P/7K w - - 0 1',
		jugadasCPU: ['Rd2','Rf1','END'],
		jugadasPlayer: ['Re1+','Rxf1+'],
		orientation: 'black'
	},
	{
		nombre: "Ejercicio 2 (237)",
		idchesscom: "https://www.chess.com/puzzles/problem/529546",
		posicionInicial: '5rk1/1p4pp/3qp3/7r/P1P3n1/3RbN1P/4Q1P1/1N3R1K b - - 0 1',
		jugadasCPU: ['Nf2+','Qxd3','END'],
		jugadasPlayer: ['Rxf2','Qxd3'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio 3 (393)",
		idchesscom: "https://www.chess.com/puzzles/problem/154846",
		posicionInicial: 'r5k1/1p3r1p/5p2/pP4p1/2Q5/2N3q1/P7/R1B1R2K w - - 0 1',
		jugadasCPU: ['Rg1','END'],
		jugadasPlayer: ['Qh3#'],
		orientation: 'black'
	},
	{
		nombre: "Ejercicio Escuela 1",
		tipo: "Mate",
		subtipo: "Damiano",
		posicionInicial:"1r5k/6p1/5pP1/8/5Q2/8/8/6K1 b - - 0 1",
		jugadasCPU: ['Rf8','Kg8','END'],
		jugadasPlayer: ['Qh4+','Qh8#'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela 2",
		tipo: "Mate",
		subtipo: "Anastasia",
		posicionInicial:"1r4k1/5pp1/8/3N4/2R5/8/PP6/K7 b - - 0 1",
		jugadasCPU: ['Rf8','Kh7','END'],
		jugadasPlayer: ['Ne7+','Rh4#'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela 3",
		tipo: "Mate",
		subtipo: "Boden",
		posicionInicial:"2k1rb1r/ppp3pp/2n2q2/3B1b2/5PQ1/2P1B3/PP1N1P1P/2KR3R w - - 0 1",
		jugadasCPU: ['Qf3','bxc3','END'],
		jugadasPlayer: ['Qxc3+','Ba3#'],
		orientation: 'black'
	},
	{   
		nombre: "Ejercicio Magnus 1",
		tipo: "Tactica",
		subtipo: "Orquilla",
		posicionInicial: "2q5/p5pk/n1B4p/5p2/1p2pP2/4P1P1/PP3K1P/2Q5 w - - 0 1",
		jugadasCPU: ['Qc2','axb3','Qc3','END'],
		jugadasPlayer: ['b3','Nb4','Nxc6'],
		orientation: 'black'
	},
	{   
		nombre: "Ejercicio Magnus 2",
		tipo: "Tactica",
		subtipo: "Descubierta",
		posicionInicial: "8/p2q2pk/n1B4p/5p2/1p2pP2/4P1P1/PPQ2K1P/8 b - - 0 1",
		jugadasCPU: ['Qc8','Qxc2','END'],
		jugadasPlayer: ['Bxe4','Bxc2'],
		orientation: 'white'
	},
	{   
		nombre: "Ejercicio Magnus 3",
		tipo: "Tactica",
		subtipo: "Horquilla",
		posicionInicial: "5r1k/4p1pp/1p3p2/2n4P/B2QP3/P7/KP3R2/6q1 w - - 0 1",
		jugadasCPU: ['Bb3','Kxa1','Kb1','END'],
		jugadasPlayer: ['Qa1+','Nxb3+','Nxd4'],
		orientation: 'black'
	},
	{   
		nombre: "Ejercicio Magnus 4",
		tipo: "Tactica",
		subtipo: "Descubierta",
		posicionInicial: "5r1k/4p1pp/1p3p2/2n4P/B2QP3/P7/KP3R2/5q2 b - - 0 1",
		jugadasCPU: ['Qg1','Qxd4','END'],
		jugadasPlayer: ['Rxf6','Rxf8#'],
		orientation: 'white'
	},
	{   
		nombre: "Ejercicio Magnus 5",
		tipo: "Tactica",
		subtipo: "Descubierta",
		posicionInicial: "1r3bk1/5pp1/2p4p/1n4q1/4B3/6P1/1PP1QN1P/1K1R4 b - - 0 1",
		jugadasCPU: ['Re8','Kxh7','END'],
		jugadasPlayer: ['Bh7+','Qxe8'],
		orientation: 'white'
	},
	{   
		nombre: "Ejercicio Magnus 6",
		tipo: "Mate",
		subtipo: "Basicos",
		posicionInicial: "4rbk1/5pp1/2p4p/1n4q1/4B3/6P1/1PP1QN1P/1KR5 w - - 0 1",
		jugadasCPU: ['Rd1','bxc3','Qb5','Ka1','END'],
		jugadasPlayer: ['Nc3+','Rb8+','Qxb5+','Qa5#'],
		orientation: 'black'
	},
	{   
		nombre: "Problemas de Ajedrez 1",
		tipo: "Tactica",
		subtipo: "Descubierta",
		posicionInicial: "r3kbnr/1p1b2pp/pq2pp2/3pP3/8/P1NB4/1P3PPP/R1BQ1RK1 b - - 0 1",
		jugadasCPU: ['Qd4','hxg6','END'],
		jugadasPlayer: ['Bg6+','Qxd4'],
		orientation: 'white'
	},
	{   
		nombre: "Problemas de Ajedrez 2",
		tipo: "Mate",
		subtipo: "Basicos",
		posicionInicial: "r1k1r3/pp2pNbp/2n1P3/q1PQ4/5B2/8/PPP3PP/3R2K1 b - - 0 1",
		jugadasCPU: ['Rd8','Rxd7','END'],
		jugadasPlayer: ['Qd7+','exd7#'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela 4",
		tipo: "Mate",
		subtipo: "Murphy",
		posicionInicial:"5k2/q4ppp/5n2/7r/7Q/5P2/7P/2B1R2K b - - 0 1",
		jugadasCPU: ['Rb5','gxf6','Kg8','END'],
		jugadasPlayer: ['Qxf6','Bh6+','Re8#'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela 5",
		tipo: "Mate",
		subtipo: "Lolli",
		posicionInicial:"5rk1/5ppp/8/5PQ1/2p5/8/8/6K1 b - - 0 1",
		jugadasCPU: ['c3','g6','c2','END'],
		jugadasPlayer: ['f6','Qh6','Qg7#'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela 6",
		tipo: "Mate",
		subtipo: "Lolli",
		posicionInicial:"4n1rk/1b3p1p/ppqp1BpQ/n4P2/P1p1r3/3P1R2/1PP3PP/7K b - - 0 1",
		jugadasCPU: ['Ng7','Rxg7','Rg8','Kxh7','Rh4','END'],
		jugadasPlayer: ['Bxg7+','f6','Qxh7+','Rh3+','Rxh4#'],
		orientation: 'white'
	}
	

]

var apertura=[
	{
		nombre: "Siciliana Dragón",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "celada1",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','f4','Nf3','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Nbd7','Qc7'],
				jugadaError: ['-','-','-','-','-','Bg7','Bg7'],
				explicacionError: 'Ojo que te quedas sin caballo o sin dama si mueves el rey en vez del alfil!',
				simulacionErrorCPU: ['e5','fxe5','Bb5+','Qxg4'],
				simulacionErrorPlayer: ['dxe5','Ng4','Bd7','END']
			},

			{
				id: 1,
				nombre: "principal-1",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','O-O-O','Bxd4','g4','a3','h4','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qa5','Rfc8','Rab8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 2,
				nombre: "principal-2",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','O-O-O','Bxd4','g4','Kb1','a3','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qa5','Rfc8','Rab8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 3,
				nombre: "principal-3",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','O-O-O','Bxd4','Kb1','g4','h4','a3','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qc7','Rfc8','Qa5','Rab8'],
				jugadaError: ['-','-','-','-','-','-','-','-','-','-','Qa5','-','-'],
				explicacionError: 'Que te come el caballito',
				simulacionErrorCPU: ['Nd5','Nxe7+','Rxd2'],
				simulacionErrorPlayer: ['Qxd2','Kh8','END']
			},
			{
				id: 4,
				nombre: "principal-4",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','O-O-O','Bxd4','Kb1','g4','h4','h5','Bxc3','Kc1','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qc7','Rfc8','Qa5','Rxc3','Qxa2+','Qa1#'],
				jugadaError: ['-','-','-','-','-','-','-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 5,
				nombre: "principal-5",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','O-O-O','Bxd4','Kb1','g4','h4','h5','Qxc3','Kc1','Be3','Qd2','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qc7','Rfc8','Qa5','Rxc3','Qxa2+','Bh6+','Rc8','Qa1#'],
				jugadaError: ['-','-','-','-','-','-','-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 6,
				nombre: "principal-6",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','O-O-O','Bxd4','Kb1','g4','h4','h5','Qxc3','Kc1','Be3','Qd3','Qxe3','Kd2','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qc7','Rfc8','Qa5','Rxc3','Qxa2+','Bh6+','Rc8','Bxe3','Qa1+','Qxb2'],
				jugadaError: ['-','-','-','-','-','-','-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 7,
				nombre: "principal-7",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','Bc4','O-O-O','Bb3','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Bd7','Rc8','Ne5'],
				jugadaError: ['-','-','-','-','-','-','-','-','-','-','-','-','-'],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','Nd7'],
				variante: ['-','-','-','-','-','-','-','-','8'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 8,
				nombre: "principal-8",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','f3','Qd2','Bc4','O-O-O','Bb3','Qe2','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nd7','Nb6','Na5','Bd7'],
				jugadaError: ['-','-','-','-','-','-','-','-','-','-','-','-','-'],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','Bd7'],
				variante: ['-','-','-','-','-','-','-','-','7'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
			{
				id: 9,
				nombre: "Aleksic, Nenad (2425) contra Tiviakov, Sergei (2535)",
				jugadasCPU: ['e4','Nf3','d4','Nxd4','Nc3','Be3','Bc4','O-O','h3','Bb3','Re1','Qe2','bxc3','Bd2','Qxd2','END'],
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Bd7','Rc8','Ne5','Rxc3','Nxe4','Nxd2','e6'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: []
			},
		],
		
			
			
		orientation: 'black'
	},
	{
		nombre: "Caro Khan",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "principal-1",
				jugadasCPU: ['e4','Nc3','Nf3','h3','Qxf3','d4','Bd3','Nxe4','c3','O-O','END'],
				jugadasPlayer: ['c6','d5','Bg4','Bxf3','e6','Nf6','dxe4','Qxd4','Qd8','Nbd7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','Nxe4'],
				variante: ['-','-','-','-','-','-','-','-','-','2'],
			},
			{
				id: 1,
				nombre: "variante1",
				jugadasCPU: ['e4','Nc3','Nf3','h3','Qxf3','d4','e5','END'],
				jugadasPlayer: ['c6','d5','Bg4','Bxf3','e6','Nf6','Nfd7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: [],
				variante: [],
			},
			{
				id: 2,
				nombre: "principal-1",
				jugadasCPU: ['e4','Nc3','Nf3','h3','Qxf3','d4','Bd3','Nxe4','c3','O-O','Bxe4','END'],
				jugadasPlayer: ['c6','d5','Bg4','Bxf3','e6','Nf6','dxe4','Qxd4','Qd8','Nxe4','Bd6'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','Nbd7'],
				variante: ['-','-','-','-','-','-','-','-','-','0'],
			},
			{
				id: 3,
				nombre: "principal-1",
				jugadasCPU: ['e4','c4','exd5','cxd5','Qa4+','Nc3','Nf3','Bc4','d3','Qa3','O-O','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nbd7','g6','Bg7','a6','O-O','b6','Bb7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 4,
				nombre: "variante del cambio",
				jugadasCPU: ['e4','d4','exd5','Bd3','c3','Nf3','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nc6','Qc7','Bg4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','Nf6'],
				variante: ['-','-','-','5'],
			},
			{
				id: 5,
				nombre: "variante del cambio",
				jugadasCPU: ['e4','d4','exd5','Bd3','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','Nc6'],
				variante: ['-','-','-','-','-','-','4'],
			},
			{
				id: 6,
				nombre: "variante del cambio - Ataque Panov",
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','cxd5','Qb3','gxf3','Qxb7','Bb5+','Qc6+','Qxb5','Nxd5','Qxd5','Be3','O-O-O','Kb1','Re1','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nc6','Bg4','Nxd5','Bxf3','e6','Nxd4','Nxb5','Ke7','Qd7','Qxd5','exd5','Ke6','Rc8+','Bc5','Kd6'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 7,
				nombre: "variante del cambio",
				jugadasCPU: ['e4','d4','exd5','Bd3','c3','h3','Ne2','dxe5','Bc2','Bg5','Be3','Qxd5','Qd4','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nc6','Qc7','Nf6','e5','Nxe5','Bd6','Ne4','O-O','Nf6','b6'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','Nf6'],
				variante: ['-','-','-','5'],
			},
			{
				id: 8,
				nombre: "variante del cambio",
				jugadasCPU: ['e4','d4','exd5','Bd3','c3','Ne2','Bf4','Nxf4','Kxd1','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nc6','Qc7','Bg4','Qxf4','Bxd1','e6'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','Nf6'],
				variante: ['-','-','-','5'],
			},
			{
				id: 9,
				nombre: "variante del cambio",
				jugadasCPU: ['e4','d4','exd5','Bd3','c3','Ne2','f3','Bf4','dxe5','O-O','Na3','Nc2','Ncd4','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nc6','Qc7','Bg4','Bd7','e5','Nxe5','Bd6','a6','Nf6','Nh5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','Nf6'],
				variante: ['-','-','-','5'],
			},
			{
				id: 10,
				nombre: "variante del cambio - Ataque Panov",
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','Bg5','Bxf6','cxd5','dxc6','bxc3','Ke2','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nc6','Bg4','Qa5','exf6','Bb4','Bxc3+','Qxc3+','O-O'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 11,
				nombre: "variante del cambio - Ataque Panov",
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','cxd5','Bc4','O-O','Nxd5','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nc6','Bg4','Nxd5','e6','Be7','exd5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 12,
				nombre: "variante del cambio - Ataque Panov",
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','cxd5','Qb3','gxf3','Qxb7','Bb5+','Qc6+','Qc5+','Nxd5','O-O','Qxd5','Qe5+','Rd1','Qf5+','Qf7+','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nc6','Bg4','Nxd5','Bxf3','e6','Nxd4','Nxb5','Ke7','Nd6','cxd5','Qc8','Qb7','Kd7','Re8','Re6','Be7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 13,
				nombre: "variante del cambio - Ataque Panov",
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','cxd5','Qb3','gxf3','Qxb7','Bb5+','Qc6+','Qxb5','Qa5','Qxc3','Be3','O-O','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nc6','Bg4','Nxd5','Bxf3','e6','Nxd4','Nxb5','Ke7','Qd7','Nxc3','f6','Kf7','Be7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			}
		],

		orientation: 'black'
	}
]