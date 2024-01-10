# jekyll-theme-legumeinfo

Welcome to jekyll-theme-legumeinfo!
A [Jekyll](https://jekyllrb.com/) theme built on [UIkit](https://getuikit.com/) for the [Legume Information System (Legumeinfo)](https://legumeinfo.org/) - an online data portal that houses various omics data of legumes and related species.
This theme is developed separately from the Legumeinfo Jekyll site so that it may be used by other biological data portals, including portals for specific genera and species.

See the the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository to get started with a Jekyll site already setup to use the theme.


## Installation

Clone this repository as follows:

    git clone --recurse-submodules https://github.com/legumeinfo/jekyll-theme-legumeinfo.git

The standard place to install this repository as a theme is in the `_themes/` directory of your Jekyll site.

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-legumeinfo", path: "./_themes/jekyll-theme-legumeinfo"
```

And add this line to your Jekyll site's `_config.yml` file:

```yaml
theme: jekyll-theme-legumeinfo
# add if you're going to use the theme's events features
future: true
```

Now the theme can be installed via Bundler:

    $ bundle

Or directly as a gem:

    $ gem install jekyll-theme-legumeinfo


## Creating a Site

See the [Jekyll website](https://jekyllrb.com/) for an introduction to Jekyll.
A Jekyll site that uses the Legumeinfo Jekyll theme should have the following directory structure:

```
root/
├── _config.yml
├── index.html
├── Gemfile
├── _data/
│   ├── alerts.yml
│   ├── taxon_list.yml
│   ├── tools.yml
│   └── taxa/
│       ├── Aeschynomene/
│       │   ├── genus_resources.yml
│       │   ├── species_collections.yml
│       │   └── species_resources.yml
│       └── ...
├── _includes/
│   ├── global-scripts.html
│   ├── global-stylesheets.html
│   ├── navbar-lower-menu.html
│   ├── navbar-menu.html
│   └── off-screen-menu.html
├── assets/
│   ├── css/
│   ├── icons/
│   │   └── favicon.ico
│   ├── img/
│   └── js/
├── blog/
│   ├── index.html
│   └── _posts/
│       ├── 2021-09-14-profound-blog-post.html
│       └── ...
├── events/
│   ├── index.html
│   └── _posts/
│       ├── 2021-09-14-big-event.html
│       └── ...
├── news/
│   ├── index.html
│   └── _posts/
│       ├── 2021-09-14-very-important-news.html
│       └── ...
└── taxa/
    └── index.html
```


### `_config.yml`
<details>

The `_config.yml` file should be auto-generated when you create your Jekyll site.
This file contains configuration information used by both a Jekyll site and its theme.
The Legumeinfo Jekyll theme supports the following entries:

* `title`: String (the title used for all pages and shown in the site navbar)
* `subtitle` (optional): String (the subtitle shown in the site navbar)
* `logo` (optional): String (the URL to the site's logo image)
* `email` (optional): String (how users may contact the maintainers of the site)
* `description`: String (the description used in the site meta)
* `baseurl`: String (the subpath of your site, e.g. /blog)
* `url`: String (the base hostname & protocol for your site, e.g. http://example.com)
* `google_analytics_id` (optional): String (unique Google Analytics ID for the site)
* `card_item_limit` (default=`3`): Integer (maximum number of items to display in each card for which no individual limit is specified)
* `blog_card_item_limit` (default=`card_item_limit`): Integer (maximum number of items to display in the Blog card)
* `news_card_item_limit` (default=`card_item_limit`): Integer (maximum number of items to display in the News card)
* `events_card_item_limit` (default=`card_item_limit`): Integer (maximum number of items to display in the Events card)
* `twitter_card_item_limit` (default=`card_item_limit`): Integer (maximum number of items to display in the Twitter card)
* `twitter_username` (optional): String (the site's Twitter handle for social media links)
* `github_username` (optional): String (the site's GitHub handle for social media links)
* `newsletter` (optional): String (the URL where users can sign up for your site's newsletter)
* `style` (optional):
    * `link_color`: String (what color HTML links should be)
    * `link_hover_color`: String (what color HTML links should be when hovered)
    * `primary_background`: String (what the background color of the main navbar should be)
    * `invert_navbar_text`: Boolean (whether or not to invert the navbar text color)
    * `font_family` (default=`ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`): String|Array (the default font family for the entire site; fonts are provided by the Web Browser so the array is treated as an ordered list of fonts to try)
    * `font_size` (default=`15px`): String (the default font size for the entire site)
    * `xxlarge_font_size` (default=`38px`): String (the default extra-extra-large font size for the entire site, normally 2.625 &times; `font_size`)
    * `xlarge_font_size` (default=`30px`): String (the default extra-large font size for the entire site, normally 2.0 &times; `font_size`)
    * `large_font_size` (default=`24px`): String (the default large font size for the entire site, normally 1.5 &times; `font_size`)
    * `medium_font_size` (default=`20px`): String (the default medium font size for the entire site, normally 1.25 &times; `font_size`)
    * `small_font_size` (default=`14px`): String (the default small font size for the entire site, normally 0.875 &times; `font_size`)
* `web_components_version` (default=`1.0.0`): String (the version of the Legumeinfo Web Components JavaScript library to use; see the [Web Components](#web-components) section for details)
* `graphql_uri` (default=`https://graphql.lis.ncgr.org/`): String (the URI of the GraphQL Server the theme should load data from; see the [GraphQL Support](#graphql-support) section for details)

As described in the [Installation](#installation) section, you'll need to add the Legumeinfo Jekyll theme in your `_config.yml` file.
And you'll need to add `future: true` if you want to use the theme's events features.
See the [`blog/`, `events/`, and `news/`](#blog-events-and-news) section for details.
</details>


### `index.html`
<details>

`index.html` is the home page for the site.
It should contain the [YAML front matter](#configuration-via-front-matter) variables `title` and `layout`.
For example:

```yaml
---
title: Home
layout: home
---
```

The `layout` variable should always specify the `home` layout for the home page.
See the [Configuration via Front Matter](#configuration-via-front-matter) section for details on how to enable the tools menu and the blog, news, events, and Twitter cards.
</details>


### `Gemfile`
<details>

The `Gemfile` should be auto-generated when you create your Jekyll site.
As described in the [Installation](#installation) section, you'll need to add the Legumeinfo Jekyll theme as a dependency in your `Gemfile`.
</details>


### `_data/`
<details>

The `_data/` directory is used by Jekyll to load static data that is not accommodated by its blog support.
The Legumeinfo Jekyll theme expects three files to be in this directory: `alerts.yml`, `taxon_list.yml` (and accompanying `taxa/` subdirectory), and `tools.yml`.


#### `alerts.yml`

This file contains a list of alerts to be shown on top of the navbar on every page in the site. If the list is not empty, a bell icon will be added to the far right side of the navbar that can be used to toggle the element containing the alerts. Each alert in the list should adhere to the following schema pattern:

```yml
---
-
  type: "primary"|"success"|"warning"|"danger"
  message: "<b>Welcome to the legumeinfo Jekyll starter site!</b> The site's code can be found on <a href='https://github.com/legumeinfo/jekyll-starter-legumeinfo' target='_blank'>GitHub</a>. Click the bell (<span uk-icon='bell'></span>) in the navigation bar to toggle this alert."
```


#### `taxon_list.yml` and `taxa/`

The `taxon_list.yml` file contains a list of taxa (genera) that the data portal provides omics data for.
When the Jekyll site is built, the Legumeinfo Jekyll theme geneartes a page in the `_site/taxa/` directory for each genus in the list using the [jekyll-datapage-generator plugin](https://github.com/avillafiorita/jekyll-datapage_gen) and the [`taxon` layout](#layouts).
The `taxon_list.yml` file should adhere to the following schema pattern:

```yml
---
-
  genus: Arachis
  description: "(peanut: domesticated and wild)"
  category: main
-
  genus: Cajanus
  description: "(pigeonpea)"
  category: main
-
  description: "(jointvetch; model for nodule evolution)"
  genus: Aeschynomene
  category: special
-
  description: "(potato bean: potential tuberous crop)"
  genus: Apios
  category: special
```
Each `category` variable should have the value `main` or `special`.
These categories are used to determine the groupings of the genera in the taxa menu.

The `taxa/` directory should contain a subdirectory for each genus in the `taxon_list.yml` file.
Each subidrectory should contain three files: `genus_resources.yml`, `species_collections.yml`, and `species_resources.yml`.
These files should adhere to the following schema patterns:

##### `genus_resources.yml`

```yml
---
commonName: jointvetch
description: Aeschynomene is a genus of flowering plants in the family Fabaceae, and
  was recently assigned to the informal monophyletic Dalbergia clade of the Dalbergieae.
  They are known commonly as jointvetches. These legumes are most common in warm regions
  and many species are aquatic. The genus as currently circumscribed is paraphyletic
  and it has been suggested that the subgenus Ochopodium be elevated to a new genus
  within the Dalbergieae, though other changes will also be required to render the
  genus monophyletic.
genus: Aeschynomene
resources:
- name: AeschynomeneMine
- URL: https://mines.legumeinfo.org/aeschynomenemine/begin.do
- description: InterMine for Aeschynomene species
species:
- evenia
taxid: 48134
```

##### `species_collections.yml`

```yml
---
species:
- name: evenia
  genomes:
    - collection: CIAT22838.gnm1.XF73
      synopsis: "Aeschynomene evenia isolate CIAT22838, whole genome shotgun sequencing project."
  annotations:
    - collection: CIAT22838.gnm1.ann1.ZM3R
      synopsis: "Aeschynomene evenia isolate CIAT22838, whole genome shotgun sequencing project."
```

##### `species_resources.yml`

```yml
---
species:
- abbrev: aesev
  commonName: shrubby jointvetch
  description: The legume genus Aeschynomene L. includes approximately 150 tropical
    and subtropical species, part of them having a semi-aquatic lifestyle. Some hydrophytic
    Aeschynomene species display unusual symbiotic features such as stem nodulation
    and the presence of a Nod factor-independent infection process with some Bradyrhizobium
    strains. To decipher the mechanisms of this original symbiotic process, Aeschynomene
    evenia has emerged as a new model legume because of its advantageous genetic and
    developmental characteristics for molecular genetics. A. evenia (2n=20, 400 Mb/1C)
    is an autogamous diploid species that is annual or short-lived perennial, consisting
    of various genotypes.
  genus: Aeschynomene
  species: evenia
  strains:
  - accession: CIAT22838
    description: The sequenced A. evenia genotype is an inbred line produced by IRD
      from the accession CIAT22838 originating from Malawi. 94% of the 400 Mb genome
      was assembled, 80% anchored to the 10 A. evenia chromosomes and 32,667 protein-coding
      genes predicted, providing a platform for comparative genomics and analysis
      of the nitrogen-fixing symbiosis in legumes.
    identifier: CIAT22838
    name: CIAT22838
    origin: Malawi
    resources: []
  taxid: 561484
```

Note that the species aren't automatically listed anywhere by the theme.
We recommend overriding the navbar files to add links to a species page that lists the species.
See the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for examples of overriding these files and iterating the species in a page.


#### `tools.yml`

This file contains a list of web-based tools that are provided by the data portal and links to them.
The list should adhere to the following schema:

```yml
---
- category: Browse and Search
  name: Gene Families
  description: Description
  url: "#"
- category: Browse and Search
  name: Genome Context Viewer
  description: Browser for dynamically discovering and viewing genomic synteny across
    selected species.
  url: "#"
- category: Search sequences and features against sequence databases
  name: BLAST Sequence Search
  description: Description
  url: "#"
```

These tools can optionally be listed in a vertical menu on the left side of any page in the site.
See the [Configuration via Front Matter](#configuration-via-front-matter) section for details.
The tools within the list will be grouped by category.
</details>


### `_includes/`
<details>

Jekyll allows the contents of files stored in a site's `_includes/` directory to be included within a page.
The Legumeinfo Jekyll theme uses these files to create custom layouts.
A Jekyll site using the Legumeinfo Jekyll theme can include these files from the theme or override them by adding files with the same name to the site's `_includes/` directory.
The following `_includes/` files are defined by the Legumeinfo Jekyll theme and are intended to be used or overridden.

#### `card.html`

The `card.html` file encapsulates the [UIkit boilerplate](https://getuikit.com/docs/card) used by the blog, news, events, and Twitter cards.
See the [Configuration via Front Matter](#configuration-via-front-matter) section for details about these cards.
This file can be overridden to customize the appearance of the cards, or it can be used to add a card not provided by the theme.

When using the `card.html` file, the `title`, `content`, and `footer` parameters must be provided.
For example, the blog card uses the `card.html` file as follows:
```liquid
{% capture content %}
  <div class="uk-card-body">
    <ul class="uk-list uk-list-disc">
      {% assign blogLimit = site.card_item_limit %}
      {% if site.blog_card_item_limit %}
        {% assign blogLimit = site.blog_card_item_limit %}
      {% endif %}
      {% for post in site.categories.blog limit:blogLimit %}
      <li><b>{{ post.date | date_to_string }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
{% endcapture %}

{% capture footer %}
    <a href="{{ "/blog" | relative_url }}" class="uk-button uk-button-text">More Blog Posts</a>
{% endcapture %}

{% include card.html title='BLOG POSTS' content=content footer=footer %}
```

#### `global-scripts.html` and `global-stylesheets.html`

These files should contain `<script>` and `<link>` tags, respectively, to be included on every page in the Jekyll site.

#### `navbar-lower-menu.html`

This file contains the navigation bar menu that appears below the main navigation bar seen on every page.
It is recommended that this menu is given a [responsive width](https://getuikit.com/docs/width#responsive-width) so it can be replaced with a more compact menu on smaller screens.

#### `navbar-menu.html`

This file contains the navigation bar menu seen on every page.
It is recommended that this menu is given a [responsive width](https://getuikit.com/docs/width#responsive-width) so it can be replaced with a more compact menu on smaller screens.
If using an off-screen menu (described below), it is recommend that the off-screen menu's toggle component is placed here.

#### `off-screen-menu.html`

This file contains a vertical menu that appears in an off-screen side-bar that's including on every page.
The off-screen side-bar has unique div ID `#off-screen-menu` and can be toggled using UIkit's [toggle component](https://getuikit.com/docs/toggle).
For example:

```html
<button uk-toggle="target: #off-screen-menu" type="button"></button>
```

See the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for examples of overriding these files.
</details>


### `assets/`
<details>

The `assets/` directory holds static asset files (e.g. stylesheets, icons, images, etc) that may be used throughout a Jekyll site.

#### `css/`

The Legumeinfo Jekyll theme uses the [UIkit CSS framework](https://getuikit.com/).
As such, all contents of the framework are available in the pages you define in your site.
You may add additional styling by saving custom styles in Cascading Style Sheet (`.css`) files in the `assets/css/` directory and importing the files in the pages you want to use them in:

```liquid
<link rel="stylesheet" href="{{ "assets/css/custom.css" | relative_url }}" type="text/css" />
```
A site can be configured to include these files in every page by overriding the `_includes/global-stylesheets.html` file.
See the [`_includes/`](#_includes) section for details.

#### `icons/`

The `icons/` directory is intended to hold any icons you may want to use in your site.
However, there are certain icons the Legumeinfo Jekyll theme will specifically look for in this directory.
Specifically, the theme will attempt to load a `favicon.ico` file and all icon files named `apple-touch-icon-<size>.png` or `favicon-<size>.png`, where `<size>` indicates the dimensions in pixels (e.g. `favicon-192x192.png`).

#### `img/`

The `img/` directory is intended to hold images that you want to use in your Jekyll site.
To do so, simply place image files in the `assets/img/` directory and include them in the pages you want to use them in.
For example:

```liquid
<img src="{{ "assets/img/lupine.jpg" | relative_url }}" />
```

#### `js/`

Although Jekyll is a static site generator, dynamic behavior can be added via JavaScript.
The `js/` directory is intended to hold JavaScript (`.js`) files that you may want to include in your Jekyll site to enable such dynamic behavior.
To include custom JavaScript in your site, put your scripts in the `assets/js/` directory and include them in the pages you want to use them in.
For example:

```liquid
<script src="{{ "assets/js/my-webcomponent.js" | relative_url }}"></script>
```
A site can be configured to include these files in every page by overriding the `_includes/global-scripts.html` file.
See the [`_includes/`](#_includes) section for details.
</details>

### `blog/`, `events/`, and `news/`
<details>

Jekyll is "blog aware," meaning it has built in support for blog-esque content.
The Legumeinfo Jekyll theme uses this support for a blog, events, and news.
To create a blog post, an event, or a news item, add an HTML file to the `blog/_posts/`, `events/_posts/`, or `news/_posts/` directory, respectively.
The filename should contain an [ISO formatted date](https://en.wikipedia.org/wiki/ISO_8601#Dates) and a title, such as `news/_posts/2021-02-24-sensational-news.html`.
The files must contain the [YAML front matter](#configuration-via-front-matter) variables `layout`, `title`, `author`, and `summary`.
Additionally, blog and news front matter should contain an `author` variable, and event front matter can contain an `end_date` variable if it's a multi-day event.
For example, `blog/_posts/2021-09-14-profound-blog-post.html` may have the front matter:

```yaml
---
layout:     blog-post
title:      Sensational Event!
end_date:   2022-02-25
summary:    This event is sensational! Probably because it's so long...
---
```

`events/_posts/2021-09-14-big-event.html` may have the front matter:

```yaml
---
layout:     event
title:      Sensational Event!
end_date:   2022-02-25
summary:    This event is sensational! Probably because it's so long...
---
```

And `news/_posts/2021-09-14-very-important-news.html` may have the front matter:

```yaml
---
layout:     news-item
title:      Sensational News!
author:     Alan Cleary
summary:    This news is sensational! Everyone will talk about it... but it changes nothing.
---
```

Note that the blog post's `layout` variable has the value `blog-post`.
This defines a layout provided by the Legumeinfo Jekyll theme for blog posts, thus all blog posts should specify the `blog-post` layout.
Similarly, the event's `layout` variable has the value `event` and the news item's `layout` variable has the value `news-item`.
All events and news items should specify these layouts as well.

The most recent blog posts, events, and news items can be listed in cards on the right side of any page in a Jekyll site using the Legumeinfo Jekyll theme.
These cards contain links to `blog/index.html`, `events/index.html`, and `news/index.html`, respectively.
It is left to users of the theme to implement these pages.
See the [Configuration via Front Matter](#configuration-via-front-matter) section for details on how to enable the cards and see the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for example implementations of the pages the cards link to.

**[By default](https://jekyllrb.com/docs/upgrading/2-to-3/#future-posts) Jekyll doesn't generate static pages for posts whose date is after the date the site was built.
The Legumeinfo Jekyll theme requires this functionality because events (i.e. Jekyll blog posts) of interest are those that haven't happened yet, i.e. future events.
The theme cannot enable this for a site so the site must enable it by adding the following to its** `_config.yml` **file:**

```yaml
future: true
```
Alternatively, the `--future` command line option can be used when building the site.
</details>

### `taxa/`
<details>

The Legumeinfo Jekyll theme generates a page for each taxon (genus) when the Jekyll site is built; see **`taxon_list.yml` and `taxa/`** in the [`_data/`](#_data) section for details.
These pages are placed in the `_site/taxa/` directory, which corresponds to the `taxa/` directory in the site's source code.
It is left to users of the theme to implement the `taxa/index.html` page.
See the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for an example implementations of this page.
</details>


## Features and Configuration

In addition to the file-specific features and configurations listed above, the following features and configurations are available throughout a Jekyll site using the Legumeinfo Jekyll theme.


### Layouts
<details>

In general, a page can be added to a Jekyll site by simply creating a new HTML file.
The URL of the page will correspond to its location in the site's directory structure and the name of the HTML file.
However, these HTML files should typically not be self-contained web pages, but rather, only contain content to be placed in a page template, or *layout*, provided by the Jekyll site or theme.

The Legumeinfo Jekyll theme provides a default layout that will be automatically used for every page that doesn't explicitly specify a layout.
The layout a page should use is specified using the `layout` variable in the page's [YAML front matter](#configuration-via-front-matter).
The Legumeinfo Jekyll theme provides the following layouts:

* `base`: The base layout for all pages.
* `default`: The default layout used if a page does not specify a layout.
* `404`: The layout used when a page is not found.
* `blog`: The layout used when viewing all blog posts.
* `blog-post`: The layout used when viewing a specific blog post. Uses the `reading-width` layout.
* `event`: The layout used when viewing a specific event.
* `events`: The layout used when viewing all events (automatically updates without rebuilding the site).
* `full-width`: A layout that uses the full width of the page for content, i.e. the tools menu and cards are not available in this layout.
* `home`: The layout used when viewing the home page.
* `news`: The layout used when viewing all news items.
* `news-item`: The layout used when viewing a specific news item.
* `page`: Alias for `default`.
* `post`: Alias for `default`.
* `reading-width`: A layout that puts content in a container with a width ideal for reading.
* `taxon`: The template used when generating pages for the taxa (genera) in the `_data/taxon_list.yml` file.

It is recommend that each page uses the `default` layout unless the page corresponds to a previously described page that has a specific layout.
</details>


### Configuration via Front Matter
<details>

The Legumeinfo Jekyll theme allows configuration of specific pages via [YAML front matter variables](https://jekyllrb.com/docs/front-matter/).
The following variables are currently supported:

* `tools_menu` (optional): Boolean (shows the vertical tools menu on the left side of any page using the `default` layout)
* `blog_card` (optional): Boolean (shows the blog card on the right side of any page using the `default` layout)
* `news_card` (optional): Boolean (shows the news card on the right side of any page using the `default` layout)
* `events_card` (optional): Boolean (shows the events card on the right side of any page using the `default` layout)
* `twitter_card` (optional): Boolean (shows the Twitter feed card on the right side of any page using the `default` layout)
* `web_components` (optional): Boolean (includes the Legumeinfo Web Components JavaScript in the page)

Note, [front matter default values](https://jekyllrb.com/docs/configuration/front-matter-defaults/) can be set in the `_config.yml` file.
For example, the following would show the vertical tools menu on every page that uses the `default` layout:

```yml
defaults:
  -
    scope:
      path: ""
    values:
      tools_menu: true
```
</details>


### Web Components
<details>

The Legumeinfo Jekyll theme uses the [Legumeinfo Web Components](https://www.npmjs.com/package/@legumeinfo/web-components) JavaScript library to support dynamic functionality, such as gene search.
Since not every page needs Web Components, you must "opt-in" to including the Legumeinfo Web Components JavaScript on pages you want to use components in.
This is done using the `web_components` [front matter variable](#configuration-via-front-matter).
For example:

```liquid
---
web_components: true
---

<lis-gene-search-element id="gene-search"></lis-gene-search-element>

<script type="module">
  import { getOrganismsFormDataFunction, geneSearchFunction } from "lis-graphql";
  const geneSearchElement = document.getElementById('gene-search');
  geneSearchElement.formDataFunction = getOrganismsFormDataFunction;
  geneSearchElement.searchFunction = geneSearchFunction;
</script>
```
The theme specifies which version of the Legumeinfo Web Components JavaScript library to use.
However, this can be overridden using the `web_components_version` variable in the [`_config.yml` file](#_configyml).
</details>


### GraphQL Support
<details>

Legumeinfo uses a [GraphQL Server](https://github.com/legumeinfo/graphql-server) to provide a consistent, interconnected API for accessing its data and services.
For convenience, the Legumeinfo Jekyll theme provides JavaScript for querying an instance of the Legumeinfo GraphQL Server, including functions that fetch and format data for specific Web Components.
These scripts are available via the `lis-graphql` JavaScript module.
This module can be loaded on any page by simply importing one or more features from the module, as demonstrated in the [Web Components](#web-components) section.
The theme loads data from the Legumeinfo GraphQL Server by default.
However, this can be overridden using the `graphql_uri` variable in the [`_config.yml` file](#_configyml).
</details>


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/legumeinfo/jekyll-theme-legumeinfo.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## Development

The Legumeinfo Jekyll theme is not configured to be run directly as a Jekyll site.
Instead, it should be installed as the theme for a Jekyll site (as described in the [Installation](#installation) section) and developed in the context of the site.
We recommend using the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) Jekyll site for development since it is an exhibit of the theme's features and includes the theme as a git submodule.
The starter site also includes Docker (Compose) files so you don't have to set up a local development environment.

When the theme is released, only the files in `_layouts/`, `_includes/`, `_sass/` and `assets/` that are tracked with Git will be bundled.
To add a custom directory to the theme's gem, edit the `spec.files` regular expression in the `jekyll-theme-legumeinfo.gemspec` file accordingly.


## License

The Legumeinfo Jekyll theme is available as open source software under the terms of the [Apache-2.0 License](https://opensource.org/licenses/Apache-2.0).
