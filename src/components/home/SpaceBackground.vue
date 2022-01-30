<template>
  <canvas ref="canvas" />
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'

export default {
  setup () {
    const canvas = ref()
    onMounted(() => {
      const starCount = (innerWidth + innerHeight) / 5
      const starSize = 2.5
      const starMinSize = 0.2
      const overflowThreshold = 20
      const ctx = canvas.value.getContext('2d')
      let scale = 1
      let width, height
      const stars = []
      let pointerX, pointerY
      const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.001 }
      let touchInput = false

      generate()
      resize()
      step()

      onresize = resize
      canvas.value.onmousemove = onMouseMove
      canvas.value.ontouchmove = onTouchMove

      function generate () {
        for (let i = 0; i < starCount; i++) {
          stars.push({
            x: 0,
            y: 0,
            z: starMinSize + Math.random() * (1 - starMinSize)
          })
        }
      }

      function placeStar (star) {
        star.x = Math.random() * width
        star.y = Math.random() * height
      }

      function recycleStar (star) {
        let direction = 'z'
        const vx = Math.abs(velocity.tx)
        const vy = Math.abs(velocity.ty)

        if (vx > 1 && vy > 1) {
          let axis
          if (vx > vy) {
            axis = Math.random() < Math.abs(velocity.x) / (vx + vy) ? 'h' : 'v'
          } else {
            axis = Math.random() < Math.abs(velocity.y) / (vx + vy) ? 'v' : 'h'
          }

          if (axis === 'h') {
            direction = velocity.x > 0 ? 'l' : 'r'
          } else {
            direction = velocity.y > 0 ? 't' : 'b'
          }
        }
        star.z = starMinSize + Math.random() * (1 - starMinSize)

        if (direction === 'z') {
          star.z = 0.1
          star.x = Math.random() * width
          star.y = Math.random() * height
        } else
        if (direction === 'l') {
          star.x = -starSize
          star.y = height * Math.random()
        } else
        if (direction === 'r') {
          star.x = width + starSize
          star.y = height * Math.random()
        } else
        if (direction === 't') {
          star.x = width * Math.random()
          star.y = -starSize
        } else
        if (direction === 'b') {
          star.x = width * Math.random()
          star.y = height + starSize
        }
      }

      function resize () {
        scale = devicePixelRatio || 1
        width = innerWidth * scale
        height = innerHeight * scale
        canvas.value.width = width
        canvas.value.height = height
        stars.forEach(placeStar)
      }

      function step () {
        ctx.clearRect(0, 0, width, height)

        update()
        render()
        requestAnimationFrame(step)
      }

      function update () {
        velocity.tx *= 0.8
        velocity.ty *= 0.8
        velocity.x += (velocity.tx - velocity.x) * 0.4
        velocity.y += (velocity.ty - velocity.y) * 0.4

        stars.forEach(star => {
          star.x += velocity.x * star.z
          star.y += velocity.y * star.z
          star.x += (star.x - width / 2) * velocity.z * star.z
          star.y += (star.y - height / 2) * velocity.z * star.z
          star.z += velocity.z

          if (star.x < -overflowThreshold || star.x > width + overflowThreshold || star.y < -overflowThreshold || star.y > height + overflowThreshold) {
            recycleStar(star)
          }
        })
      }

      function render () {
        stars.forEach(star => {
          ctx.beginPath()
          ctx.lineCap = 'round'
          ctx.lineWidth = starSize * star.z * scale
          ctx.strokeStyle = 'rgba(255, 255, 255,' + (0.7 + 0.7 * Math.random()) + ')'
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)

          var tailX = velocity.x * 2
          var tailY = velocity.y * 2

          if (Math.abs(tailX) < 0.1) tailX = 0.4
          if (Math.abs(tailY) < 0.1) tailY = 0.4

          ctx.lineTo(star.x + tailX, star.y + tailY)
          ctx.stroke()
        })
      }

      function movePointer (x, y) {
        if (typeof pointerX === 'number' && typeof pointerY === 'number') {
          const ox = x - pointerX
          const oy = y - pointerY
          velocity.tx = velocity.x + ox / 8 * scale * (touchInput ? -1 : 1)
          velocity.ty = velocity.y + oy / 8 * scale * (touchInput ? -1 : 1)
        }
        pointerX = x
        pointerY = y
      }

      function onMouseMove (e) {
        touchInput = false
        movePointer(e.clientX / 5, e.clientY / 5)
      }
      function onTouchMove (e) {
        touchInput = true
        movePointer(e.touches[0].clientX / 5, e.touches[0].clientY / 5, true)
        e.preventDefault()
      }
    })
    return {
      canvas
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
