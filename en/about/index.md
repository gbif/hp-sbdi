---
layout: default
title: About SBDI
permalink: /about/
---
# {{ page.title }}

**The Swedish Biodiversity Data Infrastructure (SBDI)** is a national e-infrastructure that empowers research and innovation in biodiversity and ecosystems. By providing open access to high-quality data and powerful analysis tools, SBDI creates new opportunities for interdisciplinary research and discovery.

Serving as the **Swedish node of the Global Biodiversity Information Facility (GBIF)**, SBDI enables scientists, policymakers, and other stakeholders to address the biodiversity crisis with reliable data and innovative digital solutions.

<section class="about--logos" aria-label="Partners">
{% for partner in site.data.partners %}
  <a href="{{ partner.link }}" title="{{ partner.title }}">
    <img src="/uploads/partners/{{ partner.image }}" alt="" aria-hidden="true">
  </a>
{% endfor %}
  <a href="https://www.gbif.se" title="GBIF Sweden">
    <img src="/uploads/partners/gbif.svg" alt="" aria-hidden="true">
  </a>
</section>

## More information
- [Strategic plan for 2025-2030](/uploads/Strategic-plan-for-SBDI-2025-2030_FINAL.pdf)
- [Organizational and Technical overview](/uploads/SBDI-Organizational-and-Technical-Overview.pdf)
- [Equality plan](/uploads/Equality-Plan_SBDI_ENG.pdf)
- [FAIR and Open](https://fairsharing.org/)

## Contact
If you have any questions, suggestions, or need help with finding and publishing biodiversity data – contact us via our [online support form](https://docs.biodiversitydata.se/support/).
