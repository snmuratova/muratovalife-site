# v36 — Design System Cleanup
- Base: v35. Existing content, imagery, links and color palette retained.
- Normalized fixed spacing, gap, minimum-height and radius values to a 4px rhythm (fluid sizes and optical exceptions remain).
- Aligned core reading and control styles, including the retreat and admin. Existing responsive rules retained; desktop hero can grow rather than clip text.
- Russian typography is applied to JSX text and string-valued JSX children at render time, including CMS text. No stored content or punctuation is rewritten. Cross-element and user-entered text boundaries are not automatically joined.
- Static JSX and CSS parsing and ZIP integrity checked. Full Next.js build and browser viewport checks not performed; this is a first implementation pass, not a verified pixel-perfect audit.
