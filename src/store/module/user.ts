import { defineStore } from 'pinia';

export default defineStore('user', {
	state: () => {
		return {
			token: '',
			age: 18,
		};
	},
	getters: {
		getAge(): number {
			return this.age;
		},
	},
	actions: {
		add() {
			this.age++;
		},
		sub() {
			this.age--;
		},
	},
});
