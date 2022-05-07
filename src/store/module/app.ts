import { defineStore } from 'pinia';
import { darkTheme } from 'naive-ui';
export default defineStore('app', {
	state: () => ({
		theme: darkTheme,
	}),
    actions:{
        setTheme(){
            
        }
    }
});
