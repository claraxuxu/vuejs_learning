<script setup>
  import { ref, computed } from 'vue';

  const questions = ref([
    {
      question: "what is vue js?",
      answer: 0,
      options: [
        'A front end framework',
        'A library',
        'An clara form',
      ],
      selected: null
    },
    {
      question: "what is vuex?",
      answer: 2,
      options: [
        'A vuex XD',
        'A cheese',
        'A state management library',
      ],
      selected: null
    },
    {
      question: "what is vue router use for?",
      answer: 1,
      options: [
        'Walking in space',
        'A routing library for VueJs',
        'Burger sauce',
      ],
      selected: null
    }
  ])

  const quizComplet = ref(false)
  const currentQuestion = ref(0)

  const score = computed(() => {
    let val = 0
    questions.value.map(q => {
      if (q.selected != null && q.answer == q.selected) {
        console.log('correct')
        val++
      }
    })
    return val
  })

  const getCurrentQuestion = computed(() => {
    let ques = questions.value[currentQuestion.value]
    ques.index = currentQuestion.value
    return ques
  })

  const setAnswer = e => {
    questions.value[currentQuestion.value].selected = e.target.value
    e.target.value = null
  }

  const NextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
      currentQuestion.value++
      return
    } else {
      quizComplet.value = true
    }
  }
</script>

<template>
  <main class="app">
    <h1>Clara's quizz</h1>
    <section class="quiz" v-if="!quizComplet">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score: {{ score }} / {{ questions.length }}</span>
      </div>

      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :for="'option' + index" 
          :key="index" 
          :class="`option ${ 
            getCurrentQuestion.selected == index 
              ? index == getCurrentQuestion.answer 
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
        }`">
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="setAnswer" />
          <span>{{ option }}</span>
        </label>
      </div>
      <button
      @click="NextQuestion"
      :disabled="!getCurrentQuestion.selected">
      {{
        getCurrentQuestion.index == questions.length - 1
          ? 'Finish'
          : getCurrentQuestion.selected == null 
            ? 'Select an option'
            : 'Next Question'

      }}
      </button>
    </section>

    <section v-else>
      <h2>FINISHED</h2>
      <p>Your score is: {{ score }} / {{ questions.length }}</p>
    </section>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #271C36;
  color: #fff;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz {
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: #8F8F8F;
  font-size: 1.25rem;

}

.quiz-info .score {
  color: #fff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  display: block;
  padding: 1rem;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option:hover {
  background-color: #2d213f;
}

.option.correct {
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

button:disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
</style>
