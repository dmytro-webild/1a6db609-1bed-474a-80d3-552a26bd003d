"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Richardson Brothers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Richardson Brothers Roofing"
      description="Premium Roofing. Built to Last. Trusted roofing specialists delivering elite craftsmanship, fast turnaround, and protection your family can count on."
      buttons={[
        {
          text: "Get Free Estimate",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:5555555555",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-exterior-hobbies_23-2149367017.jpg",
          imageAlt: "Luxury home roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wide-shot-brown-gray-houses-pink-sky_181624-3252.jpg",
          imageAlt: "Luxury home roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-closeup-shot-black-fire-escape-stairs_181624-3131.jpg",
          imageAlt: "Luxury home roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/iceland-landscape-beautiful-church_23-2149099948.jpg",
          imageAlt: "Luxury home roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-exotic-white-building-blue-sky_181624-6647.jpg",
          imageAlt: "Luxury home roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/architectural-shadows-angles_23-2151978183.jpg",
          imageAlt: "Luxury home roof",
        },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="5-Star Service"
      tag="Certified Excellence"
      metrics={[
        {
          id: "m1",
          value: "100%",
          description: "Fully Insured",
        },
        {
          id: "m2",
          value: "Family",
          description: "Owned & Operated",
        },
        {
          id: "m3",
          value: "Free",
          description: "Inspections",
        },
        {
          id: "m4",
          value: "24/7",
          description: "Emergency Repairs",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Built by Brothers. Driven by Reputation."
      description={[
        "At Richardson Brothers Roofing, we believe your roof should be more than protection — it should add value, beauty, and peace of mind.",
        "With years of hands-on experience, our team delivers flawless installs, honest pricing, and white-glove customer service from first call to final cleanup.",
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Roof Replacement",
          description: "Upgrade aging roofs with premium materials and expert installation.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-lamp-hanging-inside-building-with-glass-ceiling_181624-11469.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/roof-tile-parquet-tile_1357-342.jpg",
          buttonText: "Inquire",
        },
        {
          title: "Roof Repairs",
          description: "Leaks, storm damage, missing shingles — fixed fast.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill_23-2148748770.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/builder-building-roof-house_23-2148748845.jpg",
          buttonText: "Inquire",
        },
        {
          title: "Gutter Systems",
          description: "Protect foundations with seamless drainage systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-roofer-working-with-protection-helmet_23-2149343637.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-two-pipes-as-they-go-up-building-window_181624-16532.jpg",
          buttonText: "Inquire",
        },
      ]}
      title="Roofing Solutions Designed For Excellence"
      description="Premium services covering all residential and commercial needs."
    />
  </div>

  <div id="why" data-section="why">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Premium Materials",
          price: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-geometric-abstract-twist-background_1048-17253.jpg",
        },
        {
          id: "p2",
          name: "Transparent Quotes",
          price: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-protection-helmets_23-2149343642.jpg",
        },
        {
          id: "p3",
          name: "Clean Job Sites",
          price: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-wooden-roof_181624-2403.jpg",
        },
        {
          id: "p4",
          name: "Fast Turnaround",
          price: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/concrete-building_1127-2031.jpg",
        },
        {
          id: "p5",
          name: "Warranty Protected",
          price: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-house-with-wooden-pieces_23-2148931503.jpg",
        },
        {
          id: "p6",
          name: "Family Integrity",
          price: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/tile-roof-house-home-textures_74190-8975.jpg",
        },
      ]}
      title="Why Homeowners Choose Richardson Brothers"
      description="Integrity and excellence in every project."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Luxury level service from start to finish. They treated our home like their own."
      rating={5}
      author="Sarah T."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/corporate-business-people_23-2148827022.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-african-american-woman-smiling-cheerful-friendly-face-laughing-confident_839833-29956.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-woman-home-with-book_23-2147611420.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-african-american-male-manager-shaking-hand-partner_1262-20184.jpg",
          alt: "Customer",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Need Roofing Done Right The First Time? Get a free no-pressure quote today."
      buttons={[
        {
          text: "Get My Free Estimate",
          href: "#",
        },
        {
          text: "Call (555) 555-5555",
          href: "tel:5555555555",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Richardson Brothers Roofing"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
