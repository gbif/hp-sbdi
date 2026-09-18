---
layout: default
title: Support
permalink: /support/
toc: true
tocMaxDepth: 2
redirect_from:
  - /support/training/
  - /support/training/courses/access-to-biodiversity-data-through-web-services/
  - /support/training/courses/basic-spatial-analysis-in-r/
  - /support/training/courses/advanced-spatial-analysis-in-r/
  - /support/training/courses/advanced-spatial-analysis-in-r/
  - /support/training/courses/basic-python-for-biologists/
  - /support/training/courses/advanced-python-for-biologists/
  - /support/training/courses/basic-phylogeography/
  - /support/training/courses/advanced-phylogenetic-analysis-with-supersmartr/
  - /support/training/courses/biodiversity-data-mobilization-course/
  - /support/webinars/
---
# Support

{: .box }
If you have any questions, suggestions, or need help with finding and publishing biodiversity data – contact us via our [online support form](https://docs.biodiversitydata.se/support/).

## Online courses
Below you find an overview of our educational online modules in Biodiversity Informatics. Many of these modules are thematically linked and can be used to stepwise build up your expertise in a certain topic. 

<div class="support--courses">
{% for course in site.data.courses %}
  <article data-course="course-{{ forloop.index }}">
    <h3>{{ course.title }}</h3>
    <p>
      {{ course.descripton | truncatewords: 50 }}
    </p>
    <footer>
      <a href="#" 
        onclick="toggleCourse({{ forloop.index }}); return false;" 
        title="Show more about {{ course.title }}" 
        class="link-icon">Show more</a>
    </footer>
  </article>
  <article data-course="course-{{ forloop.index }}" class="g-hidden">
    <h3>{{ course.title }}</h3>
    <p>
      {{ course.descripton }}
    </p>
    <dl>
    {% if course.contact %}
      <dt>Contact:</dt>
      <dd>{{ course.contact }}</dd>
    {% endif %}
    {% if course.creator %}
      <dt class="inline">Creator:</dt>
      <dd>{{ course.creator }}</dd>
    {% endif %}
    {% if course.time_effort %}
      <dt>Time effort:</dt>
      <dd>{{ course.time_effort }}</dd>
    {% endif %}
    {% if course.level %}
      <dt>Course level:</dt>
      <dd>{{ course.level }}</dd>
    {% endif %}
    {% if course.background %}
      <dt>Recommended background:</dt>
      <dd>{{ course.background }}</dd>
    {% endif %}
    {% if course.link %}
      <dt>Link to module:</dt>
      <dd><a href="{{ course.link }}">{{ course.link }}</a></dd>
    {% endif %}
    </dl>
    <footer>
      <a href="#" 
        onclick="toggleCourse({{ forloop.index }}); return false;" 
        title="Show less {{ course.title }}" 
        class="link-icon">Show less</a>
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
      <h4>{{ webinar.title }}</h4>
      <p>
        {{ webinar.description }}
      </p>
      <footer>
        <a href="{{ webinar.link }}" 
          title="View video about {{ webinar.title }}" 
          class="link-icon">View video ({{ webinar.duration }})</a>
      </footer>
    </article>
  {% endfor %}
{% endfor %}
</div>

<script>
  const toggleCourse = (id) => {
    document
      .querySelectorAll(`[data-course="course-${id}"]`)
      .forEach((element) => element.classList.toggle("g-hidden"));
  }
</script>
