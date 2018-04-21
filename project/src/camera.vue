
<template>
	
</template>

<script>
import Nat from 'natjs'

// take a photo
Nat.camera.captureImage((err, ret) => {
    console.log('Path: ', ret.path)
})

// record a video
Nat.camera.captureVideo((err, ret) => {
    console.log('Path: ', ret.path)
})

</script>