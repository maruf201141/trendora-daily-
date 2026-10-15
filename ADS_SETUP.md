# Trendora Daily — Advertising Integration & Operations Manual

This operational manual documents the client-side advertising architecture for **Trendora Daily**, detailing the exact provider configurations, script isolation mechanisms, safety flags, and verification protocols.

---

## 1. Core Principles & Real Application Status Criteria

To ensure transparency and prevent deceptive status reporting, Trendora Daily enforces six strictly defined status criteria:

| Status Label | Operational Definition |
| :--- | :--- |
| **Configured** | The script URL, parameters, or container identifiers exist and are defined in codebase. |
| **Enabled** | The site owner has enabled the unit via configuration or the in-app **Ad Console**. |
| **Loaded** | The browser runtime successfully fetched and executed the external script resource. |
| **Rendered** | Creative markup or an active sandboxed frame document is detected as mounted in the DOM. |
| **Format Reviewed** | Client-side integration format was architected and reviewed for technical safety (e.g. frame isolation, pre-mounted container, or direct click-only link). |
| **Publisher Approved** | The publisher account, domain ownership, and zone format have been formally validated against the partner dashboard. *(Crucial: A successful script load never infers publisher account or domain approval.)* |

---

## 2. Inventory of Owner-Supplied Ad Providers (A through J)

| Code | Provider Name | Key / Identifier | Script / Target URL | Dimensions | Owner State | Format Review | Publisher Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **A** | Monetag-Style Zone | Zone: `294802` | `https://quge5.com/88/tag.min.js` | Dynamic | **Disabled** | **Unreviewed** | **Pending Dashboard Review** |
| **B** | ProfitableRate CPM 1 | N/A | `https://pl31557065.profitableratecpmnetwork.com/f0/7d/87/f07d87e9b361e5e5dd41b9f7979b1718.js` | N/A | **Disabled** | **Unreviewed** | **Pending Dashboard Review** |
| **C** | ProfitableRate Container | Target: `#container-c33b6c16e929619d5d484c3b93631e54` | `https://pl31625921.profitableratecpmnetwork.com/c33b6c16e929619d5d484c3b93631e54/invoke.js` | Responsive | **Enabled** | **Reviewed** | **Pending Dashboard Review** |
| **D** | HighRevenueFormat 728×90 | `3e941475ae82dcb37849aee04854b6db` | `https://www.highrevenueformat.com/3e941475ae82dcb37849aee04854b6db/invoke.js` | 728 × 90 | **Enabled** | **Reviewed** | **Pending Dashboard Review** |
| **E** | ProfitableRate CPM 2 | N/A | `https://pl31626026.profitableratecpmnetwork.com/1f/19/5a/1f195abbe8c3588d1ad5a813b2541b3b.js` | N/A | **Disabled** | **Unreviewed** | **Pending Dashboard Review** |
| **F** | ProfitableRate Sponsored Link | Key: `8fa8188a1165f3566b2b3bcb5bbf225b` | `https://www.profitableratecpmnetwork.com/jz3k7bkx4u?key=8fa8188a1165f3566b2b3bcb5bbf225b` | External | **Enabled** | **Reviewed** | **Pending Dashboard Review** |
| **G** | HighRevenueFormat 320×50 | `a6a979ed7ece25eee99573ab07dccd5d` | `https://www.highrevenueformat.com/a6a979ed7ece25eee99573ab07dccd5d/invoke.js` | 320 × 50 | **Enabled** | **Reviewed** | **Pending Dashboard Review** |
| **H** | ProfitableRate CPM 3 | N/A | `https://pl31557067.profitableratecpmnetwork.com/a1/ec/e1/a1ece11027a7ffe00ff52a1f2a6d11c4.js` | N/A | **Disabled** | **Unreviewed** | **Pending Dashboard Review** |
| **I** | HighRevenueFormat 160×300 | `2b55d8dc3138557885e1cc64dbcfa3e2` | `https://www.highrevenueformat.com/2b55d8dc3138557885e1cc64dbcfa3e2/invoke.js` | 160 × 300 | **Enabled** | **Reviewed** | **Pending Dashboard Review** |
| **J** | HighRevenueFormat 160×600 | `f1e526d4e27d311493cc48f30bac11c4` | `https://www.highrevenueformat.com/f1e526d4e27d311493cc48f30bac11c4/invoke.js` | 160 × 600 | **Enabled** | **Reviewed** | **Pending Dashboard Review** |

