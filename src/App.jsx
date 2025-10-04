import Navbar from "./components/Navbar";
import PWABadge from './PWABadge';
import Footer from "./components/Footer";
import './App.css'
import UnitConverter from "./components/UnitConverter";

function App() {

 return (
  <div>
      <Navbar />

      <div id="structurePage">
        <header>
          <h1 className="text-center mt-4">Conversor de Kilometros-Metros</h1>
        </header>

        <main className="container mt-4">
          <div className="row mb-4">
            <div className="col-md-8 offset-md-2">
              <UnitConverter />

            </div>
          </div>
          
          <div className="row mb-4">
            <div className="col-md-12 text-center">
              <PWABadge />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
