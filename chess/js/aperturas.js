
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
				jugadasPlayer: ['c5','d6','cxd4','Nf6','g6','Bg7','O-O','Nc6','Nxd4','Be6','Qc7','Rfc8','Qa5','Rxc3','Qxa2+','Bh6+','Rc8','Bxe3+','Qa1+','Qxb2'],
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
				variante: ['-','-','-','4'],
			},
			{
				id: 6,
				nombre: "variante del cambio - Ataque Panov",
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','cxd5','Qb3','gxf3','Qxb7','Bb5+','Qc6+','Qxb5','Nxd5','Qxd5','Be3','O-O-O','Kb1','Rhe1','END'],
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
				jugadasCPU: ['e4','d4','exd5','c4','Nc3','Nf3','cxd5','Qb3','gxf3','Qxb7','Bb5+','Qc6+','Qc5+','Nxd5','O-O','Qxd5','Qe5+','Rd1','Qf5+','Qxf7+','END'],
				jugadasPlayer: ['c6','d5','cxd5','Nf6','Nc6','Bg4','Nxd5','Bxf3','e6','Nxd4','Nxb5','Ke7','Nd6','exd5','Qc8','Qb7','Kd7','Re8','Re6','Be7'],
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
			},
			{
				id: 14,
				nombre: "variante clásica",
				jugadasCPU: ['e4','d4','f3','Nc3','Bf4','Qd3','O-O-O','h4','dxc5','Qe3','END'],
				jugadasPlayer: ['c6','d5','e6','Bb4','Ne7','O-O','Nd7','c5','Nxc5','Bd7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 15,
				nombre: "variante clásica - se convierte en Francesa",
				jugadasCPU: ['e4','d4','f3','e5','c3','f4','Nf3','Na3','cxd4','bxa3','END'],
				jugadasPlayer: ['c6','d5','e6','c5','Nc6','Qb6','Nh6','cxd4','Bxa3','Nf5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 16,
				nombre: "variante clásica - variante Capablanca h4 --- Bd2 -- Dama ",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','h4','Nf3','h5','Bd3','Qxd3','Bd2','O-O-O','Ne4','Qxe4','Qe2','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','h6','Nd7','Bh7','Bxd3','e6','Ngf6','Be7','Nxe4','Nf6','Qd5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 17,
				nombre: "variante clásica - variante Capablanca",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Bd3','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Qxd4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 18,
				nombre: "variante clásica - variante Capablanca Nf3",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','Nf3','h4','Nxh5','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','Nf6','Nh5','Bxh5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 19,
				nombre: "variante clásica - variante Capablanca Bc4",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','Bc4','N1e2','Nf4','h4','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','Nd7','e6','Bd6','Qc7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 20,
				nombre: "variante clásica - variante Capablanca f4",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','f4','Nf3','Bd3','Ne5','O-O','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','e6','Bd6','Qc7','Nf6','O-O'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 21,
				nombre: "variante clásica - variante Capablanca Bc4",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','Bc4','N1e2','Nf4','h4','h5','Nxe6','Qxc2','fxg3','Qf2','Kxf2','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','Nd7','e6','Bd6','Qc7','Bxc2','fxe6','Bxg3','Qxg3+','Qxf2+','Kf7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 22,
				nombre: "variante clásica - variante Capablanca Bc4",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','Bc4','N1e2','Nf4','h4','h5','Qxc2','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','Nd7','e6','Bd6','Qc7','Bxc2','Bxf4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 23,
				nombre: "variante clásica - variante Capablanca N1e2",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','N1e2','h4','Nf4','Bc4','O-O','Nxe6','Bxe6','Re1','Bf5+','Bxh7','Nf5','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','Nf6','h6','Bh7','e6','Bd6','fxe6','Qc7','Nbd7','Kf8','Rxh7','Re8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 24,
				nombre: "variante clásica - variante Capablanca h4 --- Bd2 --- Ejemplo Dama D3 blancas",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','h4','Nf3','h5','Bd3','Qxd3','Bd2','O-O-O','Ne4','Qxe4','Qd3','Qb5+','Qxd7+','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','h6','Nd7','Bh7','Bxd3','e6','Nf6','Be7','Nxe4','Nf6','c5','Qd7','Nxd7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 25,
				nombre: "variante clásica - variante Capablanca h4 --- Bf4 ",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','h4','Nf3','h5','Bd3','Qxd3','Bf4','Bd2','O-O-O','Ne4','g3','Bf4','Kb1','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','h6','Nd7','Bh7','Bxd3','e6','Qa5+','Qc7','Ngf6','O-O-O','Be7','Qa5','Qf5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','-','Bb4'],
				variante: ['-','-','-','-','-','-','-','-','-','-','-','26']
			},
			{
				id: 26,
				nombre: "variante clásica - variante Capablanca h4 --- Bf4 ",
				jugadasCPU: ['e4','d4','Nc3','Nxe4','Ng3','h4','Nf3','h5','Bd3','Qxd3','Bf4','Bd2','Ne4','Nd6+','Nxb7','Nxd2','Qb3','O-O-O','Qa3+','Nb3','N7xc5','bxa3','Nxc5','END'],
				jugadasPlayer: ['c6','d5','dxe4','Bf5','Bg6','h6','Nd7','Bh7','Bxd3','e6','Qa5+','Bb4','Ngf6','Ke7','Bxd2+','Qb4','Qxd4','Rab8','c5','Qb4','Qxa3','Nxc5','Rb5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','-','Qc7'],
				variante: ['-','-','-','-','-','-','-','-','-','-','-','25']
			},
			{
				id: 27,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','c3','Be3','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nec6','Nd7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 28,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nc3','g4','Nge2','h4','Nf4','Nxh5','Qxd4','Bb5','Bg5','Bxc6','Qf4','O-O-O','a3','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Bg6','c5','h5','Bh7','cxd4','Nc6','Ne7','a6','Nxc6','Qa5','Rc8','b5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','Bg6'],
				variante: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','29'],
			},
			{
				id: 29,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nc3','g4','Nge2','h4','Nf4','Nxh5','Qxd4','Bb5','Bg5','Bxc6','Qf4','O-O-O','a3','Ng3','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Bg6','c5','h5','Bh7','cxd4','Nc6','Ne7','a6','Nxc6','Qa5','Rc8','Bg6','Bxa3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','b5'],
				variante: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','28'],
			},
			{
				id: 30,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','dxc5','Be3','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nec6','Nd7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 31,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','c4','dxc5','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nbc6','d4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','dxc4'],
				variante: ['-','-','-','-','-','-','-','33'],
			},
			{
				id: 32,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','c4','Na3','dxc5','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nbc6','a6','d4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 33,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','c4','dxc5','Bxc4','Be3','Nc3','Ne2','Nd2','f4','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nbc6','dxc4','Ng6','Be7','O-O','Qb8','Rd8','Nb4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','d4','-','-','-','-','-','Nd4'],
				variante: ['-','-','-','-','-','-','-','31','-','-','-','-','-','35'],
			},
			{
				id: 34,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','c4','dxc5','Na3','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nbc6','dxc4','Nd5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','d4'],
				variante: ['-','-','-','-','-','-','-','31'],
			},
			{
				id: 35,
				nombre: "variante del avance",
				jugadasCPU: ['e4','d4','e5','Nf3','Be2','O-O','c4','dxc5','Bxc4','Be3','Nc3','Ne2','Nd2','f4','END'],
				jugadasPlayer: ['c6','d5','Bf5','e6','Ne7','c5','Nbc6','dxc4','Ng6','Be7','O-O','Qb8','Rd8','Nd4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','d4','-','-','-','-','-','Nb4'],
				variante: ['-','-','-','-','-','-','-','31','-','-','-','-','-','33'],
			},
		],

		orientation: 'black'
	},
	{
		nombre: "Apertura Vienesa",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "spoiler",
				jugadasCPU: ['-','e5','END'],
				jugadasPlayer: ['e4','Nc3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Gambito de Rey",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "spoiler",
				jugadasCPU: ['-','e5','END'],
				jugadasPlayer: ['e4','f4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Apertura Abierta Principal",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Defensa Petrov",
				jugadasCPU: ['-','e5','Nf6','d6','Nxe4','d5','END'],
				jugadasPlayer: ['e4','Nf3','Nxe5','Nf3','d4','Bd3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			},
			{
				id: 1,
				nombre: "Defensa Philidor",
				jugadasCPU: ['-','e5','d6','END'],
				jugadasPlayer: ['e4','Nf3','d4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Apertura Italiana",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','e5','Nc6','END'],
				jugadasPlayer: ['e4','Nf3','Bc4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Cuatro Caballos",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','e5','Nc6','Nf6','END'],
				jugadasPlayer: ['e4','Nf3','Nc3','Bc4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Apertura Escocesa",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','e5','Nc6','exd4','END'],
				jugadasPlayer: ['e4','Nf3','d4','Nxd4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Apertura Rui Lopez",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Variante Principal",
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','b5','d6','O-O','Na5','c5','Qc7','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','h3','Bc2','d4','Nbd2'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','d4',''],
				variante: ['-','-','-','-','-','-','-','-','5','-'],
				preguntas: [
					{},{},
					{
						id: 'a6',
						titulo: "¿Sería buena opción intercambiar alfil por caballo para comerse el peon de a5?",
						opciones: [
									{
										texto:"Si comen el caballo con el peón de b SI"
									},
									{
										texto: "Si comen el caballo con el peón de d NO, existe la jugada Qd4"
									},
									{
										texto:"Si, porque debilitariamos la estructura de peones"
									},
									{
										texto:"No, bajo ningún concepto"
									}
								],
						respuestaCorrecta:"12"
					},
					{
						id: 'Nf6',
						titulo: "¿Que planea esta jugada de las negras caballo f6?",
						opciones: [
									{
										texto:"Desarrollar una pieza menor en la apertura"
									},
									{
										texto: "Preparar enroque corto"
									},
									{
										texto:"Quiere ir a h5"
									},
									{
										texto:"Ataca el peón de e4"
									}
								],
						respuestaCorrecta:"124"
					},{},{},
					{
						id: 'd6',
						titulo: "¿Que planea esta jugada de las negras peon d6?",
						opciones: [
									{
										texto:"Desarrollar una pieza menor en la apertura"
									},
									{
										texto: "Protege e5 del caballo en f3"
									},
									{
										texto:"Abre la diagonal al alfil de casillas blancas"
									},
									{
										texto:"Es una imprecisión, tapa al alfil de casillas negras"
									},
									{
										texto:"Prepara caballo a5 (queda libre de la defensa del peon de e5) para intercambiar el alfil"
									}
								],
						respuestaCorrecta:"235"	
					},
					{
						id: 'c3',
						titulo: "Acabas de mover peon c3 ¿Cuales son los planes del movimiento?",
						opciones: [
									{
										texto:"Preparar refugio por si caballo mueve a a5 ataca alfil"
									},
									{
										texto: "No dejamos caballo salte a d4"
									},
									{
										texto:"Preparamos rotura en d4"
									},
									{
										texto:"Es una imprecisión, hemos perdido un tiempo sin amenazar nada, perdiendo la iniciativa"
									}
								],
						respuestaCorrecta:"12"	
					},
					{
						id: 'h3',
						titulo: "Acabas de mover peon h3 ¿Cuales son los planes de hacer ahora el movimiento?",
						opciones: [
									{
										texto:"Para impedir la clavada del caballo de f3 con Bg4"
									},
									{
										texto: "Para poder romper en d4, no podemos directamente por Bg4"
									},
									{
										texto:"Dar una casilla de salida al rey"
									},
									{
										texto:"Es una imprecisión, hemos perdido un tiempo sin amenazar nada, perdiendo la iniciativa"
									}
								],
						respuestaCorrecta:"12"	
					}
				],
			},
			{
				id: 1,
				nombre: "Defensa Petrov",
				jugadasCPU: ['-','e5','Nf6','d6','END'],
				jugadasPlayer: ['e4','Nf3','Nxe5','Nf3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
				preguntas: [
					{},
					{
						id: 'Nf6',
						titulo: "¿Cómo se llama esta defensa?",
						opciones: [
									{
										texto:"Gambito de Dama"
									},
									{
										texto: "Defensa Petrov"
									},
									{
										texto:"Variante del intercambio"
									},
									{
										texto:"Ataque Marshall"
									}
								],
						respuestaCorrecta:"2"
					}
				],
			},
			{
				id: 2,
				nombre: "Defensa Petrov Fallo Castigar",
				jugadasCPU: ['-','e5','Nf6','Nxe4','Nf6','END'],
				jugadasPlayer: ['e4','Nf3','Nxe5','Qe2','Nc6+'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
				preguntas: [
					
				],
			},
			{
				id: 3,
				nombre: "Defensa amateur",
				jugadasCPU: ['-','e5','f6','fxe5','g6','END'],
				jugadasPlayer: ['e4','Nf3','Nxe5','Qh5+','Qxe5+'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
				preguntas: [
					{},
					{}
				],
			},
			{
				id: 4,
				nombre: "Variante Principal - descuido 1",
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','O-O','dxc6','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bxc6','Nxe5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
				preguntas: [
					{},
					{},
					{},
					{},
					{},
					{
						id: 'O-O',
						titulo: "¿Que acaba de pasar?",
						opciones: [
									{
										texto:"Las negras han jugado la variante principal"
									},
									{
										texto: "Podemos ganar el peón en e5"
									},
									{
										texto:"Podemos dañar la estructura de peones negra"
									}
								],
						respuestaCorrecta:"23"
					}
				],
			},
			{
				id: 5,
				nombre: "Variante Principal sin h3",
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','b5','d6','O-O','Bg4','Nxe4','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','d4','Be3','Bd5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','h3',''],
				variante: ['-','-','-','-','-','-','-','-','0','-'],
				preguntas: [
					{},{},
					{},
					{},{},{},
					{},
					{},
					{}
				],
			},
			{
				id: 6,
				nombre: "Variante Breyer",
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','b5','d6','O-O','Nb8','Nbd7','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','h3','d4','Nbd2'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','d4',''],
				variante: ['-','-','-','-','-','-','-','-','5','-'],
				preguntas: [
					{},{},{},{},{},{},{},{},{
						id: 'O-O',
						titulo: "¿Cuál es el plan principal de las blancas?",
						opciones: [
									{
										texto:"d4, Qd3, Nb---> g3"
									},
									{
										texto: "d4, Nb ---> g3, Nf-->h4"
									},
									{
										texto:"abrir columna a con a4"
									}
								],
						respuestaCorrecta:"2"
					},
					{
						id: 'Nb8',
						titulo: "¿Como se llama esta variante? ¿Qué busca?",
						opciones: [
									{
										texto:"Dephensa Morphy Cerrada - Bloquear el centro"
									},
									{
										texto: "Variante Petrov - Proteger al Rey con el caballo cerca"
									},
									{
										texto:"Breyer - influencia en el centro con c5 Nd7 y Bb7"
									},
									{
										texto:"Variante Petrov - influencia en el centro con c5, Re8 y Bf8"
									}
								],
						respuestaCorrecta:"3"
					}
				],
			},
			{
				id: 7,
				nombre: "Variante Principal - Graft",
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','b5','d6','O-O','Na5','c5','Nd7','exd4','Nc6','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','h3','Bc2','d4','Nbd2','cxd4','d5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','d4',''],
				variante: ['-','-','-','-','-','-','-','-','5','-'],
				preguntas: [{},{},{},{},{},{},{},{},{},{},{},{},
				{
					id: "Nc6",
					titulo: "¿Cuál es la idea de caballo en c6 de las negras? ¿Qué busca?",
						opciones: [
									{
										texto:"Hacerse con un caballo fuerte en la casilla d4"
									},
									{
										texto: "Hacerse con un caballo fuerte en la casilla e5"
									},
									{
										texto:"Atacar por el flanco de rey en vez del de dama"
									}
								],
						respuestaCorrecta:"2"
				}
				],
			},
			{
				id: 8,
				nombre: "Variante Principal - Gambito Marshall",
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','b5','O-O','d5','Nxd5','Nxe5','c6','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','exd5','Nxe5','Rxe5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
				preguntas: [{},{},{},{},{},{},{},{},
				{
					id: "d5",
					titulo: "¿Cómo se llama este Ataque?",
						opciones: [
									{
										texto:"Gambito Morphy "
									},
									{
										texto: "Gambito Marshall "
									},
									{
										texto:"Ataque Petrov"
									}
								],
						respuestaCorrecta:"2"
				}
				],
			},
			{
				id: 9,
				nombre: "Variante Principal - d6 negras",
				jugadasCPU: ['-','e5','Nc6','d6','exd4','Bd7','Nf6','Be7','O-O','Bxc6','bxc6','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','d4','Nxd4','Nc3','O-O','Re1','Nxc6','Bxc6','Qd3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
				preguntas: [{},{},{},
				{
					id: "exd4",
					titulo: "Evaluando la posicion, con el siguiente movimiento... como estarían las blancas",
						opciones: [
									{
										texto:"Mejor, más espacio, centro dominado si capturo con el caballo el peón de d4"
									},
									{
										texto: "Mejor, ahora puede intercambiar alfil por caballo en c6 rompiendo estructura negra de peones"
									},
									{
										texto:"Peor, han liberado la pieza más poderosa de las negras, la dama"
									}
								],
						respuestaCorrecta:"1"
				},
				{
					id: "Bd7",
					titulo: "Este movimiento de las negras , Bd7, ¿era imprescindible?",
						opciones: [
									{
										texto:"Si, ahora el caballo de c6 estaba comprometido y perdian otro peón ademas de estructura."
									},
									{
										texto: "No, se podía seguir con la variante principal"
									}
								],
						respuestaCorrecta:"1"
				},{},{},{},{},
				{
					id: "bxc6",
					titulo: "Cúal es el plan inmediato del las blancas",
						opciones: [
									{
										texto:"Molestar con la reina el peón débil de c6."
									},
									{
										texto: "Desarrollar el alfil de casillas negras por e3"
									},
									{
										texto: "Amenazar el caballo de f6 para abrir la posición"
									}
								],
						respuestaCorrecta:"12"
				}
				],
			},
			{
				id: 10,
				nombre: "Defensa Berlinesa - principal",
				jugadasCPU: ['-','e5','Nc6','Nf6','Nxe4','Nd6','Be7','Nxe5','O-O','Bf6','Re8','Rxe1','Ne8','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','O-O','Re1','Nxe5','Bf1','Rxe5','d4','Re1','c3','Qxe1','Bf4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-','-'],
				preguntas: [{},{},
				{
					id: "Nf6",
					titulo: "¿Cómo se llama esta defensa?",
						opciones: [
									{
										texto:"Berlinesa"
									},
									{
										texto: "Petrov"
									},
									{
										texto:"Marshall"
									}
								],
						respuestaCorrecta:"1"
				}
				],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Gambito de Dama",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Gambito Dama Aceptado",
				jugadasCPU: ['-','d5','dxc4','END'],
				jugadasPlayer: ['d4','c4','e4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			},
			{
				id: 1,
				nombre: "Defensa Eslava",
				jugadasCPU: ['-','d5','c6','END'],
				jugadasPlayer: ['d4','c4','Nc3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','cxd5','-','-','-','-','-','-',''],
				variante: ['-','-','2','-','-','-',''],
			},
			{
				id: 2,
				nombre: "Defensa Eslava - Eslava del cambio",
				jugadasCPU: ['-','d5','c6','cxd5','Nc6','Nf6','END'],
				jugadasPlayer: ['d4','c4','cxd5','Bf4','Nc3','e3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','Nc3','-','-','-','-','-','-',''],
				variante: ['-','-','1','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Sistema Colle",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','d5','Nf6','END'],
				jugadasPlayer: ['d4','Nf3','e3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Alfil-Dama",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','d5','Nf6','END'],
				jugadasPlayer: ['d4','Nf3','Bf4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Ataque Torre",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','d5','Nf6','END'],
				jugadasPlayer: ['d4','Nf3','Bg5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Sistema Londres",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "basica",
				jugadasCPU: ['-','d5','END'],
				jugadasPlayer: ['d4','Bf4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			},
			{
				id: 1,
				nombre: "erroes negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','bxa4','Bd7','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','b3','a4','bxc4','c5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','Nf3','-','-','-','-','-','-',''],
				variante: ['-','-','2','-','-','-','-','-','-',''],
			},
			{
				id: 2,
				nombre: "resultado-->id:1",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','END'],
				jugadasPlayer: ['d4','Bf4','Nf3','e3','xxx'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','1','-','1','-','-','-','-',''],
			},
			{
				id: 3,
				nombre: "apertura normal",
				jugadasCPU: ['-','d5','Nf6','e6','c5','cxd4','END'],
				jugadasPlayer: ['d4','Bf4','Nf3','e3','c3','exd4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','-','-','-','-','-',''],
				variante: ['-','-','8','-','-','-','-','-','-',''],
			},
			{
				id: 4,
				nombre: "erroes negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','cxb3','Bd7','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','b3','a4','Bxb5+','Qxb3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','Nf3','-','-','-','-','-','-',''],
				variante: ['-','-','5','-','-','-','-','-','-',''],
			},
			{
				id: 5,
				nombre: "resultado-->id:4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','END'],
				jugadasPlayer: ['d4','Bf4','Nf3','e3','xxx'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','1','-','4','-','-','-','-',''],
			},
			{
				id: 6,
				nombre: "erroes negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','a6','axb5','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','Nf3','-','-','-','-','-','-',''],
				variante: ['-','-','7','-','-','-','-','-','-',''],
			},
			{
				id: 7,
				nombre: "resultado-->id:6",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','a6','axb5','END'],
				jugadasPlayer: ['d4','Bf4','Nf3','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','6','-','6','-','-','-','-',''],
			},
			{
				id: 8,
				nombre: "resultado-->id:3",
				jugadasCPU: ['-','d5','Nf6','e6','c5','cxd4','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','xxx','exd4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','8','-','3','-','-','-','-',''],
			},
			{
				id: 9,
				nombre: "errores negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','cxb3','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','b3','axb3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','10','10','-','-','-','-','-','-',''],
			},
			{
				id: 10,
				nombre: "resultado-->id:9",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','9','-','9','-','-','-','-',''],
			},
			{
				id: 11,
				nombre: "errores negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','Nc6','c4','Bd6','Bxf4','O-O','Nxe5','Nd7','g6','b5','b4','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','Bd3','Bc2','Nbd2','exf4','Ne5','fxe5','Qh5','Qh6','h4','h5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','12','12','-','-','-','-','-','-',''],
			},
			{
				id: 12,
				nombre: "resultado-->id:11",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','11','-','11','-','-','-','-','']
			},
			{
				id: 13,
				nombre: "errores negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','Nc6','c4','Bd6','Bxf4','O-O','Nxe5','Nd7','h6','b5','b4','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','Bd3','Bc2','Nbd2','exf4','Ne5','fxe5','Qh5','f4','g4','g5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','14','14','-','-','-','-','-','-',''],
			},
			{
				id: 14,
				nombre: "resultado-->id:13",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','13','-','13','-','-','-','-','']
			},
			{
				id: 15,
				nombre: "errores negras - avance prematuro C4",
				jugadasCPU: ['-','d5','Nf6','e6','c5','Nc6','c4','Bd6','Bxf4','O-O','Nxe5','Nd7','f5','fxg4','Kh8','Kg8','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','c3','Bd3','Bc2','Nbd2','exf4','Ne5','fxe5','Qh5','g4','Bxh7+','Bg6+','Qh7#'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','16','16','-','-','-','-','-','-',''],
			},
			{
				id: 16,
				nombre: "resultado-->id:15",
				jugadasCPU: ['-','d5','Nf6','e6','c5','c4','b5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','c3','-','-','-','-',''],
				variante: ['-','-','15','-','15','-','-','-','-','']
			},
			{
				id: 17,
				nombre: "escenario estrategico - control del centro - comer con peon o con alfil",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','O-O','c5','Nc6','Nxe5','Nd7','c4','Kxh7','Kg8','b5','Bxg5','f5','Qf6','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','Nbd2','Bd3','c3','Ne5','dxe5','h4','Bxh7+','Qh5+','Nf3','Ng5','hxg5','g6','Qh8#'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','18','18','-','-','-','-','-','-',''],
			},
			{
				id: 18,
				nombre: "resultado-->id:17",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','O-O','c5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','Nbd2','-','-','-','-',''],
				variante: ['-','-','17','-','17','-','-','-','-','']
			},
			{
				id: 19,
				nombre: "escenario estrategico - control del centro - comer con peon o con alfil",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','b6','Bb7','Nbd7','Nxe5','O-O','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','Nbd2','Bd3','c3','Ne5','Bxe5','Qf3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','20','20','-','-','-','-','-','-',''],
			},
			{
				id: 20,
				nombre: "resultado-->id:19",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','b6','Bb7','Nbd7','Nxe5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','Nbd2','-','-','-','-',''],
				variante: ['-','-','19','-','19','-','-','-','-','']
			},
			{
				id: 21,
				nombre: "escenario estrategico - control del centro - comer con peon o con alfil",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','O-O','c5','Nc6','Nxe5','Nd7','c4','Kxh7','Kg8','f6','fxg5','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','Nbd2','Bd3','c3','Ne5','dxe5','h4','Bxh7+','Qh5+','Nf3','Ng5','hxg5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','22','22','-','-','-','-','-','-',''],
			},
			{
				id: 22,
				nombre: "resultado-->id:21",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','O-O','c5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','Nbd2','-','-','-','-',''],
				variante: ['-','-','21','-','21','-','-','-','-','']
			},
			{
				id: 23,
				nombre: "escenario estrategico - control del centro - comer con peon o con alfil",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','O-O','c5','Nc6','Nxe5','Nd7','c4','Kxh7','Kg8','Re8','Nf8','Kh8','Bxg5','gxh6','Qxg5','Qg7','b6','Bb7','Rxe8','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','Nbd2','Bd3','c3','Ne5','dxe5','h4','Bxh7+','Qh5+','Nf3','Ng5','Qxf7+','h5','h6','Bxg5','Qxe8','Rh3','Rg3','Rxg7','Rxb7'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','24','24','-','-','-','-','-','-',''],
			},
			{
				id: 24,
				nombre: "resultado-->id:23",
				jugadasCPU: ['-','d5','Nf6','e6','Be7','O-O','c5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','e3','xxx','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','e3','-','Nbd2','-','-','-','-',''],
				variante: ['-','-','23','-','23','-','-','-','-','']
			},
			{
				id: 25,
				nombre: "escenario estrategico - control del centro - alfil tensiona e5",
				jugadasCPU: ['-','d5','Nf6','e6','Bd6','O-O','c5','Qc7','Qxd6','Nc6','b6','Nd7','f5','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','Nbd2','Bd3','c3','Bxd6','Ne5','f4','Qf3','Qh3','g4'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','26','26','-','-','-','-','-','-',''],
			},
			{
				id: 26,
				nombre: "resultado-->id:25",
				jugadasCPU: ['-','d5','Nf6','e6','Bd6','O-O','c5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','xxx','o','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Bf4','-','e3','-','-','-','-','-',''],
				variante: ['-','25','-','25','-','-','-','-','-','']
			},
			{
				id: 27,
				nombre: "escenario estrategico - control del centro - alfil tensiona e5 - no magnus plan",
				jugadasCPU: ['-','d5','Nf6','e6','Bd6','O-O','c5','Nc6','END'],
				jugadasPlayer: ['d4','Bf4','e3','Nf3','Nbd2','Bd3','c3','Bg3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Nf3','Nf3','-','-','-','-','-','-',''],
				variante: ['-','28','28','-','-','-','-','-','-',''],
			},
			{
				id: 28,
				nombre: "resultado-->id:27",
				jugadasCPU: ['-','d5','Nf6','e6','Bd6','O-O','c5','a6','axb5','END'],
				jugadasPlayer: ['d4','Nf3','Bf4','xxx','o','b3','a4','axb5','Rxa8'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','Bf4','-','e3','-','-','-','-','-',''],
				variante: ['-','27','-','27','-','-','-','-','-','']
			},
			{
				id: 29,
				nombre: "Londres simétrico - defensa con dama b6",
				jugadasCPU: ['-','d5','Nf6','Bf5','c6','Qb6','e6','Qxb3','Nbd7','a6','cxb5','END'],
				jugadasPlayer: ['d4','Bf4','e3','c4','Qb3','Nc3','c5','axb3','b4','b5','Bxb5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','Nxb5'],
				variante: ['-','-','-','-','-','-','-','-','-','-','30'],
			},
			{
				id: 30,
				nombre: "resultado--> id:29",
				jugadasCPU: ['-','d5','Nf6','Bf5','c6','Qb6','e6','Qxb3','Nbd7','a6','cxb5','END'],
				jugadasPlayer: ['d4','Bf4','e3','c4','Qb3','Nc3','c5','axb3','b4','b5','Nxb5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','Bxb5'],
				variante: ['-','-','-','-','-','-','-','-','-','-','29'],
			},
			{
				id: 31,
				nombre: "Londres simétrico - defensa con dama c8",
				jugadasCPU: ['-','d5','Nf6','Bf5','c6','Qc8','e6','Nbd7','exd5','END'],
				jugadasPlayer: ['d4','Bf4','e3','c4','Qb3','Nc3','Rc1','cxd5','Nb5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','Nxb5'],
				variante: ['-','-','-','-','-','-','-','-','-','-','30'],
			},
			{
				id: 32,
				nombre: "Londres simétrico - defensa con dama c8",
				jugadasCPU: ['-','d5','Nf6','Bf5','c6','Qc8','e6','Nbd7','cxd5','dxe4','END'],
				jugadasPlayer: ['d4','Bf4','e3','c4','Qb3','Nc3','Rc1','cxd5','e4','Nb5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','Nxb5'],
				variante: ['-','-','-','-','-','-','-','-','-','-','30'],
			},
			{
				id: 33,
				nombre: "Londres vs India de rey (Ataque 150)",
				jugadasCPU: ['-','Nf6','g6','Bg7','d6','O-O','a6','b5','b4','a5','e6','Nxh5','Nxg7','Nh5','Nf6','Nfd7','END'],
				jugadasPlayer: ['d4','Bf4','Nc3','e4','Qd2','O-O-O','Bh6','f3','Nce2','h4','h5','Bxg7','Qh6','g4','e5','Qxh7#'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-','-'],
			},
			{
				id: 34,
				nombre: "Londres vs India de rey (Ataque 150)",
				jugadasCPU: ['-','Nf6','g6','Bg7','d6','O-O','a6','b5','b4','a5','e6','Nxh5','Kxg7','Nf6','Kg8','Nfd7','END'],
				jugadasPlayer: ['d4','Bf4','Nc3','e4','Qd2','O-O-O','Bh6','f3','Nce2','h4','h5','Bxg7','g4','Qh6+','e5','Qxh7#'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-','-','-'],
				variante: ['-','-','-','-','-','-','-','-','-','-','-'],
			}

			
			//Pdte --> Seguir con alternativas a (min 14) Londres vs india de Rey (Ataque 150) https://www.youtube.com/watch?v=nx10HUKONik
		],
		orientation: 'white'
	},
	{
		nombre: "Defensa Benoni",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','Nf6','c5','END'],
				jugadasPlayer: ['d4','c4','d5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			},
			{
				id: 1,
				nombre: "Gambito Volga",
				jugadasCPU: ['-','Nf6','c5','b5','END'],
				jugadasPlayer: ['d4','c4','d5','cxb5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Ataque Trompowsky",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','Nf6','e6','END'],
				jugadasPlayer: ['d4','Nf3','Bg5'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Apertura Catalana",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','Nf6','e6','END'],
				jugadasPlayer: ['d4','c4','g3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	},
	{
		nombre: "Defensa Nimzoindia",
		posicionInicial: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
		variante: [
			{
				id: 0,
				nombre: "Spoiler",
				jugadasCPU: ['-','Nf6','e6','Bb4','Bxc3','END'],
				jugadasPlayer: ['d4','c4','Nc3','a3','bxc3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
			}
		],
		orientation: 'white'
	}
]