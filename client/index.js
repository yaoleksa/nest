let output = document.getElementById('output');
let count = 0;

document.getElementById('submit').addEventListener('click', () => {
  axios
    .post(window.navigation.currentEntry.url, {
      url: document.getElementById('url').value,
    })
    .then((data) => {
      output.innerText = count.toString();
      setTimeout(() => {
        output.innerText = `converted website: ${data.data}`;
      }, 5000);
    });
});
