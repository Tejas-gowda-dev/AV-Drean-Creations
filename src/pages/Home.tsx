import Hero from '../components/Hero';
import FeaturedFilm from '../components/FeaturedFilm';
import Services from '../components/Services';
import PortfolioPreview from '../components/PortfolioPreview';
import WeddingPhotographyPromo from '../components/WeddingPhotographyPromo';
// import Pricing from '../components/Pricing';
import ConnectPortfolio from '../components/ConnectPortfolio';
// import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SEOHelper from '../components/SEOHelper';
import InstagramGallery from '../components/InstagramGallery';



interface HomeProps {
  onNavigate: (route: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'PhotographyBusiness',
    'name': 'AV Dream Creations',
    'url': 'https://avdreamcreation.com',
    // 'logo': Logo,
    'description': 'Professional maternity, newborn, baby shower and family photography in Bengaluru.',
    'telephone': '+91-9743644065',
    'email': 'avdream518@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '98/2, 12th Main Rd, JC Nagar, Kurubarahalli, Kamala Nagar',
      'addressLocality': 'Bengaluru',
      'addressRegion': 'Karnataka',
      'postalCode': '560086',
      'addressCountry': 'IN'
    },
    'priceRange': '₹25000 - ₹150000',
    'areaServed': [
      { '@type': 'Place', 'name': 'Bangalore' },
      { '@type': 'Place', 'name': 'Mysore' },
      { '@type': 'Place', 'name': 'Mandya' },
      { '@type': 'Place', 'name': 'Tumkur' }
    ]
  };

  return (
    <div id="home-page-container">
      <SEOHelper
        title="AV Dream Creations..1 | Best Wedding Photographer & Films Bangalore"
        description="AV Dream Creations offers premium wedding photography, high-end cinematic wedding films, pre-wedding shoots, engagement photography, and drone videography across Bangalore and Karnataka. Secure your timeless memories today."
        keywords="best wedding photographer Bangalore, luxury wedding films Karnataka, professional wedding photography, candid photographer Bangalore, cinematic wedding videographer Karnataka, pre-wedding shoot Bangalore, traditional wedding photography India, AV Dream Creations"
        schema={homeSchema}
      />

      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Instagram Gallery Section */}
      <InstagramGallery />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Wedding Photography Promo section */}
      <WeddingPhotographyPromo />

      {/* 5. Featured Wedding Film */}
      <FeaturedFilm />

      {/* 6. Connect & Experience Section */}
      <ConnectPortfolio />

      {/* 7. Portfolio / Gallery Preview */}
      <PortfolioPreview />

      {/* 8. Wedding Packages / Pricing
      <Pricing />
      */}

      {/* 9. Client Testimonials*/}
      {/* <Testimonials /> */}
      

      {/* 10. Instagram Feed Section */}
      <InstagramFeed />

      {/* 2.5. Craft Vs Commodity Philosophy Section */}
      {/* <CraftVsCommodity /> */}

      {/* 3. Trust Badges Bar */}
      {/* <TrustBadges /> */}

      {/* 11. Before/After Slider */}
      <BeforeAfterSlider />
    </div>
  );
}
