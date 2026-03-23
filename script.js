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
    "category": "Food",
    "notes": "Pure Veg, Satvik and Jain catering. Specialties: sweets, catering, boxed meals, seasonal items like Undhiyu. Delivery across Dubai, Sharjah and Ajman.",
    "recommended_by": "Multiple residents"
  },
  {
    "name": "Avinash Paneer",
    "phone": "+971 55 848 7665",
    "category": "Food",
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
  }
];

// ─── Badge CSS class per category ────────────────────────────────────────────
const BADGE_CLASS = {
  'Cook':             'badge-cook',
  'Cleaner/Maid':     'badge-cleaner',
  'Tailor':           'badge-tailor',
  'Massage':          'badge-massage',
  'Beauty/Parlour':   'badge-beauty',
  'Food':             'badge-food',
  'Pharmacy':         'badge-pharmacy',
  'Plumber/Handyman': 'badge-handyman',
  'Tutor':            'badge-tutor',
  'Fitness':          'badge-fitness',
  'Healthcare':       'badge-healthcare',
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

/** Return a wa.me URL for UAE (+971) numbers, otherwise null */
function whatsappUrl(phone) {
  if (!phone) return null;
  const stripped = phone.replace(/[\s\-()+]/g, '');
  if (stripped.startsWith('971') && stripped.length >= 11) {
    return 'https://wa.me/' + stripped;
  }
  return null;
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

    const phoneLink = waUrl
      ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="phone-link phone-link--wa" aria-label="WhatsApp ${esc(p.phone)}">
           <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
           </svg>
           <span>${esc(p.phone)}</span>
         </a>`
      : `<a href="tel:${esc(p.phone)}" class="phone-link phone-link--tel" aria-label="Call ${esc(p.phone)}">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
           </svg>
           <span>${esc(p.phone)}</span>
         </a>`;

    const notesHtml = p.notes
      ? `<p class="card-notes">${esc(p.notes)}</p>`
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
}

// ─── Events ───────────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', render);

document.getElementById('tabs').addEventListener('click', e => {
  const tab = e.target.closest('[data-cat]');
  if (!tab) return;

  activeCategory = tab.dataset.cat;

  document.querySelectorAll('.tab').forEach(t => {
    const isActive = t === tab;
    t.classList.toggle('tab--active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  render();
});

// ─── Init ─────────────────────────────────────────────────────────────────────
render();
