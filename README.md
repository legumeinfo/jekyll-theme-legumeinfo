# jekyll-theme-legumeinfo

Welcome to the Legumeinfo Jekyll theme!
This theme contains the styles and templates for the [Legume Information System (LIS)](https://legumeinfo.org/) - an online data portal that houses various omics data of legumes and related species.
The theme is hosted separately from the Legumeinfo Jekyll site so that it may be used by other biological data portals, including portals for specific genera and species.

See the the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository to get started with a Jekyll site already setup to use the theme.

## Installation

Clone this repository as follows:

    git clone --recurse-submodules https://github.com/legumeinfo/jekyll-theme-legumeinfo.git

The standard place to install this repository as a theme is in the `_themes/` directory of your Jekyll site.

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-legumeinfo", path: "./_themes/jekyll-theme-legumeinfo"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-legumeinfo
# add if you're going to use the theme's events features
future: true
```

Now the theme can be installled via Bundler:

    $ bundle

Or directly as a gem:

    $ gem install jekyll-theme-legumeinfo

## Creating a Site

See the [Jekyll website](https://jekyllrb.com/) for an introduction to Jekyll.
A Jekyll site that uses the Legumeinfo theme should have the following directory structure:

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
This file contains configuration information used by both Jekyll and the Legumeinfo Jekyll theme.
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
* `newsletter` (optional): String (the URL to where users can sign up for your site's newsletter)
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
* `web_components_version` (default=`1.0.0`): String (the version of the LIS Web Components JavaScript library to use; see the [Web Components](#web-components) section for details)
* `graphql_uri` (default=`https://graphql.lis.ncgr.org/`): String (the URI of the GraphQL Server the theme should load data from; see the [GraphQL Support](#graphql-support) section for details)

As described in [Installation](#installation), you'll need to add the Legumeinfo Jekyll theme in your `_config.yml` file.
And you'll need to add `future: true` if you want to use the theme's events features.
</details>

### `index.html`
<details>

`index.html` is the homepage for the site.
It should contain a YML preamble with `title` and `layout` entries.
For example:

```yaml
---
title: Home
layout: home
---
```

The `layout` entry should always specify the `home` layout for the homepage.
See the [Configuration via Front Matter](#configuration-via-front-matter) section for details on how to enable the tools menu and the blog, news, events, and Twitter widgets.
</details>

### `Gemfile`
<details>

The `Gemfile` should be auto-generated when you create your Jekyll site.
As described in [Installation](#installation), you'll need to add the Legumeinfo Jekyll theme GEM as a dependency in your `Gemfile`.
</details>

### `_data/`
<details>

The `_data/` directory is used by Jekyll to load static data that is not accommodated by its blog model.
The Legumeinfo Jekyll theme expects two files to be in this directory: `species.yml` and `tools.yml`.

**`alerts.yml`** This file contains a list of alerts to be shown on top of the navbar in every page on the site. If the list is not empty, a bell icon will be added to the far right side of the navbar which can be used to toggle the element containing the alerts. Each alert in the list should adhere to the following schema pattern:

```yml
---
-
  type: "primary"|"success"|"warning"|"danger"
  message: "<b>Welcome to the legumeinfo Jekyll starter site!</b> The site's code can be found on <a href='https://github.com/legumeinfo/jekyll-starter-legumeinfo' target='_blank'>GitHub</a>. Click the bell (<span uk-icon='bell'></span>) in the navigation bar to toggle this alert."
```

**`taxon_list.yml` and `taxa/`** The `taxon_list.yml` file contains a list of taxa (genera) that the data portal provides omics data for.
When the Jekyll site is built, the theme geneartes a page in the `_site/taxa/` directory for each genus in the list using the [jekyll-datapage-generator plugin](https://github.com/avillafiorita/jekyll-datapage_gen) and the [`taxon` layout](#layouts).
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
`category` should be one of `main` or `special` and will be used to determine what groupings the genera will be placed in in the taxa menu.

The `taxa/` directory should contain a subdirectory for each genus in the `taxon_list.yml` file.
Each subidrectory should contain three files: `genus_resources.yml`, `species_collections.yml`, and `species_resources.yml`.
`genus_resources.yml` should adhere to the following schema pattern:
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
`species_collections.yml` should adhere to the following schema pattern:
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
And `species_resources.yml` should adhere to the following schema pattern:
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

Note that the species aren't automatically listed anywhere in the theme.
We recommend overriding the navbar files (`_includes/navbar-menu.html`, `_includes/navbar-lower-menu.html`, and/or `_includes/off-screen-menu.html`) to add a link to a species template that lists the species.
See the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for examples of overriding these files and iterating the species in a template.

**`tools.yml`** This file contains a list of tools that are provided by the data portal and links to them.
The list should adhere to the following schema:

```
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

These tools can optionally be listed in a vertical menu on the left side of every page in the site; see the [Configuration via Front Matter](#configuration-via-front-matter) section for details.
The tools within the list will be grouped by category.
</details>

### `_include/`
<details>

The `_include/` directory is used by Jekyll to place globally-included content onto the site. These files will replace the files of the same name in the theme.

**`navbar-menu.html`** contains the navigation bar menu seen on every page. It is recommended that this menu is given a [responsive width](https://getuikit.com/docs/width#responsive-width) so it can be replaced with a more compact menu on smaller screens. If using an off-screen menu (described below), it is recommend that the toggle component is placed here (see the [`_includes/navbar-menu.html`](https://github.com/legumeinfo/jekyll-theme-legumeinfo/blob/main/_includes/navbar-menu.html) for an example).

**`navbar-lower-menu.html`** contains the navigation bar menu that appears below the main navigation bar seen on every page. It is recommended that this menu is given a [responsive width](https://getuikit.com/docs/width#responsive-width) so it can be replaced with a more compact menu on smaller screens.

**`off-screen-menu.html`** contains a vertical menu that appears in an off-screen side-bar that's including on every page. The off-screen side-bar has unique div ID `#off-screen-menu` and can be toggled using UIkit's [Toggle component](https://getuikit.com/docs/toggle), e.g. `<button uk-toggle="target: #off-screen-menu" type="button"></button>`

**`global-scripts.html`** and **`global-stylesheets.html`** contain scripts and styles to be included on every page.
</details>

### `assets/`
<details>

The assets directory holds static assets that may be used in templates.

**`css/`** The Legumeinfo Jekyll theme uses the [UIkit css framework](https://getuikit.com/).
As such, all contents of the framework are available in the templates you define in your site.
You may add additional styling by saving custom styles in Cascading Style Sheet (`.css`) files in the `assets/css/` directory and importing the files in the templates you want to use them in:

```liquid
<link rel="stylesheet" href="{{ "assets/css/custom.css" | relative_url }}" type="text/css" />
```

**`icons/`** The `icons/` directory is intended to hold any icons you may want to use in your site.
However, there are certain icons the Legumeinfo Jekyll theme will specifically look for in this directory.
Specifically, in addition to the `favicon.ico`, the Legumeinfo Jekyll theme will attempt to load the following icons from the `assets/icons/` directory:

  * `apple-touch-icon-57x57.png`
  * `apple-touch-icon-114x114.png`
  * `apple-touch-icon-72x72.png`
  * `apple-touch-icon-144x144.png`
  * `apple-touch-icon-60x60.png`
  * `apple-touch-icon-120x120.png`
  * `apple-touch-icon-76x76.png`
  * `apple-touch-icon-152x152.png`
  * `apple-touch-icon-180x180.png`
  * `favicon-192x192.png`
  * `favicon-160x160.png`
  * `favicon-96x96.png`
  * `favicon-16x16.png`
  * `favicon-32x32.png`

**`img/`** The `img/` directory is intended to hold images that you want to use in your templates.
To do so, simply copy the image files in the `assets/img/` directory (or a subdirectory) and include them in the template where you want to use them:

```liquid
<img src="{{ "assets/img/lupine.jpg" | relative_url }}" />
```

**`js/`** Though Jekyll is a static site generator, dynamic behavior can be added via JavaScript.
The `js/` directory is intended to hold JavaScript (`.js`) files that you may want to include in you templates.
To include custom JavaScript in your site, put your scripts in the `assets/js/` directory and include them in the templates you want to use them in:

```liquid
<script src="{{ "assets/js/my-webcomponent.js" | relative_url }}"></script>
```
</details>

### `blog/`, `events/`, and `news/`
<details>

Jekyll is "blog aware," meaning it has built in support for blog-esque content.
The Legumeinfo Jekyll theme uses this support for a blog, events, and news.
To create a blog post, an event, or a news item, add an HTML file to the `blog/_posts/`, `events/_posts/`, or `news/_posts/` directory, respectively.
The filename should contain an [ISO formatted date](https://en.wikipedia.org/wiki/ISO_8601#Dates) and a title, such as `news/_posts/2021-02-24-sensational-news.html`.
The files must contain a YML preamble with `layout`, `title`, `author`, and `summary` entries.
Additionally, a blog and news preamble should contain an `author` entry, and an event preamble can contain an `end_date` entry if it's a multi-day event.
For example, `blog/_posts/2021-09-14-profound-blog-post.html` may have the preamble:
```yaml
---
layout:     blog-item
title:      Sensational Event!
end_date:   2022-02-25
summary:    This event is sensational! Probably because it's so long...
---
```
`events/_posts/2021-09-14-big-event.html` may have the preamble:
```yaml
---
layout:     event
title:      Sensational Event!
end_date:   2022-02-25
summary:    This event is sensational! Probably because it's so long...
---
```
And `news/_posts/2021-09-14-very-important-news.html` may have the preamble:
```yaml
---
layout:     news-item
title:      Sensational News!
author:     Alan Cleary
summary:    This news is sensational! Everyone will talk about it... but it changes nothing.
---
```

Note that the blog post's `layout` entry has the value `blog-item`.
This defines a layout provided by the Legumeinfo Jekyll theme for blog posts, thus all blog posts should specify the `blog-item` layout.
Similarly, the event's `layout` entry has the value `event` and the news item's `layout` entry has the value `news-item`.
All events and news items should specify these layouts as well.

The most recent blog posts, events, and news items will be listed in cards on the right side of the homepage.
These cards contain links to `blog/index.html`, `events/index.html`, and `news/index.html`, respectively.
It is left to users of the theme to implement these pages.
See the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for example implementations of these pages.

**[By default](https://jekyllrb.com/docs/upgrading/2-to-3/#future-posts) Jekyll doesn't generate static pages for posts whose date is after the date the site was built.
The theme requires this functionality because events (i.e. posts) of interest are those that haven't happened yet, i.e. future events.
The theme cannot enable this for a site so the site must enable it by adding the following to its** `_config.yml` **file:**
```yaml
# _config.yml
future: true
```
</details>

### `taxa/`
<details>

The theme generates a page for each taxon (genus) when the Jekyll site is built; see **`taxon_list.yml` and `taxa/`** in the [`_data/`](#_data) section for details.
These pages are placed in the `_site/taxa/` directory, which corresponds to the `taxa/` directory in the site's source code.
It is left to users of the theme to implement the `taxa/index.html` page.
See the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) repository for an example implementations of this page.
</details>


## Features and Configuration

In addition to the file-specific features and configurations listed above, the following features and configurations are available throughout a Jekyll site using this theme.


### Layouts
<details>

In general, a page can be added to a Jekyll site by simply creating a new HTML file.
The URL of the page will correspond to its directory structure and the name of the HTML file.
However, every page must contain a YML preamble that, at a minimum, defines the layout that should be used via the `layout` entry.
The Legumeinfo Jekyll theme provides the following layouts:

* `base`: The base layout for all pages.
* `default`: The default layout used if a page does not specify a layout.
* `404`: The layout used when a page is not found.
* `blog-item`: The layout used when viewing a specific blog post. Uses `reading-width` layout.
* `blog`: The layout used when viewing all blog posts.
* `event`: The layout used when viewing a specific event.
* `events`: The layout used when viewing all events (automatically updates without rebuilding site).
* `full-width`: A layout uses the full width of the page for content.
* `home`: The layout used when viewing the home page.
* `news-item`: The layout used when viewing a specific news item.
* `news`: The layout used when viewing all news items.
* `page`: Alias for `default`.
* `post`: Alias for `default`.
* `reading-width`: A layout that puts content in a container with an ideal width for reading.
* `taxon`: The template used when generating pages for the taxa (genera) in the `_data/taxon_list.yml` file.

It is recommend that each page uses the `default` layout unless the page corresponds to a previously described page that has a specific layout.
</details>

### Configuration via Front Matter
<details>

The theme allows configuration of specific pages via [front matter variables](https://jekyllrb.com/docs/front-matter/).
The following variables are currently supported:

* `tools_menu` (optional): Boolean (shows the vertical tools menu on any page using the default template)
* `blog_card` (optional): Boolean (shows the blog card on the home page)
* `news_card` (optional): Boolean (shows the news card on the home page)
* `events_card` (optional): Boolean (shows the events card on the home page)
* `twitter_card` (optional): Boolean (shows the Twitter feed card on the home page)
* `web_components` (optional): Boolean (includes the LIS Web Components JavaScript in the page)

Note, [front matter default values](https://jekyllrb.com/docs/configuration/front-matter-defaults/) can be set in the `_config.yml` file.
For example, the following would show the vertical tools menu every page that uses the default template:

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

The theme uses the [LIS Web Components](https://www.npmjs.com/package/@legumeinfo/web-components) JavaScript library to support dynamic functionality, such as gene search.
Since not every page needs Web Components, you must "opt-in" to including the LIS Web Components JavaScript on pages you want to use components in.
This is done using the `web_components` [front matter variable](#configuration-via-front-matter).
For example:
```liquid
---
web_components: true
---

<lis-gene-search-element id="gene-search"></lis-gene-search-element>

<script type="module">
  import {getOrganismsFormDataFunction, geneSearchFunction} from "lis-graphql";
  const geneSearchElement = document.getElementById('gene-search');
  geneSearchElement.formDataFunction = getOrganismsFormDataFunction;
  geneSearchElement.searchFunction = geneSearchFunction;
</script>
```
The theme specifies which version of the LIS Web Components JavaScript library to use.
However, this can be overridden using the `web_components_version` variable in the [`_config.yml` file](#_configyml).
</details>

### GraphQL Support
<details>

LIS uses a [GraphQL Server](https://github.com/legumeinfo/graphql-server) to provide a consistent, interconnected API for accessing its data and services.
For convenience, the theme provides JavaScript for querying a GraphQL Server, including functions that fetch and format data for specific Web Components.
These scripts are available via the `lis-graphql` JavaScript module.
This module can be loaded on any page by simply importing one or more features from the module, as demonstrated in [Web Components](#web-components).
The theme loads data from the LIS GraphQL Server by default.
However, this can be overridden using the `graphql_uri` variable in the [`_config.yml` file](#_configyml).
</details>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/legumeinfo/jekyll-theme-legumeinfo. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

The theme is not configured to be run directly as a Jekyll site.
Instead, it should be installed as the theme for a Jekyll site (as described in the [installation instructions](#installation)) and developed in the context of the site.
We recommend using the [jekyll-starter-legumeinfo](https://github.com/legumeinfo/jekyll-starter-legumeinfo) Jekyll site for development since it is an exhibit of the theme's features and includes the theme as a git submodule.
The starter site also includes Docker (Compose) files so you don't have to set up a local development environment.

When the theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` that are tracked with Git will be bundled.
To add a custom directory to the theme-gem, edit the `spec.files` regexp in the `jekyll-theme-legumeinfo.gemspec` file accordingly.

## License

The Legumeinfo Jekyll theme is available as open source under the terms of the [Apache-2.0 License](https://opensource.org/licenses/Apache-2.0).