---

## 3. Ad Quality & Gambling Category Exclusion

### Editorial Policy
Trendora Daily enforces an editorial standard prohibiting advertisements related to **sports betting, online casinos, gambling, adult content, and deceptive software downloaders**.

### Technical Reality & Browser Security
External programmatic networks deliver creatives inside cross-origin iframes hosted on their own ad server domains. Due to the browser **Same-Origin Policy**, client-side JavaScript or CSS cannot inspect, modify, or filter individual creatives inside a cross-origin iframe. Falsely claiming that client code can filter out gambling ads is technically impossible.

### Required Publisher Dashboard Action
To exclude gambling and betting inventory, you must configure network-level blocklists directly inside your provider accounts:

#### 1. HighRevenueFormat / Adsterra Dashboard
1. Log in to your publisher account at `adsterra.com` / `highrevenueformat.com`.
2. Navigate to **Websites** and select your verified domain.
3. For each placement key (`3e941475ae82dcb37849aee04854b6db`, `a6a979ed7ece25eee99573ab07dccd5d`, `2b55d8dc3138557885e1cc64dbcfa3e2`, `f1e526d4e27d311493cc48f30bac11c4`):
   - Click **Edit / Filter Ads**.
   - Check **Exclude Gambling & Betting Ads**.
   - Check **Exclude Adult / 18+ Content**.
   - Save changes.

#### 2. Monetag Dashboard (Zone 294802)
1. Log in to your publisher account at `monetag.com`.
2. Go to **Zones** and locate Zone `294802`.
3. Verify the configured format: Ensure it is set to **In-Page Push** or **Banner**, NOT **On-Click (Popunder)**.
4. Go to **Content Restrictions** and enable filters to block gambling and casino verticals.

#### 3. In-App Provider Kill Switches
If an external ad network continues serving betting or low-quality inventory, you can disable that specific provider immediately in `src/config/adProviders.ts` or via the in-app **Ad Console** modal.

---

## 4. Technical Integration Nuances

### HighRevenueFormat Isolation (`atOptions`)
HighRevenueFormat scripts read `window.atOptions` synchronously upon evaluation:
```javascript
atOptions = {
  'key': '3e941475ae82dcb37849aee04854b6db',
  'format': 'iframe',
  'height': 90,
  'width': 728,
  'params': {}
};
```
If multiple units exist in the same document window, `atOptions` collisions will overwrite keys and creative dimensions. In Trendora Daily, each unit is rendered within an isolated `<iframe>` using `srcDoc` generated by `adScriptRegistry.generateHighRevenueFormatHtml()`. Each frame provides a distinct, clean execution context.

### Container-Targeted Determinism (Provider C)
Provider C requires `#container-c33b6c16e929619d5d484c3b93631e54` to be mounted before `invoke.js` runs. `AdSlot.tsx` mounts the container in the React DOM before calling `adScriptRegistry.loadScript()`.

### Mobile Responsiveness & Layout Shifts
- **728×90 Leaderboard**: Wrapped with `max-w-full overflow-hidden` and centered to prevent horizontal scrollbar blowout on mobile screens ($<768\text{px}$).
- **160px Vertical Skyscraper Units**: Strictly restricted to desktop viewports ($\ge 1024\text{px}$), hidden on mobile to avoid squeezing article body text.
- **Graceful Ad-Block Handling**: If a script is blocked by client extensions (e.g. uBlock Origin), the application records the blocked status without throwing unhandled exceptions.
