<template>
<div class="form-style-5">
    <form @submit.prevent="handleSubmit">
    <fieldset>
    <legend><span class="number">1</span> Choose a Game to Play</legend>
    <input type="text" name="field1" v-model="game" placeholder="Your Game *">
    <legend><span class="number">2</span>Choose Number of Players</legend>
    <select v-model="number">
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three" selected>3</option>
    <option value="four">4</option>
    <option value="five">5</option>
    <option value="six">6</option>
    <option value="seven">7</option>
    <option value="eight">8</option>
    </select>
    </fieldset>

    <legend><span class="number">3</span>Pick a Date</legend>
    <input type="date" id="start" name="trip-start"
    value="2018-07-22"
    min="2000-01-01" max="2030-12-31">

    <fieldset>
    <legend><span class="number">4</span> Add Player to Game</legend>
    <input type="text" name="field3" v-model="player" placeholder="First and Last Name ">
    <button>Add Player</button>
    <button>Cancel</button>
    </fieldset>

    <input type="submit" value="Submit" />
    </form>
    </div>

<p>Game: {{ game }}</p>
<p>Player: {{ player }}</p>
<p>Number of Players: {{ number }}</p>
</template>

<script>
export default {
    data() {
        return  {
            game: '',
            player: '',
            number: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log('form submitted')
            console.log('game: ', this.game)
            console.log('Number of players: ',this.number)
        }
    }
}
</script>




<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
  .review-form {
    display: flex;
    flex-direction: column;
    width: 425px;
    padding: 20px;
    margin: 40px;
    border: 2px solid #d8d8d8;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
  
  .review-container {
    width: 425px;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
    margin-left: 40px;
    border: 2px solid #d8d8d8;
  }
  
  .review-container li {
    margin-bottom: 30px;
  }
  
  .review-form .button {
    display: block;
    margin: 30px auto;
  }
  
  select {
    height: 40px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
  }
  
  textarea {
    width: 95%;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
  }
  
  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: column;
    }
  
    .product-image,
    .product-info {
      margin-left: 10px;
      width: 100%;
    }
  
    .review-form {
      width: 90%;
    }
  }

.form-style-5{
	max-width: 500px;
	padding: 10px 20px;
	background: #f4f7f8;
	margin: 10px auto;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-5 fieldset{
	border: none;
}
.form-style-5 legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}
.form-style-5 label {
	display: block;
	margin-bottom: 8px;
}
.form-style-5 input[type="text"],
.form-style-5 input[type="date"],
.form-style-5 input[type="datetime"],
.form-style-5 input[type="email"],
.form-style-5 input[type="number"],
.form-style-5 input[type="search"],
.form-style-5 input[type="time"],
.form-style-5 input[type="url"],
.form-style-5 textarea,
.form-style-5 select {
	font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box; 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; 
	background-color: #e8eeef;
	color:#8a97a0;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	margin-bottom: 30px;
}
.form-style-5 input[type="text"]:focus,
.form-style-5 input[type="date"]:focus,
.form-style-5 input[type="datetime"]:focus,
.form-style-5 input[type="email"]:focus,
.form-style-5 input[type="number"]:focus,
.form-style-5 input[type="search"]:focus,
.form-style-5 input[type="time"]:focus,
.form-style-5 input[type="url"]:focus,
.form-style-5 textarea:focus,
.form-style-5 select:focus{
	background: #d2d9dd;
}
.form-style-5 select{
	-webkit-appearance: menulist-button;
	height:35px;
}
.form-style-5 .number {
	background: #1abc9c;
	color: #fff;
	height: 30px;
	width: 30px;
	display: inline-block;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-align: center;
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	border-radius: 15px 15px 15px 0px;
}

.form-style-5 input[type="submit"],
.form-style-5 input[type="button"]
{
	position: relative;
	display: block;
	padding: 19px 39px 18px 39px;
	color: #FFF;
	margin: 0 auto;
	background: #1abc9c;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 100%;
	border: 1px solid #16a085;
	border-width: 1px 1px 3px;
	margin-bottom: 10px;
}
.form-style-5 input[type="submit"]:hover,
.form-style-5 input[type="button"]:hover
{
	background: #109177;
}

</style>