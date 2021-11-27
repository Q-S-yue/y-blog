module.exports = {
  base: '/y-blog',
  title: 'y-blog',
  description: '',
  themeConfig: {
    repo: 'https://github.com/Q-S-yue/y-blog',
    repoLabel: 'My Github',
    nav: [
      { text: 'Home', link: '/'},
      { text: 'FirstBlog', link: '/blog/FirstBlog.md'},
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '第一篇博客']
    ]
  }
}