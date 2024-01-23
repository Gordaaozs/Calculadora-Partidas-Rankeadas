class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
  
    atacar() {
        let ataque;
  
        switch (this.tipo) {
            case 'mago':
                ataque = 'Suiton Dragon';
                break;
            case 'guerreiro':
                ataque = 'A Gunbai';
                break;
            case 'monge':
                ataque = 'Urange Range';
                break;
            case 'ninja':
                ataque = 'Katon Fire Shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }
  
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Herói Mágico', 25, 'mago');
  const heroi2 = new Heroi('Herói Valente', 30, 'guerreiro');
  const heroi3 = new Heroi('Herói Disciplinado', 28, 'monge');
  const heroi4 = new Heroi('Herói Sombrio', 22, 'ninja');
  
  heroi1.atacar(); // Saída esperada: "O mago atacou usando usou magia"
  heroi2.atacar(); // Saída esperada: "O guerreiro atacou usando usou espada"
  heroi3.atacar(); // Saída esperada: "O monge atacou usando usou artes marciais"
  heroi4.atacar(); // Saída esperada: "O ninja atacou usando usou shuriken"