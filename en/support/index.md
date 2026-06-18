---
layout: default
title: Support
permalink: /support/
toc: true
tocMaxDepth: 2
---
# Support

{: .box }
If you have any questions, suggestions, or need help with finding and publishing biodiversity data – contact us via our [online support form](https://docs.biodiversitydata.se/support/).

## Documentation
[Documentation and FAQ's are available here.](https://docs.biodiversitydata.se)

## Online courses
Below you find an overview of our educational online modules in Biodiversity Informatics. Many of these modules are thematically linked and can be used to stepwise build up your expertise in a certain topic. 

<div class="support--courses">
{% for course in site.courses %}
  <article>
    <h3><a href="{{ course.url }}">{{ course.title }}</a></h3>
    <p>
      {% include preamble.html page=course %}
    </p>
    <footer>
      <a href="{{ course.url }}" title="{{ course.title }}" class="link-icon text-lg">Read more</a>
    </footer>
  </article>
{% endfor %}
</div>

## Webinars

Here you find a library of past webinars and workshop recordings. You can also browse the [SBDI YouTube channel](https://www.youtube.com/channel/UCaq-l_Tl3XXZm4v8EFuKbvw) for more movies and webinars.

<div class="support--webinars">
{% for section in site.data.webinars %}
  <h3>{{ section.title }}</h3>
  {% for webinar in section.items %}
    <article>
      <h4>
        <a href="{{ webinar.link }}">{{ webinar.title }}</a>
        {% if webinar.duration %}<span>[{{ webinar.duration }}]</span>{% endif %}
      </h4>
      <p>
        {{ webinar.description }}
      </p>
    </article>
  {% endfor %}
{% endfor %}
</div>
