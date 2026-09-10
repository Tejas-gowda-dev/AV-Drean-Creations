import { Photo, Package, Service, TeamMember, Testimonial, QuestionItem } from './types';


// @ts-ignore
import wedding1 from './assets/Weddings1.webp';
// @ts-ignore
import babyshower from './assets/babyshower.webp';
// @ts-ignore
import Main from "../src/assets/wedding.webp";
// @ts-ignore
import main3 from "../src/assets/Main3.webp";
// @ts-ignore
import main4 from "../src/assets/Main4.webp";


// Main page our services data
export const SERVICES: Service[] = [
  {
    id: 'wedding-shoot',
    title: 'Wedding Shoot',
    description: 'Breathtaking wedding coverage capturing the raw, sacred emotions of your sacred rituals and timeless vows.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    iconName: 'Camera',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=wedding'
  },
  {
    id: 'pre-wedding-shoot',
    title: 'Pre-Wedding Shoot',
    description: 'Cinematic, storytelling couple portraits set against heritage palaces, lush greens, or dynamic urban backdrops.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    iconName: 'Heart',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=pre-wedding'
  },
  {
    id: 'bride-photography',
    title: 'Bride Photography',
    description: 'Intimate and striking bridal portraits detailing the fine elegance of bridal attire, jewelry, and contemplative moments.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    iconName: 'Sparkles',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=bride'
  },
  {
    id: 'house-warming',
    title: 'House Warming Ceremony',
    description: 'Warm and vivid documentation of your new beginnings, traditional Griha Pravesha pooja rituals, and family gatherings.',
    image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=800&auto=format&fit=crop',
    iconName: 'Home',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=house-warming'
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    description: 'Soft, pastel-themed storytelling capturing the joy, tender maternal glow, and warm blessings of your pregnancy journey.',
    image: babyshower,
    iconName: 'Baby',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=baby-shower'
  },
  {
    id: 'candid-videography',
    title: 'Candid Videography',
    description: 'Ultra-HD cinematic wedding films, emotional highlights, same-day edits, and professional drone coverage.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    iconName: 'Video',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=candid-videography'
  },
  {
    id: 'birthday-events',
    title: 'Birthday Events',
    description: 'High-energy candid frames, detailed theme décor shots, and laughter-filled moments of your milestone celebrations.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop',
    iconName: 'Gift',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=birthday'
  },
  {
    id: 'album-designing',
    title: 'Album Designing',
    description: 'Artfully curated, premium hard-bound flush-mount coffee table albums designed to last for generations.',
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=800&auto=format&fit=crop',
    iconName: 'BookOpen',
    link: '/gallery?category=album-designing/gallery?category=birthday#/gallery?category=album-designing'
  }
];



// Gallery page portfolio data



