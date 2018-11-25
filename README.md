# BooksSorter

## Sistema de ordenação de livros

Frameworks utilizados: AngularJS, Bootstrap, UI-Bootstrap.

Na escolha das tecnologias, foi levado em conta a praticidade e o tempo de desenvolvimento da ferramenta, bem como a possibilidade da entraga de uma aplicação eficaz e simples visualmente.

Foi levado em consideração a criação de um serviço REST em php para a elaboração do teste, porém, foi decidido que a criação de um frontEnd funcional seria mais atraente. Se faz nescessário destacar que, a funcionalidade de ordenamento dos livros, sendo feita pelo navegador do usuário reduz o processamento feito pelo servidor.

Esta ferramenta depende apenas de um servidor web. Será descrito as estapas da instalação de um servidor Apache, no SO Ubuntu.

### Como instalar

#### Instale o servidor apache

````
sudo apt install apache2
````

#### Instale o git

````
sudo apt install git
````

#### Clone o projeto dentro da pasta /etc/www/html

````
sudo git clone https://github.com/Mblacksheep/BooksSorter.git
````
#### Agora acesse a aplicação no seu navegador

````
localhost/BooksSorter/
````
