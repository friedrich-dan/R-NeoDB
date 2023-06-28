# NeoDB-chrome

NeoDB重度患者，豆瓣弃民，未解决手动将豆瓣影书资源导入NeoDB的麻烦，写了该扩展，欢迎修改和使用。



### 说明：

1. 扩展仅适配pc端，tamperMonkey脚本适配pc端和移动端。

2.油猴脚本GreasyFork发布地址https://greasyfork.org/zh-CN/scripts/469658-%E8%B1%86%E7%93%A3%E6%9D%A1%E7%9B%AE%E8%B7%B3%E8%BD%ACneodb%E6%9D%A1%E7%9B%AE 

3. 只加了自己手头用的资源网站，如果手上有其他资源网站的，可自行添加，具体添加方式见3，如果可以分享更谢谢啦。

4. 自行添加方式：写在newLink中，直接贴在如' <a href="https://zh.annas-archive.org/search?q=${bookText}" class="douban" style='background-color:#ef6a32'>AnnA</a> '后，格式也如前' <a href="https://1xxxxx.xxxx?q=${bookText}" class="douban" style='background-color:#ef6a32'>2xxxx</a> '，位置1:如anna站搜索书籍《金雀花王朝》的时候链接为' https://zh.annas-archive.org/search?q=金雀花王朝 '，通用链接' https://zh.annas-archive.org/search?q=**** '，位置2:填写网站名称。另background-color:后填十六进制格式的颜色代码，可随意更换
