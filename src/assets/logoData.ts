// Logo Image Data
// This file contains the SVG data for the Neoteq logos

// Primary Logo - Nneoteq (Standard)
export const LOGO_SVG_DATA = `
<svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffffff"/>
      <stop offset="100%" stopColor="#ffffff"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="200" height="60" fill="#000000" rx="6"/>
  
  <!-- Stylized N with exact open corners design from image -->
  <path d="M12 12V48M12 12L32 48M32 48V12" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  
  <!-- neoteq text in lowercase -->
  <text x="40" y="38" fontFamily="Inter, Poppins, sans-serif" fontSize="24" fontWeight="500" fill="#ffffff" letterSpacing="1px">
    neoteq
  </text>
</svg>
`;

// Secondary Logo - bazoauN (Stylized Upside-Down N)
export const LOGO_VARIANT_2_SVG = `
<svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffffff"/>
      <stop offset="100%" stopColor="#ffffff"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="200" height="60" fill="#000000" rx="6"/>
  
  <!-- Upside-down stylized N with open corners -->
  <path d="M12 48V12M12 48L32 12M32 12V48" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  
  <!-- neoteq text -->
  <text x="40" y="38" fontFamily="Inter, Poppins, sans-serif" fontSize="24" fontWeight="500" fill="#ffffff" letterSpacing="1px">
    neoteq
  </text>
</svg>
`;

export const LOGO_CONFIG = {
  width: 200,
  height: 60,
  viewBox: "0 0 200 60",
  colors: {
    background: "#000000",
    text: "#ffffff",
    stroke: "#ffffff"
  },
  typography: {
    fontFamily: "Inter, Poppins, sans-serif",
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: "1px"
  },
  strokeWidth: 4,
  borderRadius: 6
};

// Export both logos
export { LOGO_VARIANT_2_SVG as LOGO_SVG_DATA_VARIANT_2 };
export default LOGO_SVG_DATA;
