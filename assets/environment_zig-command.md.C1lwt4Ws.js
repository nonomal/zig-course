import{_ as i,c as a,o as e,a6 as s}from"./chunks/framework.C3vgFeqS.js";const z=JSON.parse('{"title":"zig 命令","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"environment/zig-command.md","filePath":"environment/zig-command.md","lastUpdated":1705578152000}'),t={name:"environment/zig-command.md"},n=s('<h1 id="zig-命令" tabindex="-1"><code>zig</code> 命令 <a class="header-anchor" href="#zig-命令" aria-label="Permalink to &quot;`zig` 命令&quot;">​</a></h1><p>现在，我们已经安装了 zig ，也安装了对应的编辑器，接下来就了解一下基本的 <code>zig</code> 命令。</p><p>这单单一个命令可神了，它囊括了项目建立、构建、测试、运行，甚至你可以用它来部署你的项目，也可以用来给 C/C++ 作为编译或者依赖管理工具，非常的全面，这一切都是得益于 zig 本身的编译期。</p><p>以下仅列出常用的命令！</p><h2 id="zig-build" tabindex="-1"><code>zig build</code> <a class="header-anchor" href="#zig-build" aria-label="Permalink to &quot;`zig build`&quot;">​</a></h2><p>构建项目，会自动搜索当前目录及父目录的 <code>build.zig</code> 进行构建。</p><h2 id="zig-build-obj" tabindex="-1"><code>zig build-obj</code> <a class="header-anchor" href="#zig-build-obj" aria-label="Permalink to &quot;`zig build-obj`&quot;">​</a></h2><p>编译一个 Zig 源文件为一个对象文件（<code>.o</code> 文件）。</p><h2 id="zig-build-test" tabindex="-1"><code>zig build-test</code> <a class="header-anchor" href="#zig-build-test" aria-label="Permalink to &quot;`zig build-test`&quot;">​</a></h2><p>编译并执行 Zig 文件中的所有测试用例。</p><h2 id="zig-init-exe" tabindex="-1"><code>zig init-exe</code> <a class="header-anchor" href="#zig-init-exe" aria-label="Permalink to &quot;`zig init-exe`&quot;">​</a></h2><p>这个命令用于初始化项目（可执行二进制文件），在当前路径下创建 <code>src/main.zig</code> 和 <code>build.zig</code> 两个文件。</p><p>关于 <code>build.zig</code> 这个文件的内容涉及到了 zig 的构建系统，我们将会单独讲述。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build.zig</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.zig</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>当前 <code>nightly</code> 版本的 zig 已经将 <code>zig init-exe</code> 和 <code>zig init-lib</code> 合并为一个命令 <code>zig init</code>。</p></div><h2 id="zig-init-lib" tabindex="-1"><code>zig init-lib</code> <a class="header-anchor" href="#zig-init-lib" aria-label="Permalink to &quot;`zig init-lib`&quot;">​</a></h2><p>如果你想写一个 zig 的库，那么可以使用该命令，在当前路径下创建 <code>src/main.zig</code> 和 <code>build.zig</code> 两个文件。</p><div class="tip custom-block"><p class="custom-block-title">🅿️ 提示</p><p>创建出来的 <code>main.zig</code> <code>build.zig</code> 和通过 <code>init-exe</code> 命令创建出来的 <code>main.zig</code> <code>build.zig</code> 并不相同。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build.zig</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.zig</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>当前 <code>nightly</code> 版本的 zig 已经将 <code>zig init-exe</code> 和 <code>zig init-lib</code> 合并为一个命令 <code>zig init</code>。</p></div><h2 id="zig-ast-check" tabindex="-1"><code>zig ast-check</code> <a class="header-anchor" href="#zig-ast-check" aria-label="Permalink to &quot;`zig ast-check`&quot;">​</a></h2><p>对指定文件进行AST语法检查，支持指定文件和标准输入。</p><h2 id="zig-fmt" tabindex="-1"><code>zig fmt</code> <a class="header-anchor" href="#zig-fmt" aria-label="Permalink to &quot;`zig fmt`&quot;">​</a></h2><p>用于格式化代码源文件，支持<code>stdin</code>和指定路径。</p><h2 id="zig-test" tabindex="-1"><code>zig test</code> <a class="header-anchor" href="#zig-test" aria-label="Permalink to &quot;`zig test`&quot;">​</a></h2><p>对指定的源文件运行test,适用于单元测试。</p><h2 id="zig-run" tabindex="-1"><code>zig run</code> <a class="header-anchor" href="#zig-run" aria-label="Permalink to &quot;`zig run`&quot;">​</a></h2><p>编译并立即运行一个 Zig 程序。这对于快速测试片段代码非常有用。</p><h2 id="zig-cc" tabindex="-1"><code>zig cc</code> <a class="header-anchor" href="#zig-cc" aria-label="Permalink to &quot;`zig cc`&quot;">​</a></h2><p>使用 Zig 的内置 C 编译器来编译 C 代码。</p><h2 id="zig-c" tabindex="-1"><code>zig c++</code> <a class="header-anchor" href="#zig-c" aria-label="Permalink to &quot;`zig c++`&quot;">​</a></h2><p>使用 Zig 的内置 C++ 编译器来编译 C++ 代码。</p><h2 id="zig-translate-c" tabindex="-1"><code>zig translate-c</code> <a class="header-anchor" href="#zig-translate-c" aria-label="Permalink to &quot;`zig translate-c`&quot;">​</a></h2><p>将 C 代码转换为 Zig 代码。这是 Zig 提供的一个强大功能，可以帮助你将现有的 C 代码库迁移到 Zig。</p><h2 id="zig-targets" tabindex="-1"><code>zig targets</code> <a class="header-anchor" href="#zig-targets" aria-label="Permalink to &quot;`zig targets`&quot;">​</a></h2><p>显示 Zig 编译器支持的所有目标架构、操作系统和 ABI。</p><h2 id="zig-version" tabindex="-1"><code>zig version</code> <a class="header-anchor" href="#zig-version" aria-label="Permalink to &quot;`zig version`&quot;">​</a></h2><p>显示当前安装的 Zig 编译器版本。</p><h2 id="zig-zen" tabindex="-1"><code>zig zen</code> <a class="header-anchor" href="#zig-zen" aria-label="Permalink to &quot;`zig zen`&quot;">​</a></h2><p>输出 Zig 的设计哲学。</p><h2 id="zig-fetch" tabindex="-1"><code>zig fetch</code> <a class="header-anchor" href="#zig-fetch" aria-label="Permalink to &quot;`zig fetch`&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该命令为 <code>nightly</code> 版本加入，用于将包添加到全局缓存并打印包的hash。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zig fetch https://github.com/limine-bootloader/limine-zig/archive/trunk.tar.gz</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12202809180bab2c7ae3382781b2fc65395e74b49d99ff2595f3fea9f7cf66cfa963</span></span></code></pre></div><p>当然如果你想将包直接添加到 <code>zon</code> 中，你可以附加 <code>--save</code> 参数来实现效果：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">zig</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> fetch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">save</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//github.com/limine-bootloader/limine-zig/archive/trunk.tar.gz</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当包提供 name 时，会自动使用包的 name</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当然，你也可以指定包的 name，使用 --save=limine</span></span></code></pre></div><p>除了上述命令之外，还有一些其他的命令和选项可以在 Zig 的官方文档中找到。随着 Zig 语言的不断发展，可能会有新的命令和功能加入，所以建议定期查看官方文档来获取最新信息。</p><p>希望这些补充能够帮助完善你的文档。如果你需要更详细的信息，可以参考 Zig 的官方文档。</p>',47),c=[n];function l(o,d,h,p,g,r){return e(),a("div",null,c)}const b=i(t,[["render",l]]);export{z as __pageData,b as default};
