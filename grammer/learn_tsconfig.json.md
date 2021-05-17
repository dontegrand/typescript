### ts配置项
{
  "include": [], // 包含项
  "exclude": [], // 排除项
  "files": [], // 编译项

  "compilerOptions": {
    "rootDir": './src', // 设置根目录
    "outDir": './build' // 设置编译输出的目录

    "sourceMap": true, // 原ts文件生成的js文件的对应管理
    "noUnusedLocals": true, // 没使用的变量是否编译
    "noUnusedParameters": true, // 没使用的方法是否编译

    "removeComments": true // 是否去掉注释
    "strict": true,  // 是否严格遵守规范
    // strict配置为false时，以下项才可以配置生效

    "noImplicitAny": true // any类型 是否声明注解
    "strictNullChecks": true // 允不允许null出现
  }
}
