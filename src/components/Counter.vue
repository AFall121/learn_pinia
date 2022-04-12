<template>
	<div>{ count }</div>
</template>

<script>
	import { useCounterStore } from '@/stores/conter'
	export default{
		setup(){
			const counter = useCounterStore()
			counter.count ++
			counter.patch({count: counter.count + 1})
			// equal too ne
			counter.increment()
		}
	}
<script>


