import { FAKE_DATA } from "./constants";
import ProductCard from "./ProductCard";

function App() {
  return (
    <main className="flex items-center justify-center space-x-4 h-screen">
      {FAKE_DATA.map(({ id, ...rest }) => (
          <ProductCard
            key={id}
            {...rest}
          />
      ))}
    </main>
  );
}

export default App;
