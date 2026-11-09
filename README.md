# 🌌 TRAVELVERSE AI — "Your Journey. Reimagined."

> **Advanced AI-Powered Multimodal Travel Intelligence Platform**
> Complete, functional, and responsive web application unifying travel planning, transport comparison, stochastic digital twin simulations, budget management, and journey protection into a single ecosystem.

---

## 🚀 Key Highlights & Architectural Pillars

### 1. 🧠 AI Smart Trip Planner
- **Dynamic Multiday Synthesis:** Generates day-wise itineraries tailored to starting location, destination, travel dates, passenger count, budget cap, focus interests, transit preferences, and travel pace (*Relaxed*, *Moderate*, *Fast-Paced*).
- **Interactive OpenStreetMap + Leaflet:** Renders visual waypoint pins, day badges, connected route polylines, and popups.
- **Full CRUD Customization:** Add custom activities, edit timings, delete items, and regenerate the itinerary on demand.
- **Truth In Advertising:** Explicitly distinguishes AI-synthesized estimates from verified booking data.

### 2. ⚡ Universal Transport Intelligence
- **9+ Transport Modes Compared:**
  - Nonstop & connecting **Flights**
  - High-speed **Bullet Trains** (Shinkansen / Frecciarossa)
  - Intercity **Express Coaches & Buses**
  - Door-to-door **Rideshares & Cabs**
  - Urban **Metro & Subways**
  - **Private Long-Range EVs** with charging waypoints
  - Eco **Cycling & Walking** corridors
  - Integrated **Multimodal combinations** (Flight ➔ Express Rail ➔ Local Subway)
- **Comprehensive Telemetry:** Total estimated tariff, total journey duration, number of transfers, waiting time, convenience score (1–10), and carbon footprint in kg CO₂.
- **Side-by-Side Comparator:** Multi-select up to 3 options to evaluate trade-offs in duration vs cost vs carbon.

### 3. 🔬 Travel Digital Twin Simulator
- **Interactive Stress-Testing Engine:**
  - Departure time offset slider (-60m to +120m)
  - First-leg transit delay simulation (0 to 150m)
  - Layover / transfer buffer adjustment (15m to 120m)
  - Atmospheric scenarios (*Clear Sky*, *Autumn Rain*, *Severe Storm*)
- **Deterministic & Risk Analytics:**
  - Real-time Missed Connection Probability gauge (0% to 100%)
  - Risk classification tiers (*LOW*, *MODERATE*, *HIGH*, *CRITICAL*)
  - Cascading timeline segment shifts (*Planned vs Simulated departure*)
  - Financial ripple estimates (rebooking fees, emergency hotel vouchers)
  - AI Contingency recovery routes with 1-click simulation application
- **Simulation Disclaimer:** Explicitly notes that simulations are heuristic estimates, not guaranteed live predictions.

### 4. 🛡️ AI Journey Guardian
- **Active Incident Management:** Manual on-site disruption reporting with automatic downstream schedule recalculations.
- **Emergency Hotline Directory:** Local emergency services, police, ambulance, medical care, and consulate/embassy numbers with 1-tap dial integration.
- **Travel Document Vault:** Offline-cached electronic boarding passes, train QR codes, and hotel vouchers.
- **Advisories Feed:** Categorized weather and transit hazard alerts with recommended mitigations.

### 5. 💰 Smart Travel Budget & Telemetry
- **Visual Analytics with Recharts:** Interactive donut chart of planned category allocations and grouped bar chart comparing *Planned vs Actual* spending.
- **Multi-Currency Converter:** Instant currency conversion supporting USD, EUR, GBP, JPY, CHF, CAD, AUD, INR, and SGD.
- **Expense Ledger & Real-Time Alerts:** Add/delete expenses with automated warnings when category thresholds are exceeded.

### 6. 👥 Group Decision Intelligence
- **Shared Collaborative Hub:** Shareable invite codes and squad invitations.
- **Preference Alignment Matrix:** Aggregates individual budgets, preferred pace, and focus tags across group members.
- **Democratic Voting System:** Upvote/downvote candidate activities with real-time score tallies.
- **AI Compromise Engine:** Calculates collective group harmony score (%) and synthesizes compromise recommendations.

### 7. 🧳 Intelligent Luggage Companion
- **Weather-Aware Checklist:** Climate forecasts and packing advisories tailored to destination seasons.
- **Category Filter Tabs:** Clothing, Electronics, Documents, Toiletries, Medications, and Shared Squad items.
- **Interactive Packing Readiness Gauge:** Live percentage completion meter with check/uncheck status and custom item creation.

