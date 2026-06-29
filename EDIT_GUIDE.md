# EDIT GUIDE — Raynox NDT Solutions V2

This guide tells you exactly which file to edit for every common update.
You should never need to touch any other file for routine changes.

---

## 1. Adding a New Product

**File:** `data/products.ts`

Copy this template and add it to the `products` array:

```ts
{
  slug: "your-product-slug",           // URL-safe, unique, lowercase with hyphens
  name: "Product Name Here",
  category: "magnetic-particle-inspection", // must match a slug in data/categories.ts
  brand: "Brand Name",                 // optional
  model: "Model Number",               // optional
  shortDescription: "One sentence description for cards.",
  description: "Full product description. Can be multiple sentences.",
  images: [
    "/images/products/your-product-image.jpg", // place image in /public/images/products/
  ],
  specs: [
    { label: "Weight", value: "2 Kg" },
    { label: "Power", value: "110V AC" },
    // add as many spec rows as needed
  ],
  features: [
    "Feature one",
    "Feature two",
  ],
  applications: [
    "Application one",
    "Application two",
  ],
  datasheet: null,                     // or "/datasheets/your-product.pdf"
  featured: false,                     // set true to show on homepage
},
```

After saving, the website automatically:
- Creates a product page at `/products/your-product-slug`
- Shows it in the category listing on `/products`
- Includes it in search results
- Adds it to the quote form dropdown

---

## 2. Changing a Product Image

**File:** `data/products.ts`

Find the product and update the `images` array:

```ts
images: ["/images/products/new-image.jpg"],
```

Place the image file in: `public/images/products/`

---

## 3. Editing a Product Description

**File:** `data/products.ts`

Find the product by its `slug` or `name` and edit `description`, `shortDescription`, `specs`, `features`, or `applications`.

---

## 4. Changing the Logo

**Step 1:** Replace `public/logo.png` with your new logo file (keep the same filename).
**Step 2:** If you use a different filename, update `logo` in `config/siteConfig.ts`:
```ts
logo: "/your-new-logo.png",
```

---

## 5. Editing Company Information (Phone, Email, WhatsApp, Address)

**File:** `config/siteConfig.ts`

```ts
phone: "+91 XXXXX XXXXX",
phoneAlt: "+91 XXXXX XXXXX",
whatsapp: "91XXXXXXXXXX",   // no + sign, include country code
email: "your@email.com",
gst: "YOUR GST NUMBER",
offices: [
  { city: "Your City", primary: true },
],
businessHours: {
  weekdays: "Monday – Saturday",
  hours: "9:00 AM – 6:00 PM",
},
```

Changes here update: Navbar, Footer, Contact page, WhatsApp button — everywhere.

---

## 6. Changing the Hero Section Text

**File:** `config/heroConfig.ts`

```ts
headline: "Your New Headline Here",
subheadline: "Your subtitle here.",
primaryButton: { label: "Request a Quote", href: "/contact" },
secondaryButton: { label: "View Products", href: "/products" },
```

---

## 7. Changing the Hero Background Image

**File:** `config/heroConfig.ts`

```ts
backgroundImage: "/images/your-new-hero.jpg",
```

Place the image in: `public/images/`

Currently the hero uses a CSS gradient fallback. To enable a real background image, update the `<section>` in `app/page.tsx` to use `backgroundImage: url(${heroConfig.backgroundImage})`.

---

## 8. Updating Contact Details

**File:** `config/siteConfig.ts`

All contact information (phone, WhatsApp, email, address, hours) is in this file. Edit once, updates everywhere.

---

## 9. Updating Colors

**File:** `config/siteConfig.ts` (reference only)
**Main file to edit:** `tailwind.config.ts` and search/replace `#0F2B6F` in components.

The primary navy is `#0F2B6F`. To change the color scheme, do a project-wide find & replace of `#0F2B6F` with your new primary color.

---

## 10. Adding a New Category

**File:** `data/categories.ts`

Add a new object to the `categories` array:

```ts
{
  slug: "new-category-slug",
  name: "Category Display Name",
  description: "Short description of what this category covers.",
  icon: "Box",  // lucide-react icon name
},
```

Then add products with `category: "new-category-slug"` in `data/products.ts`.
The category will automatically appear in the mega menu and products page.

---

## 11. Adding a Datasheet PDF

**Step 1:** Place the PDF in `public/datasheets/product-name.pdf`
**Step 2:** In `data/products.ts`, update the product's `datasheet` field:
```ts
datasheet: "/datasheets/product-name.pdf",
```

A Download Datasheet button will automatically appear on the product page.

---

## 12. Adding a Featured Product (Homepage)

**File:** `data/products.ts`

Find the product and set:
```ts
featured: true,
```

It will appear in the Featured Equipment section on the homepage.

---

## 13. Updating Social Media Links

**File:** `config/siteConfig.ts`

```ts
social: {
  linkedin: "https://linkedin.com/company/your-page",
  facebook: "https://facebook.com/your-page",
  instagram: "https://instagram.com/your-page",
},
```

---

## 14. Updating the GST Number

**File:** `config/siteConfig.ts`

```ts
gst: "22AAAAA0000A1Z5",
```

It will appear in the footer and contact page automatically.

---

## Project Structure Summary

```
config/
  siteConfig.ts    ← Company info, contact, stats, logo
  heroConfig.ts    ← Hero headline, subtitle, buttons, background
  navigation.ts    ← Nav links (rarely needs editing)

data/
  products.ts      ← ALL products — add/edit/remove products here
  categories.ts    ← Product categories — add new categories here

public/
  logo.png         ← Company logo (replace this file)
  images/          ← Hero and general images
    products/      ← Product images go here

app/               ← Pages (rarely need editing)
components/        ← UI components (rarely need editing)
```
