import './App.css';
import './assets/fonts.css'

import logo from './imagens/logo.png';
import fotoDestauqe from './imagens/banner_destaque_header.svg';
import quemSomos from './imagens/Rectangle.png';



function App() {
  return (
    <div className="">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
      
      <header className="">

        <div className='header row'>
          <div className="logo col-md-4">
          <img src={logo} alt="logo empresa"></img>
          </div>

          <div className="pesquisa col-md-4">
            <form>
                <input type="text" name="query" placeholder="Pesquisar..." className="barraDePesquisa"></input>
                <button className="botaoBarraDePesuisa">
                     <i class="fas fa-arrow-right"></i>
                </button>
            </form>
          </div>

          <div className="menu col-md-4">
            <nav>
                <ul className="menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Sobre</a></li>
                      <li><a href="#">O que fazemos?</a>
                          <ul>
                                  <li><a href="#">Web Design</a></li>
                                  <li><a href="#">SEO</a></li>
                                  <li><a href="#">Design</a></li>
                          </ul>
                    </li>
                  <li><a href="#">Links</a></li>
                  <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>

        </div>

        <div className='bannerDestaque'>
          <img src={fotoDestauqe} alt="banner destaque"></img>
        </div>

        <div className="fitroProtudos">
        <div class="container">
        <div class="row">
            <div class="col">
                <select id="filtro1" class="form-control">
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                    <option value="opcao4">Opção 4</option>
                </select>
            </div>
            <div class="col">
                <select id="filtro2" class="form-control">
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                    <option value="opcao4">Opção 4</option>
                </select>
            </div>
            <div class="col">
                <select id="filtro3" class="form-control">
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                    <option value="opcao4">Opção 4</option>
                </select>
            </div>
            <div class="col"> <button id="botaoBuscar" class="btn btn-primary">Buscar</button> </div>
        </div>
    </div>
        </div>
      </header>

      <body>

        <div className='quemSomos corBackgroundOpacidade row'>
          <div className='textoQueSomos col-md-6'>
            <h2 className='titulo tituloQuemSomos'>Quem somos</h2>
            <p className='texto textoQuemSomos'>Nossa empresa de cupcakes surgiu há 10 anos, quando duas amigas uniram forças para criar algo novo e especial. Com a demanda crescente por doces personalizados, abriram a primeira loja em um bairro movimentado. A qualidade dos produtos e o atendimento diferenciado logo chamaram a atenção dos clientes. Hoje, contamos com várias lojas e uma equipe dedicada e apaixonada. Nosso objetivo é continuar inovando e oferecendo produtos de alta qualidade, mantendo sempre o espírito artesanal que nos trouxe até aqui.</p>
            <button id="botaoBuscar" class="btn btn-primary">Ver Mais</button>
          </div>
          <div className='fotoDestaqueQuemSomos col-md-6'>
            <img src={quemSomos} ></img>
          </div>
        </div>

        <div className='destaque'>

        </div>

      </body>

      <footer>
        <div className='footer row'> 
        
        <div className='informacoesFooter col-md-4'>
            <h3>Institucional</h3><br></br>
            <a href="/">Sobre</a><br></br><br></br>
            <a href="/">Produtos</a><br></br><br></br>

            <h3>Redes Sociais</h3>
            <i class="fa-brands fa-youtube"></i><a href="/">Cupcake_oficial</a><br></br><br></br>
            <i class="fa-brands fa-square-instagram"></i><a href="/">Cupcake_oficial</a><br></br>
        </div>

        <div className='contatoFooter col-md-4'>
            <h3>Contato</h3><br></br>
            <i class="fa-solid fa-mobile"></i><a>(99) 9999-9999</a><br></br><br></br>
            <i class="fa-brands fa-square-whatsapp"></i><a>(99) 9999-9999</a><br></br><br></br>
            <i class="fa-solid fa-envelope"></i><a>CupcakeOficial@Cupcake.com.br</a>
        </div>

        <div className='enderecoFooter col-md-4'>
            <h3>Enderenço</h3><br></br>
            <i class="fa-solid fa-location-dot"></i><a>Avenida José Roque norte,450, Vila nastor, 5015, RS  - 99999-999</a><br></br>
        </div>
        
        </div>
      </footer>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      
    </div>
    
  );
}

export default App;
