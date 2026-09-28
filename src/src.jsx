import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Weather Dress Recommendation</h1>
      <p>Welcome to our website</p>
      <Link to="/weather">Check Weather</Link>
    </div>
  );
}

function Weather() {
  return (
    <div>
      <h1>Weather</h1>
      <p>Temperature: 32°C</p>
      <p>Condition: Sunny</p>

      <h2>Recommended Dress</h2>
      <p>Cotton T-Shirt</p>
      <p>Casual Pants</p>
      <p>Sneakers</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This website recommends dresses based on weather.</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/weather">Weather</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}