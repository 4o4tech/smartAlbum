
<template>
	
<text class="text_call" @click="pick()"> Call </text>

</template>



<script>
import Nat from 'natjs'

export default{
	methods: {
	pick() {
			Nat.image.pick({
				showCamera: true
			}, (err, ret) => {
				if (err) {
					Nat.toast('[ERROR] ' + JSON.stringify(err))
					return
				}
				Nat.toast(JSON.stringify(ret))
				this.path = ret.paths[0]
			})
		}
}

}

</script>

<style scpoed>
	
.text_call{
	font-size: 24px;

}

</style>