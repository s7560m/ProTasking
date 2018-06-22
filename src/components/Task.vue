<template>
  <div>
  <div slot="centerx" class="container">
    <div class="jumbotron">
      <div class="container text-center">
        <h1 class="jumbo">PROTASKING</h1>
        <p class="jumbo">{{ note.title }}</p>
        <vs-input v-model="note.title" v-if="note.formIsVisible" @keyup.enter="note.formIsVisible = false"></vs-input>
      </div>
    </div>
    <!--<vs-progress :vs-height="4" :vs-indeterminate="true" vs-color="danger">danger</vs-progress>-->
    <div class="row" v-for="task in form.tasks" v-if="task.id">
      <vs-card vs-color="success">
        <vs-card-body>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <vs-progress class='progress' :vs-height="4" :vs-percent="task.indent" vs-color="danger">danger</vs-progress>
              </div>
              <div class="col-sm-2">
                <vs-checkbox @click="task.id = 0;"></vs-checkbox>
              </div>
              <div class="col-sm-6">
                <span class="task-text">{{ task.text }}</span>
              </div>
            </div>
          </div>
        </vs-card-body>
      </vs-card>
    </div>
    <vs-input id='input' @keyup.enter="submit" vs-placeholder="Info / Task" v-model="form.val"/>
    <div id="scroll"></div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Task',
  data () {
    return {
      form: {
        val: '',
        tasks: [{
          text: 'TYPE IN SOME NOTES OR TASKS BELOW',
          id: 0,
          indent: 100
        }],
      },
      cards: {
        amount: 1,
      },
      indent: 0,
      enableIndentation: false,
      note: {
        title: '',
        formIsVisible: true
      },
      rows: []
    };
  },
  methods: {
    submit () {
      var self = this;
      var input = document.getElementById('scroll');
      self.cards.amount += 1; // Increment amount of cards
      self.form.tasks.push({
        text: self.form.val,
        id: self.cards.amount,
        indent: self.indent // Default
      });
      self.form.val = '';
      self.enableIndentation = false;
      input.scrollIntoView();
    },
    notifyIndentation () {
      this.enableIndentation = !this.enableIndentation;

    },
    alert(x) {
      console.log(x);
    }
  },
  mounted () {
    var self = this;
    var indentation;
    if (self.enableIndentation) {
      self.$vs.notify({title: 'Awesome', text: 'You can now indent!', color: 'success', icon: 'verified_user'});
    } else {
      self.$vs.notify({title: 'Caution', text: 'You cannot indent', color: 'danger', icon: 'verified_user'});
    }
    window.addEventListener('keyup', function(e) {

      // Check if command key is pressed
      if (e.key === 'Meta') {
        self.enableIndentation = !self.enableIndentation;

        // Notify if enableIndentation is true and valid
        if (self.enableIndentation) {
          self.$vs.notify({title: 'Awesome', text: 'You can now indent!', color: 'success', icon: 'verified_user'});
        } else {
          self.$vs.notify({title: 'Caution', text: 'You cannot indent', color: 'danger', icon: 'verified_user'});
        }
      }

      if (self.enableIndentation) {
        // Indent left
        if (e.key === 'ArrowLeft') {
          self.indent -= 20;
          indentation = 'indentation is ' + self.indent;
          self.$vs.notify({title: 'Indent', text: indentation, color: 'success', icon: 'verified_user'});
          self.$forceUpdate();
        }

        // Indent right
        if (e.key === 'ArrowRight') {
          self.indent += 20;
          indentation = 'indentation is ' + self.indent;
          self.$vs.notify({title: 'Indent', text: indentation, color: 'success', icon: 'verified_user'});
          self.$forceUpdate();
        }
      }
    })
  },
  updated () {
    var self = this;
  }
}
</script>
<style>
  #scroll {
    height: 100px;
  }
.progress {
}
  h1.jumbo {
    padding-top: 30px;
    color: white;
    font-family: "Courier New";
    font-size: 140px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    -webkit-font-smoothing: antialiased;
  }
  h3.jumbo {
    color: white;
    font-family: "Courier New";
    font-size: 30px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    -webkit-font-smoothing: antialiased;
  }
  div.social-media {
    padding-top: 10%;
  }
  div.scroll {

  }
  div.col-sm-6 {

  }
  i.fa-2x {
    padding: 20px;
  }
  p.jumbo {
    color: white;
    font-family: "Courier New";
    font-size: 30px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;

  }
  /* Remove the navbar's default rounded borders and increase the bottom margin */
  .navbar {
    margin-bottom: 50px;
    border-radius: 0;
  }
  /* Remove the jumbotron's default bottom margin */
  .jumbotron {
    margin-bottom: 0;
    //background-image: url("../assets/wallpaper.jpg");
    background-size: cover;
    height:60vh;
    padding-bottom: 50px;
  }
</style>
