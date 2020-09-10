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
    for (let article of document.body.querySelectorAll('article > article')) {
      let ui = document.createElement('p');
      ui.classList.add('weixin');
      ui.textContent = `提醒：没交过路费，微信不让下载。请先点右上角的三点，再点“在浏览器打开”！`;
      article.insertBefore(
          ui,
          article.querySelector('div.version').nextSibling
      );
      //隐藏下载按钮
      article.querySelector('div.version > a').style.display = 'none';
    }
  }
});