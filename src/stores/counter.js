import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter',{
// 	state:()=>{ count: 0 },
// 	actions:{
// 		increment(){
// 			this.count ++
// 		},
// 		decrement(){
// 			this.count--
// 		}
// 	}
// })

export const useCounterStore = defineStore('counter',()=>{
	const count = ref(0)
	function increment(){
		count.vaule ++
	}

	function decrement(){
		count.value --
	}
	return {
		count,
		increment,
		decrement
	}
})






















// export const useCounterStore = defineStore('counter',{
// 	state:() =>{
// 		return {
// 			count: 0,
// 		}
// 	},
// 	actions: {
// 		increment(){
// 			this.count++
// 		},
// 		decrement(){
// 			this.count--
// 		}
// 	}
// })

