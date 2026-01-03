# GitHub Copilot Instructions

## Project Overview

This is a personal/professional website built with Jekyll and hosted on GitHub Pages. The site uses the Minima theme and includes blog posts, lists, and an about page. The domain is [https://andrewbevan.me](https://andrewbevan.me), managed through Cloudflare.

## Technology Stack

- **Static Site Generator**: Jekyll (v3.5+)
- **Theme**: Minima (remote theme from jekyll/minima)
- **Plugins**: 
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-gist
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions (see `.github/workflows/jekyll-gh-pages.yml`)

## Build and Development Commands

### Setup
```bash
# Install dependencies
./script/bootstrap
# or
gem install bundler
bundle install
```

### Local Development
```bash
# Start local development server
./script/server
# or
bundle exec jekyll serve
```

### Build
```bash
# Build the site
./script/build
# or
bundle exec jekyll build
```

### CI Build
```bash
# Run the CI build script
./script/cibuild
```

## Directory Structure

- `_config.yml` - Main Jekyll configuration
- `_posts/` - Blog posts in Markdown format
- `_layouts/` - HTML layout templates
- `_includes/` - Reusable HTML components
- `_sass/` - Sass stylesheets
- `assets/` - Static assets (images, CSS, JS)
- `script/` - Build and development scripts
- `.github/` - GitHub configuration (workflows, this instructions file)
- `.vscode/` - VS Code editor settings
- `.frontmatter/` - Frontmatter CMS configuration
- `*.md` - Top-level pages (about, blog, lists, etc.)

## Coding Guidelines

### Content and Markdown
- Blog posts should be placed in `_posts/` directory
- Follow the naming convention: `YYYY-MM-DD-title.md`
- Use YAML front matter for metadata (title, date, categories, tags)
- Write clear, well-structured content with proper headings
- Use relative links for internal navigation

### Jekyll/Liquid Templates
- Follow Jekyll's Liquid templating conventions
- Keep layouts simple and maintainable
- Use includes for reusable components
- Respect the existing theme structure

### Ruby and Gemfile
- Specify gem versions when adding dependencies
- Keep dependencies up to date but test thoroughly
- Follow Ruby community conventions
- Use `frozen_string_literal: true` pragma in Ruby files

### Configuration
- Make configuration changes in `_config.yml`
- Test configuration changes locally before committing
- Document any new configuration options

## Testing and Validation

- Always test changes locally using `./script/server` before committing
- Verify that the site builds successfully with `./script/build`
- Check that new content renders correctly in a browser
- Ensure internal links work properly
- Validate that changes don't break existing functionality

## Security Guidelines

- Never commit sensitive information (API keys, passwords, tokens)
- Use environment variables for sensitive configuration
- Validate external content and links
- Keep dependencies up to date to avoid security vulnerabilities
- Review plugin security before adding new Jekyll plugins

## Documentation Standards

- Update README.md if making significant changes to build process
- Document new features or configuration options
- Keep comments clear and concise
- Use descriptive commit messages

## GitHub Actions Workflow

The site automatically builds and deploys via GitHub Actions on push to `main` branch:
- Checkout code
- Setup GitHub Pages
- Build with Jekyll
- Upload and deploy to GitHub Pages

Do not modify the workflow unless necessary, and test changes in a branch first.

## Style and Content Guidelines

- Maintain a professional yet personal tone
- Keep the site clean and minimal (aligned with Minima theme)
- Ensure mobile responsiveness
- Optimize images for web delivery
- Use proper semantic HTML

## Common Tasks

### Adding a New Blog Post
1. Create a new file in `_posts/` with format `YYYY-MM-DD-title.md`
2. Add YAML front matter with title, date, and optional categories/tags
3. Write content in Markdown
4. Test locally with `./script/server`
5. Commit and push

### Adding a New Page
1. Create a new `.md` file in the root directory
2. Add YAML front matter with title and layout
3. Add the page to `header_pages` in `_config.yml` if it should appear in navigation
4. Write content in Markdown
5. Test locally and commit

### Modifying Theme
- Make minimal changes to maintain theme compatibility
- Override theme files by creating corresponding files in the repository
- Test theme changes thoroughly across different pages

## Important Notes

- The site uses a remote theme, so theme files are not directly editable
- Google Analytics is configured with ID: G-VTF49EX4MD
- Social links are configured in `_config.yml` under `minima.social_links`
- The site uses auto skin mode for Minima theme
