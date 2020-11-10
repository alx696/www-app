window.addEventListener('DOMContentLoaded', () => {
  let getUrlParam = (key) => {
    let value = (new URL(document.location)).searchParams.get(key);

    if (value !== null) {
      value = decodeURIComponent(value);
    }

    return value;
  };

  //外图轨迹:显示加入队伍提醒
  let group = getUrlParam('group');
  if (group != null) {
    let ui = document.createElement('p');
    ui.classList.add('tip');
    ui.innerHTML = `<p>下载安装后有两种方式加入队伍：</p>
    <p>1. 打开应用点“队”按钮，输入队伍名称：<b>${group}</b></p>
    <p>2. <a href="app://red.lilu.outmap/group=${group}">点我自动打开</a>（仅在较新安卓手机中有效）</p>`;
    let article = document.body.querySelector('article#outmap > article');
    article.insertBefore(
      ui,
      article.querySelector('div.version').nextSibling
    );
  }

  //外图轨迹:欢迎行车轨迹用户
  let from_autotracks = getUrlParam('from_autotracks');
  if (from_autotracks != null) {
    let ui = document.createElement('p');
    ui.classList.add('tip');
    ui.textContent = `行车轨迹用户你好！行车轨迹中为你提供功能的服务陆续收费，已经无法使用分享（轨迹号）功能。作为免费应用，维护代价很高，我会继续努力。感谢你的选择，请安装外图轨迹，导入行车轨迹备份。`;
    let article = document.body.querySelector('article#outmap > article');
    article.insertBefore(
      ui,
      article.querySelector('div.version').nextSibling
    );
  }

  //外图轨迹:提醒里路越野轨迹和里路轨迹用户
  let from_locus = getUrlParam('from_locus');
  if (from_locus != null) {
    let ui = document.createElement('p');
    ui.classList.add('tip');
    ui.textContent = `应用已经改名为外图轨迹！`;
    let article = document.body.querySelector('article#outmap > article');
    article.insertBefore(
      ui,
      article.querySelector('div.version').nextSibling
    );
  }

  //如果是微信提醒用户在浏览器打开
  if (navigator.userAgent.includes('MicroMessenger')) {
    document.body.innerHTML = `<div id="weixin">
        <article>
          <h3>感谢你的信任</h3>
          <p>非微信官方网页——没给微信交钱的网页。</p>
          <p>纵使你选择了继续访问，但微信还是没打算放弃拦路！我的功能已被阉割，无法正常显示。</p>
          <p>请点一下白色方框，复制网址后到浏览器中粘贴打开，谢谢！</p>
          <p>
            <textarea>${window.location.href}</textarea>
          </p>
        </article>
      </div>`;
    document.body.querySelector('textarea')
      .addEventListener('click', e => {
        e.target.select();
        document.execCommand("copy");

        const tip = document.body.querySelector('#weixin>p:nth-child(3)');
        tip.textContent = '网址已经复制，请到浏览器中粘贴打开^^';
        tip.style.color = 'green';
      });
  }
});