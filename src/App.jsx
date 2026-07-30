import React, { Component, useState } from "react";
import { Hero, About, Timeline, PrizePool, Sponsorship, Footer, ScrollToTop, Loader, TopLand, BottomLand, SponsorPackage, PastSponsors, Gallery, FAQ } from "./components";
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

  return (
    <ErrorBoundary>
      <AnimatePresence>
        {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <main className={`bg-pirate-bg min-h-screen relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Hero />
        <TopLand />
        <About />
        <BottomLand />
        <Timeline />
        <TopLand />
        <Gallery />
        <BottomLand />
        <PrizePool />
        <TopLand />
        <SponsorPackage />
        <PastSponsors />
        <BottomLand />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </main>
    </ErrorBoundary>
  );
}

export default App;
