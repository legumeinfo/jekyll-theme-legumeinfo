---
# This YAML front matter ensures Jekyll will pass the site variables in.
layout: none
---

export const events = [
  {% for post in site.categories.events reversed %}
    {
      url: "{{ post.url }}",
      title: "{{ post.title }}",
      date: "{{ post.date | date_to_string }}",
      unixDate: {{ post.date | date: '%s' }},
      {% if post.end_date %}
      endDate: "{{ post.end_date | date_to_string }}",
      unixEndDate: {{ post.end_date | date: '%s' }},
      {% else %}
      endDate: null,
      unixEndDate: null,
      {% endif %}
      summary: "{{ post.summary }}",
    },
  {% endfor %}
  ];

/* separate current and upcoming events from past events */
const currentUnixDate = Math.floor(Date.now() / 1000);

export const upcomingEvents = events
  .filter((event) => event.unixDate >= currentUnixDate || event.unixEndDate >= currentUnixDate);

export const pastEvents = events
    .filter((event) => event.unixDate < currentUnixDate && event.unixEndDate < currentUnixDate);
