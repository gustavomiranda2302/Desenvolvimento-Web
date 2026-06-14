export default function Button({ textoBtn, funcao }) {
    return (
        <button onClick={funcao}>
            {textoBtn}
        </button>
    );
}