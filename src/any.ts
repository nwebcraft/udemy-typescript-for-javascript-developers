import axios from 'axios';
export {};

// https://udemy-utils.herokuapp.com/api/v1/articles?token=token123
let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (res) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[] = res.data;
  data = [
    {
      id: 1,
      title: 'title',
      description: 'description',
    },
  ];
  console.log(data);
});
