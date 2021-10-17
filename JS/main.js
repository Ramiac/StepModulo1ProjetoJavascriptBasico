// ############### JS - Sistema de academia de Gínastica ##################

// ############ somente o login esta visivel no inicio de carregamento ##########
document.querySelector('#usernameConfirma').style.display = 'none';

document.querySelector('#interface').style.display = 'none';

document.querySelector('#cadastramentoDeAluno').style.display = 'none';
document.querySelector('#cadastramentoDeProfessor').style.display = 'none';
document.querySelector('#cadastramentoDeTurma').style.display = 'none';
document.querySelector('#listaDeAlunos').style.display = 'none';
document.querySelector('#listaDeProfessores').style.display = 'none';
document.querySelector('#listaDeTurmas').style.display = 'none';
document.querySelector('#listaDeMatriculas').style.display = 'none';
document.querySelector('#matriculaUmAluno').style.display = 'none';

document.querySelector('#buttonCadastraAlunos').style.display = 'none';
document.querySelector('#buttonCadastraProf').style.display = 'none';
document.querySelector('#buttonCadastraTurmas').style.display = 'none';
document.querySelector('#buttonConsultarAlunos').style.display = 'none';
document.querySelector('#buttonConsultarProfessores').style.display = 'none';
document.querySelector('#buttonConsultarTurmas').style.display = 'none';
document.querySelector('#buttonConsultarMatriculas').style.display = 'none';
document.querySelector('#buttonMatriculaAluno').style.display = 'none';
document.querySelector('#buttonSair').style.display = 'none';

// ############## constante para memoria de cadastramentos ###########
// const da 'atendente' está no final do codigo
const alunos = [{
        "nome": "rami achcar",
        "senha": "rt",
        "turmas": [
            "ju-ji-tsu",
            "escalada em rocha"
        ]
    },
    {
        "nome": "josé silveira",
        "senha": "df",
        "turmas": [
            "escalada em rocha",
            "spining",
            "yoga"
        ]
    },
    {
        "nome": "juca bala",
        "senha": "12345",
        "turmas": []
    }
];
const professores = [{
        "nome": "antonio pereira",
        "senha": "gh",
        "turmas": [
            "yoga",
            "escalada em rocha",
            "box thai"
        ]
    },
    {
        "nome": "carlos monteiro",
        "senha": "pc",
        "turmas": [
            "spining",
            "ju-ji-tsu"
        ]
    },
    {
        "nome": "joao felipe costa",
        "senha": "hj",
        "turmas": []
    }
];
const turmas = [{
        "nome": "yoga",
        "professor": "antonio pereira",
        "alunos": [
            "josé",
        ],
        "dias": "Sábado",
        "horario": "manha3"
    },
    {
        "nome": "escalada em rocha",
        "professor": "antonio pereira",
        "alunos": [
            "rami achcar",
            "josé",
        ],
        "dias": "Sexta-feira",
        "horario": "tarde4"
    },
    {
        "nome": "spining",
        "professor": "carlos monteiro",
        "alunos": [
            "josé",
        ],
        "dias": "Quarta-feira",
        "horario": "manha1"
    },
    {
        "nome": "ju ji tsu",
        "professor": "carlos monteiro",
        "alunos": [
            "rami achcar"
        ],
        "dias": "Quinta-feira",
        "horario": "tarde3"
    },
    {
        "nome": "box thai",
        "professor": "antonio pereira",
        "alunos": [],
        "dias": "Sexta-feira",
        "horario": "tarde1"
    }
];

