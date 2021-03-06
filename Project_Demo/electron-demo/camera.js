const video = document.getElementById("camera")
const captureButton = document.getElementById('btn')
const imageTag = document.getElementById('image')


captureButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas')
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
  const dataUrl = canvas.toDataURL()
  // imageTag.src = dataUrl
  window.electronAPI.passImage(dataUrl)
  new Notification("Image Captured", {
    body: 'Image Captured',
  })
})

navigator.mediaDevices.getUserMedia({
  video: true,
}).then((stream) => {
  video.srcObject = stream
})