# Source code for my professional/personal website

[![Build & Deploy Jekyll with GitHub Pages](https://github.com/bluntspoon/bluntspoon.github.io/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/bluntspoon/bluntspoon.github.io/actions/workflows/jekyll-gh-pages.yml)

## Technology Stack

- **Static Site Generator**: [Jekyll](https://jekyllrb.com/) (v4.x)
- **Theme**: [Minima](https://github.com/jekyll/minima) (remote theme)
- **Plugins**: 
  - jekyll-feed (RSS feed generation)
  - jekyll-seo-tag (SEO meta tags)
  - jekyll-sitemap (XML sitemap generation)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Hosting**: [GitHub Pages](https://pages.github.com/)
- **Domain**: <https://andrewbevan.me> (managed via Cloudflare)

## Local Development Setup

### Prerequisites

- Ruby 3.x or higher
- Bundler gem manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bluntspoon/bluntspoon.github.io.git
   cd bluntspoon.github.io
   ```

2. **Install dependencies**
   ```bash
   ./script/bootstrap
   # or manually:
   gem install bundler
   bundle install
   ```

3. **Start the local development server**
   ```bash
   ./script/server
   # or manually:
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser to `http://localhost:4000`

### Build Commands

- **Development server**: `./script/server` or `bundle exec jekyll serve`
  - Builds the site and starts a local server with live reload
  - Access at `http://localhost:4000`

- **Production build**: `./script/build` or `bundle exec jekyll build`
  - Generates static files in `_site/` directory
  - Does not start a server

- **CI build**: `./script/cibuild`
  - Used by GitHub Actions for automated builds

## Site Structure

```
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts (YYYY-MM-DD-title.md)
├── _layouts/            # HTML layout templates
├── _includes/           # Reusable HTML components
├── _sass/               # Sass stylesheets
├── assets/              # Static assets (images, CSS, JS)
├── script/              # Build and development scripts
├── about.md             # About page
├── blog.md              # Blog listing page
├── lists.md             # Lists landing page
├── list-*.md            # Individual list pages
└── index.md             # Home page
```

## Adding Content

### Creating a New Blog Post

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   categories: [dev|personal|career]
   tags: [tag1, tag2, tag3]
   description: "Brief description for SEO"
   image: /assets/images/featured/your-image.jpg
   ---
   ```
3. Write your content in Markdown below the front matter
4. Test locally with `./script/server`
5. Commit and push to deploy

### Creating a New Page

1. Create a new `.md` file in the root directory
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: "Page Title"
   permalink: /your-page/
   description: "Brief description for SEO"
   ---
   ```
3. Add the page to `header_pages` in `_config.yml` if it should appear in navigation
4. Write content in Markdown
5. Test locally and commit

## Deployment

The site automatically deploys via GitHub Actions when changes are pushed to the `main` branch:

1. Push commits to `main` branch
2. GitHub Actions workflow triggers (`jekyll-gh-pages.yml`)
3. Site is built and deployed to GitHub Pages
4. Changes are live at <https://andrewbevan.me>

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Ensure Ruby and Bundler are properly installed
2. Run `bundle install` to update dependencies
3. Check `_config.yml` for syntax errors
4. Verify front matter in posts/pages is valid YAML

### Local Server Issues

If the local server won't start:
1. Check if port 4000 is already in use
2. Try running with a different port: `bundle exec jekyll serve --port 4001`
3. Clear Jekyll cache: `rm -rf _site .jekyll-cache`

## Contributing

This is a personal website, but suggestions and bug reports are welcome via GitHub Issues.

## License

Content is © Andrew Bevan. Code is available under the MIT License.
