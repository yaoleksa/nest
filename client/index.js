const output = document.getElementById('output');
const url = document.getElementById('url');
let count = 0;

document.getElementById('submit').addEventListener('click', () => {
  axios
    .post(window.navigation.currentEntry.url, {
      url: url.value,
    })
    .then((response) => {
      const w = document.getElementById('waiting');
      output.style.display = 'none';
      w.style.display = '';
      w.innerText = 'Wait, converting in proggress...';
      setTimeout(() => {
        w.style.display = 'none';
        output.style.display = '';
        if(/android|iphone|kindle|ipad/i.test(navigator.userAgent)){
          output.setAttribute('download', '');
          output.setAttribute('target', '_self');
        }
        output.innerText = 'converted website';
        output.href = response.data;
      }, 5000);
    });
});

document.getElementById('clear').addEventListener('click', () => {
  url.value = '';
});
