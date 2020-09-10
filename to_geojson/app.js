window.addEventListener('DOMContentLoaded', () => {
  let selectButton = document.querySelector('#select');
  selectButton.addEventListener('click', () => {
    let fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', '.kml,.gpx');
    fileInput.addEventListener('change', () => {
      let file = fileInput.files[0];
      console.debug('选择文件:', file);
      const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
      if (extension !== 'kml' && extension !== 'gpx') {
        alert('只能选择KML或GPX格式文件!');
        return;
      }

      let fileReader = new FileReader();
      fileReader.addEventListener('loadend', evt => {
        const text = evt.target.result;
        console.debug('转前内容:', text);

        let json = toGeoJSON[extension]((new DOMParser()).parseFromString(text, 'text/xml'));
        console.debug('转后内容:', json);

        //自动下载
        let blob = new Blob([JSON.stringify(json)], {type: 'application/json'});
        let objectURL = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = objectURL;
        a.download = file.name.replace(extension, 'geojson');
        a.click();
      });
      fileReader.readAsText(file);
    });
    fileInput.click();
  });
});