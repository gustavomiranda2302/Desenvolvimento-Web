function Article(props){
    return(
         <article>
        <h2>
            {props.titulo}
        </h2>
        <p>
            por {props.autor}
        </p>
        <time datetime="2026-02-28">
            28 de fevereiro de 2026
        </time>
        <p>
            Na postagem de hoje, quero mostrar e falar um pouco sobre minhas três figurinhas favoritas. Eu realmente
            acho que elas são uma forma incrível de se comunicar de maneira mais dinâmica por texto, especialmente num
            ambiente onde a conversa pode ficar rígida e perder a comicidade com muita facilidade.
        </p>

        <figure id="FigurinhasFavoritas">
            <img src="https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg"
                alt="um macaco feliz com o texto ebaaa escrito abaixo dele" width="300"></img>
            <figcaption>
                Macaco ebaa, boa pra usar em momentos que você achou algo legal
            </figcaption>
        </figure>
        <figure>
            <img src="https://pbs.twimg.com/media/Gyv8aBlWMAArMY-.jpg"
                alt="um caminhao arqueado como o texto a pressao é bruta e o piloto é jovem abaixo" width="300">
            </img><figcaption>
                Boa pra usar em situações de adversidade, mostrando que apesar das circunsatancias dificeis, tudo é
                possivel
            </figcaption>
        </figure>
        <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvTmgJ4DOtdSv1yI8OZBv3Mt_pFnIOn9ZbQ&s"
                alt="uma vw kombi com o seu nome sobre a sua imagem e nado escrito abaixo, fazendo o trocadilho kombinado"
                width="300"></img>
            <figcaption>
                boa pra momentos em que você quer concordar com o que a outra pessoa está dizendo
            </figcaption>
        </figure>
        <p>
            Essas são algumas das minhas figurinhas favoritas, aquelas que eu sempre acabo usando nas conversas do
            dia a dia. Eu gosto delas porque conseguem transmitir exatamente o que eu quero dizer — às vezes até
            melhor do que palavras. Acho que figurinha tem esse poder de deixar tudo mais leve, mais espontâneo, e
            até mais engraçado.
            Se vocês curtirem esse tipo de postagem, posso trazer mais vezes e até mostrar outras que eu uso
            bastante também.
        </p>
    </article>


    );
}


export default Article;