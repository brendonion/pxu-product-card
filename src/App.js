import { FAKE_DATA } from "./constants";
import ProductCard from "./ProductCard";

function App() {
  return (
    <main className="flex items-center justify-center space-x-4 h-screen">
      <ProductCard {...FAKE_DATA} />
    </main>
  );
}

export default App;
