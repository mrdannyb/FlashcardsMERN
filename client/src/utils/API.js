import axios from 'axios';

export default {
  getTopics: () => axios.get('/api/topics'),
  getCards: (topic) => axios.get('/api/topics/' + topic),
  createCard: (card) => axios.post('/api/topics/', card),
}
