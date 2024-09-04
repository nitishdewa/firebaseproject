const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Student Record Management System</h2>
      <img
        src="src\Images\Best-Student-Record-Management-System-for-Schools-Institutes-1.png"
        alt="Student Management Illustration"
        className="home-image"
      />
      <p className="home-text">
        Welcome to the Student Record Management System! This application is designed to help educational institutions
        efficiently manage student records, from admissions to graduation. Our system provides a user-friendly interface
        that allows administrators to store, update, and retrieve student information with ease.
      </p>
      <p className="home-text">
        The system includes features such as student registration, grade tracking, attendance monitoring, and report generation.
        By utilizing this system, schools can ensure that all student data is securely stored and easily accessible whenever needed.
      </p>
      <p className="home-text">
        Whether you're managing records for a small school or a large university, our Student Record Management System
        is designed to scale with your needs. Stay organized, save time, and focus on providing the best educational
        experience for your students.
      </p>
      <button className="home-button">Learn More</button>
    </div>
  );
}

export default Home;
