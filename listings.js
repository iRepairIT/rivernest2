/* ========================================================
   RIVER NEST PROPERTIES — RENTAL LISTINGS
   ========================================================

   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE LISTINGS.

   Both the homepage (index.html) and the Available Rentals
   page (rentals.html) automatically pull from this file.

   --------------------------------------------------------
   HOW TO EDIT A LISTING:
   --------------------------------------------------------
   1. Find the listing block below (each starts with `{`)
   2. Change the values between the quotation marks
   3. Save this file
   4. Re-upload listings.js to your hosting
   5. Done — both pages update automatically

   --------------------------------------------------------
   HOW TO ADD A NEW LISTING:
   --------------------------------------------------------
   Copy one of the existing listing blocks (everything from
   `{` through the matching `},`) and paste it as a new
   block. Edit the values. Make sure each block ends with
   a comma except the very last one.

   --------------------------------------------------------
   HOW TO REMOVE A LISTING:
   --------------------------------------------------------
   Delete the entire block from `{` through `},`

   --------------------------------------------------------
   HOW TO CONTROL WHICH LISTINGS APPEAR ON THE HOMEPAGE:
   --------------------------------------------------------
   Set "featured": true to show on the homepage.
   Set "featured": false to hide from homepage (still
   shows on the Available Rentals page).
   The homepage shows up to 3 featured listings.

   --------------------------------------------------------
   FIELD GUIDE — what each field means:
   --------------------------------------------------------
     price         The monthly rent (e.g. "$1,395")
     address       Street address (line 1)
     cityStateZip  City, state, zip (line 2)
     beds          Number of bedrooms (e.g. "2" or "3")
     baths         Number of bathrooms (e.g. "1" or "2.5")
     sqft          Square footage (e.g. "800" or "1,640")
     available     Move-in date (e.g. "Now", "May 15", "June 1")
     status        Either "Available" or "Coming Soon"
     featured      true = show on homepage, false = don't
     images        List of photo URLs (3-5 photos work best)

   ========================================================
*/

