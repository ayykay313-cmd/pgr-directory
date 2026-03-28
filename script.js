// ─── Provider Data ────────────────────────────────────────────────────────────
// Each provider object follows this shape:
// {
//   name:     "Jane Doe",
//   category: "Cook",          // must match a tab data-cat value exactly
//   phone:    "+971501234567", // +971 numbers get a WhatsApp link automatically
//   notes:    "Specialises in Filipino cuisine. Available weekdays."
// }

const providers = [
  {
    "name": "Chef Avinash Dubai",
    "phone": "+971 55 716 4388",
    "category": "Cook",
    "notes": "Cooks both veg and non-veg, cleans kitchen and utensils. Available in mornings.",
    "recommended_by": "Resident"
  },
  {
    "name": "Rameshwar Maharaj",
    "phone": "+971 50 832 1399",
    "category": "Cook",
    "notes": "Very good vegetarian cook, looking for more work in PGR.",
    "recommended_by": "Resident"
  },
  {
    "name": "Cook Mannu",
    "phone": "+971 54 382 4220",
    "category": "Cook",
    "notes": "Excellent cook with 15+ years experience. Skilled in Punjabi, South Indian, and Gujarati cuisines. Full time or part time.",
    "recommended_by": "Resident"
  },
  {
    "name": "Babloo Cook",
    "phone": "+971 50 212 2768",
    "category": "Cook",
    "notes": "Cook looking for work in PGR.",
    "recommended_by": "Resident"
  },
  {
    "name": "Rina Maid",
    "phone": "+971 56 610 5383",
    "category": "Cleaner / Maid",
    "notes": "Available 1pm–10pm for housework.",
    "recommended_by": "Resident"
  },
  {
    "name": "Narsimhaa",
    "phone": "+971 52 261 1304",
    "category": "Cleaner / Maid",
    "notes": "Male cleaner, very good at work, available after 4pm every day.",
    "recommended_by": "Resident"
  },
  {
    "name": "Noora",
    "phone": "+971 56 464 2274",
    "category": "Cleaner / Maid",
    "notes": "Maid looking for more work.",
    "recommended_by": "Resident"
  },
  {
    "name": "Niramala",
    "phone": "+971 54 722 7302",
    "category": "Cleaner / Maid",
    "notes": "Maid looking for work.",
    "recommended_by": "Resident"
  },
  {
    "name": "Tulsa",
    "phone": "+971 54 202 7219",
    "category": "Cleaner / Maid",
    "notes": "Good at cooking Indian food and other chores. Available after 1pm.",
    "recommended_by": "Resident"
  },
  {
    "name": "Ajhar Tailor",
    "phone": "+971 54 417 0686",
    "category": "Tailor",
    "notes": "Recommended for stitching blouses.",
    "recommended_by": "Resident"
  },
  {
    "name": "Mirza Tailor",
    "phone": "+971 55 678 0340",
    "category": "Tailor",
    "notes": "Tailor, recommended for blouse stitching.",
    "recommended_by": "Resident"
  },
  {
    "name": "Paramjit Kaur – Malish",
    "phone": "+971 56 314 9456",
    "category": "Massage",
    "notes": "Home massage service.",
    "recommended_by": "Resident"
  },
  {
    "name": "Anjali Massage",
    "phone": "+971 56 162 4638",
    "category": "Massage",
    "notes": "Home massage service.",
    "recommended_by": "Resident"
  },
  {
    "name": "Nutan Massage",
    "phone": "+971 55 674 9781",
    "category": "Massage",
    "notes": "Deep tissue massage. Highly recommended for ladies.",
    "recommended_by": "Resident"
  },
  {
    "name": "Anita Goswami",
    "phone": "+971 56 781 7828",
    "category": "Beauty / Parlour",
    "notes": "Beautician. Reasonable prices, very good work.",
    "recommended_by": "Resident"
  },
  {
    "name": "Beauty Care by Bhavika",
    "phone": "+971 56 570 5311",
    "category": "Beauty / Parlour",
    "notes": "Home parlour services including henna and beauty treatments.",
    "recommended_by": "Resident"
  },
  {
    "name": "Dynastiq Alka",
    "phone": "+971 55 625 4545",
    "category": "Home-based Food",
    "notes": "Pure Veg, Satvik and Jain catering. Specialties: sweets, catering, boxed meals, seasonal items like Undhiyu. Delivery across Dubai, Sharjah and Ajman.",
    "recommended_by": "Multiple residents"
  },
  {
    "name": "Avinash Paneer",
    "phone": "+971 55 848 7665",
    "category": "Home-based Food",
    "notes": "Fresh paneer supplier.",
    "recommended_by": "Resident"
  },
  {
    "name": "PGR Pharmacy",
    "phone": "+971 54 457 0618",
    "category": "Pharmacy",
    "notes": "Pharmacy in the PGR area.",
    "recommended_by": "Resident"
  },
  {
    "name": "Al Falah Pharmacy",
    "phone": "+971 4 393 0663",
    "category": "Pharmacy",
    "notes": "Al Falah Pharmacy near PGR Belle.",
    "recommended_by": "Resident"
  },
  {
    "name": "Ganapathy – Plumber",
    "phone": "+971 50 594 2284",
    "category": "Plumber / Handyman",
    "notes": "Sources plumbing material and installs it. Done work in many PGR apartments.",
    "recommended_by": "Resident"
  },
  {
    "name": "Bedsheet Shop Deira",
    "phone": "+971 55 632 4433",
    "category": "Shopping",
    "notes": "Bedsheet supplier in Deira.",
    "recommended_by": "Resident"
  },
  {
    "name": "Al Zubair Garments",
    "phone": "+971 55 767 6751",
    "category": "Shopping",
    "notes": "Fabric and bedsheet shop. Branches in Sharjah and Deira.",
    "recommended_by": "Resident"
  },
  {
    "name": "Sivani – Maths Tutor",
    "phone": "+971 56 671 3469",
    "category": "Tutor",
    "notes": "Maths teacher based in Golden Sands 14. Really good at teaching Maths.",
    "recommended_by": "Resident"
  },
  {
    "name": "Gauri – Yoga Instructor",
    "phone": "+971 52 617 8700",
    "category": "Fitness",
    "notes": "Certified Yoga Teacher (500-hour, Ministry of AYUSH). Ladies-only home sessions. Focus on pain relief, flexibility and fitness.",
    "recommended_by": "Self-introduced"
  },
  {
    "name": "Health Family Clinic",
    "phone": null,
    "category": "Healthcare",
    "notes": "Dental clinic. Dr. Manish handles extractions and implants. Dr. Akhil is great with kids. Highly recommended by multiple residents.",
    "recommended_by": "Multiple residents"
  },

  // ── Interior Design ──────────────────────────────────────────────────────────
  {
    "name": "Perfect Interiors – Mr. Mahi",
    "phone": "+971 50 465 4301",
    "category": "Interior Design",
    "notes": "Done many apartments in PGR on time and with good quality. Recommended by multiple residents.",
    "recommended_by": "Multiple residents"
  },
  {
    "name": "Sneha – Interior Design",
    "phone": "+971 55 843 2323",
    "category": "Interior Design",
    "notes": "Highly recommended by residents for interior work.",
    "recommended_by": "Amit Mittal"
  },
  {
    "name": "Wonderwall Interiors – Ronak Shah",
    "phone": "+971 52 908 9067",
    "category": "Interior Design",
    "notes": "Interior design company used by PGR residents.",
    "recommended_by": "Resident"
  },
  {
    "name": "Abazer Interiors – Ms. Insia",
    "phone": "+971 55 177 0759",
    "category": "Interior Design",
    "notes": "Reliable, reasonable and trustworthy. Done interior design work in PGR.",
    "recommended_by": "Resident"
  },
  {
    "name": "Reshmika Shekhar – Interior Designer",
    "phone": "+971 55 823 2735",
    "category": "Interior Design",
    "notes": "Lives in Tower A. Can assist with interior design and software renders.",
    "recommended_by": "Shekhar"
  },
  {
    "name": "Insiya – Interior Designer",
    "phone": "+971 50 786 4065",
    "category": "Interior Design",
    "notes": "Interior decorator recommended for showcase and wall interior work.",
    "recommended_by": "Rakesh CA PGR"
  },

  // ── Carpenter ────────────────────────────────────────────────────────────────
  {
    "name": "Ramesh – Carpenter",
    "phone": "+971 55 493 5246",
    "category": "Carpenter",
    "notes": "Recommended for carpentry and entrance modifications. Reference: Shalini Bhatnagar, D 2204.",
    "recommended_by": "Yogi Bhatnagar"
  },
  {
    "name": "Anas – Carpenter",
    "phone": "+971 50 840 5493",
    "category": "Carpenter",
    "notes": "Carpenter for home modifications.",
    "recommended_by": "Resident"
  },
  {
    "name": "Nadeem – Tile / Marble Fitter",
    "phone": "+971 55 339 2527",
    "category": "Carpenter",
    "notes": "Marble floor tile fitting. Can provide quote.",
    "recommended_by": "Nilesh Trivedi"
  },
  {
    "name": "Mandeep Singh – Carpentry @ Souq Al Kabeer",
    "phone": "+971 52 519 4211",
    "category": "Carpenter",
    "notes": "Carpentry works — supply and fixing of additional wardrobes, lofts, bookshelves, and shoe racks.",
    "recommended_by": "Resident"
  },

  // ── Plumber / Handyman ───────────────────────────────────────────────────────
  {
    "name": "Rameez Khan – Plumber / Maintenance",
    "phone": "+971 50 962 7595",
    "category": "Plumber / Handyman",
    "notes": "Called for ceiling leakage repair, did a decent job.",
    "recommended_by": "Pankaj (D Tower)"
  },
  {
    "name": "Gnaneshwar – Plumber / Geyser",
    "phone": "+971 58 611 6759",
    "category": "Plumber / Handyman",
    "notes": "Geyser installation specialist. Recommended by PGR OC member.",
    "recommended_by": "Praveen Merudi (OC)"
  },
  {
    "name": "East Coast Services – Thomas",
    "phone": "+971 4 396 2000",
    "category": "Plumber / Handyman",
    "notes": "Recommended for dishwasher and plumbing fixes.",
    "recommended_by": "Geogy John"
  },
  {
    "name": "Valerian",
    "phone": "+971 52 239 7041",
    "category": "Plumber / Handyman",
    "notes": "Handyman recommended by resident.",
    "recommended_by": "Ashok Menezes"
  },
  {
    "name": "Vibin – Flynet / Mosquito Mesh",
    "phone": "+971 52 303 2464",
    "category": "Plumber / Handyman",
    "notes": "Flynet and mosquito mesh installation and replacement.",
    "recommended_by": "Vikas Gupta"
  },
  {
    "name": "Suhail – Schwab Flush (PGR)",
    "phone": "+971 54 449 0106",
    "category": "Plumber / Handyman",
    "notes": "Schwab commode flush plate supplier and replacement/repair.",
    "recommended_by": "Resident"
  },
  {
    "name": "Nadeem Painter – Al Sekoun Al Hadi Plaster",
    "phone": "+971 55 339 2527",
    "category": "Plumber / Handyman",
    "notes": "Wall, ceiling, and door frame painting services at PGR.",
    "recommended_by": "Resident"
  },

  // ── AC / Home Maintenance ────────────────────────────────────────────────────
  {
    "name": "Chris – Projexive AC & Home Maintenance",
    "phone": "+971 55 974 1054",
    "category": "AC & Maintenance",
    "notes": "Annual Maintenance Contract (AMC) widely used in PGR. Covers AC, plumbing, electrical. Bronze ~AED 1200/yr, Silver ~AED 1500/yr.",
    "recommended_by": "Multiple residents"
  },
  {
    "name": "Inaya – Building Maintenance (Ganesh)",
    "phone": "+971 50 289 6023",
    "category": "AC & Maintenance",
    "notes": "PGR building maintenance contact. Good for AC cleaning and apartment repairs.",
    "recommended_by": "Harish Shankla"
  },
  {
    "name": "Emrill – Building Maintenance",
    "phone": "+971 50 547 8465",
    "category": "AC & Maintenance",
    "notes": "Current WCM maintenance company for PGR. Send photos via WhatsApp for complaints and they respond.",
    "recommended_by": "Hamid"
  },

  // ── AC Technician ────────────────────────────────────────────────────────────
  {
    "name": "Jinu – AC Technician",
    "phone": "+971 55 345 6869",
    "category": "AC & Maintenance",
    "notes": "Safari Jinu – recommended for AC work by multiple residents.",
    "recommended_by": "Geogy John"
  },
  {
    "name": "Mr. Asif – Inaya AC",
    "phone": "+971 54 771 5829",
    "category": "AC & Maintenance",
    "notes": "Inaya contact for AC cleaning and maintenance.",
    "recommended_by": "Shahid"
  },

  // ── AC Cleaning ──────────────────────────────────────────────────────────────
  {
    "name": "Edge Integrated Technical Services",
    "phone": "+971 56 433 4877",
    "category": "AC & Maintenance",
    "notes": "AED 250 per AC unit, AED 750+VAT for full 3-unit apartment. Good and respectful service.",
    "recommended_by": "Nawab Mirza, Ramesh"
  },

  // ── Electrician ──────────────────────────────────────────────────────────────
  {
    "name": "Spark Electrical Equipment LLC",
    "phone": "+971 4 339 3622",
    "category": "AC & Maintenance",
    "notes": "Electrical work. Used by Pankaj for both his PGR apartments.",
    "recommended_by": "Pankaj (D Tower)"
  },
  {
    "name": "Mr. Chintan – CCTV Installation",
    "phone": "+971 56 460 3616",
    "category": "AC & Maintenance",
    "notes": "CCTV installation at home.",
    "recommended_by": "Manoj Barai"
  },

  // ── Appliance Repair ─────────────────────────────────────────────────────────
  {
    "name": "Haaji Ameer General Trading",
    "phone": "+971 55 501 3384",
    "category": "AC & Maintenance",
    "notes": "Near ADCB metro station, next to Amaravathi restaurant in Karama. Repairs mixer grinders, blenders and small appliances.",
    "recommended_by": "Vikram"
  },
  {
    "name": "Washing Machine Technician",
    "phone": "+971 50 305 4686",
    "category": "AC & Maintenance",
    "notes": "Recommended for washing machine repairs.",
    "recommended_by": "JG (resident)"
  },
  {
    "name": "Inaya Plus Helpdesk",
    "phone": "+971 56 538 1311",
    "category": "AC & Maintenance",
    "notes": "Apartment maintenance and service provider. Main maintenance contact for PGR.",
    "recommended_by": "Resident"
  },

  // ── Pest Control ─────────────────────────────────────────────────────────────
  {
    "name": "Amritpal Singh – Pest Control",
    "phone": "+971 50 853 8268",
    "category": "Pest Control",
    "notes": "Pest control service recommended by resident.",
    "recommended_by": "Anil Kangotra"
  },

  // ── Cleaner / Maid ───────────────────────────────────────────────────────────
  {
    "name": "Shreeniwaz – Household Helper",
    "phone": "+971 56 376 1766",
    "category": "Cleaner / Maid",
    "notes": "Reliable and excellent at household tasks.",
    "recommended_by": "Kunal Vaswani"
  },
  {
    "name": "Nagraj – Cleaner",
    "phone": null,
    "category": "Cleaner / Maid",
    "notes": "Honest and hardworking cleaner looking for work after 5pm. Contact via Sajan Bhatia (D 710).",
    "recommended_by": "Sajan Bhatia"
  },
  {
    "name": "Srikant – Cleaner",
    "phone": null,
    "category": "Cleaner / Maid",
    "notes": "Good cleaner looking for work at PGR. Contact via Sajan Bhatia (D 710).",
    "recommended_by": "Sajan Bhatia"
  },
  {
    "name": "Helper – Cook / Cleaner / Nanny",
    "phone": "+971 54 469 0014",
    "category": "Cleaner / Maid",
    "notes": "Available for cooking, nanny, cleaning and massage. AED 25/hour. Flexible timing.",
    "recommended_by": "YoYo (Tower resident)"
  },
  {
    "name": "Dhanalakshmi (Dhanam)",
    "phone": "+971 55 659 0582",
    "category": "Cleaner / Maid",
    "notes": "Reliable domestic help, baby care, and South Indian cooking. Tamil speaking.",
    "recommended_by": "Resident"
  },

  // ── Cook ─────────────────────────────────────────────────────────────────────
  {
    "name": "Dhanalakshmi",
    "phone": "+971 52 449 3285",
    "category": "Cook",
    "notes": "Can cook and clean. Currently working part time in Tower A.",
    "recommended_by": "Shekhar"
  },
  {
    "name": "Anand – Part-time Cook",
    "phone": "+971 50 475 7949",
    "category": "Cook",
    "notes": "Part-time cook looking for work. Contact via Shekhar.",
    "recommended_by": "Shekhar"
  },
  {
    "name": "Pintu – Cook (Veg only)",
    "phone": "+971 56 275 6308",
    "category": "Cook",
    "notes": "Vegetarian only. Freelance cook, available after 10am.",
    "recommended_by": "Akshay Patwa"
  },
  {
    "name": "Vikas – Cook",
    "phone": "+971 56 954 5363",
    "category": "Cook",
    "notes": "Cook available for work in PGR.",
    "recommended_by": "Akshay Patwa"
  },
  {
    "name": "Cook – Veg / Non-Veg",
    "phone": "+971 56 126 9251",
    "category": "Cook",
    "notes": "Cooks veg/non-veg, South Indian, Arabic cuisines. Available 6–8am and 8–10pm.",
    "recommended_by": "Resident (Tower A group)"
  },

  // ── Home-based Food ──────────────────────────────────────────────────────────
  {
    "name": "Quirky Cravingz by Lehar (Mrs. Chandwani)",
    "phone": null,
    "category": "Home-based Food",
    "notes": "Custom cakes. Tower A-1405. Highly praised – flavor was outstanding. Short notice accepted.",
    "recommended_by": "Multiple residents"
  },
  {
    "name": "Seoul Garden Restaurant",
    "phone": "+971 4 337 7876",
    "category": "Home-based Food",
    "notes": "Korean restaurant owned by PGR resident Lee (Tower C 1303). Ask for Lee when visiting.",
    "recommended_by": "Resident (Lee – C 1303)"
  },

  // ── Courier ──────────────────────────────────────────────────────────────────
  {
    "name": "Hussain Team Express",
    "phone": "+971 50 595 5840",
    "category": "Courier",
    "notes": "Courier service recommended by resident.",
    "recommended_by": "Ramesh"
  },

  // ── Driver ───────────────────────────────────────────────────────────────────
  {
    "name": "Nazir – Driver",
    "phone": "+971 50 505 3370",
    "category": "Driver",
    "notes": "Reliable and trustworthy part-time driver for daily trips, airport transfers, short or medium term.",
    "recommended_by": "Multiple residents"
  },

  // ── Travel / Visa ─────────────────────────────────────────────────────────────
  {
    "name": "Avinash Adnani – Pluto Travel",
    "phone": "+971 55 700 8000",
    "category": "Travel / Visa",
    "notes": "Visa, tickets and holiday packages. Reasonable, committed and highly reliable.",
    "recommended_by": "Ghana"
  },

  // ── Healthcare ───────────────────────────────────────────────────────────────
  {
    "name": "Dr. Kaiser Raja – Gastroenterologist",
    "phone": "+971 55 718 1328",
    "category": "Healthcare",
    "notes": "Gastro doctor recommended by resident.",
    "recommended_by": "Daniel"
  },
  {
    "name": "Dr. Subash Walkhinde – Dermatologist",
    "phone": "+971 800 1999",
    "category": "Healthcare",
    "notes": "Dermatology specialist at Mediclinic Welcare Hospital. Call 800 1999 to book.",
    "recommended_by": "LK"
  },

  // ── Tutor ────────────────────────────────────────────────────────────────────
  {
    "name": "Coach Thaha – Football Coach",
    "phone": "+971 50 222 3801",
    "category": "Tutor",
    "notes": "Football coach. AED 340 for 8 classes, 5–6pm. Coaches 10-year-olds and above.",
    "recommended_by": "Chetan Bhatia"
  },
  {
    "name": "Anaswara – Art / Drawing Teacher",
    "phone": "+971 56 504 2105",
    "category": "Tutor",
    "notes": "Drawing and painting classes for kids.",
    "recommended_by": "Pradeep Nambiar"
  },

  // ── Fitness ──────────────────────────────────────────────────────────────────
  {
    "name": "Slayfit Fitness",
    "phone": "+971 58 505 5160",
    "category": "Fitness",
    "notes": "Fitness coaches assigned to the PGR community. Visible results reported. Highly recommended by OC member.",
    "recommended_by": "Niraj Bachani (OC)"
  },

  // ── Car Services ─────────────────────────────────────────────────────────────
  {
    "name": "Kumar – Car Wash",
    "phone": "+971 56 756 2720",
    "category": "Car Services",
    "notes": "Car cleaning service.",
    "recommended_by": "Ramesh"
  },
  {
    "name": "Nandu – Car Wash",
    "phone": "+971 54 766 2243",
    "category": "Car Services",
    "notes": "Car cleaning service.",
    "recommended_by": "Ramesh"
  },
  {
    "name": "Three Horses Garage",
    "phone": "+971 4 286 7667",
    "category": "Car Services",
    "notes": "Car garage and repair service.",
    "recommended_by": "Michaelangelo"
  },
  {
    "name": "Autocare – 3M Car Tinting",
    "phone": "+971 50 821 4093",
    "category": "Car Services",
    "notes": "Original 3M film car window tinting.",
    "recommended_by": "Vikram"
  },
  {
    "name": "Car Battery Service",
    "phone": "+971 54 305 8660",
    "category": "Car Services",
    "notes": "Car battery replacement and service.",
    "recommended_by": "Shekhar"
  },
  {
    "name": "LEZOF Tyres – Nad Al Hammar",
    "phone": null,
    "category": "Car Services",
    "notes": "Highly recommended for best tyre prices, excellent service, modern equipment. Free monthly nitrogen refill.",
    "recommended_by": "Yogi Bhatnagar"
  },
  {
    "name": "Isaac's Garage (Isaac – B809)",
    "phone": "+971 50 671 5199",
    "category": "Car Services",
    "notes": "PGR resident (B809) with his own workshop. Best deal if you mention Saravanan V as reference.",
    "recommended_by": "Saravanan V."
  },

  // ── Shopping ─────────────────────────────────────────────────────────────────
  {
    "name": "NQCart – Water Heater Supplier",
    "phone": "+971 50 164 3123",
    "category": "Shopping",
    "notes": "Ariston water heaters at competitive prices. Free home delivery. Website: nqcart.ae",
    "recommended_by": "Mani Usha, Ashok Menezes"
  },
  {
    "name": "Green Circle Building Materials",
    "phone": "+971 4 326 4222",
    "category": "Shopping",
    "notes": "Khalid bin Waleed Street. Good prices on water heaters and building materials.",
    "recommended_by": "Mothers Choice Trading"
  },
  {
    "name": "Petrosafe – Gas Sensors",
    "phone": "+971 50 257 3388",
    "category": "Shopping",
    "notes": "Gas leak sensors and gas-related services for apartments.",
    "recommended_by": "Sada"
  },
  {
    "name": "Al Habib – Chair / Furniture Rental",
    "phone": "+971 55 251 5183",
    "category": "Shopping",
    "notes": "Chair and furniture rental.",
    "recommended_by": "Jayesh Jain"
  },
  {
    "name": "Mohammed Zainal Faraidooni LLC",
    "phone": "+971 4 262 6555",
    "category": "Shopping",
    "notes": "Grohe plumbing fixtures and fittings supplier in Deira.",
    "recommended_by": "Jaydeep Datir"
  },

  // ── Legal ────────────────────────────────────────────────────────────────────
  {
    "name": "Trench Law – Cynthia Trench",
    "phone": "+971 4 355 3146",
    "category": "Legal",
    "notes": "Legal firm in Dubai. Recommended for property and legal matters.",
    "recommended_by": "Yogi Bhatnagar"
  },
  {
    "name": "Tariq – Legal Consultant",
    "phone": "+971 52 288 5507",
    "category": "Legal",
    "notes": "Legal consultant at Yousyf Al Hammadi legal firm.",
    "recommended_by": "Rajesh Lalwani"
  },

  // ── Computers & IT ───────────────────────────────────────────────────────────
  {
    "name": "Computer Care Dubai",
    "phone": "+971 4 359 5010 / +971 4 358 1020",
    "category": "Computers & IT",
    "notes": "Sells laptops, desktops, AIOs, printers, gaming gear, IT peripherals and accessories. Also provides IT services and repair for tech products. Two locations: Al Mankhool and Business Bay. Website: computercaredubai.ae",
    "recommended_by": "Multiple Residents"
  },

  // ── Other ────────────────────────────────────────────────────────────────────
  {
    "name": "Sanjai – Recruiter",
    "phone": "+971 50 272 9896",
    "category": "Other",
    "notes": "Recruitment agency contact in Dubai.",
    "recommended_by": "Ashok Menezes"
  },
  {
    "name": "Aziz Laundry",
    "phone": "+971 50 577 1051",
    "category": "Other",
    "notes": "Laundry service.",
    "recommended_by": "Resident"
  },
  {
    "name": "King Star Laundry – Zabeel",
    "phone": "+971 50 688 1755",
    "category": "Other",
    "notes": "Laundry service – Zabeel area.",
    "recommended_by": "Resident"
  }
];

