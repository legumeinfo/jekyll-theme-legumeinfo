# jekyll-theme-legumeinfo

Welcome to the Legumeinfo Jekyll theme!
The theme contains the styles and templates for the [Legume Information System (LIS)](https://legumeinfo.org/) -- an online data portal that houses various omics data of legume species relevant to industrial agriculture.
The theme is hosted separately from the Legumeinfo Jekyll site so that it may used by other biological data portals.

To clone this repo:

    git clone --recurse-submodules https://github.com/legumeinfo/jekyll-theme-legumeinfo.git

The standard place to place this repo is under `_themes` in your Jekyll site.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-legumeinfo", path: "./_themes/jekyll-theme-legumeinfo"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-legumeinfo
# add if you going to use the theme's events features
future: true
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-legumeinfo

## Usage

See the [Jekyll website](https://jekyllrb.com/) for an introduction to Jekyll.
A Jekyll site that uses the Legumeinfo theme should have the following directory structure:

```
root/
├── assets/
│   ├── css/
│   ├── icons/
│   │   └── favicon.ico
│   ├── img/
│   └── js/
├── _data/
│   ├── taxa_main.yml
│   ├── taxa_special.yml
│   └── tools.yml
├── _includes
│   ├── alerts.html
│   ├── global-scripts.html
│   ├── global-stylesheets.html
│   ├── navbar-menu.html
│   ├── navbar-lower-menu.html
│   └── off-screen-menu.html
├── news/
│   └── _posts/
│       └── 14-09-2021-very-important-news.md
├── events/
│   └── _posts/
│       └── 14-09-2021-big-event.md
├── index.html
├── Gemfile
└── _config.yml
```

### `assets/`

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

### `_data/`

The `_data/` directory is used by Jekyll to load static data that is not accommodated by its blog model.
The Legumeinfo Jekyll theme expects two files to be in this directory: `species.yml` and `tools.yml`.

**`taxa_main.yml` and `taxa_special.yml`** These files contains a list of taxa (genera) that the data portal provides 
omics data for. The taxa_main file contains major crop and models; taxa_special contains everything else.
The list should adhere to the following schema pattern:

```
---
- genus: Arachis
  description: "(peanut: domesticated and wild)"
- genus: Cajanus
  description: "(pigeonpea)"
- genus: Cicer
  description: "(chickpea)"
- genus: Glycine
  description: "(soybean)"
```

Note that the species aren't automatically listed anywhere in the theme.
We recommend overriding the navbar files (`_includes/navbar-menu.html`, `_includes/navbar-lower-menu.html`, and/or `_includes/off-screen-menu.html`) to add a link to a species template that lists the species.
See the [Legumeinfo Jekyll site code](https://github.com/legumeinfo/jekyll-example) for examples of [overriding these files](https://github.com/legumeinfo/jekyll-example/blob/main/_includes/) and [iterating the species in a template](https://github.com/legumeinfo/jekyll-example/blob/main/species/index.html).

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

By default these tools will be listed in a vertical menu on the left side of every page in the site.
The tools within the list will be grouped by category.

### `_include/`

The `_include/` directory is used by Jekyll to place globally-included content onto the site. These files will replace the files of the same name in the theme.

**`alerts.html`** contains alerts that will be displayed in the navbar at the very top of the page. This file may be empty. If the file is not empty, a bell icon will be added to the far right side of the navbar which can be used to toggle the element containing the alerts.

**`navbar-menu.html`** contains the navigation bar menu seen on every page. It is recommended that this menu is given a [responsive width](https://getuikit.com/docs/width#responsive-width) so it can be replaced with a more compact menu on smaller screens. If using an off-screen menu (described below), it is recommend that the toggle component is placed here (see the [`_includes/navbar-menu.html`](https://github.com/legumeinfo/jekyll-theme-legumeinfo/blob/main/_includes/navbar-menu.html) for an example).

**`navbar-lower-menu.html`** contains the navigation bar menu that appears below the main navigation bar seen on every page. It is recommended that this menu is given a [responsive width](https://getuikit.com/docs/width#responsive-width) so it can be replaced with a more compact menu on smaller screens.

**`off-screen-menu.html`** contains a vertical menu that appears in an off-screen side-bar that's including on every page. The off-screen side-bar has unique div ID `#off-screen-menu` and can be toggled using UIkit's [Toggle component](https://getuikit.com/docs/toggle), e.g. `<button uk-toggle="target: #off-screen-menu" type="button"></button>`

**`global-scripts.html`** and **`global-stylesheets.html`** contain scripts and styles to be included on every page.

### `news/` and `events/`

Jekyll is "blog aware," meaning it has built in support for blog-esque content.
The Legumeinfo Jekyll theme uses this support for news and events.
To create a news item or an event, add an HTML file to the `news/_posts/` or `events/_posts/` directory, respectively.
The filename should contain an [ISO formatted date](https://en.wikipedia.org/wiki/ISO_8601#Dates) and a title, such as `news/_posts/2021-02-24-sensational-news.html`.
The files must contain a YML preamble with `layout`, `title`, `author`, and `summary` entries.
Additionally, a news preamble should contain an `author` entry, and can contain an `end_date` entry if it's a multi-day event.
For example, `news/_posts/2021-2-24-sensational-news.html` may have the preamble:

```yaml
---
layout:     news-item
title:      Sensational News!
author:     Alan Cleary
summary:    This news is sensational! Everyone will talk about it... but it changes nothing.
---
```
And `events/_posts/2021-2-24-sensational-event.html` may have the preamble:

```yaml
---
layout:     event
title:      Sensational Event!
end_date:   2022-2-24
summary:    This event is sensational! Probably because it's so long...
---
```

Note that the news post's `layout` entry has the value `news-item`.
This defines a layout provided by the Legumeinfo Jekyll theme for news items, thus all news items should specify the `news-item` layout.
Similarly, the event post's `layout` entry has the value `event`..
All events should specify the `event` layout.

Note, the most recent news items and events will be listed in cards on the right side of the homepage.
These cards contain links to `news/index.html` and `events/index.html`, respectively.
It is left to users of the theme to implement these templates.
See the [Legumeinfo Jekyll site code](https://github.com/legumeinfo/jekyll-example) for example implementations of [`news/index.html`](https://github.com/legumeinfo/jekyll-example/blob/main/news/index.html) and [`events/index.html`](https://github.com/legumeinfo/jekyll-example/blob/main/events/index.html) pages.

**Also, note that [by default](https://jekyllrb.com/docs/upgrading/2-to-3/#future-posts) Jekyll doesn't generate static pages for posts whose date is after the date the site was built.
The theme requires this functionality because events (i.e. posts) of interest are those that haven't happened yet, i.e. future events.
The theme cannot enable this for a site so the site must enable it by adding the following to its** `_config.yml` **file:**
```yaml
# _config.yml
future: true
```

### `index.html`

`index.html` is the homepage for the site.
It should contain a YML preamble with `title` and `layout` entries.
For example:

```yaml
---
title: Home
layout: home
---
```

The `layout` entry should always specify the `home` layout for the homepage, though you can specify the `default` layout if you want the same layout but without the news and events cards on the right side of the page.

### `Gemfile`

The `Gemfile` should be auto-generated when you create your Jekyll site.
As described above, you'll need to add the Legumeinfo Jekyll theme GEM as a dependency in your `Gemfile`.

### `_config.yml`

The `_config.yml` should be auto-generated when you create your Jekyll site.
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
    * `font_family` (default: depends on available fonts): String|Array (the default font family for the entire site)
    * `font_size` (default=`15px`): String (the default font size for the entire site)
    * `xxlarge_font_size` (default=`38px`): String (the default &lsquo;XX-large&rsquo; font size for the entire site, normally 2.625 &times; `font_size`)
    * `xlarge_font_size` (default=`30px`): String (the default &lsquo;X-large&rsquo; font size for the entire site, normally 2.0 &times; `font_size`)
    * `large_font_size` (default=`24px`): String (the default &lsquo;large&rsquo; font size for the entire site, normally 1.5 &times; `font_size`)
    * `medium_font_size` (default=`20px`): String (the default &lsquo;medium&rsquo; font size for the entire site, normally 1.25 &times; `font_size`)
    * `small_font_size` (default=`14px`): String (the default &lsquo;small&rsquo; font size for the entire site, normally 0.875 &times; `font_size`)
* `web_components_version` (default=`1.0.0`): String (the version of the LIS Web Components JavaScript library to use; see the [LIS Web Components](#lis-web-components) section for details)

As described above, you'll need to add the Legumeinfo Jekyll theme in your `_config.yml`.
And you'll need to add `future: true` if you want to use the themes events features.

### Layouts

In general, a page can be added to a Jekyll site simply creating a new HTML file.
The URL of the page will correspond to its directory structure and the name of the HTML file.
However, every page must contain a YML preamble that, at a minimum, defines the layout that should be used via the `layout` entry.
The Legumeinfo Jekyll theme provides the following layouts:

* `default`
* `events`
* `home`
* `news-item`
* `news`
* `blog-item`
* `blog`
* `page`
* `post`
* `reading-width`
* `full-width`

It is recommend that each page uses the `default` layout unless the page corresponds to a previously described page that has a specific layout.

### Configuration via Front Matter

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

### LIS Web Components

The theme uses the [LIS Web Components](https://www.npmjs.com/package/@legumeinfo/web-components) JavaScript library to support dynamic functionality, such as gene search.
Since not every page needs Web Components, you must "opt-in" to including the LIS Web Components JavaScript on pages you want to use components in.
This is done using the `web_components` [front matter variable](#configuration-via-front-matter).
For example:
```liquid
---
web_components: true
---

<lis-gene-search-element></lis-gene-search-element>
```
The theme specifies which version of the LIS Web Components JavaScript library to use.
However, this can be overridden using the `web_components_version` variable in the [`_config.yml` file](#_configyml).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/legumeinfo/jekyll-theme-legumeinfo. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop the Legumeinfo Jekyll  theme, run `bundle install`.

The theme is setup just like a normal Jekyll site!
To test the theme, run `bundle exec jekyll serve` and open your browser at [`http://localhost:4000`](http://localhost:4000).
This starts a Jekyll server using the Legumeinfo Jekyll theme.
Add pages, documents, data, etc. like normal to test the theme's contents.
As you make modifications to the theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When the theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to the theme-gem, please edit the regexp in `jekyll-theme-legumeinfo.gemspec` accordingly.

## License

The Legumeinfo Jekyll theme is available as open source under the terms of the [Apache-2.0 License](https://opensource.org/licenses/Apache-2.0).

