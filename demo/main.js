mePlayer({
  music: {
    src: './m.m4a',
    title: '晚风',
    author: '好妹妹乐队',
    loop: true,
    cover: './cover.jpg',
    lrc:
      '' 
  },
  target: '.music',
  autoplay: false
})

document.querySelector('button').addEventListener('click', function() {
  mePlayer.toggleTheme()
})

window.setTimeout(mePlayer.play, 1500)
