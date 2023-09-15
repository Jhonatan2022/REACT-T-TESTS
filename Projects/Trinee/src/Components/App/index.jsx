import { useCatImage } from "../../Hooks/useCatImage";
import { useCatFact } from "../../Hooks/useCatFact";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first rhee words for ${fact}`}
        />
      )}
    </main>
  );
}

export { App };
