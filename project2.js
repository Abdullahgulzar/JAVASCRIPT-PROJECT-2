window.addEventListener('keydown', (e) => {
    const insert = document.querySelector('.insert');
    // const audio = document.getElementById('key-sound');

    insert.innerHTML = `
      <div class='color'>
        <table>
          <tr>
            <th>Key</th>
            <th>Keycode</th> 
            <th>Code</th>
          </tr>
          <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td> 
            <td>${e.code}</td>
          </tr>
        </table>
      </div>
    `;

    // audio.currentTime = 0; // Rewind to the start
    // audio.play();
 
  });
  