/* ############### class Usuario e a principal, com methodos de :
*                   login (dirigeUsuario) 
*                   das paginas (buttons)
*                   de bonificação de texto (horario, imprimeNome)
*                   compartilhadas (consultaTurmas, consultaMatriculas)
*                   imprmeMatricula, function do onchange ligada com consultaMatriculas
#################*/
class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }

    // ###### inclui functions de checkagem de senha, 
    // de usuario no BD e direitos de suuario, campo vasio etc.
    // e dirigea o usuario na secção dele #####
    dirigeUsuario() {
        let validoUsuario = 0;
        let validoSenha = 0;

        document.querySelector('#usernameConfirma').style.display = 'none';

        function apagabuttons() {
            document.querySelector('#buttonCadastraAlunos').style.display = 'none';
            document.querySelector('#buttonCadastraProf').style.display = 'none';
            document.querySelector('#buttonCadastraTurmas').style.display = 'none';
            document.querySelector('#buttonConsultarAlunos').style.display = 'none';
            document.querySelector('#buttonConsultarProfessores').style.display = 'none';
            document.querySelector('#buttonConsultarTurmas').style.display = 'none';
            document.querySelector('#buttonConsultarMatriculas').style.display = 'none';
            document.querySelector('#buttonMatriculaAluno').style.display = 'none';
            document.querySelector('#buttonSair').style.display = 'none';
        }

        let usuario = document.querySelector('#usuario').value.trim();
        let senha = document.querySelector('#senha').value;
        let quemE = document.querySelector('input[name="quemE"]:checked').value;
        let valido = 0;


        let nomeUsuario = document.querySelector('#usuario').value.trim();
        let senhaUsuario = document.querySelector('#senha').value;

        while (validoUsuario === 0 && validoSenha === 0) {
            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].nome === nomeUsuario.toLowerCase()) {
                    validoUsuario = 1;
                    if (alunos[i].senha === senhaUsuario) {
                        validoSenha = 1;
                    }
                }
            }

            for (let i = 0; i < professores.length; i++) {
                if (professores[i].nome === nomeUsuario.toLowerCase()) {
                    validoUsuario = 1;
                    if (professores[i].senha === senhaUsuario) {
                        validoSenha = 1;
                    }
                }
            }

            if (nomeUsuario.toLowerCase() === atendente.nome) {
                validoUsuario = 1;
                if (senhaUsuario === atendente.senha) {
                    validoSenha = 1;
                }
            }
            break;
        }

        if (validoUsuario === 0) {
            document.querySelector('#usernameConfirma').style.display = 'block';
            document.querySelector('#usernameConfirma').innerHTML =
                ('Nome de usuario inexistante, por favor se cadastra com a nossa atendente. obg')
        } else if (validoSenha === 0) {
            document.querySelector('#usernameConfirma').style.display = 'block';
            document.querySelector('#usernameConfirma').innerHTML =
                ('Senha inválida, tenta de novo.')
        }

        if (usuario === '' || senha === '') {
            document.querySelector('#usernameConfirma').style.display = 'block';
            document.querySelector('#usernameConfirma').innerHTML =
                ('Campos do usuario ou senha <br> não podem ficar vazios.')
        } else if (validoUsuario === 1 && validoSenha === 1) {
            valido = 1
        }

        if (valido === 1) {
            let confirma = 0;
            switch (quemE) {
                case 'aluno':
                    for (let i = 0; i < alunos.length; i++) {
                        if (alunos[i].nome === usuario.toLowerCase()) {
                            apagabuttons()
                            document.querySelector('#interface').style.display = 'block';
                            document.querySelector('#login').style.display = 'none';

                            document.querySelector('#buttonConsultarTurmas').style.display = 'block';
                            document.querySelector('#buttonSair').style.display = 'block';
                            usuarioLogado = new Aluno(usuario.toLowerCase(), senha);
                            confirma = 1;
                            document.querySelector('#usuario').value = '';
                        }
                    }
                    if (confirma === 0) {
                        document.querySelector('#usernameConfirma').style.display = 'block';
                        document.querySelector('#usernameConfirma').innerHTML =
                            ('Esse nome não está cadastrado como aluno, tenta outra vez.');
                    }
                    break;
                case 'professor':
                    for (let i = 0; i < professores.length; i++) {
                        if (professores[i].nome === usuario.toLowerCase()) {
                            apagabuttons()
                            document.querySelector('#interface').style.display = 'block';
                            document.querySelector('#login').style.display = 'none';

                            document.querySelector('#buttonConsultarTurmas').style.display = 'block';
                            document.querySelector('#buttonConsultarMatriculas').style.display = 'block';
                            document.querySelector('#buttonSair').style.display = 'block';
                            usuarioLogado = new Professor(usuario.toLowerCase(), senha);
                            confirma = 1;
                            document.querySelector('#usuario').value = '';
                        }
                    }
                    if (confirma === 0) {
                        document.querySelector('#usernameConfirma').style.display = 'block';
                        document.querySelector('#usernameConfirma').innerHTML =
                            ('Esse nome não está cadastrado como professor, tenta outra vez.');

                    };

                    break;
                case 'atendente':
                    if (usuario.toLowerCase() === atendente.nome) {
                        document.querySelector('#interface').style.display = 'block';
                        document.querySelector('#login').style.display = 'none';

                        document.querySelector('#buttonCadastraAlunos').style.display = 'block';
                        document.querySelector('#buttonCadastraProf').style.display = 'block';
                        document.querySelector('#buttonCadastraTurmas').style.display = 'block';
                        document.querySelector('#buttonConsultarAlunos').style.display = 'block';
                        document.querySelector('#buttonConsultarProfessores').style.display = 'block';
                        document.querySelector('#buttonConsultarTurmas').style.display = 'block';
                        document.querySelector('#buttonConsultarMatriculas').style.display = 'block';
                        document.querySelector('#buttonMatriculaAluno').style.display = 'block';
                        document.querySelector('#buttonSair').style.display = 'block';
                        usuarioLogado = atendente;
                        confirma = 1;
                        document.querySelector('#usuario').value = '';
                    } else
                    if (confirma === 0) {
                        document.querySelector('#usernameConfirma').style.display = 'block';
                        document.querySelector('#usernameConfirma').innerHTML =
                            ('Esse nome não está cadastrado como atendente, tenta outra vez.');
                    }

                    break;
            }
        }


        document.querySelector('#senha').value = '';
        document.querySelectorAll('[name="quemE"]')[0].checked = true;
    }

    // ############## ao pressionar num botão, aparesse pagina relacionada ############
    buttons(botaoClicado) {
        function apagaSeccoes() {
            document.querySelector('#cadastramentoDeAluno').style.display = 'none';
            document.querySelector('#cadastramentoDeProfessor').style.display = 'none';
            document.querySelector('#cadastramentoDeTurma').style.display = 'none';
            document.querySelector('#listaDeAlunos').style.display = 'none';
            document.querySelector('#listaDeProfessores').style.display = 'none';
            document.querySelector('#listaDeTurmas').style.display = 'none';
            document.querySelector('#listaDeMatriculas').style.display = 'none';
            document.querySelector('#matriculaUmAluno').style.display = 'none';

            document.querySelector('#confirmCadastroAluno').innerHTML = '';
            document.querySelector('#confirmCadastroProfessor').innerHTML = '';
            document.querySelector('#confirmCadastroTurma').innerHTML = '';
            document.querySelector('#confirmMatriculaAluno').innerHTML = '';
        }

        switch (botaoClicado) {
            case 'buttonCadastraAlunos':
                apagaSeccoes();
                document.querySelector('#cadastramentoDeAluno').style.display = 'block';
                break;

            case 'buttonCadastraProf':
                apagaSeccoes();
                document.querySelector('#cadastramentoDeProfessor').style.display = 'block';
                break;

            case 'buttonCadastraTurmas':
                apagaSeccoes();
                document.querySelector('#cadastramentoDeTurma').style.display = 'block';

                document.querySelector('#cadastroTurmaProfessor').innerHTML = ''
                for (let i = 0; i < professores.length; i++) {
                    document.querySelector('#cadastroTurmaProfessor').innerHTML +=
                        '<option value = "' + professores[i].nome + '">' +
                        this.imprimeNome(professores[i].nome) + '</option>'
                }
                break;

            case 'buttonConsultarAlunos':
                apagaSeccoes();
                document.querySelector('#listaDeAlunos').style.display = 'block';
                this.consultarAlunos();
                break;

            case 'buttonConsultarProfessores':
                apagaSeccoes();
                document.querySelector('#listaDeProfessores').style.display = 'block';
                this.consultarProfessores();
                break;

            case 'buttonConsultarTurmas':
                apagaSeccoes();
                document.querySelector('#listaDeTurmas').style.display = 'block';
                this.consultaTurmas()
                break;

            case 'buttonConsultarMatriculas':
                apagaSeccoes();
                document.querySelector('#listaDeMatriculas').style.display = 'block';
                this.consultaMatriculas();
                break;

            case 'buttonMatriculaAluno':
                apagaSeccoes();
                document.querySelector('#matriculaUmAluno').style.display = 'block';

                document.querySelector('#selecaoTurma').innerHTML = ''
                for (let i = 0; i < turmas.length; i++) {
                    document.querySelector('#selecaoTurma').innerHTML +=
                        '<option value = "' + turmas[i].nome + '">' +
                        this.imprimeNome(turmas[i].nome) + '</option>'
                }

                document.querySelector('#selecaoAluno').innerHTML = ''
                for (let i = 0; i < alunos.length; i++) {
                    document.querySelector('#selecaoAluno').innerHTML +=
                        '<option value = "' + alunos[i].nome + '">' +
                        this.imprimeNome(alunos[i].nome) + '</option>'
                }
                break;

            case 'buttonSair':
                document.querySelector('#interface').style.display = 'none';

                document.querySelector('#cadastramentoDeAluno').style.display = 'none';
                document.querySelector('#cadastramentoDeProfessor').style.display = 'none';
                document.querySelector('#cadastramentoDeTurma').style.display = 'none';
                document.querySelector('#listaDeAlunos').style.display = 'none';
                document.querySelector('#listaDeProfessores').style.display = 'none';
                document.querySelector('#listaDeTurmas').style.display = 'none';
                document.querySelector('#listaDeMatriculas').style.display = 'none';
                document.querySelector('#matriculaUmAluno').style.display = 'none';

                document.querySelector('#buttonCadastraAlunos').style.display = 'none';
                document.querySelector('#buttonCadastraProf').style.display = 'none';
                document.querySelector('#buttonCadastraTurmas').style.display = 'none';
                document.querySelector('#buttonConsultarAlunos').style.display = 'none';
                document.querySelector('#buttonConsultarProfessores').style.display = 'none';
                document.querySelector('#buttonConsultarTurmas').style.display = 'none';
                document.querySelector('#buttonConsultarMatriculas').style.display = 'none';
                document.querySelector('#buttonMatriculaAluno').style.display = 'none';
                document.querySelector('#buttonSair').style.display = 'none';

                document.querySelector('#login').style.display = 'block';
                break;
        }
    }

    // ############ modifica a aparencia do horario de turmas do DB para tela ###########
    horarios(hora) {
        let horario = '';
        switch (hora) {
            case 'manha1':
                horario = '5h00 às 7h00 da manha';
                break;
            case 'manha2':
                horario = '7h00 às 9h00 da manha';
                break;
            case 'manha3':
                horario = '9h00 às 11h00 da manha';
                break;
            case 'manha4':
                horario = '11h00 às 13h00';
                break;
            case 'tarde1':
                horario = '13h00 às 15h00';
                break;
            case 'tarde2':
                horario = '15h00 às 17h00';
                break;
            case 'tarde3':
                horario = '17h00 às 19h00';
                break;
            case 'tarde4':
                horario = '19h00 às 21h00';
                break;
            case 'tarde5':
                horario = '21h00 às 23h00';
                break;


        }
        return horario;
    }

    // ############# modifica aparencia de nome na tela comn primeira letra capitalizada ####
    // ############# no DB tudo est em lowerCase
    imprimeNome(nome) {
        let imprime = nome.split(' ');
        let imprimeNomeCompleto = '';
        for (let i = 0; i < imprime.length; i++) {
            imprimeNomeCompleto += imprime[i].charAt(0).toUpperCase() + imprime[i].slice(1) + ' ';
        }

        return imprimeNomeCompleto;
    }

    // ############ turmas cadastradas, acessivel professores alunos (somente turma deles) e atendente(todas)
    // avisa quando ainda turma não tem aluno cadastrado ou quand aluno nao tem matricula ###################
    consultaTurmas() {
        document.querySelector('#listaTurmas').innerHTML = '';

        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome === this.nome) {
                if (alunos[i].turmas.length > 0) {
                    for (let j = 0; j < alunos[i].turmas.length; j++) {
                        for (let k = 0; k < turmas.length; k++) {
                            if (turmas[k].nome === alunos[i].turmas[j]) {
                                document.querySelector('#listaTurmas').innerHTML +=
                                    'Turma: <strong>' + this.imprimeNome(turmas[k].nome) + '</strong><br>' +
                                    'Nome do Professor: ' + this.imprimeNome(turmas[k].professor) + '<br>' +
                                    'Dia e Horario: ' + turmas[k].dias + ', das ' + this.horarios(turmas[k].horario) + '.<br><br>';
                            }
                        }
                    }
                } else {
                    document.querySelector('#listaTurmas').innerHTML = 'Você ainda não tem matriculas em nenhuma turma ainda.'
                }
            }
        }



        for (let i = 0; i < professores.length; i++) {
            if (professores[i].nome === this.nome) {
                if (professores[i].turmas.length > 0) {
                    for (let j = 0; j < professores[i].turmas.length; j++) {
                        for (let k = 0; k < turmas.length; k++) {
                            if (turmas[k].nome === professores[i].turmas[j]) {

                                let nomeAluno;
                                if (turmas[k].alunos.length > 0) {
                                    nomeAluno = this.imprimeNome(turmas[k].alunos.join(', '));
                                } else {
                                    nomeAluno = 'sem aluno matriculado nessa turma.'
                                }
                                document.querySelector('#listaTurmas').innerHTML +=
                                    'Turma: <strong>' + this.imprimeNome(turmas[k].nome) + '</strong><br>' +
                                    'Nome dos alunos: ' + nomeAluno + '<br>' +
                                    'Dia e Horario: ' + turmas[k].dias + ', das ' + this.horarios(turmas[k].horario) + '.<br><br>';
                            }
                        }
                    }
                } else {
                    document.querySelector('#listaTurmas').innerHTML = 'sem turma cadastrada ainda.'
                }

            }
        }



        if (atendente.nome === this.nome) {
            for (let i = 0; i < turmas.length; i++) {
                let nomeAluno;
                if (turmas[i].alunos.length > 0) {
                    nomeAluno = this.imprimeNome(turmas[i].alunos.join(', '));
                } else {
                    nomeAluno = 'sem aluno matriculado nessa turma.'
                }

                document.querySelector('#listaTurmas').innerHTML +=
                    'Turma: <strong>' + this.imprimeNome(turmas[i].nome) + '</strong><br>' +
                    'Nome do Professor: ' + this.imprimeNome(turmas[i].professor) + '<br>' +
                    'Nome dos alunos: ' + nomeAluno + '<br>' +
                    'Dia e Horario: ' + turmas[i].dias + ', das ' + this.horarios(turmas[i].horario) + '.<br><br>';
            }
        }




    }
    // ############ cadastros de matriculas, acessivel para  professores(so das turmas dele)
    // e atendente(todas), num select. #################################################
    consultaMatriculas() { // onclick
        document.querySelector('#listaMatriculas').innerHTML = '';
        document.querySelector('#turmasParaMatriculas').innerHTML =
            '<option selected disabled>Selecione turma</option>';

        for (let i = 0; i < professores.length; i++) {
            if (professores[i].nome === this.nome) {
                if (professores[i].turmas.length > 0) {
                for (let j = 0; j < professores[i].turmas.length; j++) {
                    
                        for (let k = 0; k < turmas.length; k++) {

                            if (turmas[k].nome === professores[i].turmas[j]) {
                                document.querySelector('#turmasParaMatriculas').innerHTML +=
                                    '<option value="' + turmas[k].nome + '">' + this.imprimeNome(turmas[k].nome) + '</option>';
                            }
                        }
                    }
                }else{
                    document.querySelector('#listaMatriculas').innerHTML = '<strong>Sem turma cadastrada ainda.</strong>';
                }
            }
        }

        if (atendente.nome === this.nome) {
            for (let i = 0; i < turmas.length; i++) {
                document.querySelector('#turmasParaMatriculas').innerHTML +=
                    '<option value="' + turmas[i].nome + '">' + this.imprimeNome(turmas[i].nome) + '</option>';
            }
        }
    }

    // ############# onchange do select, imprime na tela a matricula selecionada #######################
    imprimeMatriculas() { // onchange
        for (let i = 0; i < turmas.length; i++) {

            if (turmas[i].nome === document.querySelector('#turmasParaMatriculas').value) {
                let nomeAluno;
                if (turmas[i].alunos.length > 0) {
                    nomeAluno = this.imprimeNome(turmas[i].alunos.join(', '));

                } else {
                    nomeAluno = 'sem aluno matriculado nessa turma'
                }
                document.querySelector('#listaMatriculas').innerHTML =
                    'Nome dos alunos: ' + nomeAluno + '.<br>' +
                    'Dia e horario da aula: ' + turmas[i].dias + ', das ' + this.horarios(turmas[i].horario) + '.<br>';
            }
        }
    }
}

