import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-13e2d.firebaseio.com/'
})