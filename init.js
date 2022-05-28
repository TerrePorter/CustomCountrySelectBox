
function xinitCountrySelect() {
    return {
        selectedValue: "",
        selectedIcon: "",
        selectedText: 'Select Country',
        open: false,
        toggle() {
            this.open = !this.open;
            document.getElementById("countrySearch").focus();
        },
        init() {
            this.countries = countries;

            /*
            if (this.$wire.get('country') !== '') {
                this.selectedValue = this.$wire.get('country');
                tmp = countries.filter(countries => (countries.value.toLowerCase().startsWith(this.selectedValue.toLowerCase()) == true));
                console.log(tmp);
                this.selectedValue = tmp[0]['value'];
                this.selectedIcon = this.getImage(tmp[0]['value']);
                this.selectedText = tmp[0]['title'];
            }
            */
        },
        filterCountry() {
            var box = document.getElementById('countrySearch');
            this.countries = countries.filter(countries => (countries.title.toLowerCase().startsWith(box.value.toLowerCase()) == true));
        },
        getImage(imageToken) {
            base = 'country-flag-icons';
            return base +'/'+ imageToken + '.svg';
        },
        handleCountrySelection(selectionKey, selectionValue) {
            this.selectedValue = selectionKey;
            this.selectedIcon = this.getImage(selectionKey);
            this.selectedText = selectionValue;
            //this.$wire.set('country', selectionKey);
            this.toggle();
        }
    };
}