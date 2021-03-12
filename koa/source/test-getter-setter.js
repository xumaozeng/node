const kaikeba = {
    info: { name: '开课吧' },

    get name() {
        console.log('===========');
        return `[${this.info.name}]`
    },

    set name(val) {
        this.info.name = val
    }
}


kaikeba.name = 'kaikeba'
console.log(kaikeba.name);