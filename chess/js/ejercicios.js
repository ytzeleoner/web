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
		jugadasPlayer: ['Qh4+','Qh7#'],
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
	},
	{
		nombre: "39340 Dif(849)",
		tipo: "Tactica",
		subtipo: "Calculo",
		posicionInicial:"2rq1rk1/p4pp1/2pb1np1/1p1nR1BP/3P4/1B3QN1/PP3PP1/R5K1 b - - 0 1",
		jugadasCPU: ['Bxe5','END'],
		jugadasPlayer: ['dxe5'],
		orientation: 'white'
	},
	{
		nombre: "986528 Dif(931)",
		tipo: "Mate",
		subtipo: "Basicos",
		posicionInicial:"1r4k1/3n1ppp/3Q4/p2P1P2/P7/1q4P1/R1p4P/K1R5 w - - 0 1",
		jugadasCPU: ['Raxc2','Ra2','END'],
		jugadasPlayer: ['Qxa4+','Qd4+'],
		orientation: 'black'
	},
	{
		nombre: "100946 Dif(981)",
		tipo: "Tactica",
		subtipo: "Calculo",
		posicionInicial:"2k4r/p1p2p2/1p3q2/1P2p3/P3R3/2Q3rp/1BP4P/5RK1 w - - 0 30",
		jugadasCPU: ['hxg3','Kg2','Kxf1','END'],
		jugadasPlayer: ['h2+','Qxf1+','h1=Q+'],
		orientation: 'black'
	},
	{
		nombre: "170899 Dif(531)",
		tipo: "Tactica",
		subtipo: "Horquilla",
		posicionInicial:"5rk1/p1R3p1/7p/4N3/2B5/P7/KP2p2r/8 b - - 0 1",
		jugadasCPU: ['Kh8','Kh7','END'],
		jugadasPlayer: ['Ng6+','Nxf8+'],
		orientation: 'white'
	},
	{
		nombre: "108669 Dif(654)",
		tipo: "Mate",
		subtipo: "Beso de la muerte",
		posicionInicial:"r7/1p1B4/pknQ4/q1p1p3/1nP1P3/1P1P4/P7/1K1R2B1 w - - 1 30",
		jugadasCPU: ['Bxc6','Kc1','END'],
		jugadasPlayer: ['Qxa2+','Qc2#'],
		orientation: 'black'
	},
	{
		nombre: "1037338 Dif(949)",
		tipo: "Mate",
		subtipo: "Pasillo",
		posicionInicial:"3r2k1/p4ppp/2B5/Q1p1P3/5P2/1pP1n1P1/bP1N1q1P/2KR4 b - - 8 29",
		jugadasCPU: ['Rxd2','Rxd8','END'],
		jugadasPlayer: ['Qd8+','Rxd8#'],
		orientation: 'white'
	},
	{
		nombre: "116133 Dif(921)",
		tipo: "Mate",
		subtipo: "Basicos",
		posicionInicial:"5rk1/pQp3pp/7r/4q3/3p4/P2P1pPP/1PP2P1K/2R4R w - - 3 28",
		jugadasCPU: ['Rce1','Kxh3','END'],
		jugadasPlayer: ['Rxh3+','Qh5#'],
		orientation: 'black'
	},
	{
		nombre: "129260 Dif(998)",
		tipo: "Mate",
		subtipo: "Pasillo",
		posicionInicial:"r4k2/pp1Q1prp/8/8/2q5/5P2/1P4PP/4R1KR b - - 3 23",
		jugadasCPU: ['Qc2','Kg8','Rxe8','END'],
		jugadasPlayer: ['Qe7+','Qe8+','Rxe8#'],
		orientation: 'white'
	},
	{
		nombre: "39470 Dif(1230)",
		tipo: "Tactica",
		subtipo: "Atrapada",
		posicionInicial:"6Q1/5b2/4k2K/8/7B/5B2/8/8 b - - 0 1",
		jugadasCPU: ['Bxg8','Bf7','Kd6','END'],
		jugadasPlayer: ['Kg7','Bg4+','Kxf7'],
		orientation: 'white'
	}
	

]
