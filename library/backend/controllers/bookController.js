import Book from "../models/book.js";

const createBook = async (req, res) => {
    try {
        var data = req.body;

        var newBook = new Book(
            {
                title: data.title,
                year: data.year,
                description: data.description,
                available: data.available
            }
        )

        await newBook.save();
        
        res.status(201).json();
    } catch (error) {
        res.status(400).json( { message: error.message } );
    }
}

const getAllBooks = async (req, res) => {
    var listBooks = await Book.find();
    res.status(200).json(listBooks);
}

const getBookById = async (req, res) => {
    var id = req.params.id;
    var bookFind = await Book.findById(id);
    res.status(200).json(bookFind)
}

const updateBook = async (req, res) => {
    try {
        var id = req.params.id;
        var data = req.body;

        await Book.findByIdAndUpdate(
        id, 
        {
            title: data.title,
            year: data.year,
            description: data.description,
            available: data.available
        }, 
        {runValidators: true});

        res.status(200).json();
    } catch (error) {
        res.status(400).json( { message: error.message } );
    }
}

const deleteBook = async (req, res) => {
    var id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.status(200).json();
}

export default {createBook, getAllBooks, getBookById, updateBook, deleteBook}