export const PORTFOLIO: Photo[] = [
  {
    id: 'w1',
    url: wedding1,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w2',
    url: main4,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w3',
    url: Main,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..1',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w4',
    url: Main,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..2',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w5',
    url: wedding1,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w6',
    url: wedding1,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w7',
    url: wedding1,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  },
  {
    id: 'w8',
    url: wedding1,
    category: 'wedding',
    title: 'Sacred Sindoor Ritual..',
    alt: 'wedding-photography-bangalore-sindoor-ritual.jpg',
    description: 'An emotional moment capturing the groom applying sindoor to his bride, framed in golden lighting.',
    location: 'Palace Grounds, Bangalore',
    date: 'December 2025'
  }, //wedding data end 
  {
    id: 'pw1',
    url: main4,
    category: 'pre-wedding',
    title: 'Sunset Whispers',
    alt: 'pre-wedding-couple-shoot-mysore-palace.jpg',
    description: 'A romantic silhouette of a couple holding hands in front of a majestic sunset lake.',
    location: 'Karanji Lake, Mysore',
    date: 'November 2025'
  }, // pre-wedding data end
  
  {
    id: 'e1',
    url: babyshower,
    category: 'candid-videography',
    title: 'Cinematic Promise Ring Exchange',
    alt: 'engagement-ring-exchange-ceremony-bangalore.jpg',
    description: 'A beautifully isolated macro shot of the moment rings are exchanged amidst rose petal showers.',
    location: 'The Leela Palace, Bangalore',
    date: 'September 2025'
  },
  {
    id: 'r1',
    url: main4,
    category: 'candid-videography',
    title: 'Cinematic Grand Reception Entrance',
    alt: 'wedding-reception-couple-entry-smoke-effect-bangalore.jpg',
    description: 'The newlyweds entering their reception stage amidst cold fire sparkles and cold fog.',
    location: 'White Petals, Bangalore',
    date: 'January 2026'
  }, // candid-videography data end
  {
    id: 'hw1',
    url: main4,
    category: 'house-warming',
    title: 'Traditional Griha Pravesha Pooja',
    alt: 'housewarming-ceremony-grihapravesha-ritual-bangalore.jpg',
    description: 'Capturing the traditional homa fire rituals during a warm family house warming.',
    location: 'Tumkur Road, Bangalore',
    date: 'March 2026'
  }, // house-warming data end
  {
    id: 'bs1',
    url: babyshower,
    category: 'baby-shower',
    title: 'Seemantha Blessings',
    alt: 'seemantha-valaikappu-baby-shower-photography-bangalore.jpg',
    description: 'Capturing the beautiful ritual of sliding green glass bangles onto the expectant mother’s wrists.',
    location: 'Mysore Road, Mandya',
    date: 'April 2026'
  }, // baby-shower data end
  {
    id: 'bt1',
    url: babyshower,
    category: 'birthday',
    title: 'First Cake Smash',
    alt: 'first-birthday-celebration-candid-photography-bangalore.jpg',
    description: 'Pure joy in its rawest form as a one-year-old explorer plunges hands-first into their pastel-colored cake.',
    location: 'HSR Layout, Bangalore',
    date: 'May 2026'
  }, // birthday data end
  {
    id: 'c1',
    url: Main,
    category: 'album-designing',
    title: 'Custom Lay-flat Coffee Table Album',
    alt: 'corporate-events-candid-business-photography-bangalore.jpg',
    description: 'Artfully designed album layouts printing rich memories onto thick, non-tearable high-gloss sheets.',
    location: 'Studio Production, Bangalore',
    date: 'June 2026'
  }, // album-designing data end
  
 
 
 
  {
    id: 'b2',
    url: Main,
    category: 'bride',
    title: 'A Golden Smile',
    alt: 'glowing-south-indian-bride-photography-bangalore.jpg',
    description: 'A genuine, unposed moment capturing the bride breaking into a joyous laugh during her haldi ceremony.',
    location: 'Tumkur Palace, Tumkur',
    date: 'April 2026'
  } // bride data end
];

