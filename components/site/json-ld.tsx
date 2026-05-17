import Script from 'next/script'

const SITE_URL = 'https://kaizenguwahati.com' // TODO: confirm prod URL
const LAUNCH_ISO = '2026-06-06T09:00:00+05:30'

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    '@id': `${SITE_URL}#cafe`,
    name: 'Kaizen Cafe',
    image: [`${SITE_URL}/images/cafe-interior.jpg`],
    url: SITE_URL,
    telephone: '+91-70995-10807',
    priceRange: '₹₹',
    servesCuisine: ['Coffee', 'Cafe', 'Italian', 'Continental', 'Pizza'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ligang Aloy, Royal Path',
      addressLocality: 'Garchuk',
      addressRegion: 'Assam',
      postalCode: '781035',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.1244, longitude: 91.674 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    sameAs: ['https://instagram.com/kaizen_guwahati'],
    areaServed: { '@type': 'City', name: 'Guwahati' },
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=Kaizen+Cafe+Garchuk+Guwahati',
    description:
      'A cozy cafe in Garchuk near Royal Global University, Guwahati. Specialty coffee, matcha, pizza, and live music nights.',
  }
  return (
    <Script
      id="ld-localbusiness"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  )
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: 'Kaizen Cafe Guwahati',
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}#cafe` },
  }
  return (
    <Script
      id="ld-website"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  )
}

export function OpeningEventJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Kaizen Cafe — Grand Opening',
    startDate: LAUNCH_ISO,
    endDate: '2026-06-06T22:00:00+05:30',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Kaizen Cafe',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ligang Aloy, Royal Path',
        addressLocality: 'Garchuk',
        addressRegion: 'Assam',
        postalCode: '781035',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Kaizen Cafe',
      url: SITE_URL,
    },
    image: [`${SITE_URL}/images/cafe-interior.jpg`],
    description:
      'Grand opening of Kaizen Cafe — coffee, matcha, pizza, and a warm welcome in Garchuk, Guwahati.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: SITE_URL,
      validFrom: '2026-01-01T00:00:00+05:30',
    },
  }
  return (
    <Script
      id="ld-opening-event"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  }
  return (
    <Script
      id="ld-breadcrumb"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  )
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  }
  return (
    <Script
      id="ld-faq"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  )
}
