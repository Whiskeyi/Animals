<template>

  <div class="body1">
  <!-- partial:index.partial.html -->
  <div class="body2">
  <form class="form">

    <div class="typing animate"></div>

    <!-- <h1>Welcome To Our Animal World </h1> -->

    <fieldset>
      <legend>Steins Gate</legend>
      <div class="dog">
        <div class="head">
          <div class="ear"></div>
          <div class="eyeBrown"></div>
          <div class="eye"></div>
          <div class="mouth"></div>
          <div class="snout">
            <div class="snoutBottom"></div>
          </div>
        </div>

        <div class="piece1Body"></div>
        <div class="piece2Body">
          <div class="tail"></div>
        </div>
        <div class="head">
          <div class="ear"></div>
          <div class="eyeBrown"></div>
          <div class="eye"></div>
          <div class="mouth"></div>
          <div class="snout">
            <div class="snoutBottom"></div>
          </div>
        </div>

        <div id="leg1">
          <div class="haunch">
            <div class="legPiece1">
              <div class="legPiece2"></div>
            </div>
          </div>
        </div>
        <div id="leg2">
          <div class="haunch">
            <div class="legPiece1">
              <div class="legPiece2"></div>
            </div>
          </div>
        </div>
        <div id="leg3">
          <div class="haunch">
            <div class="legPiece1">
              <div class="legPiece2"></div>
            </div>
          </div>
        </div>
        <div id="leg4">
          <div class="haunch">
            <div class="legPiece1">
              <div class="legPiece2"></div>
            </div>
          </div>
        </div>

        <div class="street">
          <div class="streetPiece">
            <div class="land"></div>
            <div class="land"></div>
            <div class="land"></div>
          </div>
        </div>
      </div>
    </fieldset>


    <div class="signup__button signup__field">
      <el-button
          class="button"
          type="button"
          @click="enterHome"
      >
        ENTER</el-button>
    </div>

  </form>


    </div>
    <!-- partial -->

  </div>
</template>


<script>

