import {Base64} from 'js-base64';

export default {

	/* === === === === === */
	/* Data
	/* === === === === === */

	data() {
		return {
			text: ''
		}
	},

	/* === === === === === */
	/* Methods
	/* === === === === === */

	methods: {
		encode() {

			/* === === === === === */
			/* Encode text
			/* === === === === === */
			
			let encoded = Base64.encode(this.text);

			/* === === === === === */
			/* Push base64 to address bar
			/* === === === === === */

			this.$router.push({query: {
				text: encoded
			}});

		}
	},

	/* === === === === === */
	/* Mounted
	/* === === === === === */

	mounted() {

		/* === === === === === */
		/* Get base64 from address bar
		/* === === === === === */

		let encoded = this.$route.query.text;

		/* === === === === === */
		/* Decode text & push it to the textarea
		/* === === === === === */

		if(encoded) {
			this.text = Base64.decode(encoded);
		}

	}

}