export const PACKAGES: Package[] = [
  {
    name: 'Silver',
    price: '₹25,000',
    tagline: 'Perfect for intimate family rituals and elegant traditional gatherings.',
    description: 'A focused, highly professional coverage detailing every crucial moment of your auspicious day.',
    features: [
      '1 Senior Candid & Traditional Photographer',
      'Continuous 1-Day Event Coverage (up to 6 Hours)',
      '200+ Masterfully Edited High-Res Digital Photos',
      'Online Private Digital Gallery Access for 6 Months',
      'All raw images delivered on high-speed drive',
      'Travel included within Bangalore city limits'
    ],
    popular: false
  },
  {
    name: 'Gold',
    price: '₹45,000',
    tagline: 'Our signature comprehensive package — capturing every dream from multiple angles.',
    description: 'The perfect blend of cinematic visuals, candid portraits, and a premium print artifact.',
    features: [
      '2 Photographers (1 Dedicated Candid + 1 Traditional Specialist)',
      '1 Cinematic Videographer (Full HD Highlight Video + Teaser)',
      'Professional Drone Aerial Coverage (Subject to permissions)',
      '400+ Exquisitely Edited Ultra-Res Digital Photos',
      '1 Premium Hard-Bound 40-Page Flush-Mount Album (12x15 inches)',
      'Stellar 3-Minute Cinematic Wedding Teaser / Instagram Reel',
      'Full raw files delivery + Online Digital Gallery for 1 Year'
    ],
    popular: true
  },
  {
    name: 'Platinum',
    price: '₹75,000+',
    tagline: 'The ultimate royal heirloom production. Uncompromised quality, cinematic precision.',
    description: 'Unrestricted premium coverage designed for grand weddings desiring the finest visual storytelling.',
    features: [
      '3 Elite Creators (2 Candid Photographers + 1 Traditional Pro)',
      '2 Cinematic Filmmakers (Full Ultra-HD Cinematic Wedding Movie)',
      '4K Aerial Drone Cinematography & Same-Day Edit Reels',
      '600+ Signature Fine-Art Edited Digital Photos',
      '2 Deluxe 40-Page Flush-Mount Photo Albums (Leatherette box)',
      'Same-Day Teaser Video Edited & Delivered before the reception ends',
      '1 Pre-Wedding or Post-Wedding Shoot (Up to 4 hours in Bangalore)',
      'Complimentary Custom Wedding Invitation Reel & Highlight Movie'
    ],
    popular: false
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Arun Vasudev',
    role: 'Founder & Principal Visual Storyteller',
    bio: 'With over 8 years behind the lens, Arun believes that great photography isn’t about perfect settings, but about preserving the raw, heavy emotional bonds that happen between those quiet seconds.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com'
  },
  {
    id: 't2',
    name: 'Varun Gowda',
    role: 'Lead Cinematic Director',
    bio: 'Varun translates sweet family glances, warm ritual tears, and laughter into high-end cinematic epics. He specializes in handheld candid video transitions and aerial drone compositions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com'
  },
  {
    id: 't3',
    name: 'Deepa Shetty',
    role: 'Senior Candid Portrait Artist',
    bio: 'Deepa has an extraordinary eye for detail, capturing micro-expressions of nervous excitement, the intricate gleam of kundan jewelry, and the unprompted giggles of the bridal crew.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    coupleName: 'Tejas & Divya',
    location: 'Bangalore',
    text: 'AV Dream Creations turned our wedding into a majestic cinematic dream. Arun was practically invisible during the rituals but somehow managed to capture every tear, laugh, and deep breath. We got our teaser within 2 days and the albums are beautiful beyond words. Simply outstanding!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=200&auto=format&fit=crop',
    event: 'Hindu Wedding',
    date: 'Dec 2025'
  },
  {
    id: 'tm2',
    coupleName: 'Vikram & Ananya',
    location: 'Mysore',
    text: 'We shot our pre-wedding couple portrait around the Lalitha Mahal in Mysore. The team was so incredibly patient with us, helping us ease our initial camera shyness. The pictures feel incredibly natural and soulful, not forced at all. Worth every single rupee!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=200&auto=format&fit=crop',
    event: 'Pre-Wedding & Sangeet',
    date: 'Nov 2025'
  },
  {
    id: 'tm3',
    coupleName: 'Harshith & Meghana',
    location: 'Mandya',
    text: 'Capturing our multi-generational traditional wedding ceremony was a huge task, but Arun and his crew handled it with such immense respect and elegance. They took absolute care to cover all the older family elders. The color grading on the photos is breathtaking.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop',
    event: 'Traditional Kannada Wedding',
    date: 'Jan 2026'
  },
  {
    id: 'tm4',
    coupleName: 'Nikhil & Sneha',
    location: 'Tumkur',
    text: 'The best wedding photography team in Karnataka! Their Same-Day Edit shown during our reception dinner left all our guests teary-eyed and cheering. The drone shots of our outdoor Mandapam setup are grand and cinematic. Thank you for making our day unforgettable!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop',
    event: 'Grand Reception & Wedding',
    date: 'Feb 2026'
  },
  {
    id: 'tm5',
    coupleName: 'Rahul & Priya',
    location: 'Indiranagar, Bangalore',
    text: 'Their commitment to quality is what makes them stand out. From our initial meet to the final album selection, their service was premium, prompt, and friendly. Deepa is a master of bridal portrait frames, making me feel so incredibly comfortable throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    event: 'Intimate Wedding',
    date: 'Oct 2025'
  },
  {
    id: 'tm6',
    coupleName: 'Kiran & Bhavana',
    location: 'Mysore',
    text: 'Absolutely in love with our wedding film. Varun did an incredible job with the editing and song choices. It felt like watching a premium high-budget Bollywood film starring us! Our family keeps playing the video on loop. Recommend them highly to everyone.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=200&auto=format&fit=crop',
    event: 'Palace Wedding',
    date: 'Mar 2026'
  },
  {
    id: 'tm7',
    coupleName: 'Sharan & Preethi',
    location: 'Tumkur',
    text: 'We engaged them for our Baby Shower (Seemantha) as well as our child’s first birthday. They possess such rare patience and skills when shooting with kids and toddlers. The pictures have a soft, dreamy warmth that we will cherish forever.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=200&auto=format&fit=crop',
    event: 'Baby Shower & Birthday',
    date: 'April 2026'
  },
  {
    id: 'tm8',
    coupleName: 'Karthik & Swathi',
    location: 'Mandya',
    text: 'Very professional team, timely arrival on both early morning Muhurtham and evening Reception. They gave clear, simple instructions for couple poses and captured genuine, candid moments when we were just joking around. The output was perfect.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=200&auto=format&fit=crop',
    event: 'Traditional Muhurtham',
    date: 'May 2026'
  },
  {
    id: 'tm9',
    coupleName: 'Aditya & Rakshitha',
    location: 'Whitefield, Bangalore',
    text: 'Extremely professional and worth the price. The quality of the acrylic album and page prints is stellar. We booked the Gold Package and we feel it was the best decision we made for our wedding planning. They delivered ahead of schedule!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=200&auto=format&fit=crop',
    event: 'Sangeet & Wedding',
    date: 'Jan 2026'
  },
  {
    id: 'tm10',
    coupleName: 'Darshan & Pooja',
    location: 'Bangalore',
    text: 'Choosing AV Dream Creations was the best wedding decision we made! Arun’s candid frames captured the soul of our relationship. Every single picture tells a rich, emotional story. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=200&auto=format&fit=crop',
    event: 'Elegant Wedding',
    date: 'March 2026'
  }
];