### 8. 📸 Reality Lens
- **Visual Sign & Menu Translator:** Optical and contextual deciphering of signs, transit boards, restaurant menus, and monument inscriptions.
- **Actionable Insights & Allergen Warnings:** Extracts practical navigation rules, transit platform advice, and dietary advisories.
- **Pre-Loaded Scenarios & File Upload:** Test with Japanese Shinkansen luggage rules, French bistro menus, German railway cancellations, or upload custom imagery.

### 9. 🗺️ Destination Discovery Hub
- **Multidimensional Filters:** Filter by tags (*Culture*, *Food*, *Nature*, *Adventure*, *Romantic*, *Budget*, *Luxury*), daily budget limit, and ideal duration.
- **1-Click AI Planner Shortcut:** Instant transition from discovery card into the Smart Trip Planner with pre-filled destination parameters.
- **Persistent Favorites:** Save and manage bucket-list destinations.

### 10. 📁 My Trips Dashboard
- **Trip Lifecycle Management:** Filter by *Upcoming*, *Planning*, and *Completed* expeditions.
- **Full CRUD Capabilities:** Create new trips, duplicate existing itineraries, edit parameters, and delete journeys.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Custom Glassmorphism, CSS Glow Filters |
| **Icons & UI** | Lucide React, Canvas Confetti |
| **Mapping** | OpenStreetMap, Leaflet (Satellite & Dark Matter CartoDB tiles) |
| **Data Visualization** | Recharts (Donut Allocations, Variance Bar Charts) |
| **Backend** | Node.js, Express, tsx |
| **Database** | PostgreSQL / Supabase Relational Schema with Row Level Security (RLS) |
| **Fallback Store** | In-memory resilient state store with persistent pre-populated trips |
| **Validation** | Zod |

---

## 📁 Repository Structure

```
travelverse-ai/
├── server/
│   ├── index.ts                # Express API server & static asset host
│   ├── routes/
│   │   ├── ai.ts               # AI Smart Trip Planner endpoint
│   │   ├── transport.ts        # Universal Transport Intelligence comparator
│   │   ├── simulator.ts        # Travel Digital Twin simulator
│   │   ├── guardian.ts         # Journey Guardian disruption reporting
│   │   ├── budget.ts           # Smart Budget & currency conversion
│   │   ├── group.ts            # Group Decision voting & Compromise Engine
│   │   ├── luggage.ts          # Luggage Companion checklist manager
│   │   ├── realityLens.ts      # Reality Lens vision & translation
│   │   ├── destinations.ts     # Destination discovery filter endpoint
│   │   └── auth.ts             # Authentication & user profile endpoints
│   └── db/
│       ├── schema.sql          # Complete Supabase PostgreSQL relational schema + RLS
│       └── store.ts            # In-memory resilient data store with initial sample trips
├── src/
│   ├── components/
│   │   ├── navbar/Navbar.tsx
│   │   ├── hero/Hero.tsx
│   │   ├── map/InteractiveMap.tsx
│   │   ├── planner/TripPlanner.tsx
│   │   ├── transport/TransportIntelligence.tsx
│   │   ├── simulator/DigitalTwinSimulator.tsx
│   │   ├── guardian/JourneyGuardian.tsx
│   │   ├── budget/SmartBudget.tsx
│   │   ├── group/GroupIntelligence.tsx
│   │   ├── luggage/LuggageCompanion.tsx
│   │   ├── reality-lens/RealityLens.tsx
│   │   ├── discovery/DestinationDiscovery.tsx
│   │   ├── dashboard/MyTripsDashboard.tsx
│   │   ├── dashboard/TripDetailHub.tsx
│   │   ├── auth/AuthModal.tsx
│   │   └── landing/LandingPage.tsx
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── TripContext.tsx
│   │   └── ToastContext.tsx
│   ├── services/
│   │   └── api.ts
│   ├── constants/
│   │   └── initialData.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Running the Application

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm

### Quick Start (Full-Stack Dev Mode)
```bash
# Navigate to the project directory
cd travelverse-ai

# Start both backend server (port 5000) and frontend client (port 5173) concurrently
npm run dev
```

### Production Build & Standalone Serve
```bash
# Build production bundle
npm run build

# Start production server (serves API and optimized client on http://localhost:5000)
npm start
```

---

## 🗄️ Database Integration & Supabase Schema
The complete production-ready schema is located at:
`server/db/schema.sql`

It contains all 13 required relational tables:
1. `profiles`
2. `travel_preferences`
3. `trips`
4. `itinerary_items`
5. `transport_options`
6. `budgets`
7. `expenses`
8. `saved_destinations`
9. `group_trips`
10. `group_members`
11. `travel_alerts`
12. `emergency_contacts`
13. `packing_items`

With foreign key cascades, b-tree indexes, and Row Level Security (RLS) policies configured for multi-tenant isolation.
