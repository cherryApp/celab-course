<template>
  <form @submit="onSubmit" class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      v-model="loginData.email"
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      required
      autofocus
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      v-model="loginData.password"
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required
    />
    <button class="btn btn-lg btn-primary btn-block" type="submit">
      Sign in
    </button>

    <div v-if="loginError" class="alert alert-danger mt-2">
        {{ loginError }}
    </div>
  </form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginData: {
                email: '',
                password: ''
            },
            loginError: ''
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.$http.post('/login', this.loginData).then(
                resp => console.log(resp),
                err => this.loginError = err.message
            );
        }
    }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>