import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      img: "https://th.bing.com/th/id/OIP.NGofr7d8y6lcAUn2SeXXPgHaLZ?pid=ImgDet&rs=1",
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      summary: 'The story of Scout Finch, a young girl growing up in a small Southern town, and her father Atticus, a lawyer who defends a black man accused of rape in the 1930s.'
    },
    {

      id: 2,
      img: "https://th.bing.com/th/id/OIP.Xb7gzjPgL6EoQusZ07zCOgHaLW?pid=ImgDet&rs=1",
      title: '1984',
      author: 'George Orwell',
      summary: 'A dystopian novel set in a totalitarian society where the government controls every aspect of citizens’ lives, including their thoughts and feelings.'
    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/OIP.wcZjPkH4FZD5QYi_2kfxxAHaLS?pid=ImgDet&rs=1",
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      summary: 'A romantic comedy of manners set in Georgian England, which follows the relationship between Elizabeth Bennet and Mr. Darcy.'
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/OIP.mvV9tiaVSSSuRBSIpTa6uwHaLH?pid=ImgDet&rs=1",
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      summary: 'A novel set in the Roaring Twenties that explores the decadence and excess of the wealthy elite, and the tragic consequences of the American Dream.'
    },
    {
      id: 5,
      img: "https://th.bing.com/th/id/OIP.PQKfkZFKgDWeNleDPTi9dwHaK4?pid=ImgDet&rs=1",
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      summary: 'The story of Holden Caulfield, a teenage boy who struggles with alienation and disillusionment in the aftermath of his expulsion from prep school.'
    },
    {
      id: 6,
      img: "https://www.dvdsreleasedates.com/posters/800/T/The-Lost-City-of-Z-2017-movie-poster.jpg",
      title: 'The Lost City of Zara',
      author: 'Emily Jenkins',
      summary: 'A team of adventurers sets out to find the fabled lost city of Zara and the treasures it holds.'
    },
    {
        id: 7,
      img: "https://th.bing.com/th/id/OIP.rQmS6x2MXBPU_d0NidAZngHaLb?pid=ImgDet&rs=1",
      title: ' The Last Stand',
      author: 'Sarah Johnson',
      summary: 'In the final days of the Roman Empire, a small band of warriors makes a last stand against the invading hordes.' 
    },
    {
          id: 8,
      img: "https://th.bing.com/th/id/OIP.rmNoQKpMk7biGEiMAYgGwgAAAA?pid=ImgDet&rs=1",
      title: ' The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      summary: 'A journalist and a computer hacker team up to solve a decades-old mystery and uncover a web of corruption and deceit.' 
    }
  ],
  AllreadyRead: [],
  Reading: [],
  toRead: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AllreadyRead(state, action) {
      const existing = state.Reading.find(
        (id) => id.id === action.payload.id
      );
      if (!existing) {
        state.AllreadyRead.push(action.payload)
      } else {
        alert("you already added!")
      }
      console.log(state.AllreadyRead)
    },
    Reading(state, action) {
      const existing = state.Reading.find(
        (id) => id.id === action.payload.id
      );
      if (!existing) {
        state.Reading.push(action.payload)
      } else {
        alert("alredy added")
      }
    },
    toRead(state, action) {
      const existing = state.toRead.find(
        (id) => id.id === action.payload.id
      );
      if (!existing) {
        state.toRead.push(action.payload)

      } else {
        alert("already added!")
      }
    }
  },
});

export const { AllreadyRead, Reading, toRead } = booksSlice.actions;

export default booksSlice