// ─── Badge CSS class per category ────────────────────────────────────────────
// Keys use the normalised form produced by normCat() (spaces around / removed)
const BADGE_CLASS = {
  'Cook':              'badge-cook',
  'Cleaner/Maid':      'badge-cleaner',
  'Tailor':            'badge-tailor',
  'Massage':           'badge-massage',
  'Beauty/Parlour':    'badge-beauty',
  'Home-based Food':   'badge-food',
  'Pharmacy':          'badge-pharmacy',
  'Plumber/Handyman':  'badge-handyman',
  'AC & Maintenance':  'badge-ac-maint',
  'Interior Design':   'badge-interior',
  'Carpenter':         'badge-carpenter',
  'Tutor':             'badge-tutor',
  'Fitness':           'badge-fitness',
  'Healthcare':        'badge-healthcare',
  'Pest Control':      'badge-pest',
  'Courier':           'badge-courier',
  'Driver':            'badge-driver',
  'Travel/Visa':       'badge-travel',
  'Car Services':      'badge-car',
  'Computers & IT':    'badge-computers',
  'Shopping':          'badge-shopping',
  'Legal':             'badge-legal',
  'Other':             'badge-other',
};

// ─── State ────────────────────────────────────────────────────────────────────
let activeCategory = 'all';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Safely escape a string for insertion into HTML */
function esc(str) {
  const d = document.createElement('div');
  d.textContent = String(str ?? '');
  return d.innerHTML;
}

