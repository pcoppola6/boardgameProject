const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    name(value) {
      if( value === '') {
        this.fulllname = '';
      } else {
      this.fullname = value + ' ' + 'Coppola';
      }
    }
  },
  computed: {
  //   fullname() {
  //     if (this.name === '') {
  //       return '';
  //     }
  //     return this.name + ' ' + 'Coppola';
  //   }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Coppola';
      
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
