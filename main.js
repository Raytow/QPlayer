mePlayer({
  music: {
//    src: './晚风.mp3',
    src: '/v.webm',
    title: '抖音神曲40首',
    author:
    '抖音',
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
