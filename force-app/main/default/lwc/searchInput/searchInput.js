import { LightningElement, track } from 'lwc'

export default class SearchInput extends LightningElement {
    option = ''
    @track list = []

    handleKeyChange(event) {
        const searchString = event.target.value
        window.clearTimeout(this.delayTimeout)
        this.delayTimeout = setTimeout(() => {
            this.option = searchString
        }, DELAY)
    }
}