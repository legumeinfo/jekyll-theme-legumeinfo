# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-legumeinfo"
  spec.version       = "1.2.0"
  spec.authors       = ["Legume Information System"]
  spec.email         = ["lis@ncgr.org"]

  spec.summary       = "A Jekyll theme for the Legume Information System and related biodata websites."
  spec.homepage      = "https://github.com/legumeinfo/jekyll-theme-legumeinfo"
  spec.license       = "Apache-2.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-datapage-generator", "~> 1.4.0"
end
