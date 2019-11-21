#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'depoly脚本更新'
git remote add origin https://github.com/wangtunan/vue-mooc.git
git config user.name 'wangtunan'
git config user.email 'why583440138@gmail.com'
git push -f origin master:gh-pages
