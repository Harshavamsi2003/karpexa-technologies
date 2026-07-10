import ITInfrastructure, { data as ITInfrastructureData } from './ITInfrastructure';
import Cloud, { data as CloudData } from './Cloud';
import ManagedIT, { data as ManagedITData } from './ManagedIT';
import TechTalent, { data as TechTalentData } from './TechTalent';
import MaintenanceAMC, { data as MaintenanceAMCData } from './MaintenanceAMC';
import DataAnalytics, { data as DataAnalyticsData } from './DataAnalytics';
import Security, { data as SecurityData } from './Security';
import Workspace, { data as WorkspaceData } from './Workspace';
import PrintDevice, { data as PrintDeviceData } from './PrintDevice';
import ERPApps, { data as ERPAppsData } from './ERPApps';

export {
  ITInfrastructure,
  Cloud,
  ManagedIT,
  TechTalent,
  MaintenanceAMC,
  DataAnalytics,
  Security,
  Workspace,
  PrintDevice,
  ERPApps,
};

// Aggregated data — the nav mega-menu, the "all capabilities" page,
// related links and the home cards all read from this one list.
export const capabilities = [
  ITInfrastructureData,
  CloudData,
  ManagedITData,
  TechTalentData,
  MaintenanceAMCData,
  DataAnalyticsData,
  SecurityData,
  WorkspaceData,
  PrintDeviceData,
  ERPAppsData,
];

// Cards shown on the home page.
export const solutionCards = capabilities
  .slice(0, 8)
  .map((c) => ({ title: c.title, g: c.g, slug: c.slug, blurb: c.blurb }));