const LISTINGS = [

  {
    price: "$1,395",
    address: "740 Mozley Drive SE",
    cityStateZip: "Smyrna, GA 30080",
    beds: "2",
    baths: "1",
    sqft: "800",
    available: "NOW",
    status: "Available",
    featured: true,
    images: [
      { url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=80", alt: "Front of bungalow home" },
      { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80", alt: "Bright kitchen" },
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80", alt: "Living room" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=700&q=80", alt: "Bedroom" }
    ]
  },

  {
    price: "$1,950",
    address: "1438 S Diane Ct SE",
    cityStateZip: "Smyrna, GA 30080",
    beds: "2",
    baths: "2.5",
    sqft: "1,320",
    available: "NOW",
    status: "Available",
    featured: true,
    images: [
      { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80", alt: "Townhome exterior" },
      { url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=700&q=80", alt: "Dining area" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80", alt: "Bedroom" }
    ]
  },

  {
    price: "$1,895",
    address: "3017 Belmont Ridge Dr",
    cityStateZip: "Marietta, GA 30067",
    beds: "2",
    baths: "2",
    sqft: "1,280",
    available: "June 15",
    status: "Coming Soon",
    featured: true,
    images: [
      { url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=700&q=80", alt: "Brick ranch home" },
      { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80", alt: "Renovated bathroom" },
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80", alt: "Backyard patio" }
    ]
  },

  {
    price: "$2,795",
    address: "4205 Vinings Mill Trace",
    cityStateZip: "Atlanta, GA 30339",
    beds: "4",
    baths: "3",
    sqft: "2,310",
    available: "May 20",
    status: "Available",
    featured: false,
    images: [
      { url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=700&q=80", alt: "Contemporary craftsman home" },
      { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80", alt: "Living room with fireplace" },
      { url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=700&q=80", alt: "Modern kitchen" }
    ]
  },

  {
    price: "$1,575",
    address: "876 Cumberland Pkwy SE",
    cityStateZip: "Smyrna, GA 30080",
    beds: "1",
    baths: "1",
    sqft: "820",
    available: "Now",
    status: "Available",
    featured: false,
    images: [
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80", alt: "Cozy apartment" },
      { url: "https://images.unsplash.com/photo-1494203484021-3c454daf695d?auto=format&fit=crop&w=700&q=80", alt: "Compact kitchen" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80", alt: "Apartment bedroom" }
    ]
  },

  {
    price: "$2,295",
    address: "1923 Oakdale Pointe Ct",
    cityStateZip: "Smyrna, GA 30082",
    beds: "3",
    baths: "2",
    sqft: "1,540",
    available: "July 1",
    status: "Coming Soon",
    featured: false,
    images: [
      { url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=700&q=80", alt: "Modern duplex" },
      { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=700&q=80", alt: "Open living space" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=700&q=80", alt: "Bathroom" }
    ]
  }

];


/* ========================================================
   ⚠️  DO NOT EDIT BELOW THIS LINE
   ========================================================
   The code below is what makes the listings appear on
   your pages. Editing it can break your website.
   ========================================================
*/

function buildListingCard(listing, ctaLabel) {
  const dotsHtml = listing.images.map((_, i) =>
    `<span class="carousel-dot${i === 0 ? ' active' : ''}"></span>`
  ).join('');

  const slidesHtml = listing.images.map(img =>
    `<div class="carousel-slide"><img src="${img.url}" alt="${img.alt}" loading="lazy"></div>`
  ).join('');

  return `
    <article class="listing-card">
      <div class="carousel">
        <span class="listing-status">${listing.status}</span>
        <div class="carousel-track">${slidesHtml}</div>
        <button class="carousel-arrow prev" aria-label="Previous photo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="carousel-arrow next" aria-label="Next photo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="carousel-dots">${dotsHtml}</div>
      </div>
      <div class="listing-body">
        <div class="listing-price">${listing.price} <small>/ month</small></div>
        <div class="listing-address">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="margin-top:4px;flex-shrink:0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${listing.address}<br>${listing.cityStateZip}</span>
        </div>
        <div class="listing-meta">
          <span><strong>${listing.beds}</strong> bed</span>
          <span><strong>${listing.baths}</strong> bath</span>
          <span><strong>${listing.sqft}</strong> sqft</span>
        </div>
        <div class="listing-foot">
          <div class="listing-available">Available<strong>${listing.available}</strong></div>
          <a href="contact.html" class="view-details">${ctaLabel} →</a>
        </div>
      </div>
    </article>
  `;
}

function renderListings() {
  // Homepage featured grid (max 3)
  const featuredContainer = document.getElementById('featured-listings');
  if (featuredContainer) {
    const featured = LISTINGS.filter(l => l.featured).slice(0, 3);
    featuredContainer.innerHTML = featured.map(l => buildListingCard(l, 'Inquire')).join('');
  }

  // Full rentals page grid (all listings)
  const allContainer = document.getElementById('all-listings');
  if (allContainer) {
    allContainer.innerHTML = LISTINGS.map(l => buildListingCard(l, 'Inquire')).join('');
  }

  // Update the count on the rentals page
  const countEl = document.getElementById('listings-count');
  if (countEl) {
    const n = LISTINGS.length;
    countEl.innerHTML = `<strong>${n} ${n === 1 ? 'home' : 'homes'}</strong> available across Smyrna, Marietta &amp; Vinings`;
  }

  // Update homepage hero badge
  const badgeEl = document.getElementById('available-badge');
  if (badgeEl) {
    const availableCount = LISTINGS.filter(l => l.status === 'Available').length;
    badgeEl.innerHTML = `<strong>${availableCount} ${availableCount === 1 ? 'home' : 'homes'}</strong> available right now`;
  }

  // Initialize carousels for the cards we just rendered
  if (typeof window.initAllCarousels === 'function') {
    window.initAllCarousels();
  }
}

// Run as soon as the page is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderListings);
} else {
  renderListings();
}
