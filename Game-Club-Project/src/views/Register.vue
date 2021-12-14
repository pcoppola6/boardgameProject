<template>
  <div id="register" class="text-center">
    <div class="form-background-register">
    <form class="form-register" @submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal">Create Account</h1>
      <div class="alert alert-danger" role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
      <label for="username" class="sr-only">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
        
      />
      <br />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required

      />

      <br />
      <input
        type="password"
        id="confirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        v-model="user.confirmPassword"
        required
      />

         <div id="pswd_info">
    <h4>Password must meet the following requirements:</h4>
    <ul>
        <li id="capital" v-bind:class="{valid : validateUpperCase(), invalid : !validateUpperCase()}">At least <strong>one capital letter</strong></li>
        <li id="lower" v-bind:class="{valid : validateLowerCase(), invalid : !validateLowerCase()}">At least <strong>one non capital letter</strong></li>
        <li id="letter" v-bind:class="{valid : validateSpecial(), invalid : !validateSpecial()}">At least <strong>one symbol</strong></li>
        <li id="number" v-bind:class="{valid : validateNumber(), invalid : !validateNumber()}">At least <strong>one number</strong></li>
        <li id="length" v-bind:class="{valid : validatePasswordLength(), invalid : !validatePasswordLength()}">Be at least <strong>8 characters</strong></li>
        <li id="length" v-bind:class="{valid : validatePasswordMatch(), invalid : !validatePasswordMatch()}">Both Password fields <strong>Must Match</strong></li>
    </ul>
</div>
      <br />
      <router-link :to="{ name: 'login' }">Have an account?</router-link>
      <br />
      <button  class="btn btn-lg btn-primary btn-block" type="submit">
        Create Account
      </button>
    </form>
    </div>
  </div>
</template>

<script>
import authService from '../services/AuthService';



export default {
  name: 'register',
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
    };
  },
  components: {

  },
  methods: {
  
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } 
      
      else if(!this.validateUpperCase()) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password requires atleast 1 uppercase character';
      } 
      
     else if(!this.validateLowerCase()) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password requires atleast 1 lowercase character';
      } 
      
     else if(!this.validateNumber()) {
          this.registrationErrors = true;
          this.registrationErrorMsg = 'Password requires atleast 1 number';
      } 
      
     else if(!this.validateSpecial()) {
          this.registrationErrors = true;
          this.registrationErrorMsg = 'Password requires atleast 1 special character';
      }
      
      else if(!this.validatePasswordLength()) {
          this.registrationErrors = true;
          this.registrationErrorMsg = 'Password must contain atleast 8 characters';

      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },
    validateUpperCase() {
    const uppercaseRegex = /(.*[A-Z].*)/g;
    const hasUpperCase = uppercaseRegex.test(this.user.password);
    return hasUpperCase;
    },
    validateLowerCase() {
      const lowercaseRegex = /(.*[a-z].*)/g;
      const hasLowerCase = lowercaseRegex.test(this.user.password);
      return hasLowerCase;
    },
    validateNumber() {
      const numberRegex = /(.*[0-9].*)/g;
      const hasNumber = numberRegex.test(this.user.password);
      return hasNumber;
    },
    validateSpecial() {
    const specialCharRegex = /[^A-Za-z0-9]/g;
    const hasSpecialChar = specialCharRegex.test(this.user.password);
    return hasSpecialChar;
    },
    validatePasswordLength() {
      return this.user.password.length >= 8;
    },
    validatePasswordMatch() {
      return this.user.password === this.user.confirmPassword && this.user.password != '';
    }
  },
  
};
</script>

<style>

.form-background-register {
  width: 60%;
  padding: 10px;
  background-image: linear-gradient(rgb(234, 239, 255), rgba(238, 238, 255, 0.625));
  box-shadow: 2px 5px 5px 10px rgba(9,30,66,.25);
  align-self: center;
}

h1 {
    margin:0;
    padding:10px 0;
    font-size:24px;
    text-align:center;
    text-shadow:1px 1px 0 #fff;
}
#register {
    width:400px;
    padding:0px;
    margin:0 auto;
    border-radius:5px;
    position:relative;
  
}
#pswd_info {
    position:absolute;
    bottom:-75px;
    bottom: -115px\9; 
    right:55px;
    width:250px;
    padding:15px;
    background:#fefefe;
    font-size:.875em;
    border-radius:5px;
    box-shadow:0 1px 3px #ccc;
    border:1px solid #ddd;
}
#pswd_info h4 {
    margin:0 0 10px 0;
    padding:0;
    font-weight:normal;
}
#pswd_info::before {
    content: "\25B2";
    position:absolute;
    top:-12px;
    left:45%;
    font-size:14px;
    line-height:14px;
    color:#ddd;
    text-shadow:none;
    display:block;
}


ul, li {
  margin:0;
  padding:0;
  list-style-type:none;

}
div#register {
  min-height: 75vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.form-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-items: space-between;
}

button {
    background: #57a9eb; 
    border:1px solid #326fa9;
    border-top-color:#3e80b1;
    border-bottom-color:#1e549d;
    color:#fff;
    text-shadow:0 1px 0 #1e3c5e;
    font-size:.875em;
    padding:8px 15px;
    width:150px;
    border-radius:20px;
    box-shadow:0 1px 0 #bbb, 0 1px 0 #9cccf3 inset;
    cursor: pointer;
}
.invalid {
    background: url(../../public/cross.png) no-repeat 0 50%;
    padding-left:22px;
    line-height:24px;
    color:#ec3f41;
}
.valid {
    background: url(../../public/accept.png) no-repeat 0 50%;
    padding-left:22px;
    line-height:24px;
    color:#3a7d34;
}
</style>
