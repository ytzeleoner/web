var estrategia=[
	{
		nombre: "Estrategia Rui Lopez - Intercambio",
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