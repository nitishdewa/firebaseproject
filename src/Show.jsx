import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import './App.css';

const Show = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setStudents(studentData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const delData = async (id) => {
    try {
      await deleteDoc(doc(db, "students", id));
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <>
      <h2>Show Component</h2>
      <div className="container">
        {students.length > 0 ? (
          students.map((student) => (
            <div key={student.id} className="card">
              <p><strong>Name:</strong> {student.Name}</p>
              <p><strong>Age:</strong> {student.Age}</p>
              <p><strong>Email:</strong> {student.Email}</p>
              <button onClick={() => delData(student.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </>
  );
}

export default Show;
