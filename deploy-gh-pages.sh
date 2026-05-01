#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WORK_DIR=$(mktemp -d)

cleanup() {
  git -C "$SCRIPT_DIR" worktree remove --force "$WORK_DIR" 2>/dev/null || true
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

git -C "$SCRIPT_DIR" worktree add "$WORK_DIR" gh-pages

rm -f "$WORK_DIR"/*.html
cp "$SCRIPT_DIR"/gh-pages/*.html "$WORK_DIR/"

git -C "$WORK_DIR" add -A

if git -C "$WORK_DIR" diff --staged --quiet; then
  echo "No changes to deploy."
else
  git -C "$WORK_DIR" commit -m "deploy $(date -u '+%Y-%m-%d %H:%M UTC')"
  git -C "$WORK_DIR" push origin gh-pages
  echo "Deployed."
fi
