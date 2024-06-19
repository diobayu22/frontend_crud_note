
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const NoteList = () => {
    const [notes, setNote] = useState([]);
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await axios.get("http://localhost:5000/notes");
        setNote(response.data);
    };


    const deleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/notes/${id}`);
            getNotes();
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="columns mt-5 is-centered">

            <br />
            <div className="column is-half">
                <h1 style={{ "fontSize": "60px" }}>Crud Note</h1>
                <Link to={`add`} className="button is-success">
                    Add New Note
                </Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Catatan</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note, index) => (
                            <tr key={note.id}>
                                <td>{index + 1}</td>
                                <td>{note.note}</td>

                                <td>
                                    <Link
                                        to={`edit/${note.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteNote(note.id)}
                                        className="button is-small is-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default NoteList