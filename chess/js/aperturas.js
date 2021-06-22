
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
				jugadasCPU: ['-','e5','Nc6','a6','Nf6','Be7','b5','d6','O-O','END'],
				jugadasPlayer: ['e4','Nf3','Bb5','Ba4','O-O','Re1','Bb3','c3','h3'],
				jugadaError: ['-','-','-','-','-','-','-'],
				explicacionError: '',
				simulacionErrorCPU: [],
				simulacionErrorPlayer: [],
				jugadasAlternativas: ['-','-','-','-','-','-','-','-','-',''],
				variante: ['-','-','-','-','-','-','-','-','-',''],
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
				jugadasPlayer: ['e4','Nf3','Nxe5','Qh5+','Qe5+'],
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
				nombre: "Spoiler",
				jugadasCPU: ['-','d5','END'],
				jugadasPlayer: ['d4','Bf4'],
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