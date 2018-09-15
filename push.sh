#!/usr/bin/env sh
# 发布到github-shell

# 确保脚本抛出遇到的错误
set -e

time="📝"$(date "+%Y-%m-%d %H:%M:%S")

git add .
git commit -m 'push'
git push origin master