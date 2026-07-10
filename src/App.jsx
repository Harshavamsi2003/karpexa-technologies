import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AllCapabilities from './pages/AllCapabilities';
import Sectors from './pages/Sectors';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {
  ITInfrastructure, Cloud, ManagedIT, TechTalent, MaintenanceAMC,
  DataAnalytics, Security, Workspace, PrintDevice, ERPApps,
} from './pages/capabilities';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* All capabilities (overview / "view all") */}
          <Route path="/capabilities" element={<AllCapabilities />} />

          {/* One page per capability */}
          <Route path="/capabilities/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/capabilities/cloud" element={<Cloud />} />
          <Route path="/capabilities/managed-it" element={<ManagedIT />} />
          <Route path="/capabilities/tech-talent" element={<TechTalent />} />
          <Route path="/capabilities/maintenance-amc" element={<MaintenanceAMC />} />
          <Route path="/capabilities/data-analytics" element={<DataAnalytics />} />
          <Route path="/capabilities/security" element={<Security />} />
          <Route path="/capabilities/workspace" element={<Workspace />} />
          <Route path="/capabilities/print-device" element={<PrintDevice />} />
          <Route path="/capabilities/erp-apps" element={<ERPApps />} />

          <Route path="/sectors" element={<Sectors />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
