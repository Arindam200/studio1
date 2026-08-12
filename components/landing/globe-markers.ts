export type PulseMarker = {
  id: string;
  location: [number, number];
  delay: number;
};

export const CTA_GLOBE_MARKERS: PulseMarker[] = [
  { id: "india", location: [12.97, 77.59], delay: 0 },
  { id: "brazil", location: [-23.55, -46.63], delay: 0.35 },
  { id: "us", location: [40.71, -74.01], delay: 0.7 },
  { id: "france", location: [48.86, 2.35], delay: 1.05 },
  { id: "netherlands", location: [52.37, 4.9], delay: 1.4 },
  { id: "israel", location: [32.09, 34.78], delay: 1.75 },
  { id: "singapore", location: [1.35, 103.82], delay: 2.1 },
  { id: "australia", location: [-33.87, 151.21], delay: 2.45 },
  { id: "vietnam", location: [21.03, 105.85], delay: 2.8 },
];
