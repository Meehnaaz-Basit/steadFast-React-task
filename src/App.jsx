import "./App.css";
import CardSection from "./components/cardSection/CardSection";
import Footer from "./components/footer/Footer";
import Banner from "./components/hero/Banner";
import Navbar from "./components/navBar/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0">
        <CardSection></CardSection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
