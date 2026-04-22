export type ProjectCategory = "residential" | "commercial" | "rental";

export type ProjectRecord = {
  slug: string;
  url: string;
  title: string;
  status: string;
  cardImage: string;
  cardSummary: string;
  categories: ProjectCategory[];
  headline: string;
  intro: string;
  details: string[];
  highlights: string[];
  gallery: string[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  residential: "Residential Projects",
  commercial: "Commercial Projects",
  rental: "Rental Projects",
};

export const categoryHeroVideos: Record<ProjectCategory, string> = {
  residential: "/assets/projects/videos/residential.mp4",
  commercial: "/assets/projects/videos/commercial.mp4",
  rental: "/assets/projects/videos/rental.mp4",
};

export const projects: ProjectRecord[] = 
[
  {
    "slug": "84-and-scott",
    "url": "https://oviedoproperties.com/projects/84-and-scott/",
    "title": "84 and Scott",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/84-and-scott-card.jpg",
    "cardSummary": "This busy, prime location – right on the corner of 84th and Scott Road – offers easy access to customers from Surrey and Delta.",
    "categories": [
      "commercial"
    ],
    "headline": "84 and Scott",
    "intro": "This busy, prime location – right on the corner of 84th and Scott Road – offers easy access to customers from Surrey and Delta. Ample parking spots in the rear, and within walking distance to a variety of great restaurants, coffee shops, retail stores, banks and other services are a bonus. Valued tenants include Pacific Pharmacy, Veralife Health Centre, CosmoProf Hair Salon Products and Equipment, and Cash Money/ Western Union.",
    "details": [
      "TOTAL SPACE",
      "9,426 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "LOCATION",
      "Some of our prime long-term tenants include:"
    ],
    "gallery": [
      "/assets/projects/84-and-scott-1.jpg"
    ]
  },
  {
    "slug": "ackroyd",
    "url": "https://oviedoproperties.com/projects/ackroyd/",
    "title": "Ackroyd",
    "status": "Coming Soon",
    "cardImage": "/assets/projects/ackroyd-card.jpg",
    "cardSummary": "A new 14-story mixed-use residential concrete tower is currently in development, offering over 156 units in a transit-connected location.",
    "categories": [
      "residential"
    ],
    "headline": "Ackroyd",
    "intro": "A new 14-story mixed-use residential concrete tower is currently in development, offering over 156 units in a transit-connected location. Residents will enjoy the convenience of being within walking distance to the SkyTrain station. The project will feature a total space equivalent to a 25-story tower, combining modern living with urban accessibility.",
    "details": [
      "Mixed-Use Residential Concrete Tower",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [
      "FEATURES",
      "TOTAL SPACE"
    ],
    "gallery": [
      "/assets/projects/ackroyd-1.jpg",
      "/assets/projects/ackroyd-2.jpg",
      "/assets/projects/ackroyd-3.jpg",
      "/assets/projects/ackroyd-4.jpg"
    ]
  },
  {
    "slug": "ackroyd-place",
    "url": "https://oviedoproperties.com/projects/ackroyd-place/",
    "title": "Ackroyd Place",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/ackroyd-place-card.jpg",
    "cardSummary": "Ackroyd Place offers high-visibility retail, well-maintained spaces, monitored parking, and transit access.",
    "categories": [
      "commercial"
    ],
    "headline": "Ackroyd Place",
    "intro": "Located in the heart of Richmond, this busy strip mall offers high visibility and tons of public exposure. Clean and very well maintained, Ackroyd Place offers monitored parking spaces and is conveniently close to public transit. Neighbourhood amenities, within easy walking distance. include Richmond’s largest shopping centre, major retail stores, banks, tons of great restaurants, groceries stores, and Kwantlen Polytechnic University’s Richmond Campus. Core tenants include restaurants, a pharmacy and a medical clinic.",
    "details": [
      "TOTAL SPACE",
      "14,588 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "LOCATION"
    ],
    "gallery": [
      "/assets/projects/ackroyd-place-1.jpg"
    ]
  },
  {
    "slug": "altus",
    "url": "https://oviedoproperties.com/projects/altus/",
    "title": "Altus",
    "status": "Now Selling",
    "cardImage": "/assets/projects/altus-card.jpg",
    "cardSummary": "Construction is now complete on this striking 12-story concrete high-rise, featuring 126 contemporary luxury residences with breathtaking panoramic views.",
    "categories": [
      "residential",
      "rental"
    ],
    "headline": "Altus",
    "intro": "Construction is now completed on a landmark collection of contemporary residences with panoramic views. 12 stories of solid concrete construction with 126 suites. Two levels of inspired shopping with 10 floors of luxury residential homes. All homes enjoy private outdoors spaces boasting views of the Pacific Ocean or the surrounding mountains. Altus’ collection of residences have been created to give you everything you need, and ever want in a home. Along with the expected spacious floor plans and contemporary finishes, the homes at Altus go a step further, ensuring that your life here will always be as rewarding as the panoramic views.",
    "details": [
      "Concrete High-Rise",
      "STATUS",
      "Completed and Sold",
      "HOMES"
    ],
    "highlights": [
      "EVERYDAY AMENITIES",
      "PEACE OF MIND",
      "EXQUISITE BATHROOMS",
      "BUILDING FEATURES"
    ],
    "gallery": [
      "/assets/projects/altus-1.jpg",
      "/assets/projects/altus-2.jpg",
      "/assets/projects/altus-3.jpg",
      "/assets/projects/altus-4.jpg",
      "/assets/projects/altus-5.jpg",
      "/assets/projects/altus-6.jpg"
    ]
  },
  {
    "slug": "avonlea",
    "url": "https://oviedoproperties.com/projects/avonlea/",
    "title": "Avonlea",
    "status": "Past Project",
    "cardImage": "/assets/projects/avonlea-card.jpg",
    "cardSummary": "Enjoy this rare opportunity to experience the spacious homes at Avonlea overlooking the ocean in sunny White Rock.",
    "categories": [
      "residential"
    ],
    "headline": "Avonlea",
    "intro": "1424 Everall St White Rock, BC Enjoy this rare opportunity to experience the spacious homes at Avonlea overlooking the ocean in sunny White Rock. This beautiful complex of five exquisite 2300 sq ft townhomes on three floors comes with scenic ocean views. A spacious main floor has 10 feet ceilings with a fabulous great room, kitchen and full dining area. The upper floor has 3 generous bedrooms, with one complete ensuite bathroom and full walk-in closet. The ground floor has 8 feet ceiling with a separate den/office area adjacent to the double garage. With urban sophistication and modern living townhouses, Avonlea is conveniently located in Central White Rock. As well, the townhouse residences at Avonlea are close to White Rock Beach and two blocks to Johnston St with its quaint shops, cafes, and restaurants.",
    "details": [
      "Townhomes",
      "STATUS",
      "Finished and Completed",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/avonlea-1.jpg",
      "/assets/projects/avonlea-2.jpg",
      "/assets/projects/avonlea-3.jpg",
      "/assets/projects/avonlea-4.jpg",
      "/assets/projects/avonlea-5.jpg",
      "/assets/projects/avonlea-6.jpg",
      "/assets/projects/avonlea-7.jpg",
      "/assets/projects/avonlea-8.jpg",
      "/assets/projects/avonlea-9.jpg",
      "/assets/projects/avonlea-10.jpg"
    ]
  },
  {
    "slug": "bridgecity",
    "url": "https://oviedoproperties.com/projects/bridgecity/",
    "title": "Bridgecity",
    "status": "Now Selling",
    "cardImage": "/assets/projects/bridgecity-card.jpg",
    "cardSummary": "Meet BridgeCity by Oviedo—a community of 967 new homes that bridge the gap between cities, neighbourhoods and families.",
    "categories": [
      "residential"
    ],
    "headline": "Bridgecity",
    "intro": "Meet BridgeCity by Oviedo—a community of 967 new homes that bridge the gap between cities, neighbourhoods and families.",
    "details": [
      "Residential Concrete Tower",
      "STATUS",
      "Now Selling",
      "HOMES"
    ],
    "highlights": [
      "EFFORTLESSLY MODERN RESIDENCES",
      "CONTEMPORARY HOMES WITH AN INVITING FEEL",
      "HIGH-QUALITY KITCHENS",
      "Studios & One-Bedrooms: 24” Kitchen Appliances Package Included"
    ],
    "gallery": [
      "/assets/projects/bridgecity-1.jpg",
      "/assets/projects/bridgecity-2.jpg",
      "/assets/projects/bridgecity-3.jpg",
      "/assets/projects/bridgecity-4.jpg",
      "/assets/projects/bridgecity-5.jpg"
    ]
  },
  {
    "slug": "camden-corner",
    "url": "https://oviedoproperties.com/projects/camden-corner/",
    "title": "Camden Corner",
    "status": "Past Project",
    "cardImage": "/assets/projects/camden-corner-card.jpg",
    "cardSummary": "Camden Corner offers spacious oceanfront homes with exceptional convenience.",
    "categories": [
      "residential"
    ],
    "headline": "Camden Corner",
    "intro": "15118 Thrift Avenue White Rock, BC The Camden Corner complex provides you with the rare opportunity to enjoy spacious homes with exceptional convenience and remarkable oceanfront living. This boutique cluster of five 1800 square feet townhomes on three floors comes with scenic ocean views. Each townhome comes with an ocean view and private back yard featuring 9-foot ceilings throughout, cozy fireplaces, large windows, wood laminate floor, sleek over height cabinetry in the kitchen, polished chrome hardware, stylish lighting fixtures, quartz counters, full height backsplashes, high-end appliances, luxurious bathrooms with a deep soaker tub and a walk-in shower and private fenced yards for BBQ and entertainment. With urban sophistication and modern living townhouses, Camden Corner is conveniently located in central White Rock. As well, the townhouse residences at Camden Corner are close to White Rock Beach & two blocks to Johnston St with its quaint shops, cafes, and restaurants.",
    "details": [
      "Townhomes",
      "STATUS",
      "Finished and Completed",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/camden-corner-1.jpg",
      "/assets/projects/camden-corner-2.jpg",
      "/assets/projects/camden-corner-3.jpg",
      "/assets/projects/camden-corner-4.jpg",
      "/assets/projects/camden-corner-5.jpg",
      "/assets/projects/camden-corner-6.jpg",
      "/assets/projects/camden-corner-7.jpg",
      "/assets/projects/camden-corner-8.jpg",
      "/assets/projects/camden-corner-9.jpg",
      "/assets/projects/camden-corner-10.jpg",
      "/assets/projects/camden-corner-11.jpg"
    ]
  },
  {
    "slug": "devon-place",
    "url": "https://oviedoproperties.com/projects/devon-place/",
    "title": "Devon Place",
    "status": "Past Project",
    "cardImage": "/assets/projects/devon-place-card.jpg",
    "cardSummary": "The Devon Place townhouse complex strikes the perfect balance of beauty and functionality.",
    "categories": [
      "residential"
    ],
    "headline": "Devon Place",
    "intro": "1444 Vidal St, White Rock, BC - The Devon Place townhouse complex strikes the perfect balance of beauty and functionality. This boutique cluster of five 2000 square feet homes comes with a picturesque setting located in the charming community of sunny White Rock. The beautiful homes at Devon Place offer modern finishings and generous floorplans. No detail has been overlooked. Exquisitely designed with large windows, broad decks and spacious floorplans, these homes offer a place where you and your family can grow.",
    "details": [
      "Townhomes",
      "STATUS",
      "Finished and Completed",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/devon-place-1.jpg"
    ]
  },
  {
    "slug": "dorset-gardens",
    "url": "https://oviedoproperties.com/projects/dorset-gardens/",
    "title": "Dorset Gardens",
    "status": "Past Project",
    "cardImage": "/assets/projects/dorset-gardens-card.jpg",
    "cardSummary": "The Dorset Gardens complex is a stylish combination of exceptional convenience and remarkable oceanfront living.",
    "categories": [
      "residential"
    ],
    "headline": "Dorset Gardens",
    "intro": "1456 Everall St, White Rock, BC - The Dorset Gardens complex is a stylish combination of exceptional convenience and remarkable oceanfront living. This boutique cluster of 9 unique townhomes comes with a picturesque setting and features 9-foot ceilings throughout, cozy fireplaces, large windows, wood laminate floor, sleek over height cabinetry in the kitchen, polished chrome hardware, stylish lighting fixtures, quartz counters, full height backsplashes, high-end appliances, luxurious bathrooms with a deep soaker tub and a walk-in shower and private fenced yards for BBQ and entertainment. With urban sophistication and modern living townhouses, Dorset Gardens is conveniently located in central White Rock. As well, the townhouse residences at Dorset Gardens are close to White Rock Beach and two blocks to Johnston St with its quaint shops, cafes, and restaurants.",
    "details": [
      "Townhomes",
      "STATUS",
      "Finished and Completed",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/dorset-gardens-1.jpg"
    ]
  },
  {
    "slug": "earls-court",
    "url": "https://oviedoproperties.com/projects/earls-court/",
    "title": "Earl's Court",
    "status": "Past Project",
    "cardImage": "/assets/projects/earls-court-card.jpg",
    "cardSummary": "The complex at Earl’s Court has a total of 14 townhomes with a stylish combination of exceptional convenience and remarkable oceanfront living.",
    "categories": [
      "residential"
    ],
    "headline": "Earl’s Court",
    "intro": "1346 Foster Avenue, White Rock, BC - The complex at Earl’s Court has a total of 14 townhomes with a stylish combination of exceptional convenience and remarkable oceanfront living. Eight of the townhomes are 1800 square feet featuring 9-foot ceilings throughout, cozy fireplaces, large windows, wood laminate floors, sleek over-height cabinetry in the kitchen, polished chrome hardware, stylish lighting fixtures, quartz counters, full-height backsplashes, high-end appliances, luxurious bathrooms with a deep soaker tub and a walk-in shower and patio area for BBQ and entertainment. Six of the townhomes are 2200 square feet with a spacious main floor which has 10-foot ceilings with a fabulous guest room, kitchen, and full dining area. The upper floor has 3 generous bedrooms, with one complete ensuite bathroom and a full walk-in closet. The ground floor has an 8-foot ceiling with a separate den/office area adjacent to the double garage. With urban sophistication and modern living townhouses, Earl’s Court is conveniently located in Central White Rock. As well, the townhouse residences at Earl’s Court are close to White Rock Beach and two blocks to Johnston St with its quaint shops, cafes, and restaurants.",
    "details": [
      "Townhomes",
      "STATUS",
      "Finished and Completed",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/earls-court-1.jpg",
      "/assets/projects/earls-court-2.jpg",
      "/assets/projects/earls-court-3.jpg",
      "/assets/projects/earls-court-4.jpg",
      "/assets/projects/earls-court-5.jpg",
      "/assets/projects/earls-court-6.jpg",
      "/assets/projects/earls-court-7.jpg",
      "/assets/projects/earls-court-8.jpg",
      "/assets/projects/earls-court-9.jpg",
      "/assets/projects/earls-court-10.jpg",
      "/assets/projects/earls-court-11.jpg"
    ]
  },
  {
    "slug": "eaton-square",
    "url": "https://oviedoproperties.com/projects/eaton-square/",
    "title": "Eaton Square",
    "status": "Past Project",
    "cardImage": "/assets/projects/eaton-square-card.jpg",
    "cardSummary": "Modern strata townhomes near highways, parks, Scott Road SkyTrain, and schools.",
    "categories": [
      "residential"
    ],
    "headline": "Eaton Square",
    "intro": "Welcome to our landmark collection of thoughtfully designed, modern strata townhomes conveniently located near major highways, business centres, conveniences and parks – and within walking distance to Scott Road SkyTrain station and a senior secondary school. Every three-story, four-bedroom home, in this 46-unit complex, offers bright and spacious 1800 square feet of living space, with large windows and nine-foot ceilings in every room. A double garage, two full and two half bathrooms, in-suite laundry, cozy fireplaces, quality laminate flooring, luxurious bathrooms exude comfort and ease. And the efficiently designed, open-concept kitchen, with Kitchen Aid appliances, built-in microwave oven, sleek over-height kitchen cabinetry, stylish fixtures and quartz countertops, is the perfect place to cook, eat and enjoy family gatherings. Welcome home!",
    "details": [
      "Wood",
      "STATUS",
      "Sold Out and Completed",
      "HOMES"
    ],
    "highlights": [
      "TOTAL SPACE",
      "BUILDING FEATURES",
      "NEIGHBOURHOOD FEATURES"
    ],
    "gallery": [
      "/assets/projects/eaton-square-1.jpg",
      "/assets/projects/eaton-square-2.jpg",
      "/assets/projects/eaton-square-3.jpg"
    ]
  },
  {
    "slug": "george",
    "url": "https://oviedoproperties.com/projects/george/",
    "title": "George",
    "status": "Coming Soon",
    "cardImage": "/assets/projects/george-card.jpg",
    "cardSummary": "A contemporary residential tower combining urban living with convenient retail offerings.",
    "categories": [
      "residential"
    ],
    "headline": "George",
    "intro": "A contemporary residential tower combining urban living with convenient retail offerings.",
    "details": [
      "Concrete High Rise",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/george-1.jpg",
      "/assets/projects/george-2.jpg",
      "/assets/projects/george-3.jpg"
    ]
  },
  {
    "slug": "george-street",
    "url": "https://oviedoproperties.com/projects/george-street/",
    "title": "George Street",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/george-street-card.jpg",
    "cardSummary": "Busy all year ‘round, this classic, well-maintained older building is a White Rock mainstay. A great location, this mall offers high-visibility exposure in the heart of this vibrant community.",
    "categories": [
      "commercial"
    ],
    "headline": "George Street",
    "intro": "Busy all year ‘round, this classic, well-maintained older building is a White Rock mainstay. A great location, this mall offers high-visibility exposure in the heart of this vibrant community. Easy access to transit, minutes away from shopping centres, great coffee shops, a bank, and a multitude of popular retail stores — all within easy walking distance to popular White Rock beach, and Peace Arch Hospital. Currently, this plaza houses a coffee shop, pharmacy and a couple restaurants. Ever since this strip was purchased, the owners have had a sweet spot for White Rock. The city’s culture, friendliness, and fun-filled activities only add more value to this location.",
    "details": [
      "TOTAL SPACE",
      "8,398 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "LOCATION"
    ],
    "gallery": [
      "/assets/projects/george-street-1.jpg"
    ]
  },
  {
    "slug": "harth",
    "url": "https://oviedoproperties.com/projects/harth/",
    "title": "Harth",
    "status": "Coming Soon",
    "cardImage": "/assets/projects/harth-card.jpg",
    "cardSummary": "400+ Residential condos & commercial spaces coming soon to Newton’s Heart 128 Street & 64 Avenue, Surrey, BC.",
    "categories": [
      "residential"
    ],
    "headline": "Harth",
    "intro": "400+ Residential condos & commercial spaces coming soon to Newton’s Heart 128 Street & 64 Avenue, Surrey, BC.",
    "details": [
      "Multi-Phase 5-6 Story Wood Frame Development",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/harth-1.jpg",
      "/assets/projects/harth-2.jpg",
      "/assets/projects/harth-3.jpg",
      "/assets/projects/harth-4.jpg",
      "/assets/projects/harth-5.jpg"
    ]
  },
  {
    "slug": "king-george-plaza",
    "url": "https://oviedoproperties.com/projects/king-george-plaza/",
    "title": "King George Plaza",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/king-george-plaza-card.jpg",
    "cardSummary": "King George Plaza sits on busy King George Blvd, near Newton and City Centre, with future SkyTrain access.",
    "categories": [
      "commercial"
    ],
    "headline": "King George Plaza",
    "intro": "Boasting some of the highest daily traffic counts in Surrey, King George Plaza is conveniently located on bustling King George Boulevard – between the heart of Newton and Surrey City Centre – and is a proposed stop on the proposed SkyTrain line. Built in 2010, this modern, well-maintained strip mall offers plenty of parking, and easy access to public transportation, nearby banks and restaurants. Our valued tenants include Subway, Liquor Landmark, Medisave Pharmacy, Lighthouse Restaurant, Blue Horizons Sport and Injury Clinic, and Solaris Leasing Ltd.",
    "details": [
      "TOTAL SPACE",
      "23,500 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "LOCATION",
      "Some of our prime long-term tenants include:"
    ],
    "gallery": [
      "/assets/projects/king-george-plaza-1.jpg",
      "/assets/projects/king-george-plaza-2.jpg",
      "/assets/projects/king-george-plaza-3.jpg",
      "/assets/projects/king-george-plaza-4.jpg",
      "/assets/projects/king-george-plaza-5.jpg",
      "/assets/projects/king-george-plaza-6.jpg",
      "/assets/projects/king-george-plaza-7.jpg"
    ]
  },
  {
    "slug": "london-station",
    "url": "https://oviedoproperties.com/projects/london-station/",
    "title": "London Station",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/london-station-card.jpg",
    "cardSummary": "This prime location in a desirable strip mall offers great exposure and easy accessibility, by car or on foot, seven days a week.",
    "categories": [
      "commercial"
    ],
    "headline": "London Station",
    "intro": "This prime location in a desirable strip mall offers great exposure and easy accessibility, by car or on foot, seven days a week. Within easy walking or driving distance to Surrey Central SkyTrain Station, SFU Surrey Campus and Central City shopping centre, London Station is just 10 minutes from the Patullo Bridge. In the neighbourhood you’ll find major banks and restaurants and Safeway, just across the street. This well-maintained property, with plenty of parking at the front and rear of the building, accommodates abundant foot and drive-through traffic for our tenants, which include: Starbucks, London Drugs, Burger King, Subway, Enterprise Rent-a-Car, Great Clips, Canadian Tourism College and Johnston Meier Insurance.",
    "details": [
      "TOTAL SPACE",
      "79,000 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "LOCATION",
      "Some of our prime long-term tenants include:"
    ],
    "gallery": [
      "/assets/projects/london-station-1.jpg",
      "/assets/projects/london-station-2.jpg",
      "/assets/projects/london-station-3.jpg",
      "/assets/projects/london-station-4.jpg",
      "/assets/projects/london-station-5.jpg",
      "/assets/projects/london-station-6.jpg",
      "/assets/projects/london-station-7.jpg"
    ]
  },
  {
    "slug": "maple",
    "url": "https://oviedoproperties.com/projects/maple/",
    "title": "Maple",
    "status": "Coming Soon",
    "cardImage": "/assets/projects/maple-card.jpg",
    "cardSummary": "Introducing a brand-new 6-story residential building at 1589 Maple Street in White Rock, BC.",
    "categories": [
      "residential"
    ],
    "headline": "Maple",
    "intro": "Introducing a brand-new 6-story residential building at 1589 Maple Street in White Rock, BC. This modern development offers a perfect blend of convenience and tranquility, placing you just steps away from White Rock’s vibrant town center, top-rated schools, shopping malls, the hospital, and the stunning beach. Enjoy the best of coastal living while nestled in a peaceful residential neighborhood. Stay tuned for more details on this exciting new community.",
    "details": [
      "6 Story Building",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [],
    "gallery": [
      "/assets/projects/maple-1.jpg"
    ]
  },
  {
    "slug": "newton-landmark",
    "url": "https://oviedoproperties.com/projects/newton-landmark/",
    "title": "Newton Landmark",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/newton-landmark-card.jpg",
    "cardSummary": "Lively Newton Landmark is ideally situated, just a stone’s throw from major retail and grocery stores, coffee shops and restaurants.",
    "categories": [
      "commercial"
    ],
    "headline": "Newton Landmark",
    "intro": "Lively Newton Landmark is ideally situated, just a stone’s throw from major retail and grocery stores, coffee shops and restaurants. Clean, well-maintained premises and tons of street and monitored underground parking welcome tenants and customers arriving by car – or by public transit and, when completed, by the new Skytrain station. Key tenants include A&W, Fraser Health, BC Borstal Association, the National Job Agency, the Canadian Back Institute, Ministry of Family and Child Development and Boldwing Continuum Architects. Ask about individual office spaces with shared amenities, available at great rates, for small and/or new business owners.",
    "details": [
      "TOTAL SPACE",
      "64,181 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "GREAT LOCATION",
      "Some of our key and loyal tenants include:"
    ],
    "gallery": [
      "/assets/projects/newton-landmark-1.jpg",
      "/assets/projects/newton-landmark-2.jpg",
      "/assets/projects/newton-landmark-3.jpg",
      "/assets/projects/newton-landmark-4.jpg",
      "/assets/projects/newton-landmark-5.jpg",
      "/assets/projects/newton-landmark-6.jpg",
      "/assets/projects/newton-landmark-7.jpg"
    ]
  },
  {
    "slug": "oviedo-fraser",
    "url": "https://oviedoproperties.com/projects/oviedo-fraser/",
    "title": "Oviedo Fraser",
    "status": "Coming Soon",
    "cardImage": "/assets/projects/oviedo-fraser-card.jpg",
    "cardSummary": "Modern high-rise with 200+ units steps from Surrey SkyTrain.",
    "categories": [
      "residential"
    ],
    "headline": "Oviedo Fraser",
    "intro": "A modern concrete high-rise offering over 200 units is now in development, positioned steps from the new Surrey SkyTrain station. Residents will enjoy walkable urban convenience with quick access to Surrey City Centre, Guildford Town Centre, and seamless transit connections.",
    "details": [
      "Residential Concrete Tower",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [
      "FEATURES",
      "TOTAL SPACE"
    ],
    "gallery": [
      "/assets/projects/oviedo-fraser-1.jpg"
    ]
  },
  {
    "slug": "oviedo-towers-surrey",
    "url": "https://oviedoproperties.com/projects/oviedo-towers-surrey/",
    "title": "Oviedo Towers Surrey",
    "status": "Coming Soon",
    "cardImage": "/assets/projects/oviedo-towers-surrey-card.jpg",
    "cardSummary": "New mixed-use development: four towers with 2,000 homes, hotel, offices, and retail space in a vibrant urban hub.",
    "categories": [
      "residential"
    ],
    "headline": "Oviedo Towers Surrey",
    "intro": "A new mixed-use development will feature four residential towers with 2,000 units, alongside hotel accommodations, office spaces, and retail establishments – forming a vibrant urban neighborhood that combines living, working, and leisure.",
    "details": [
      "Mixed Use",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [
      "TOTAL SPACE",
      "BUILDING FEATURES",
      "NEIGHBOURHOOD FEATURES"
    ],
    "gallery": [
      "/assets/projects/oviedo-towers-surrey-1.jpg",
      "/assets/projects/oviedo-towers-surrey-2.jpg",
      "/assets/projects/oviedo-towers-surrey-3.jpg",
      "/assets/projects/oviedo-towers-surrey-4.jpg",
      "/assets/projects/oviedo-towers-surrey-5.jpg",
      "/assets/projects/oviedo-towers-surrey-6.jpg"
    ]
  },
  {
    "slug": "the-heights",
    "url": "https://oviedoproperties.com/projects/the-heights/",
    "title": "The Heights",
    "status": "Past Project",
    "cardImage": "/assets/projects/the-heights-card.jpg",
    "cardSummary": "The Heights offers modern two- and three-bedroom rental apartments you can call home.",
    "categories": [
      "residential",
      "rental"
    ],
    "headline": "The Heights",
    "intro": "The Heights offers modern two- and three-bedroom rental apartments you can call home. Conveniently located in the heart of charming White Rock, this four-story building is close to everything you need for work and play: shops, restaurants and cafés, White Rock Shopping Centre and White Rock City Hall, art galleries, parks and popular White Rock Beach. The Heights is also close to White Rock Elementary School, Active Healthy Living facilities and across the street from the Salvation Army Church & Community Ministries. Under the watchful eye of security cameras, this 28-unit building offers a monitored front entrance to a contemporary lobby with a sitting area and elevator, private, secure parking and storage lockers, bicycle storage, and an amenities room. Every unit features stainless steel Kitchen Aid appliances, in-suite laundry and includes hot water.",
    "details": [
      "Residential",
      "STATUS",
      "Finished and Completed",
      "HOMES"
    ],
    "highlights": [
      "TOTAL SPACE",
      "BUILDING FEATURES",
      "NEIGHBOURHOOD FEATURES"
    ],
    "gallery": [
      "/assets/projects/the-heights-1.jpg",
      "/assets/projects/the-heights-2.jpg",
      "/assets/projects/the-heights-3.jpg",
      "/assets/projects/the-heights-4.jpg",
      "/assets/projects/the-heights-5.jpg",
      "/assets/projects/the-heights-6.jpg",
      "/assets/projects/the-heights-7.jpg",
      "/assets/projects/the-heights-8.jpg",
      "/assets/projects/the-heights-9.jpg",
      "/assets/projects/the-heights-10.jpg",
      "/assets/projects/the-heights-11.jpg",
      "/assets/projects/the-heights-12.jpg"
    ]
  },
  {
    "slug": "valley-centre-mall",
    "url": "https://oviedoproperties.com/projects/valley-centre-mall/",
    "title": "Valley Centre Mall",
    "status": "Now Leasing",
    "cardImage": "/assets/projects/valley-centre-mall-card.jpg",
    "cardSummary": "Prime Langley City location: Valley Centre offers high visibility, ample parking, and easy access.",
    "categories": [
      "commercial"
    ],
    "headline": "Valley Centre Mall",
    "intro": "Located in the heart of Langley City, Valley Centre is an attractive, well-established, high-traffic neighbourhood shopping centre offering unparalleled exposure, ample customer parking and easy access for Langley residents. Anchored by a large 48,000 square foot Save On Foods, a 10,000 square foot Shoppers Drug Mart and a 4,000 Square foot standalone Scotiabank, the Mall offers over 84,265 square feet of an appealing balance of fine retail and service tenants including Starbucks, Great Clips, HUB Insurance, Connect Hearing, Cash Money and many others.",
    "details": [
      "TOTAL SPACE",
      "84,265 sq ft",
      "STATUS",
      "Completed"
    ],
    "highlights": [
      "TOTAL SPACE",
      "GREAT EXPOSURE AND ACCESSIBILITY"
    ],
    "gallery": [
      "/assets/projects/valley-centre-mall-1.jpg",
      "/assets/projects/valley-centre-mall-2.jpg",
      "/assets/projects/valley-centre-mall-3.jpg",
      "/assets/projects/valley-centre-mall-4.jpg",
      "/assets/projects/valley-centre-mall-5.jpg"
    ]
  },
  {
    "slug": "white-birch",
    "url": "https://oviedoproperties.com/projects/white-birch/",
    "title": "White Birch",
    "status": "Under Construction",
    "cardImage": "/assets/projects/white-birch-card.jpg",
    "cardSummary": "80 Rental units coming soon to White Rock! White Birch in White Rock, BC has so much to offer its residents.",
    "categories": [
      "residential",
      "rental"
    ],
    "headline": "White Birch",
    "intro": "80 Rental units coming soon to White Rock! White Birch in White Rock, BC has so much to offer its residents. Close proximity and walking distance to the City of White Rock town centre, schools, shopping malls, hospital and the beach. All while living in a quiet residential neighbourhood.",
    "details": [
      "6 Story Wood Frame",
      "STATUS",
      "Coming Soon",
      "HOMES"
    ],
    "highlights": [
      "TOTAL SPACE",
      "BUILDING FEATURES",
      "NEIGHBOURHOOD FEATURES"
    ],
    "gallery": [
      "/assets/projects/white-birch-1.jpg",
      "/assets/projects/white-birch-2.jpg"
    ]
  }
] as ProjectRecord[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.categories.includes(category));
}