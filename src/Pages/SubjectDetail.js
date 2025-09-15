const SubjectCard = ({ title, lessons, exercises }) => {
  return (
    <div className="subject-card">
      <h3>{title}</h3>
      <div className="subject-info">
        <span>{lessons} хичээл</span>
        <span>{exercises} дасгал</span>
      </div>
    </div>
  );
};

export default SubjectCard;
