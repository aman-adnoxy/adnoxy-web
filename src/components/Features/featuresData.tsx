import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" className="fill-current text-red-500">
  <path d="M5 15 L45 15 L40 45 L10 45 Z" fill="none" stroke="currentColor" strokeWidth="3"/> 
  <rect x="10" y="5" width="30" height="10" rx="2" fill="currentColor"/>
  <circle cx="15" cy="35" r="3" fill="currentColor"/>
  <circle cx="35" cy="35" r="3" fill="currentColor"/>
</svg>
    ),
    
    title: "In-Store Advertising",
    paragraph:
    "We help brands capture consumer attention through customized in-store advertising solutions, placing your brand at high-impact locations where purchasing decisions are made.",
  },
  {
    id: 1,
    icon: (
      <svg width="60" height="60" viewBox="0 0 40 40" className="fill-current text-red-500">
  
  <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
  <circle cx="20" cy="20" r="5" fill="currentColor"/>
  
  
  <path d="M15 30 L25 30 L22 20 L18 20 Z" fill="currentColor"/>
  
 
  <circle cx="30" cy="10" r="3" fill="currentColor"/>
  <path d="M30 6 L30 4 M30 16 L30 14 M34 10 L36 10 M24 10 L26 10" stroke="currentColor" strokeWidth="2"/>
</svg>

    ),
    title: "Campaign Strategy & Execution",
    paragraph:
      "We create and execute tailored campaigns to showcase your brand in the right retail spaces.",
  },
  {
    id: 1,
    icon: (
      <svg width="55" height="55" viewBox="0 0 40 40" className="fill-current text-red-500">
  
  <path d="M5 30 C10 35, 20 35, 25 30" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M10 30 C12 28, 18 28, 20 30" stroke="currentColor" strokeWidth="2" fill="none"/>

 
  <rect x="15" y="10" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15 10 L20 5 L25 10" stroke="currentColor" strokeWidth="2" fill="none"/>


  <path d="M20 20 L20 28" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M17 25 L20 28 L23 25" stroke="currentColor" strokeWidth="2" fill="none"/>
</svg>

    ),
    title: "Sampling & Product Trials",
    paragraph:
      "Engage customers by offering samples in partner stores, allowing them to experience your brand firsthand and build connections.",
  },
  {
    id: 1,
    icon: (
      <svg width="45" height="47" viewBox="0 0 40 42" className="fill-current text-red-500">
  
  <rect x="5" y="5" width="30" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
  <rect x="5" y="15" width="30" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
  <rect x="5" y="25" width="30" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>

  
  <rect x="7" y="6" width="6" height="3" fill="currentColor"/>
  <rect x="17" y="6" width="6" height="3" fill="currentColor"/>
  <rect x="27" y="6" width="6" height="3" fill="currentColor"/>

  <rect x="7" y="16" width="6" height="3" fill="currentColor"/>
  <rect x="17" y="16" width="6" height="3" fill="currentColor"/>
  <rect x="27" y="16" width="6" height="3" fill="currentColor"/>

  <rect x="7" y="26" width="6" height="3" fill="currentColor"/>
  <rect x="17" y="26" width="6" height="3" fill="currentColor"/>
  <rect x="27" y="26" width="6" height="3" fill="currentColor"/>
</svg>

    ),
    title: "Shelf Space Rental",
    paragraph:
      "Secure premium shelf space in strategically selected retail stores that align with your target audience and price point, ensuring maximum product visibility.",
  },
  

 
  
  
];


export default featuresData;
