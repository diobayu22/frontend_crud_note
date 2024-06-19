import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
    const [note, setNote] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getNoteById();
    }, []);

    const updateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/notes/${id}`, {
                note,

            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getNoteById = async () => {
        const response = await axios.get(`http://localhost:5000/notes/${id}`);
        setNote(response.data.note);

    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateNote}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            // placeholder="Name"
                            />
                        </div>
                    </div>


                    <div className="field">
                        <button type="submit" className="button is-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNote;