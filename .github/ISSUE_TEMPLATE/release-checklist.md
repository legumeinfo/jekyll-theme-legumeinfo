---
name: Release Checklist
about: A checklist of tasks required to make a release
title: Release vMAJOR.MINOR.PATCH
labels: release
assignees: ''

---

- [ ] Create a branch for the release named "relase-vMAJOR.MINOR.PATCH".
- [ ] Update the dependencies in the `jekyll-theme-legumeinfo.gemspec` file.
- [ ] Update the UIkit submodule in `assets/uikit/`.
- [ ] Do a test build using Docker Compose on your local machine using [jekyll-starter-legumeinfo repo](https://github.com/legumeinfo/jekyll-starter-legumeinfo).
- [ ] Bump the `"version"` number in `jekyll-theme-legumeinfo.gemspec`.
- [ ] Open a PR that merges the release branch into main.
- [ ] Merge the release PR after it passes testing and review.
- [ ] Tag a corresponding release on GitHub.
