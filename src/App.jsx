import React, { Component, useState, useCallback } from "react";
import {
  Hero, About, Timeline, PrizePool, ProblemStatements,
  SponsorPackage, SponsorPerks, OurSponsors,
  Footer, ScrollToTop, Loader, PirateWaveDivider, Gallery, FAQ
} from "./components";
import PirateCaptainGuide from "./components/PirateCaptainGuide";
import PirateParrotCompanion from "./components/PirateParrotCompanion";
import DoubloonCursorTrail from "./components/DoubloonCursorTrail";
import PirateRegistrationModal from "./components/PirateRegistrationModal";
import { AnimatePresence } from "framer-motion";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-red-500 p-10 z-50 relative font-mono">
          <h1 className="text-3xl mb-4">React App Crashed</h1>
          <p className="mb-4">{this.state.error?.toString()}</p>
          <pre className="whitespace-pre-wrap text-sm">{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      {/* Interactive Doubloon Gold Spark Cursor Trail */}
      {!loading && <DoubloonCursorTrail />}

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <main className={`bg-pirate-bg min-h-screen relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        {/* Hero Section at the top */}
        <Hero onOpenRegister={() => setIsRegisterModalOpen(true)} />

        <PirateWaveDivider />
        <About onOpenRegister={() => setIsRegisterModalOpen(true)} />
        <PirateWaveDivider flip />

        {/* Timeline → Prize Pool → Problem Statements */}
        <Timeline />
        <PirateWaveDivider />
        <PrizePool />
        <PirateWaveDivider flip />
        <ProblemStatements />

        {/* Sponsor Package → Sponsor Perks → Our Sponsors */}
        <PirateWaveDivider />
        <SponsorPackage />
        <PirateWaveDivider flip />
        <SponsorPerks />
        <PirateWaveDivider />
        <OurSponsors />
        <PirateWaveDivider flip />

        {/* Our Past Gallery (Placed Just Above FAQ) */}
        <PirateWaveDivider />
        <Gallery />
        <PirateWaveDivider flip />

        {/* FAQ → Footer */}
        <FAQ />
        <Footer />
        <ScrollToTop />

        {/* Unfurlable Vintage Wax-Sealed Registration Scroll Modal */}
        <PirateRegistrationModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
        />

        {/* Fixed Position Pirate Captain Guide & Interactive Parrot Companion */}
        {!loading && (
          <>
            <PirateCaptainGuide />
            <PirateParrotCompanion />
          </>
        )}
      </main>
    </ErrorBoundary>
  );
}

export default App;
