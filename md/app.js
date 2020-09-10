window.addEventListener('DOMContentLoaded', () => {
  let md = window.markdownit();
  let getUrlParam = (key) => {
    let value = (new URL(document.location)).searchParams.get(key);

    if (value !== null) {
      value = decodeURIComponent(value);
    }

    return value;
  };
  let id = getUrlParam('id');
  if (!id) {
    return;
  }

  fetch(`file/${id}.md`)
    .then(response => {
      if (response.status === 200) {
        response.text()
          .then(text => {
            // console.debug(text);
            document.body.innerHTML = md.render(text);
          });
      } else {
        const emailBody = encodeURI(`文档：${id}.md 丢失。`);
        document.body.innerHTML = `<blockquote><p>文档丢失，请<a href="mailto:957388815@qq.com?&amp;subject=里路应用：文档问题&amp;body=${emailBody}">报告问题</a></p></blockquote>`;
      }
    });
});