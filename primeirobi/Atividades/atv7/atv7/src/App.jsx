import Header from './components/header';
import Footer from './components/Footer';
import Article from './components/Article';
import Sidebar from './components/Sidebar';

function App() {
    const post = {
        titulo: "As minhas três figurinhas favoritas do Whatsapp",
        autor: "Gustavo",
        data: "28 de fevereiro de 2026"
    };
    return (
        <><Header /><main>
         <Article titulo={post.titulo} autor={post.autor} data={post.data} />
        <Sidebar />
      </main><Footer /></>

    );
}

export default App;