export const Questions: QuestionItem[] = [
  {
    id: 'Question-1',
    question: 'How much advance is required to secure our date?',
    answer: 'We require a 30% advance booking amount to officially secure and lock down your date in our calendar. An additional 50% is due on the first day of your wedding events, and the final 20% balance is payable upon delivery of your edited digital photos.'
  },
  {
    id: 'Question-2',
    question: 'Do you travel outside of Bangalore for destination shoots?',
    answer: 'Yes, absolutely! While we are based in Bangalore, we frequently serve couples in Mysore, Mandya, Tumkur, and throughout Karnataka. Travel and stay charges outside of Bangalore are handled transparently and added to the package pricing based on actuals.'
  },
  {
    id: 'Question-3',
    question: 'Do you provide professional drone photography?',
    answer: 'Yes, professional aerial drone videography and photography are included in our signature Gold and Platinum packages. Drone flights are subject to regional security permissions, clear weather conditions, and no-fly zone restrictions.'
  },
  {
    id: 'Question-4',
    question: 'When will we receive our final photos and video reels?',
    answer: 'Your wedding teaser video or Instagram reels are delivered within 3-5 days. The fully processed high-resolution digital photo gallery is delivered in 4-6 weeks, and custom coffee table albums are finalized and printed within 8-10 weeks after your select your photos.'
  },
  {
    id: 'Question-5',
    question: 'How many fully edited photos are included in the package?',
    answer: 'Depending on your package, we deliver between 200 (Silver), 400 (Gold), and 600+ (Platinum) signature color-graded, beautifully retouched digital images. Every package also includes access to the full set of raw unedited frames.'
  },
  {
    id: 'Question-6',
    question: 'Is the physical printed album included in the package?',
    answer: 'Yes, premium flush-mount, lay-flat albums are fully included in our signature Gold and Platinum packages. For Silver package clients, custom premium album design and print services can be purchased separately at a special add-on price.'
  },
  {
    id: 'Question-7',
    question: 'How much does premium wedding photography cost in Bangalore?',
    answer: 'Premium wedding photography in Bangalore starts from ₹25,000 for single-day coverage (Silver) and goes up to ₹75,000+ for elite multi-day multi-camera productions (Platinum). Our most popular Gold package is priced at ₹45,000 and offers exceptional comprehensive value.'
  }
];

//Instagram Feed Photos of Main page data



export const INSTAGRAM_POSTS = [
  { id: 'ig1', url: main4, likes: '1.2k', comments: '45' },
  { id: 'ig2', url: Main, likes: '980', comments: '32' },
  { id: 'ig3', url: main4, likes: '1.5k', comments: '64' },
  { id: 'ig4', url: main4, likes: '840', comments: '18' },
  { id: 'ig5', url: main4, likes: '1.1k', comments: '29' },
  { id: 'ig6', url: Main, likes: '1.3k', comments: '51' },
];


// Instagram Feed Photos






export const instagramPhotos = [
  {
    id: 1,
    image: babyshower,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
    {
    id: 1,
    image: Main,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
  {
    id: 1,
    image: main4,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
  {
    id: 1,
    image: main4,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
  {
    id: 1,
    image: main3,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
    {
    id: 1,
    image: Main,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
  {
    id: 1,
    image: main4,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
  {
    id: 1,
    image: main4,
    link: "https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu",
  },
  
  
];