/** Normalise category name to match tab data-cat values (removes spaces around /) */
function normCat(cat) {
  return (cat || '').replace(/\s*\/\s*/g, '/');
}

/** Extract the first phone number from a field that may contain "num1 / num2" */
function firstPhone(phone) {
  if (!phone) return '';
  return phone.split('/')[0].trim();
}

/**
 * UAE mobile numbers begin with +971 5x (50, 52, 54, 55, 56, 58…).
 * Landlines (+971 4, +971 2, +971 6…) and 800 toll-free lines are NOT mobile.
 */
function isUAEMobile(phone) {
  if (!phone) return false;
  const stripped = firstPhone(phone).replace(/[\s\-()+]/g, '');
  return stripped.startsWith('9715');
}

/** Return a wa.me URL only for UAE mobile numbers, otherwise null */
function whatsappUrl(phone) {
  if (!isUAEMobile(phone)) return null;
  return 'https://wa.me/' + firstPhone(phone).replace(/[\s\-()+]/g, '');
}

// ─── Render ───────────────────────────────────────────────────────────────────
function render() {
  const search      = document.getElementById('searchInput').value.trim().toLowerCase();
  const grid        = document.getElementById('grid');
  const emptyState  = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');

  // Filter
  const filtered = providers.filter(p => {
    const matchesCat = activeCategory === 'all' || normCat(p.category) === activeCategory;
    const matchesSearch = !search
      || p.name.toLowerCase().includes(search)
      || p.category.toLowerCase().includes(search)
      || (p.notes || '').toLowerCase().includes(search)
      || (p.phone || '').includes(search);
    return matchesCat && matchesSearch;
  });

  // Result count label
  const n = filtered.length;
  resultCount.textContent = n === 0
    ? ''
    : `${n} provider${n !== 1 ? 's' : ''}`;

  // Empty state
  if (n === 0) {
    grid.hidden = true;
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  grid.hidden = false;

  // Build cards
  grid.innerHTML = filtered.map(p => {
    const waUrl      = whatsappUrl(p.phone);
    const badgeClass = BADGE_CLASS[normCat(p.category)] || 'badge-other';

    // Phone link: WhatsApp for UAE mobiles, plain tel: for everything else
    const phoneLink = p.phone
      ? waUrl
        ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="phone-link phone-link--wa" aria-label="WhatsApp ${esc(p.phone)}">
             <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
             </svg>
             <span>${esc(p.phone)}</span>
           </a>`
        : `<a href="tel:${esc(firstPhone(p.phone))}" class="phone-link phone-link--tel" aria-label="Call ${esc(p.phone)}">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
             </svg>
             <span>${esc(p.phone)}</span>
           </a>`
      : '';

    // Notes: 2-line clamp by default; expand button revealed when truncated
    const notesHtml = p.notes
      ? `<p class="card-notes">${esc(p.notes)}</p>
         <button class="card-expand-btn" aria-expanded="false">▾ Show more</button>`
      : `<p class="card-notes-empty">No description provided.</p>`;

    return `
<article class="card">
  <div class="card-top">
    <h2 class="card-name">${esc(p.name)}</h2>
    <span class="badge ${badgeClass}">${esc(p.category)}</span>
  </div>
  ${notesHtml}
  <div class="card-footer">${phoneLink}</div>
</article>`.trim();
  }).join('\n');

  // After painting, detect which cards actually have truncated notes
  // and show the expand button only on those cards.
  grid.querySelectorAll('.card-notes').forEach(el => {
    if (el.scrollHeight > el.clientHeight) {
      el.closest('.card').classList.add('card--has-more');
    }
  });
}

// ─── Events ───────────────────────────────────────────────────────────────────

/** Activate a category tab by its data-cat value and update ARIA state */
function setActiveTab(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tab').forEach(t => {
    const isActive = t.dataset.cat === cat;
    t.classList.toggle('tab--active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
}

// When the user types, switch to "All" so results span every category
document.getElementById('searchInput').addEventListener('input', e => {
  if (e.target.value.trim()) setActiveTab('all');
  render();
});

// Tab clicks apply a category filter (only effective when search is empty)
document.getElementById('tabs').addEventListener('click', e => {
  const tab = e.target.closest('[data-cat]');
  if (!tab) return;
  setActiveTab(tab.dataset.cat);
  render();
});

// Expand / collapse card notes (event delegation — survives re-renders)
document.getElementById('grid').addEventListener('click', e => {
  if (e.target.closest('a')) return;   // let phone / WA links work normally
  const card = e.target.closest('.card');
  if (!card) return;
  // Only act on cards that have overflow content or are already expanded
  if (!card.classList.contains('card--has-more') && !card.classList.contains('card--expanded')) return;

  const isExpanded = card.classList.toggle('card--expanded');
  const btn = card.querySelector('.card-expand-btn');
  if (btn) {
    btn.setAttribute('aria-expanded', String(isExpanded));
    btn.textContent = isExpanded ? '▴ Show less' : '▾ Show more';
  }
});

// ─── Init ─────────────────────────────────────────────────────────────────────
render();
