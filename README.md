### iOS 发布描述文件编辑器

iOS 在通过网络安装 ipa 的时候，需要一个 plist 描述文件，格式为 XML。由于格式比较确定，每次发布只是以下参数不同：
- 应用标题
- ipa 的 URL
- 小图片 URL
- 大图片 URL

所以做了个编辑器，使用标准模板，填入参数，即可得到文档。

同时，也能根据 plist 存放的位置，生成 itms-services 的链接，便于编写安装页面。

详情参考 [以无线方式安装企业内部应用](http://help.apple.com/deployment/ios/#/apda0e3426d7)

#### 使用方法
下载工程后，执行以下代码：
```bash
$ npm install
$ npm run build
```
然后访问 dist/index.html