export default {
  name: "index",
  methods: {
    enterHome() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Beastly&display=swap');
.body1 {
  /*background: #000;*/
  background-size: cover;
  width: 100vw;
  height: auto;
  padding: 2%;
  display: flex;
  flex-direction: column;
}

.typing.animate {
  width: 40ch;
  font-family: monospace;
  font-size: 2em;
  animation: type 3s steps(28);
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}

.typing.animate::before {
  font-family: 'Annie Use Your Telescope', cursive;
  color: #FF9A00;
  font-size: 3rem;
  content: "Welcome To Our Animal World";
}

@keyframes type {
  from {
    width: 0;
  }
  to {
    width: 40ch;
  }
}


.signup__field {
  text-align: center;
  margin-top: 40px;
}


fieldset {
  margin-top: 40px;
}

fieldset > legend {
  font-family: 'Rubik Beastly', cursive;
  font-size: 2rem;
  color: #FF9A00;
  text-align: center;
}

.signup__field {
  padding: 20px 0;
}

.signup__field {
  padding: 20px;
  font-size: 1.2rem;
  line-height: 2rem;
}

.signup__button {
  padding: 2%;
}

button {
  background: #FF9A00;
  border-color: #FF9A00;
  border-radius: 40px;
  color: #000;
  padding: 10px 40px;
  transition: 2s;
  font-size: 1.2rem;
}

button:hover {
  background: #000;
  border-color: #000;
  color: #FF9A00;
  transition: 2s;
}

* {
  margin: 0;
  padding: 0;
  border: none;
}



.body2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  /*background-color: rgba(32, 26, 26, 0.801);*/
}
.dog {
  position: relative;
  min-width: 500px;
  width: 500px;
  height: 300px;
  background-color: rgba(85, 39, 39, 0.884);
  z-index: -2;
  overflow: hidden;
}
.head {
  position: absolute;
  background: linear-gradient(to bottom, #7c2b15 50%, #bd583d 100%);
  width: 80px;
  height: 60px;
  top: 40%;
  left: 100px;
  border-radius: 40%;
  -webkit-animation: moveHead 0.6s infinite alternate;
  animation: moveHead 0.6s infinite alternate;
}

@-webkit-keyframes moveHead {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes moveHead {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
.ear {
  position: absolute;
  width: 30px;
  height: 70px;
  background: linear-gradient(
      to bottom,
      rgb(75, 23, 9) 50%,
      rgb(110, 58, 44) 100%
  );
  border-radius: 50% 500% 50px 500%;
  top: 20%;
  left: 60%;
}
.eye {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 23%;
}
.snout {
  position: absolute;
  width: 50px;
  height: 30px;
  background: linear-gradient(to bottom, #7c2b15 20%, #b64d2f 100%);
  border-radius: 30% 10px 10px 50%;
  top: 39%;
  left: -32%;
}
.snoutBottom {
  width: 15px;
  height: 12px;
  background-color: rgba(32, 26, 26, 1);
  border-radius: 5px 3px 80% 5px;
  position: absolute;
  top: 0;
  left: 0;
}
/* .neck{
    position: absolute;
    width: 30px;
    height: 60px;
    background-color: rgba(133,48,15);
    border-radius: 100% 50% 10% 10%;
    transform: rotateZ(-60deg);
    top: 46%;
    left: 29%;
} */
.piece1Body,
.piece2Body {
  width: 100px;
  height: 60px;
  background: linear-gradient(to bottom, #7c2b15 50%, #bd583d 100%);
  border-radius: 50% 50% 40% 30%;
  position: absolute;
}
.piece1Body {
  top: 50%;
  left: 34%;
  -webkit-animation: moveBody 1s 0s infinite alternate;
  animation: moveBody 1s 0s infinite alternate;
  z-index: 0;
}
.piece2Body {
  top: 50%;
  left: 53%;
  -webkit-animation: moveBody 1s 0.5s infinite alternate;
  animation: moveBody 1s 0.5s infinite alternate;
}

@-webkit-keyframes moveBody {
  0% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes moveBody {
  0% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0px);
  }
}

.tail {
  width: 80px;
  height: 15px;
  background: linear-gradient(
      to bottom,
      rgb(75, 23, 9) 50%,
      rgb(110, 58, 44) 100%
  );
  border-radius: 200% 2% 200% 70%;
  position: absolute;
  top: 20%;
  left: 85%;
  -webkit-animation: moveTail 1s infinite alternate;
  animation: moveTail 1s infinite alternate;
  transform-origin: left bottom 2px;
}

@-webkit-keyframes moveTail {
  0% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

@keyframes moveTail {
  0% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

.haunch {
  width: 30px;
  height: 35px;
  background: linear-gradient(
      to top,
      rgb(139, 52, 28) 50%,
      rgb(179, 90, 66) 100%
  );
  border-radius: 10px 0 50% 80%;
  position: absolute;
  transform-origin: center top;
}

#leg1 .haunch {
  top: 66%;
  left: 38%;
  -webkit-animation: movePaw 1s 0.5s infinite alternate;
  animation: movePaw 1s 0.5s infinite alternate;
  box-shadow: -0.05rem 0.2rem 4px rgb(110, 58, 44);
}

.legPiece1 {
  width: 20px;
  height: 30px;
  background: linear-gradient(
      to bottom,
      rgb(139, 52, 28) 50%,
      rgb(66, 20, 8) 100%
  );
  position: absolute;
  top: 20px;
  left: 10px;
  border-radius: 20%;
}

.legPiece2 {
  width: 28px;
  height: 10px;
  background-color: #752e1a;
  border-radius: 10px 0 0 10px;
  position: absolute;
  bottom: 0;
  right: 0;
}

#leg2 .haunch {
  top: 66%;
  left: 65%;
  -webkit-animation: movePaw 1s infinite alternate;
  animation: movePaw 1s infinite alternate;
}

#leg3 .haunch {
  top: 66%;
  left: 37%;
  z-index: -1;
  -webkit-animation: movePaw 1s infinite alternate;
  animation: movePaw 1s infinite alternate;
}

#leg4 .haunch {
  top: 66%;
  left: 64%;
  z-index: -1;
  -webkit-animation: movePaw 1s 0.5s infinite alternate;
  animation: movePaw 1s 0.5s infinite alternate;
}

@-webkit-keyframes movePaw {
  0% {
    transform: rotateZ(-30deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}

@keyframes movePaw {
  0% {
    transform: rotateZ(-30deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}

.street {
  width: 120%;
  height: 60px;
  background-color: rgba(158, 162, 163, 0.438);
  position: absolute;
  bottom: 0;
  z-index: -10;
  display: flex;
  justify-content: space-around;
}
.streetPiece {
  width: 80px;
  height: 40px;
  /* background-color: #7c2b15; */
  -webkit-animation: moveStreet 10s infinite;
  animation: moveStreet 10s infinite;
}

@-webkit-keyframes moveStreet {
  0% {
    transform: translateX(-330px);
  }
  100% {
    transform: translateX(250px);
  }
}

@keyframes moveStreet {
  0% {
    transform: translateX(-330px);
  }
  100% {
    transform: translateX(250px);
  }
}
.land {
  width: 40px;
  height: 5px;
  background-color: rgb(0, 0, 0);
  position: absolute;
}
.land:nth-child(1) {
  top: 25%;
}
.land:nth-child(2) {
  right: 0;
  top: 50%;
}
.land:nth-child(3) {
  top: 75%;
}
</style>