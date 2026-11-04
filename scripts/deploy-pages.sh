#!/bin/sh
# Build the site and publish it to the gh-pages branch, which GitHub Pages
# serves at https://kidadamstudios.github.io/portfolio/.
# Usage (from the portfolio folder): sh scripts/deploy-pages.sh
set -e

cd "$(dirname "$0")/.."
WORKTREE=".gh-pages-build"

rm -rf out
PAGES_BASE_PATH=/portfolio npm run build

git fetch origin
git worktree remove --force "$WORKTREE" 2>/dev/null || true
rm -rf "$WORKTREE"

if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
  git worktree add -B gh-pages "$WORKTREE" origin/gh-pages
else
  git worktree add --orphan -b gh-pages "$WORKTREE"
fi

# Replace the branch contents with the fresh build. .nojekyll stops GitHub
# Pages from hiding the _next/ folder (Jekyll skips underscore folders).
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R out/. "$WORKTREE"/
touch "$WORKTREE/.nojekyll"

cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
else
  git commit -m "Deploy site from $(git -C .. rev-parse --short HEAD)"
  git push origin gh-pages
fi
cd ..
git worktree remove "$WORKTREE"
echo "Deployed: https://kidadamstudios.github.io/portfolio/"
