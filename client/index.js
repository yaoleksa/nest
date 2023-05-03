let output = document.getElementById('output');
let count = 0;

document.getElementById('submit').addEventListener('click', () => {
  axios
    .post(window.navigation.currentEntry.url, {
      url: document.getElementById('url').value,
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
        }
        output.innerText = 'converted website';
        output.href = response.data;
      }, 5000);
    });
});
