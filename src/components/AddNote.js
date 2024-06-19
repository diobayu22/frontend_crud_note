import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const AddNote = () => {
    const [note, setNote] = useState("");
    const navigate = useNavigate();

    const saveNote = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/notes", {
                note,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveNote}>
                    <div className="field">
                        <label className="label">Note</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Note"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <button type="submit" className="button is-success">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default AddNote