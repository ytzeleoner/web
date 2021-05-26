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
	},
	{
		nombre: "Partidas 1",
		tipo: "Tactica",
		subtipo: "Atrapada",
		posicionInicial:"5Nk1/p6p/6p1/3P1p1n/3P4/7P/Pr3PPB/R5K1 b - - 0 27",
		jugadasCPU: ['Kxf8','Ke7','fxg4','END'],
		jugadasPlayer: ['Be5','g4','hxg4'],
		orientation: 'white'
	},
	{
		nombre: "Partidas 2",
		tipo: "Tactica",
		subtipo: "Doble Ataque",
		posicionInicial:"r1bqkb1r/p1p5/1p2p1pp/3pPp2/3P1B2/3P1N1P/PP1N1PP1/2RQK2R b Kkq - 1 13",
		jugadasCPU: ['Ba6','Qd7','END'],
		jugadasPlayer: ['Qa4+','Qxa6'],
		orientation: 'white'
	},
	{
		nombre: "Partidas 3",
		tipo: "Tactica",
		subtipo: "Clavada",
		posicionInicial:"1k1r3r/p2q4/Qpp1p2p/3pPp2/3P4/R2P3p/PP1N1PPB/2R3K1 b - - 1 23",
		jugadasCPU: ['Rhg8','Qxc6','Kc8','Rxg2+','Qxc3','END'],
		jugadasPlayer: ['Rxc6','Qxa7+','Rc3','Kh1','bxc3'],
		orientation: 'white'
	},
	{
		nombre: "Partidas 4 - Victorias perdidas",
		tipo: "Jaque",
		subtipo: "Basicos",
		posicionInicial:"R7/5pk1/4p1p1/2N2n1p/P7/4P2P/1P3PK1/1RBr1r2 w - - 5 34",
		jugadasCPU: ['Nb3','Kg3','Rg8+','Nd4','Kh2','END'],
		jugadasPlayer: ['Nh4+','g5','Kxg8','Rg1+','Rg2#'],
		orientation: 'black'
	},
	{
		nombre: "Partidas 5 - Victorias perdidas",
		tipo: "Jaque",
		subtipo: "Basicos",
		posicionInicial:"R7/5pk1/4p3/5n2/P2N2p1/4PK2/1P3P2/1RBr2r1 w - - 0 38",
		jugadasCPU: ['Ke2','END'],
		jugadasPlayer: ['Rge1#'],
		orientation: 'black'
	},
	{
		nombre: "Ejercicios Escuela",
		tipo: "Doble Ataque",
		subtipo: "Basicos",
		posicionInicial:"r3r1k1/1pqb1nbp/2pp2p1/8/2PNBP2/1P4PP/2Q2B1K/2R1R3 b - - 0 38",
		jugadasCPU: ['Ra3','hxg6','Bxe8','Qe7','Kxg7','Kh7','END'],
		jugadasPlayer: ['Bxg6','Rxe8+','Ne6','Nxg7','Qb2+','Qxa3'],
		orientation: 'white'
		
	},
	{
		nombre: "Ejercicios Escuela",
		tipo: "Doble Ataque",
		subtipo: "Basicos",
		posicionInicial:"8/5pk1/8/4p3/pp1qPn2/8/PP2BP2/2Q2K2 w - - 0 38",
		jugadasCPU: ['f3','Kxg1','Kf2','END'],
		jugadasPlayer: ['Qg1+','Nxe2+','Nxc1'],
		orientation: 'black'
	},
	{
		nombre: "1051026 (Dif 1605)",
		tipo: "Jaque Mate",
		subtipo: "Basicos",
		posicionInicial:"1r3r2/4p1kN/nqp2np1/p7/2Pp4/2N2P2/P2Q2P1/2KR3R b - - 0 22",
		jugadasCPU: ['dxc3','Kf7','Ke8','END'],
		jugadasPlayer: ['Qh6+','Ng5+','Qxg6+'],
		orientation: 'white'
	},
	{
		nombre: "1236311 (Dif 1464)",
		tipo: "Calculo",
		subtipo: "Basicos",
		posicionInicial:"8/6K1/8/5k2/6pp/7P/6P1/8 w - - 0 72",
		jugadasCPU: ['Kh6','gxh3','Kg6','Kg5','Kf4','Kg4','END'],
		jugadasPlayer: ['gxh3','Kf4','Kg3','Kxh3','Kg2','h3'],
		orientation: 'black'
	},
	{
		nombre: "1351078  (Dif 1717)",
		tipo: "Doble Ataque",
		subtipo: "Basicos",
		posicionInicial:"5bnr/1rk2pp1/8/pBqp4/P2N2QB/2PP3P/1P6/4K1Nb b - - 0 25",
		jugadasCPU: ['Nh6','Kb6','Ka7','Qxc6','END'],
		jugadasPlayer: ['Qd7+','Bd8+','Nc6+','Qxc6'],
		orientation: 'white'
	},
	{
		nombre: "Magnusen",
		tipo: "Clavada",
		subtipo: "Basicos",
		posicionInicial:"kr6/pr4pp/1R1p4/3P1p2/2QPp3/q1p1P1P1/2R2P1P/1K6 w - - 0 25",
		jugadasCPU: ['Qc6','END'],
		jugadasPlayer: ['Qa6'],
		orientation: 'black'
	},
	{
		nombre: "Magnusen",
		tipo: "Atrapar",
		subtipo: "Basicos",
		posicionInicial:"1k6/1pp5/p3pn2/3p1p1p/3Pq3/P3P3/1PP1BP2/1K1Q4 b - - 0 25",
		jugadasCPU: ['h4','END'],
		jugadasPlayer: ['Bf3'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela",
		tipo: "Atrapar",
		subtipo: "Basicos",
		posicionInicial:"2br1rk1/1p2bppp/p1p2n2/q3Np2/PnBPP3/2N3B1/1P2Q1PP/R4RK1 b - - 0 25",
		jugadasCPU: ['h6','Rxf7','END'],
		jugadasPlayer: ['Bxf7+','Nc4'],
		orientation: 'white'
	},
	{
		nombre: "Ejercicio Escuela",
		tipo: "Atrapar",
		subtipo: "Basicos",
		posicionInicial:"1qr1n3/1pnr1p2/k3p1p1/B2p1bPp/3P1P1P/1N2P3/1K1Q4/2RR4 b - - 0 25",
		jugadasCPU: ['Nb5','Qxc7','Rcxc7','END'],
		jugadasPlayer: ['Bc7','Rxc7','Qa5#'],
		orientation: 'white'
	}
	

]
