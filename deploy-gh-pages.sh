#!/bin/bash
git subtree split --prefix gh-pages -b gh-pages
git push -f origin gh-pages
