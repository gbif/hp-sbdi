---
layout: default
title: Organization
permalink: /about/:basename/
toc: true
tocMaxDepth: 2
---
# {{ page.title }}

## Consortium partners
The SBDI Consortium consists of eleven partner organizations. Below we list the SBDI Consortium partners and describe their responsibilities, contributions and skills.

{% for partner in site.data.partners %}
  <article class="organizations--partners">
    <h3>{{ partner.title }}{% if partner.abbreviation %} ({{ partner.abbreviation }}){% endif %}</h3>
    <img src="/uploads/partners/{{ partner.image }}" alt="Logotype {{ partner.title }}" aria-hidden="true">
    <p>{{ partner.description }}</p>
  </article>
{% endfor %}

## Executive office
The SBDI Executive Office (ExO) manages the daily business of SBDI and coordinates the work in different work groups.

<div class="organizations--executive-office">
{% for item in site.data.organisation["executive_office"] %}
  <article>
    <img src="/uploads/people/{{ item.image }}" class="person" alt="Picture of {{ item.name }}">
    <h3>{{ item.name }}</h3>
    <div class="person-title">{{ item.title }}</div>
    <div class="mt-3">{% include icons/envelope.html %}<a href="mailto:{{ item.email }}">{{ item.email }}</a></div>
    {% if item.phone %}
      <div class="mt-1">{% include icons/phone.html %}<a href="tel:{{ item.phone }}">{{ item.phone }}</a></div>
    {% endif %}
    <div class="person-affiliation mt-4">
      {{ item.affiliation }}
      <img src="/uploads/partners/{{ item.affiliation_image }}" alt="Logotype of {{ item.affiliation }}" aria-hidden="true">
    </div>
  </article>
{% endfor %}
</div>

## Governance

### Steering committee
SBDI is governed by an independent Steering Committee (SC) composed of seven representatives with wide experience from research and research infrastructure in Sweden and abroad.

{% for item in site.data.organisation["steering_committee"] %}
  - *{{ item.name }}*, {{ item.affiliation }}
{% endfor %}

### Scientific committee
The SBDI SC is supported by a Scientific Committee (SciC). The SciC consists of internationally renowned representatives from the biodiversity informatics and user communities.

{% for item in site.data.organisation["scientific_committee"] %}
  - *{{ item.name }}*, {{ item.affiliation }}
{% endfor %}

### Stakeholder assembly
Additionally, representatives from the heads of all partner organizations in the SBDI consortium congregate for an annual Stakeholder assembly, pointing out directions to the SC and handling common matters related to the overarching administration of the SBDI consortium.
