## TypeScript 简单使用

> 在全局安装 typescript

npm install -g typescript

> 编译指定 ts 文件为 js 文件

tsc xx.ts

## TypeScript 的项目操作
> 将当前目录初始化为一个 TypeScript 项目目录（将生成 ./tsconfig.json）

tsc --init --module es2020 --target es2020 --lib es2020
> 编译（使用当前目录中的默认配置 ./tsconfig.json）

tsc
> 编译（使用指定配置编译，适用于多个配置文件的情况）

tsc -p ./tsconfig.json 

## 在 Node.js 中支持 TypeScript
> 将当前目录初始化为 Node.js 项目目录（生成 package.json，如有，则可略过）

npm init -y

> 安装 TypeScript 支持

npm install --save-dev @types/node

## TypeScript 的主要作用
- 在代码上显示标注类型，可以让代码更易读
- 在开发和编译时，通过类型推断和静态类型检查可以显著提高代码质量

## TypeScript 的两种主要用法
- 编译指定文件（例如 tsc xxx.ts）
- 创建和编译 TS 项目 （tsc --init xxx）
## 简单的开发环境及其他
- 基础环境：Node.js + VSCode
- 安装 TypeScript 
- 安装 VSCode 插件（chinese language、reload、etc ...）
- 简单命令行使用，和 VSCode 的简单配置
  - tsc、npm、npx、node
- 基本类型概念：类型安全、类型标注、类型推断、强类型、类型检查等

ps: npx 是 node.js 中提供的一个工具，用于执行 node.js 包中的可执行文件