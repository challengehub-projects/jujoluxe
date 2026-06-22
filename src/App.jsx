import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import About from "./pages/about";
import { useEffect, useRef } from "react";
import OneSignal from "react-onesignal";

function App() {

    const initialized = useRef(false);

    useEffect(() => {
      const initOneSignal = async () => {
        try {
          // prevent double init (React StrictMode safe)
          if (initialized.current) return;
          initialized.current = true;

          await OneSignal.init({
            appId: "99b9c672-cd39-461d-ad19-f713da54aa6f",
            allowLocalhostAsSecureOrigin: true,
          });

          // ask permission only if needed
          if (OneSignal.Notifications.permission !== "granted") {
            await OneSignal.Notifications.requestPermission();
          }

          console.log("Permission:", OneSignal.Notifications.permission);
          console.log(
            "Subscribed:",
            OneSignal.User.PushSubscription.optedIn
          );
          console.log(
            "Subscription ID:",
            OneSignal.User.PushSubscription.id
          );
        } catch (err) {
          // ignore harmless double-init error
          if (!String(err).includes("SDK already initialized")) {
            console.error("OneSignal init error:", err);
          }
        }
      };

      initOneSignal();
    }, []);

 



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>} />
        <Route path="/about" element={<>
          <Navbar />
          <About />
          <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;