// ###########  cria novo objetos de turmas via cadastrarTurma() e recebe matriculas via matriculaAluno()#####
class Turma {
    constructor(nome, professor, dias, horario) {
        this.nome = nome;
        this.professor = professor;
        this.alunos = [];
        this.dias = dias;
        this.horario = horario;
    }
}

// ###########  cria novo objetos de alunos via cadastrarAluno() e recebe turma via matriculaAluno()#####
class Aluno extends Usuario {
    constructor(nome, senha) {
        super(nome, senha)
        this.turmas = [];
    }
}

// ########  cria novo objetos de professores via cadastrarProfessores() e recebe turma via cadastrarTurma()#####
class Professor extends Usuario {
    constructor(nome, senha) {
        super(nome, senha);
        this.turmas = []
    }
}

// ############## objeto do atendente em forma de class para extensibilidade do codigo, 
// caso no futuro e precisado criar mais de um atendente ##############
class Atendente extends Usuario {
    constructor(nome, senha) {
        super(nome, senha)
    }

    // ####################### cria um novo objeto via Aluno, checka com alert nome de usuario 
    // ja existante em alunos[] ou professores[] ou erro na senha + confirme num div ###################################
    cadastrarAluno() {
        let nome = document.querySelector('#cadastroNomeUsuario').value.toLowerCase().trim();
        let senha;
        let confirmado = 1;

        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome === nome) {
                confirmado = 0;
            }
        }

        for (let i = 0; i < professores.length; i++) {
            if (professores[i].nome === nome) {
                confirmado = 0;
            }
        }

        if (document.querySelector('#cadastroSenhaUsuario').value !==
            document.querySelector('#confirmSenhaUsuario').value) {
            window.alert('entra de novo a senha desejada e confirma ela')
        } else if (confirmado === 0) {
            alert("Nome de usuário ja cadastrado. Inventa outro nome");
            document.querySelector('#cadastroNomeUsuario').value = '';
        } else {
            senha = document.querySelector('#cadastroSenhaUsuario').value
            document.querySelector('#confirmCadastroAluno').innerHTML =
                '<strong>Aluno ' + this.imprimeNome(nome) + '</strong> cadastrado com sucesso.';

            alunos.push(new Aluno(nome, senha));

            document.querySelector('#cadastroNomeUsuario').value = '';
        }

        document.querySelector('#cadastroSenhaUsuario').value = '';
        document.querySelector('#confirmSenhaUsuario').value = '';
    }

    // ####################### cria um novo objeto via Professor, checka com alert nome de usuario 
    // ja existante em alunos[] ou professores[] ou erro na senha + confirme num div ###################################
    cadastrarProf() {
        let nome = document.querySelector('#cadastroNomeProfessor').value.toLowerCase().trim();
        let senha;

        let confirmado = 1;

        for (let i = 0; i < professores.length; i++) {
            if (professores[i].nome === nome) {
                confirmado = 0;
            }
        }

        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome === nome) {
                confirmado = 0;
            }
        }

        if (document.querySelector('#cadastroSenhaProfessor').value !==
            document.querySelector('#confirmSenhaProfessor').value) {

            window.alert('entra de novo a senha desejada e confirma ela')
        } else if (confirmado === 0) {
            alert("Nome de usuário ja cadastrado. Inventa outro nome");
            document.querySelector('#cadastroNomeProfessor').value = '';
        } else {
            senha = document.querySelector('#cadastroSenhaProfessor').value
            document.querySelector('#confirmCadastroProfessor').innerHTML =
                '<strong>Professor ' + this.imprimeNome(nome) + '</strong> cadastrado com sucesso.';

            professores.push(new Professor(nome, senha))
            document.querySelector('#cadastroNomeProfessor').value = '';
        }
        document.querySelector('#cadastroSenhaProfessor').value = '';
        document.querySelector('#confirmSenhaProfessor').value = '';
    }

    // ####################### cria um novo objeto via Turma, checka com alert nome de turma ou se falta de selecao de prof, dia ou horario
    // ja existante em turmas[], recebe nome de turma, nome do prefessor, data e horario + confirme num div ###################################
    cadastrarTurma() { // onclick
        let nomeTurma = document.querySelector('#cadastroNomeTurma').value.toLowerCase().trim();
        let nomeProfessor = document.querySelector('#cadastroTurmaProfessor').value;
        let diasTurma = document.querySelector('input[name="semana"]:checked').value;
        let horariosTurma = document.querySelector('input[name="horario"]:checked').value;
        let confirmado = 1;

        if (nomeTurma === '') {
            alert('Informe o nome dda turma.');
            confirmado = 0;
        } else if (nomeProfessor === '') {
            alert("Selecione um nome de professor!");
            confirmado = 0;
        } else if (diasTurma === '') {
            alert('Selecione um dia para turma')
            confirmado = 0;
        } else if (horariosTurma === '') {
            alert('Selecione um horario');
            confirmado = 0;
        } else {
            for (let i = 0; i < turmas.length; i++) {
                if (turmas[i].nome === nomeTurma) {
                    alert('Nome de turma já cadastrada, por favor excolhe um outro nome.');
                    confirmado = 0;
                    document.querySelector('#cadastroNomeTurma').value = '';
                }
            }
        }

        if (confirmado === 1) {
            turmas.push(new Turma(nomeTurma, nomeProfessor, diasTurma, horariosTurma));

            for (let i = 0; i < professores.length; i++) {
                if (professores[i].nome === nomeProfessor) {
                    professores[i].turmas.push(nomeTurma);
                }
            }

            document.querySelector('#confirmCadastroTurma').innerHTML =
                'Nova turma: <strong>' + this.imprimeNome(nomeTurma) +
                '</strong> com o professor: ' + this.imprimeNome(nomeProfessor) +
                ', cadastrada com sucesso.';

            document.querySelector('#cadastroNomeTurma').value = '';
        }
    }

    // ################### push em select todas turmas[].nome et alunos[].nome, checka se um de cada esta bem selecionado
    //  confirme no div o matricula ###############
    matriculaAluno() { // onclick 
        let selecaoTurma = document.querySelector('#selecaoTurma').value;
        let selecaoAluno = document.querySelector('#selecaoAluno').value;
        let valido = 1;

        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome === selecaoAluno) {
                for (let j = 0; j < alunos[i].turmas.length; j++) {
                    if (alunos[i].turmas[j] === selecaoTurma) {
                        alert('Não pode matricular o mesmo aluno duas vezes na mesma turma.');
                        valido = 0;
                    }
                }
                if (alunos[i].nome === selecaoAluno && valido === 1) {
                    alunos[i].turmas.push(selecaoTurma);
                    for (let k = 0; k < turmas.length; k++) {
                        if (turmas[k].nome === selecaoTurma) {
                            turmas[k].alunos.push(selecaoAluno);
                            var turmaDoAluno = turmas[k].nome;
                            var turmaProf = turmas[k].professor;
                            var turmaDia = turmas[k].dias;
                            var turmaHorario = turmas[k].horario;
                        }
                    }

                    document.querySelector('#confirmMatriculaAluno').innerHTML =
                        this.imprimeNome(alunos[i].nome) + ' cadastrado na turma: ' + this.imprimeNome(turmaDoAluno) +
                        ' com o professor: ' + this.imprimeNome(turmaProf) +
                        ', todos: ' + turmaDia + ' entre ' + this.horarios(turmaHorario) + '.'
                }
            }

        }

    }

    // ############ imprime na tela lista de alunos com nome, senhas e matriculas
    //  avisa quando o aluno não tem matricula ainda ####################
    consultarAlunos() {
        document.querySelector('#listAlunos').innerHTML = '';
        for (let i = 0; i < alunos.length; i++) {
            let imprimeTurma;
            if (alunos[i].turmas.length > 0) {
                imprimeTurma = this.imprimeNome(alunos[i].turmas.join(', '));
            } else {
                imprimeTurma = 'sem turma matriculada ainda.'
            }

            document.querySelector('#listAlunos').innerHTML +=
                'Nome do aluno: <strong>' + this.imprimeNome(alunos[i].nome) + '</strong><br>' +
                'Senha da conta: ' + alunos[i].senha + '<br>' +
                'Turmas matriculadas: ' + imprimeTurma + '<br><br>';
        }
    }

    // ############ imprime na tela lista de professores com nome, senhas e turmas
    //  avisa quando o professore não tem aula cadastrada ainda ####################
    consultarProfessores() { // onclick
        document.querySelector('#listaProfessores').innerHTML = '';

        for (let i = 0; i < professores.length; i++) {
            let imprimeTurma;
            if (professores[i].turmas.length > 0) {
                imprimeTurma = this.imprimeNome(professores[i].turmas.join(', '));
            } else {
                imprimeTurma = 'sem turmas cadastradas ainda.'
            }

            document.querySelector('#listaProfessores').innerHTML +=
                'Nome do professor: <strong>' + this.imprimeNome(professores[i].nome) + '</strong><br>' +
                'Senha da conta: ' + professores[i].senha + '<br>' +
                'Turmas do professor: ' + imprimeTurma + '<br><br>';
        }
    }

}

// ############### super usuario ########################
const atendente = new Atendente('atendente', 'rt');

//  ############# recebe tipo de usuario para definir direitos de cada ###########
let usuarioLogado;