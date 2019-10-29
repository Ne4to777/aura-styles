import Variables from './views/Variables.vue'
import Classes from './views/Classes.vue'

export default new VueRouter({
	mode: 'history',
	routes: [{
		path: '/variables',
		name: 'variables',
		component: Variables
	}, {
		path: '/classes',
		name: 'classes',
		component: Classes
	}]
})
