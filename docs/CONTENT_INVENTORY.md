# Content Inventory (verbatim)

Every string of user facing copy in the existing build, extracted verbatim. Copy is sacred at this stage: nothing here is fixed, reworded, or softened, including the existing typos (`qualify of lives`, `justfiy-content`, `priviledged`, backtick apostrophes). The "Destination in new build" column is a proposal only and does not alter the source copy.

Legend for Element: eyebrow / h1 / h2 / h3 / h4 / h5 / body / list / cta / link / label / placeholder / alt / meta / contact / caption.

Source files:
- `index.html`, `src/components/common/CarouselItem.jsx` (hero)
- `src/components/Home/*` (home sections)
- `src/pages/*` and `src/pages/services/HomeServices.jsx`
- `src/components/Header/Header.jsx`, `src/components/Footer/Footer.jsx`
- `src/components/common/TrainingComponent.jsx`, `src/utils/data.js`

| ID | Page | Section | Element | Copy (verbatim) | Destination in new build |
|----|------|---------|---------|-----------------|--------------------------|
| M01 | Global | head | meta:title | `Home \| Omojolagbe Geriatric Care Foundation` | Home `<title>` |
| M02 | Global | head | meta:description | `Omojolagbe Geriatric Care Foundation is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged. We have impacted the lives of over 1000 elderly people in Ibadan and Nigeria in general` | Home meta description |
| M03 | Global | head | meta:keywords | `Assisted living Memory care Home care Geriatric Care` | Home meta keywords |
| H01 | Home | Hero | h1 | `Best Home Care & Services Provider` | Home hero h1 |
| H02 | Home | Hero | body | `We create healthier, happier and fruitful life for the elderly.` | Home hero subhead (the words `healthier`, `happier`, `fruitful` are individually wrapped in yellow in source) |
| H03 | Home | Hero | cta | `Learn More →` | Home hero secondary CTA |
| H04 | Home | Hero | cta | `Contact` | Home hero CTA |
| A01 | Home | About | h2 | `About Us` | Home about eyebrow/heading |
| A02 | Home | About | body | `Omojolagbe Geriatric Care Foundation was established in 2018 in Ibadan, Oyo State Nigeria and fully registered by The Corporate Affairs Commission. It is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged. We have impacted the lives of over 1000 elderly people in Ibadan and Nigeria in general.` | Home about body + About page intro |
| A03 | Home | About | cta | `Read More →` | Home about CTA |
| A04 | Home | About | body | `We provide high quality health care services that are efficient and supportive to the elderly persons.` | Home about value card 1 |
| A05 | Home | About | body | `We use all our efforts in taking care of the aged so as to regain their independence and active ageing.` | Home about value card 2 |
| A06 | Home | About | body | `We conduct empowerment program for the vulnerable among the elderly.` | Home about value card 3 |
| A07 | Home | About | body | `We collaborate with relevant organizations within and outside the country also to provide support and structure for the elderly.` | Home about value card 4 |
| S01 | Home | Services | h2 | `Personal Care` | Home services block 1 heading |
| S02 | Home | Services | body | `At Omojolagbe Geriatric Care Foundation, we understand the unique needs and challenges that come with aging. Our mission is to provide compassionate and reliable personal care services tailored specifically for seniors, ensuring a life of dignity, comfort, and independence.` | Home services block 1 body |
| S03 | Home | Services | body | `We provide a Comprehensive Personal Assistance: From bathing, grooming, and dressing to medication reminders and mobility assistance, our caregivers are trained to offer support with the utmost respect and empathy.` | Home services block 1 body |
| S04 | Home | Services | h2 | `Quality Of Life` | Home services block 2 heading |
| S05 | Home | Services | body | ``At Omojolagbe Care Foundation, we`re dedicated to providing more than just care; were committed to enhancing qualify of lives. Our trained caregivers engage seniors in meaningful activities, conversations, and outings to foster emotional well-being and social interactions.`` | Home services block 2 body |
| S06 | Home | Services | body | ``Life is meant to be lived fully at every age. Our center is a vibrant hub of activities like arts, crafts and games. There`s always something enriching happening here.`` | Home services block 2 body |
| G01 | Home | Gallery | h2 | `Gallery` | Home gallery heading |
| G02 | Home | Gallery | body | `Dive into our captivating collection of images and videos that encapsulate moments, stories, and the essence of our journey.` | Home gallery body 1 |
| G03 | Home | Gallery | body | `Each image and video captures the unique beauty of aging — a mosaic of experiences, laughter, resilience, and cherished memories.` | Home gallery body 2 (NOTE: contains an em dash in source; see DECISIONS) |
| G04 | Home | Gallery | cta | `Gallery` | Home gallery CTA |
| C01 | Home | Contact | h2 | `Contact Us` | Home contact heading |
| C02 | Home | Contact | body | ``We`re committed to providing compassionate care and valuable resources for seniors and their families. If you have questions, need assistance, or simply want to connect, our team is ready to help.`` | Home contact body + Contact page |
| C03 | Home/Contact/Footer | Contact | contact:email | `omojolagbehomecareservices1902@gmail.com` | Global contact email 1 |
| C04 | Home/Contact/Footer | Contact | contact:email | `omojolagbegeriatriccarefoundat@gmail.com` | Global contact email 2 |
| C05 | Home/Contact/Footer | Contact | contact:phone | `+2348057015681` | Global phone 1 |
| C06 | Home/Contact/Footer | Contact | contact:phone | `+2348147551902` | Global phone 2 |
| C07 | Home | Contact | link | `Connect with us on Facebook` | Global social link (`https://web.facebook.com/profile.php?id=100081814689135`) |
| C08 | Home | Contact | cta | `Contact Us Now →` | Home contact CTA |
| T01 | Modal | Training promo | alt | `Caregiver Training Flyer` | Training image alt |
| T02 | Modal | Training promo | cta | `Read More` | Training promo CTA |
| N01 | Header | Nav | link | `Home` | Nav |
| N02 | Header | Nav | link | `About` | Nav |
| N03 | Header | Nav | link | `Services` | Nav |
| N04 | Header | Nav | link | `Omojolagbe Home Care Services` | Nav dropdown / services index |
| N05 | Header | Nav | link (commented out in source) | `Omojolagbe Geriatric Care Foundation` | Nav (currently disabled; retained) |
| N06 | Header | Nav | link | `Gallery` | Nav |
| N07 | Header | Nav | link | `Contact` | Nav |
| N08 | Header | Nav | alt | `logo` | Logo alt (to be improved with instruction) |
| AB01 | About | Header | h1 | `About Us` | About page h1 |
| AB02 | About | Body | body | `Omojolagbe Geriatric Care Foundation was established in 2018 in Ibadan, Oyo State Nigeria with CAC Cert. No: 191574. It is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged. We have impacted the lives of over 1000 elderly people in Ibadan and Nigeria in general.` | About page intro (note: variant of A02 with CAC cert no.) |
| AB03 | About | Objectives | body | `To provide high quality health care services that are efficient and supportive to the elderly persons.` | About page objective 1 |
| AB04 | About | Objectives | body | `To use all our efforts in taking care of the aged so as to regain their independence and active ageing.` | About page objective 2 |
| AB05 | About | Objectives | body | `To do empowerment program for the vulnerable among the elderly.` | About page objective 3 |
| AB06 | About | Objectives | body | `To collaborate with relevant organizations within and outside the country also to provide support and structure for the elderly.` | About page objective 4 |
| AB07 | About | Body | body | `For Senior Citizens, Disabled Family Members, Men & Women 50 years and above.` | About page audience line |
| AB08 | About | Mission | h4 | `Our Mission` | About mission heading |
| AB09 | About | Mission | body | `To create awareness for the elderly on how to age gracefully through sensitizing programs on the media, seminars and conferences.` | About mission body |
| AB10 | About | Vision | h4 | `Our Vision` | About vision heading |
| AB11 | About | Vision | body | `A society free of sickness, disease and untimely death among the elderly people.` | About vision body |
| AB12 | About | Needs | h3 | `Our Needs` | About needs heading |
| AB13 | About | Needs | body | `Donors.` | About needs item 1 |
| AB14 | About | Needs | body | `Wheel chairs, crutches, and walkers for disabled old people.` | About needs item 2 |
| AB15 | About | Needs | body | `An ambulance.` | About needs item 3 |
| AB16 | About | Needs | body | `Land and Building.` | About needs item 4 |
| AB17 | About | Needs | alt | `donor` | About needs img alt |
| AB18 | About | Needs | alt | `wheelchair` | About needs img alt |
| AB19 | About | Needs | alt | `ambulance` | About needs img alt |
| AB20 | About | Needs | alt | `land and building` | About needs img alt |
| AB21 | About | Body | alt | `construction` | About page img alt (to improve with instruction) |
| SV01 | HomeServices | Header | h1 | `Home Care` | Services page h1 |
| SV02 | HomeServices | Intro | h4 | `Omojolagbe Geriatric Home Care Services` | Services intro heading |
| SV03 | HomeServices | Intro | body | `Our Care home services play a pivotal role in ensuring the well-being, safety, and quality of life of the elderly population who may require additional support and care as they age.` | Services intro body |
| SV04 | HomeServices | Levels | h3 | `Level Of Care` | Services levels heading |
| SV05 | HomeServices | Levels | list | `Free medical test.` | Service level item |
| SV06 | HomeServices | Levels | list | `Charity for the less priviledged.` | Service level item |
| SV07 | HomeServices | Levels | list | `Residential care.` | Service level item |
| SV08 | HomeServices | Levels | list | `Nursing care.` | Service level item |
| SV09 | HomeServices | Levels | list | `Respite care.` | Service level item |
| SV10 | HomeServices | Levels | list | `Palliative care.` | Service level item |
| SV11 | HomeServices | Levels | list | `Physiotherapy.` | Service level item |
| SV12 | HomeServices | Levels | list | `Dementia care.` | Service level item |
| SV13 | HomeServices | Levels | list | `Day care.` | Service level item |
| SV14 | HomeServices | Levels | list | `Counseling.` | Service level item |
| SV15 | HomeServices | Levels | list | `Recreation.` | Service level item |
| SV16 | HomeServices | Levels | list | `Training of caregivers.` | Service level item |
| CT01 | Contact | Header | h1 | `Contact Us` | Contact page h1 |
| CT02 | Contact | Form | h4 | `Get In Touch` | Contact form heading |
| CT03 | Contact | Form | placeholder | `Name` | Contact form field |
| CT04 | Contact | Form | placeholder | `Email` | Contact form field |
| CT05 | Contact | Form | placeholder | `Subject` | Contact form field |
| CT06 | Contact | Form | placeholder | `Message` | Contact form field |
| CT07 | Contact | Form | cta | `Send` | Contact form submit |
| CT08 | Contact | Info | h4 | `Contact Info` | Contact info heading |
| CT09 | Contact/Footer | Info | contact:address | `No 15, Akin Alabi Street Welder B/S, Alakia-Isebo Road, Ibadan, Oyo state Nigeria.` | Global address |
| TR01 | Training | Header | h2 | `Omojolagbe Geriatric Care Foundation Presents` | Training page heading |
| TR02 | Training | Header | h3 | `3-Days Intensive Caregiver Training` | Training page subheading |
| TR03 | Training | Header | body | `Become a Skilled, Confident & Certified Caregiver` | Training page tagline |
| TR04 | Training | Details | label/body | `Date` / `18th - 20th September, 2025` | Training details (dated event; see DECISIONS) |
| TR05 | Training | Details | label/body | `Time` / `9:00am – 4:00pm daily` | Training details |
| TR06 | Training | Details | label/body | `Venue` / `Omojolagbe Geriatric Care Foundation, Alakia Isebo Road, By Onile-Aro B/S, Ibadan, Oyo State.` | Training details |
| TR07 | Training | Why | h4 | `Why Join This Training?` | Training benefits heading |
| TR08 | Training | Why | list | `Certification in Caregiving` | Training benefit (source prefixes ✅) |
| TR09 | Training | Why | list | `Hands-on Practical Training with elderly care experts` | Training benefit |
| TR10 | Training | Why | list | `Basic Healthcare Skills – hygiene, medication support, vitals check` | Training benefit |
| TR11 | Training | Why | list | `Internship & Mentorship Opportunities` | Training benefit |
| TR12 | Training | Why | list | `Career Guidance on local & international caregiving jobs` | Training benefit |
| TR13 | Training | Why | list | `Networking with professionals in healthcare and caregiving` | Training benefit |
| TR14 | Training | Why | list | `Soft Skills – communication, empathy, and stress management` | Training benefit |
| TR15 | Training | Register | h4 | `For Registration & Enquiries:` | Training registration heading |
| TR16 | Training | Register | contact | `Tope: 08163089909` | Training contact (tel `08163089909`) |
| TR17 | Training | Register | contact | `Dammyy: 07037112792` | Training contact (tel `07037112792`) |
| TR18 | Training | Register | cta | `Register via WhatsApp` | Training WhatsApp CTA (`https://wa.me/2348057015681`) |
| GL01 | Gallery | Header | h1 | `Gallery` | Gallery page h1 |
| GL02 | Gallery | Toggle | label | `Image` | Gallery toggle |
| GL03 | Gallery | Toggle | label | `Video` | Gallery toggle |
| GL04 | Gallery | Expert | h5 | `Elderly Health Consultation Day` | Gallery expert section heading |
| GL05 | Gallery | data | caption/alt (x39) | `Omojolagbe Geriatric Care Foundation Gallery` | Gallery image caption/alt (repeated for all 39 gallery + expert images in `data.js`) |
| BR01 | Global | Breadcrumb | link | `Home` | Breadcrumb root link |
| NF01 | 404 | Body | alt | `Page not found` | 404 image alt |
| NF02 | 404 | Body | cta | `Home` | 404 CTA |
| FT01 | Footer | Intro | body | `Omojolagbe Geriatric Care Foundation was established in 2018 in Ibadan, Oyo State Nigeria and fully registered by The Corporate Affairs Commission. It is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged.` | Footer intro (subset of A02) |
| FT02 | Footer | Links | h4 | `Useful Links` | Footer links heading |
| FT03 | Footer | Links | link | `Home` | Footer link |
| FT04 | Footer | Links | link | `About` | Footer link |
| FT05 | Footer | Links | link | `Gallery` | Footer link |
| FT06 | Footer | Links | link | `Contact` | Footer link |
| FT07 | Footer | Links | link | `Home Care Services` | Footer link |
| FT08 | Footer | Contact | h4 | `Contact Us` | Footer contact heading |
| FT09 | Footer | Bottom | body | `Copyright © {year}. Omojolagbe Geriatric Care Foundation, All Rights Reserved.` | Footer copyright |
| FT10 | Footer | Bottom | body | `Designed & Developed by Abiodun Digital Hub` | Footer credit (`https://abiodunsamuel.com`) |

## Notes on duplicates and variants
- A02, AB02, FT01 are three near-identical statements of the founding paragraph. AB02 is the fullest (adds `CAC Cert. No: 191574`). All three must survive; they will live on Home (A02), About (AB02, the full one), and Footer (FT01).
- A04-A07 (home value cards, "We ...") and AB03-AB06 (about objectives, "To ...") are parallel phrasings of the same four objectives. Both sets survive: home keeps the "We" voice, About keeps the "To" voice.
- G03 contains an em dash in the source copy. Phase 9 rule 9 (zero em dashes) applies to code we author; existing copy is sacred. Resolution recorded in `docs/DECISIONS.md`.

## Total original strings tracked: 108 IDs (GL05 = one string repeated 39x).
