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
	/* Computed
	/* === === === === === */

	computed: {
		encoded() {
			return Base64.encode(this.text)
		}
	},

	/* === === === === === */
	/* Methods
	/* === === === === === */

	methods: {

		/* === === === === === */
		/* Push to URL
		/* === === === === === */

		pushToURL() {

			/* === === === === === */
			/* Push base64 to address bar
			/* === === === === === */

			this.$router.push({query: {
				text: this.encoded
			}});

		},

		/* === === === === === */
		/* Save as a file
		/* === === === === === */

		saveAsFile() {
			download('beap-text.txt', this.encoded);
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

function download(filename, encoded) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8;base64,' + encodeURIComponent(encoded));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
