import $ from 'jquery';

class EasterEgg {

    constructor(mapping, eggSuccess, eggFailure){
        this.eggMapping = mapping;
        this.keyHistory = [];
        this.eggAction = eggSuccess;
        this.eggFail = eggFailure;
    }

    init(){
        let self = this;
        $(document).keydown({egg: self}, function (ev) {
            // sadly we need to use which, not key
            ev.data.egg.addKeyPress(ev.key);
        });
    }

    addKeyPress(key){
        if(this.keyHistory.length >= this.eggMapping.length){
            this.keyHistory.shift()
        }
        this.keyHistory.push(key);
        this.compareMapping();
    }

    getKeyHistory(){
        return this.keyHistory;
    }

    getEggMapping(){
        return this.eggMapping;
    }

    resetKeyHistory(){
        this.keyHistory = [];
    }

    compareMapping(){
        if(JSON.stringify(this.getEggMapping()) === JSON.stringify(this.getKeyHistory())){
            this.eggAction();
            this.resetKeyHistory();
        } else {
            this.eggFail();
        }
    }
}

export default EasterEgg